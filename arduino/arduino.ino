
#include <LiquidCrystal_I2C.h>

float sample1_number, given_voltage, reference_value1, voltage_number, sample1 = 0, voltage, actual_voltage, reference_value2, current_number, sample2 = 0, current, actual_current, current_val, energy = 0, power;
long time, timeinitial, timefinal;

int s = 2, flag = 0;
String message;
LiquidCrystal_I2C lcd(0x27, 16, 2);

void setup() {

  lcd.init();
  lcd.clear();
  lcd.backlight();

  Serial.begin(9600);

  pinMode(s, INPUT);

  given_voltage = 2.10 * 1000;
  sample1_number = analogRead(A2);
  reference_value1 = given_voltage / sample1_number;

  reference_value2 = 5000.0 / 1024.0;
}

void loop() {

  sample1 = 0;
  sample2 = 0;
  energy = 0;

  if (digitalRead(s) == HIGH) {
    flag = 1;
    Serial.println("face");
    lcd.setCursor(0, 1);
    lcd.clear();
    lcd.print("Detecting face...");

    while (!Serial.available()) {
      if (digitalRead(s) == LOW) {
        lcd.clear();
        lcd.setCursor(0, 0);
        lcd.print("Switch interrupt");
        delay(3000);
        break;
        flag = 0;
      }
    }
    if(flag==1)
      message = Serial.readString();
    else
      message = "nouser";

    lcd.clear();
    lcd.setCursor(0, 1);
    lcd.print("User : " + message);
    while (digitalRead(s) != LOW) {
      timeinitial = millis();
      for (int i = 0; i < 200; i++) {
        voltage_number = analogRead(A2);
        sample1 = sample1 + voltage_number;

        current_number = analogRead(A3);
        sample2 = sample2 + current_number;

        delay(2);
      }

      sample1 = sample1 / 200;
      voltage = reference_value1 * sample1 / 1000;
      actual_voltage = voltage * 2;

      sample2 = sample2 / 200;
      current = reference_value2 * sample2;
      current_val = (current / 1000) - 2.5;
      actual_current = abs(current_val * 10);

      power = actual_voltage * actual_current;

      timefinal = millis();
      time = timefinal - timeinitial;

      energy += power * time / 1000;

      // Serial.print("voltage : ");
      // Serial.println(actual_voltage);

      // Serial.print("current : ");
      // Serial.println(actual_current);

      // Serial.print("energy : ");
      // Serial.println(energy);

      lcd.setCursor(0, 0);
      lcd.print("Energy : ");
      lcd.setCursor(9, 0);
      lcd.print(energy);
      lcd.setCursor(14, 0);
      lcd.print("Ws");
    }
    if (flag == 1) {
      flag = 0;
      Serial.println(message);
      Serial.println(energy);
      energy = 0;
      message = "nouser";
    }
  }
}
