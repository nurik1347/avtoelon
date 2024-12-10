const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Mock data
const categories = [
  {
    id: 1,
    img: 'https://png.pngtree.com/png-vector/20230206/ourlarge/pngtree-red-sports-car-png-image_6586882.png',
    title: 'Avtomobillar',
  },
  {
    id: 2,
    img: 'https://png.pngtree.com/png-vector/20230206/ourlarge/pngtree-red-sports-car-png-image_6586882.png',
    title: 'Yuk mashinalari',
  },
  {
    id: 3,
    img: 'https://png.pngtree.com/png-vector/20230206/ourlarge/pngtree-red-sports-car-png-image_6586882.png',
    title: 'Ehtiyot qismlari va tovarlar',
  },
  {
    id: 4,
    img: 'https://png.pngtree.com/png-vector/20230206/ourlarge/pngtree-red-sports-car-png-image_6586882.png',
    title: 'Maxsus texnika',
  },
  {
    id: 5,
    img: 'https://png.pngtree.com/png-vector/20230206/ourlarge/pngtree-red-sports-car-png-image_6586882.png',
    title: 'Taʼmirlash va xizmatlar',
  },
];

// API endpoints
app.get('/categories', (req, res) => {
  res.status(200).json(categories);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
