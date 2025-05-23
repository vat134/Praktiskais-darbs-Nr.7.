//Kartes elementa izveide ar RTK koordinātēm
const map = L.map('map').setView([56.964234, 24.164343], 13);

//kartes pievienošana
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '© OpenStreetMap autori'
}).addTo(map);

//Norāde ar nosaukumu virs punkta
L.marker([56.964234, 24.164343]).addTo(map)
.bindPopup('RTK')
.openPopup();