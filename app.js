const express = require('express');
const app = express();
const port = 3000;

let products = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 20 },
];

// Endpoint to view products
app.get('/admin/products', (req, res) => {
  res.json(products);
});

// Endpoint to add a product
app.post('/admin/products', (req, res) => {
  // Add product logic here
  products.push({ id: products.length + 1, name: 'New Product', price: 30 });
  res.json({ message: 'Product added!' });
});

app.listen(port, () => {
  console.log(`Admin panel running on http://localhost:${port}`);
});
