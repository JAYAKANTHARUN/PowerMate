
float sample1_number, given_voltage, reference_value1, voltage_number, sample1 = 0, voltage, actual_voltage, reference_value2, current_number, sample2 = 0, current, actual_current, current_val, energy = 0, power;
long time, timeinitial, timefinal;

int s = 2;

void setup() {

  Serial.begin(9600);

  pinMode(s, INPUT);

  given_voltage = 2.10 * 1000;
  sample1_number = analogRead(A2);
  reference_value1 = given_voltage / sample1_number;

  reference_value2 = 5000.0 / 1024.0;

  // for (int i=0;i<200;i++){
  //   voltage_number = analogRead(A2);
  //   sample1 = sample1 + voltage_number;

  //   current_number = analogRead(A3);
  //   sample2 = sample2 + current_number;

  //   delay(2);
  // }

  // sample1 = sample1/200;
  // voltage = reference_value1 * sample1 / 1000;
  // actual_voltage = voltage * 2;

  // sample2 = sample2 / 200;
  // current = reference_value2 * sample2;
  // current_val = (current/1000) - 2.5;
  // actual_current = abs(current_val * 10);

  // power=actual_voltage*actual_current;

  // Serial.print("voltage : ");
  // Serial.println(actual_voltage);

  // Serial.print("current : ");
  // Serial.println(actual_current);
}

void loop() {

  sample1 = 0;
  sample2 = 0;
  energy = 0;

  if (digitalRead(s) == HIGH) {
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


      Serial.print("voltage : ");
      Serial.println(actual_voltage);

      Serial.print("current : ");
      Serial.println(actual_current);

      Serial.print("energy : ");
      Serial.println(energy);
    }
  }

  // sample1 = 0;
  // sample2 = 0;

  // reference_value2 = 5.0 / 1024.0;

  // for (int i = 0; i < 200; i++) {
  //   voltage_number = analogRead(A2);
  //   sample1 = sample1 + voltage_number;

  //   current_number = analogRead(A3);
  //   sample2 = sample2 + current_number;

  //   delay(2);
  // }

  // sample1 = sample1 / 200;
  // voltage = reference_value1 * sample1 / 1000;
  // actual_voltage = voltage * 2;

  // sample2 = sample2 / 200;
  // current = reference_value2 * sample2;
  // current_val = current - 2.5;
  // actual_current = current_val * 10;

  // Serial.print("voltage : ");
  // Serial.println(actual_voltage);

  // Serial.print("current : ");
  // Serial.println(actual_current);
}
