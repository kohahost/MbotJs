const express = require('express');
const path = require('path');

const app = express();
const port = 1000;

// Folder public untuk semua file statis
app.use(express.static(path.join(__dirname, 'public')));

// Rute utama
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Jalankan server
app.listen(port, () => {
  console.log(`🚀 Server berjalan di http://localhost:${port}`);
});
