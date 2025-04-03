const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;
const path = require('path');

app.use(express.json());
app.use(express.static('public'));
app.use(require('cors')());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/canciones', (req, res) => {
  const canciones = JSON.parse(fs.readFileSync('repertorio.json', 'utf8'));
  res.json(canciones);
});

app.post('/canciones', (req, res) => {
  const nuevaCancion = req.body;
  const canciones = JSON.parse(fs.readFileSync('repertorio.json', 'utf8'));

  nuevaCancion.id = Date.now();
  canciones.push(nuevaCancion);

  fs.writeFileSync('repertorio.json', JSON.stringify(canciones, null, 2));
  res.status(201).send('Canción agregada');
});

app.put('/canciones/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const datosActualizados = req.body;

  let canciones = JSON.parse(fs.readFileSync('repertorio.json', 'utf8'));
  canciones = canciones.map(c => c.id === id ? { ...c, ...datosActualizados, id } : c);

  fs.writeFileSync('repertorio.json', JSON.stringify(canciones, null, 2));
  res.send('Canción actualizada');
});

app.delete('/canciones/:id', (req, res) => {
  const id = parseInt(req.params.id);

  let canciones = JSON.parse(fs.readFileSync('repertorio.json', 'utf8'));
  canciones = canciones.filter(c => c.id !== id);

  fs.writeFileSync('repertorio.json', JSON.stringify(canciones, null, 2));
  res.send('Canción eliminada');
});

app.listen(PORT, () => {
  console.log(`Servidor levantado en http://localhost:${PORT}`);
});