# Ini nanti inputnya
kalimat = 'Anjing masih muda dasar berengsek'

# Kata yang disensor
sensor = ['anjing', 'babi', 'brengsek', 'berengsek', 'monyet', 'bajingan', 'asu', 'bangsat',
            'banci', 'jablay', 'bego', 'goblok', 'tolol', 'idiot', 'gila', 'sinting', 'sarap', 'geblek',
            'buta', 'bolot', 'budek', 'setan', 'keparat', 'tai', 'gembel', 'bejad', 'ngehe']

# Buat bikin pengganti
kalimat_pengganti = []
for kata in sensored:
  kalimat_pengganti.append(kata.translate(str.maketrans('aeiou', '*****')))

# Function sensornya
def sensor(kalimat):
  sensored = kalimat.lower()
  for i in range(0,len(sensor)):
    sensored = sensored.replace(sensor[i], kalimat_pengganti[i])
  return sensored
  
sensor(kalimat)
