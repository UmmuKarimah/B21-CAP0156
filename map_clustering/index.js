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
const tingkat = [0, 1, 2, 0, 0, 0, 2, 1, 2, 1, 2, 1, 0, 0, 1, 0, 0, 2, 0, 1, 1, 2, 2, 2, 1, 0, 2, 1, 0, 0, 2, 1, 0, 0]

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