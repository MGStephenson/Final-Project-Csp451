const { ServiceBusClient } = require('@azure/service-bus');

const connectionString = process.env.SERVICE_BUS_CONNECTION_STRING; // <-- no secret in code
const queueName = 'orders';

async function sendOrder() {
  const sbClient = new ServiceBusClient(connectionString);
  const sender = sbClient.createSender(queueName);

  const message = {
    body: {
      productId: "abc123",
      correlationId: "order-001"
    }
  };

  try {
    await sender.sendMessages(message);
    console.log("✅ Sent message to Azure Service Bus.");
  } catch (err) {
    console.error("❌ Failed to send message:", err.message);
  } finally {
    await sender.close();
    await sbClient.close();
  }
}

sendOrder();
