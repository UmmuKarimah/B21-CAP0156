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
const reportCase = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const tingkat = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const bagian1 = () => {
    for (i = 0; i < 11; i++) {
        const pRegion = document.createElement('p');
        const pCase = document.createElement('p');
        pRegion.style.margin = 0;
        pRegion.innerText = region[i];
        pCase.style.margin = 0;
        pCase.innerText = `: ${reportCase[i]}`;
        const bagian = document.getElementById('bagian1');
        bagian.querySelector('#region').appendChild(pRegion);
        bagian.querySelector('#caseData').appendChild(pCase);
    }
}
const bagian2 = () => {
    for (i = 11; i < 22; i++) {
        const pRegion = document.createElement('p');
        const pCase = document.createElement('p');
        pRegion.style.margin = 0;
        pRegion.innerText = region[i];
        pCase.style.margin = 0;
        pCase.innerText = `: ${reportCase[i]}`;
        const bagian = document.getElementById('bagian2');
        bagian.querySelector('#region').appendChild(pRegion);
        bagian.querySelector('#caseData').appendChild(pCase);
    }
}
const bagian3 = () => {
    for (i = 22; i < region.length; i++) {
        const pRegion = document.createElement('p');
        const pCase = document.createElement('p');
        pRegion.style.margin = 0;
        pRegion.innerText = region[i];
        pCase.style.margin = 0;
        pCase.innerText = `: ${reportCase[i]}`;
        const bagian = document.getElementById('bagian3');
        bagian.querySelector('#region').appendChild(pRegion);
        bagian.querySelector('#caseData').appendChild(pCase);
    }
}
bagian1();
bagian2();
bagian3();

// const divider = 3;
// console.log(~~(array.length / divider));

const getData = (dataReport, dataTingkat) => {
    if (data != null) {
        reportCase = dataReport;
        tingkat = dataTingkat;
    }
}

region.forEach((i, index) => {
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