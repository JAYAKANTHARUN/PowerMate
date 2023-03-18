import cv2 as cv
import os

name = input("Enter name: ")
host = input("Enter host: ")

# Reading videos
capture = cv.VideoCapture(0)  # 0 denote primary cam. 1 denote secondary cam
# capture2 = cv.VideoCapture(1)
i=0

# Get the current working directory
cwd = os.getcwd()
print("Current working directory:", cwd)

# Create a new directory for the images, if it doesn't already exist
images_dir = os.path.join(cwd, "faces", host , name)
if not os.path.exists(images_dir):
    os.makedirs(images_dir)
else:
    # Get the largest image number in the directory
    filenames = os.listdir(images_dir)
    filenames = [f for f in filenames if f.endswith(".png")]
    if filenames:
        largest_num = max([int(f[:-4]) for f in filenames])
        i = largest_num + 1

while True:
    isTrue, frame = capture.read()
    frame1 = frame.copy()
    frame_with_text = cv.putText(frame, str(i), (100, 100), cv.FONT_HERSHEY_SIMPLEX, 3, (0, 255, 0), 2, cv.LINE_4)
    cv.imshow('Frame' , frame_with_text)

    if cv.waitKey(10) & 0xFF == ord('d'):
        break
    if cv.waitKey(1) & 0xFF == ord(' '):
        filename = os.path.join(images_dir, f"{i}.png")
        cv.imwrite(filename, frame1, [cv.IMWRITE_JPEG_QUALITY, 100])
        i += 1

# capture2.release()
capture.release()
cv.destroyAllWindows()
