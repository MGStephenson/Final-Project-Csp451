const { app } = require('@azure/functions');
const axios = require('axios');

app.serviceBusQueue('ServiceBusTrigger', {
  connection: 'SERVICE_BUS_CONNECTION_STRING',
  queueName: 'orders',
  handler: async (message, context) => {
    const { productId, correlationId } = message;
    context.log(`📦 Received order for product: ${productId}`);
    context.log(`🔗 Correlation ID: ${correlationId}`);

    try {
      const response = await axios.post('http://localhost:3000/order', {
        productId,
        correlationId
      });

      context.log(`✅ Sent to Supplier API - Status: ${response.status}`);
    } catch (err) {
      context.log(`❌ Error sending to Supplier API: ${err.message}`);
    }
  }
});
