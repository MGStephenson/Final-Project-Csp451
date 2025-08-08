const express = require('express');
const app = express();
app.use(express.json());

app.post('/order', (req, res) => {
  const { productId, correlationId } = req.body || {};
  console.log(`[Supplier API] Order received for ${productId} - Correlation ID: ${correlationId}`);
  res.json({ status: 'processed', productId, correlationId });
});

app.listen(3000, () => console.log('✅ Supplier API running at http://localhost:3000'));
