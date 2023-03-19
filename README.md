# Energy Measurement and Recognition System

### Description
This project uses Arduino, a current sensor, and OpenCV to measure energy usage and recognize the person who turned on the switch. 
The system is designed to track individual's electricity usage, which can be used to split electricity bills among individuals according to their usage.
It also have a webpage to monitor the total usage of every individuals. This system is so useful in places where many peoples stays together like hostels .

### Components required.

- Arduino board: This is the microcontroller board that runs the code and controls the various components of the system.

- Current sensor: This component is used to measure the current flowing through the circuit. The sensor can be clamped around a wire and provides an output voltage proportional to the current.

- Relay module: This is an electromechanical switch that can be controlled by the Arduino board. It is used to turn the power on and off to the device or appliance being monitored.

- Camera: This component is used to capture an image of the person who turns on the switch. The camera is typically connected to a computer running OpenCV.

- Power supply: This component provides power to the circuit. The power supply can be a battery, AC adapter, or other source of DC power.

- LCD display: This component is used to display the recognition results. 

### Working

1. There is basically two circuits.
   - Voltage divider circuit.
     ![voltage](https://user-images.githubusercontent.com/97159197/226164898-70c51192-f701-4da4-bc21-622791c704f5.png)
   - Current measuring circuit.
     ![current](https://user-images.githubusercontent.com/97159197/226164902-20bf35f5-7987-485a-940b-2ffbfbbb224d.png)

2. The relay module is connected to the Arduino board and is used to control the power to the device or appliance being monitored.
   When the switch is turned on, the relay module is activated and power is supplied to the device or appliance.
   
3. At the same time, the webcam captures a live video feed of the person in front of the system.
   The video feed is processed by OpenCV to recognize the person's face.
   
4. The recognition result is sent to the Arduino board, which displays the name or ID of the recognized person on the LCD display.
   The Arduino board sends the energy usage data and recognition data to the Flask server, which stores the data in the MongoDB database.
   ![WhatsApp Image 2023-03-19 at 2 47 23 PM](https://user-images.githubusercontent.com/97159197/226165638-39ee84fe-6b8b-4680-9d6a-e50391a14015.jpeg)
5. The data can then be viewed in the Flask server dashboard and used to distribute electricity bills among individuals according to their usage.
6. The energy usage can be monitored using a react website.

