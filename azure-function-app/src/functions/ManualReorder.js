const { app } = require('@azure/functions');
const axios = require('axios');

app.http('ManualReorder', {
  methods: ['POST'],
  authLevel: 'anonymous', // set to 'function' if you want key protection
  handler: async (req, ctx) => {
    try {
      const body = await req.json();
      const { productId, correlationId } = body || {};
      if (!productId) return { status: 400, jsonBody: { error: 'productId required' } };

      ctx.log(`[ManualReorder] productId=${productId} correlationId=${correlationId || 'n/a'}`);

      const resp = await axios.post('http://localhost:3001/reorder', { productId, correlationId });
      return { status: 200, jsonBody: resp.data };
    } catch (err) {
      ctx.log.error('[ManualReorder] error:', err.message);
      return { status: 500, jsonBody: { error: 'reorder failed' } };
    }
  }
});
