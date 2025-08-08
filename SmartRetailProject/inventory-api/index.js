const express = require('express');
const app = express();
app.use(express.json());

app.get('/health', (req, res) => res.json({ ok: true, service: 'inventory-api' }));

app.post('/reorder', (req, res) => {
  const { productId, correlationId } = req.body || {};
  console.log(`[inventory-api] reorder request - productId=${productId} correlationId=${correlationId}`);
  res.json({ status: 'queued', productId, correlationId, at: new Date().toISOString() });
});

app.listen(3001, () => console.log('✅ inventory-api running on http://localhost:3001'));
