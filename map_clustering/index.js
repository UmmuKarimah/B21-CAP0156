const tinggiColor = "#EC2D03";
const sedangColor = "#ECDB03";
const rendahColor = "#3AEC03";

const region = ["Aceh", "Sumatera Utara", "Sumatera Barat", "Riau", "Kepulauan Riau", "Jambi", "Bengkulu",
    "Sumatera Selatan", "Kepulauan Bangka Belitung", "Lampung", "Banten", "Jawa Barat",
    "DKI Jakarta", "Jawa Tengah", "Daerah Istimewa Yogyakarta", "Jawa Timur", "Bali",
    "Nusa Tenggara Barat", "Nusa Tenggara Timur", "Kalimantan Barat", "Kalimantan Selatan", "Kalimantan Tengah",
    "Kalimantan Timur", "Kalimantan Utara", "Gorontalo", "Sulawesi Barat", "Sulawesi Selatan",
    "Sulawesi Tengah", "Sulawesi Tenggara", "Sulawesi Utara", "Maluku", "Maluku Utara", "Papua Barat", "Papua"
];
// let reportCase = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let reportCase;
let tingkat;

function getData(dataReport, dataTingkat) {
    reportCase = dataReport;
    tingkat = dataTingkat;

    region.forEach((i, index) => {
        const pRegion = document.createElement('p');
        const pCase = document.createElement('p');
        pRegion.style.margin = 0;
        pRegion.innerText = i;
        pCase.style.margin = 0;
        pCase.innerText = `: ${reportCase[index]}`;
        document.querySelector('#region').appendChild(pRegion);
        document.querySelector('#caseData').appendChild(pCase);

        const id = i.replace(/ /g, "_");
        let color = "";
        switch (tingkat[index]) {
            case 0:
                color = rendahColor;
                break;
            case 1:
                color = sedangColor;
                break;
            case 2:
                color = tinggiColor;
                break;
        }
        document.querySelectorAll(`[id=${id}]`).forEach(i => {
            i.style.fill = color;
        });
    });
}