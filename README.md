# Final Project – CSP451 Smart Retail System

## 📌 Overview
This project implements a **Smart Retail System** using three Node.js microservices and an Azure Function App.  
It demonstrates **containerized microservices**, **cloud-based event-driven functions**, **Service Bus messaging**,  
**Application Insights monitoring**, and **CI/CD pipelines** via GitHub Actions.

---

## 🛠 Architecture
**Microservices (Docker)**  
- **supplier-api** – Receives reorder requests from Azure Function and simulates supplier order handling.  
- **inventory-api** – Tracks inventory and triggers reorders when stock is low.  
- **product-service** – Sends reorder requests to Service Bus when products run low.

**Azure Functions**  
- **Manual Reorder** (HTTP Trigger) – Allows manual reorder requests.  
- **Daily Summary** (Timer Trigger) – Sends daily sales/inventory summaries.  
- **ServiceBusTrigger** – Processes messages from Service Bus and notifies supplier-api.

---

## 🐳 Running Locally with Docker
```bash
# Start all microservices
docker-compose up --build
