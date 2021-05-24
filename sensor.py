# Ini nanti inputnya
kalimat = 'Anjing masih muda dasar berengsek'

# Function sensornya
def sensor(kalimat):
  sensored = kalimat.lower()
  sensor = ['anjing', 'babi', 'brengsek', 'berengsek', 'monyet', 'bajingan', 'asu', 'bangsat',
            'banci', 'jablay', 'bego', 'goblok', 'tolol', 'idiot', 'gila', 'sinting', 'sarap', 'geblek',
            'buta', 'bolot', 'budek', 'setan', 'keparat', 'tai', 'gembel', 'bejad', 'ngehe']
  pengganti = ['*nj*ng', 'b*b*', 'br*ngs*k', 'b*r*ngs*k', 'm*ny*t', 'b*j*ng*n', '*s*', 'b*ngs*t', 'b*nc*', 
               'j*bl*y', 'b*g*', 'g*bl*k', 't*l*l', '*d**t', 'g*l*', 's*nt*ng', 's*r*p', 'g*bl*k', 'b*t*', 
               'b*l*t', 'b*d*k', 's*t*n', 'k*p*r*t', 't**', 'g*mb*l', 'b*j*d', 'ng*h*']
  for i in range(0,len(sensor)):
    sensored = sensored.replace(sensor[i], pengganti[i])
  return sensored
  
sensor(kalimat)

# Buat bikin pengganti
sensored = ['anjing', 'babi', 'brengsek', 'berengsek', 'monyet', 'bajingan', 'asu', 'bangsat',
            'banci', 'jablay', 'bego', 'goblok', 'tolol', 'idiot', 'gila', 'sinting', 'sarap', 'geblek',
            'buta', 'bolot', 'budek', 'setan', 'keparat', 'tai', 'gembel', 'bejad', 'ngehe']
sensor = ['a', 'i', 'u', 'e', 'o']
kalimat_sensor = []
for i in range(0,len(sensored)):
  kalimat1 = sensored[i]
  for e in range(0,len(sensor)):
    kalimat1 = kalimat1.replace(sensor[e], '*')
  kalimat_sensor.append(kalimat1)
kalimat_sensor
