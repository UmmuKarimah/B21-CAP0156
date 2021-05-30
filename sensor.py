# Ini nanti inputnya
kalimat = 'Anjing masih muda dasar berengsek'

# Kata yang disensor
sensor = ['anjing', 'babi', 'brengsek', 'berengsek', 'monyet', 'bajingan', 'asu', 'bangsat',
            'banci', 'jablay', 'bego', 'goblok', 'tolol', 'idiot', 'gila', 'sinting', 'sarap', 'geblek',
            'buta', 'bolot', 'budek', 'setan', 'keparat', 'tai', 'gembel', 'bejad', 'ngehe']

# Buat bikin pengganti
kalimat_pengganti = []
for kata in kata_sensor:
  kalimat_pengganti.append(kata.translate(str.maketrans('abcdefghijklmnopqrstuvwxyz', 
                                                        '**************************')))

# Function sensornya
def sensor(kalimat):
  sensored = kalimat.lower()
  for i in range(0,len(kata_sensor)):
    sensored = sensored.replace(kata_sensor[i], kalimat_pengganti[i])
  return sensored
  
sensor(kalimat)
