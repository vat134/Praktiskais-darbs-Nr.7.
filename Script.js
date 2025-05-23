const map = L.map('map').setView([56.964234, 24.164343], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '© OpenStreetMap autori'
}).addTo(map);
