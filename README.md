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

☁️ Azure Deployment
Azure Functions deployed via GitHub Actions CI/CD workflow (functions-ci.yml).

Service Bus used for reorder messaging.

Application Insights integrated into all functions for monitoring.

🔄 CI/CD Workflows
1. Node Services CI (node-services.yml)

Runs on push/PR to service files.

Installs dependencies and runs tests for all microservices.

2. Azure Functions CI (functions-ci.yml)

Deploys Azure Functions to the cloud.

Triggered manually or on main branch updates.
