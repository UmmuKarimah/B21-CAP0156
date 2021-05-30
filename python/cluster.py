import pandas as pd
import kmeans1d
region=["Aceh","Sumatra Utara","Sumatra Barat","Riau","Kepulauan Riau","Jambi","Bengkulu",
         "Sumatra Selatan","Kepulauan Bangka Belitung","Lampung","Banten","Jawa Barat",
         "DKI Jakarta","Jawa Tengah","Daerah Istimewa Yogyakarta","Jawa Timur","Bali",
         "Nusa Tenggara Barat","Nusa Tenggara Timur","Kalimantan Barat","Kalimantan Selatan","Kalimantan Tengah",
         "Kalimantan Timur","Kalimantan Utara","Gorontalo","Sulawesi Barat","Sulawesi Selatan",
         "Sulawesi Tengah","Sulawesi Tenggara","Sulawesi Utara","Maluku","Maluku Utara","Papua Barat","Papua"]

# ganti case fetch dari db
# case=[108,166,45,64,84,69,16,47,44,113,99,324,50,370,90,305,35,109,64,96,35,24,129,33,87,0,421,88,64,61,59,20,22,8]

def clustering(request):
    request_json = request.get_json(silent=True)
    request_args = request.args

    case = [] # 34 cases
    if request_json and 'case' in request_json:
        case = request_json['case']
    elif request_args and 'case' in request_args:
        case = request_args['case']

    kluster=3
    clusters, centroids = kmeans1d.cluster(case, kluster)
    data_final=pd.DataFrame({"Kota":region,"Group":clusters})
    return data_final.to_json()


