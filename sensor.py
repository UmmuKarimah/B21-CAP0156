# Ini nanti inputnya
kalimat = 'Anjing masih muda dasar berengsek'

# Kata yang disensor
sensor = ['anjing', 'babi', 'brengsek', 'berengsek', 'monyet', 'bajingan', 'asu', 'bangsat',
            'banci', 'jablay', 'bego', 'goblok', 'tolol', 'idiot', 'gila', 'sinting', 'sarap', 'geblek',
            'buta', 'bolot', 'budek', 'setan', 'keparat', 'tai', 'gembel', 'bejad', 'ngehe']

# Function sensornya
def sensor(kalimat):
  sensored = kalimat.lower()
  for i in range(0,len(kata_sensor)):
    sensored = sensored.replace(kata_sensor[i], kata.translate(str.maketrans('abcdefghijklmnopqrstuvwxyz', 
                                                                             '**************************')))
  return sensored
  
sensor(kalimat)
