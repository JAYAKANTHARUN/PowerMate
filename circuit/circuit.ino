float sample1,voltage,s;

void setup() {
  Serial.begin(9600);
  sample1=5.0;
  voltage=1024.0;
  s=sample1/voltage;
  Serial.println(s);
}
void loop() {

  // put your main code here, to run repeatedly:
}
