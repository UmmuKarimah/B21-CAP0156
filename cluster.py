import pandas as pd
import numpy as np
import kmeans1d
data_new="nama kota"

case=[108,166,45,64,84,69,16,47,44,113,99,324,50,370,90,305,35,109,64,96,35,24,129,33,87,0,421,88,64,61,59,20,22,8]
country=["Aceh","Sumatra Utara","Sumatra Barat","Riau","Kepulauan Riau","Jambi","Bengkulu",
         "Sumatra Selatan","Kepulauan Bangka Belitung","Lampung","Banten","Jawa Barat",
         "DKI Jakarta","Jawa Tengah","Daerah Istimewa Yogyakarta","Jawa Timur","Bali",
         "Nusa Tenggara Barat","Nusa Tenggara Timur","Kalimantan Barat","Kalimantan Selatan","Kalimantan Tengah",
         "Kalimantan Timur","Kalimantan Utara","Gorontalo","Sulawesi Barat","Sulawesi Selatan",
         "Sulawesi Tengah","Sulawesi Tenggara","Sulawesi Utara","Maluku","Maluku Utara","Papua Barat","Papua"]
kluster=3
clusters, centroids = kmeans1d.cluster(case, kluster)
print(clusters)
data_final=pd.DataFrame({"Kota":country,"Group":clusters})
print(data_final)

indeks=country.index(data_new)
case[indeks]=case[indeks]+1
print(case)


