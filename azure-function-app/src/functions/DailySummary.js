const { app } = require('@azure/functions');
const axios = require('axios');

app.timer('DailySummary', {
  // for testing: every 15 seconds. Change back later.
  schedule: '*/15 * * * * *',
  handler: async (timer, ctx) => {
    try {
      ctx.log('[DailySummary] running...');
      const { data } = await axios.get('http://localhost:3002/products');
      ctx.log(`[DailySummary] product count=${Array.isArray(data) ? data.length : 0}`);
    } catch (err) {
      ctx.log.error('[DailySummary] error:', err.message);
    }
  }
});
