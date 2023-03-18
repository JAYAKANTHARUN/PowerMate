
float sample_number , given_voltage , reference_value , voltage_number , sample1 = 0 , voltage , actual_voltage;

void setup() {

  Serial.begin(9600);

  given_voltage = 4.5/2 * 1000;
  sample_number = analogRead(A2);
  reference_value = given_voltage / sample_number;
  
  
  for (int i=0;i<200;i++){
    voltage_number = analogRead(A2);
    sample1 = sample1 + voltage_number;
    delay(2);
  }

  sample1 = sample1/200; 
  voltage = reference_value * sample1 / 1000;
  actual_voltage = voltage * 2;

  Serial.println(actual_voltage);
}

void loop() {
  sample1=0;

  for (int i=0;i<200;i++){
    voltage_number = analogRead(A2);
    sample1 = sample1 + voltage_number;
    delay(2);
  }

  sample1 = sample1/200; 
  voltage = reference_value * sample1 / 1000;
  actual_voltage = voltage * 2;

  Serial.println(actual_voltage);

}
