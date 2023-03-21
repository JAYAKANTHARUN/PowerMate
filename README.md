# Energy Measurement and Recognition System

### What we are trying to solve?
This project tries to solve the problem of fairly distributing electricity bills among individuals living in shared spaces like hostels, dormitories, or apartments. In such spaces, it can be challenging to determine how much each person should pay for electricity bills, as some individuals might consume more electricity than others. By tracking individual energy usage using this project, it becomes possible to allocate electricity bills based on actual usage, ensuring that each person pays only for the electricity they consume.

### Description
This project utilizes an Arduino board, a current sensor, and OpenCV to measure energy usage and identify the individual who turned on a switch. The system is designed to track an individual's electricity usage, which can be used to fairly distribute electricity bills among people living in shared spaces, such as hostels or dormitories. The system also includes a webpage that allows for the monitoring of total usage for each individual, making it useful for tracking energy consumption in shared living situations.

### Components used.

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
   ![Screenshot 2023-03-19 145808](https://user-images.githubusercontent.com/97159197/226166026-92cb7e3e-4199-403b-bed4-456aee6bc729.png)
   ![Screenshot 2023-03-19 145836](https://user-images.githubusercontent.com/97159197/226166033-1c659acb-274e-4b41-801d-976b156dde01.png)
   
   
### Live Demo


  https://user-images.githubusercontent.com/94242227/226717222-adde1128-090b-41a7-b6a2-28a6a855d94a.mp4

