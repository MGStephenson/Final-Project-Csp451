const express = require('express');
const app = express();
app.use(express.json());

const fakeProducts = [
  { id: "p-001", name: "Widget A", stock: 10 },
  { id: "p-002", name: "Widget B", stock: 2 }
];

app.get('/health', (_, res) => res.json({ ok: true, service: 'product-service' }));
app.get('/products', (_, res) => res.json(fakeProducts));

app.listen(3002, () => console.log('✅ product-service running on http://localhost:3002'));
