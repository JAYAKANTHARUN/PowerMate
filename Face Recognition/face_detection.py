import serial
import time
import numpy as np
import cv2 as cv
import os
import datetime

haar_cascade = cv.CascadeClassifier('haar_face.xml')

# Name of faces
people = []
DIR = r'.\faces'
for file in os.listdir(DIR):
    people.append(file)
print(people)

# features = np.load('features.npy', allow_pickle=True)
# labels = np.load('labels.npy', allow_pickle=True)

face_recognizer = cv.face.LBPHFaceRecognizer_create()
face_recognizer.read('face_trained.yml')


def detect_face():
    capture = cv.VideoCapture(0)  
    recognized_faces = []

    while True:
        isTrue, img = capture.read()
    
        gray = cv.cvtColor(img, cv.COLOR_BGR2GRAY)

        # Detect the face in image
        faces_rect = haar_cascade.detectMultiScale(gray, scaleFactor=1.2, minNeighbors=5)

        recognized = False
        for (x, y, w, h) in faces_rect:
            faces_roi = gray[y:y+h, x:x+h]

            label, confidence = face_recognizer.predict(faces_roi)
            print(confidence)

            show_text = str(people[label])+str("  ")+str(int(confidence))+str("%")
            if confidence > 50:
                cv.putText(img, show_text, (x, y+h//2), cv.FONT_HERSHEY_COMPLEX, 1.0, (0, 255, 0), thickness=2)
                cv.rectangle(img, (x, y), (x+w, y+h), (0, 255, 0), thickness=2)

                # Add the recognized face to the list of recognized faces
                recognized_faces.append(label)
                recognized = True

        # If the current frame contains a recognized face, check if the same face appears in at least 5 out of 10 frames
        if recognized:
            if len(recognized_faces) >= 10:
                counts = np.bincount(recognized_faces[-10:])
                max_count = np.argmax(counts)
                if counts[max_count] >= 5:
                    recognized_name = people[max_count]
                    print(f"Recognized: {recognized_name}")
                    recognized_faces = []
                    capture.release()
                    cv.destroyAllWindows()
                    return recognized_name

        cv.imshow('Detected face', img)

        if cv.waitKey(10) & 0xFF == ord('d'):
            break

from pymongo import MongoClient
client = MongoClient("mongodb://localhost:27017/")

mydatabase = client['emeter']
mycollection = mydatabase['users']
usagecollection = mydatabase['usage']

def change_energy(name, energy, time):
    # Get the current time
    end_time = datetime.datetime.now()

    if energy>0:
        # Calculate the start time by subtracting the given time from the end time
        start_time = end_time - datetime.timedelta(seconds=time)

        # Define the update operation to increment the energy field
        update_operation = {"$inc": {"energy": energy}}

        # Update the first matching document in the mycollection collection
        result = mycollection.update_one({"name": name}, update_operation)

        # Create a new document for the usage collection
        usage_doc = {
            "name": name,
            "energy": energy,
            "start_time": start_time,
            "end_time": end_time
        }

        # Insert the new document into the usage collection
        usage_result = usagecollection.insert_one(usage_doc)

        # Return the result of the update operation
        return result
    else:
        return 

# Open the serial port
ser = serial.Serial('COM4', 9600)
while True:
    # Read data from the serial port
    data = ser.readline().decode().strip()
    print(data)

    if data in people:
        energy = float(ser.readline().decode().strip())
        print(energy)
        time = float(ser.readline().decode().strip())/1000
        print(time)
        change_energy(name , energy , time)

    if data == 'face':
        name = detect_face()
        ser.write(name.encode())  # Convert the name to bytes before sending

    if cv.waitKey(10) & 0xFF == ord('d'):
        break

ser.close()
cv.destroyAllWindows()