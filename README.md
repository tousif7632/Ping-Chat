# Ping Service - Real-time Chat Application

A minimal chat "ping" service with a backend API, React frontend, Docker containers, and Kubernetes deployment.

## Features

- **Backend API** (Node.js/Express)
  - POST `/ping` endpoint with JSON validation
  - Async/await error handling
  - Centralized error middleware
  - Timestamped responses

- **Frontend** (React.js)
  - `PingWindow` component with message bubbles
  - Auto-scroll to new messages
  - Message timestamp display
  - Incoming/outgoing message styling

- **Infrastructure**
  - Docker containers for both services
  - Kubernetes Deployment + Service manifests
  - GitHub Actions CI/CD pipeline
  - Resource limits for Kubernetes

## Prerequisites

- Node.js v16+
- Docker
- Kubernetes cluster (Minikube/Docker Desktop/kubectl)
- Container registry (Docker Hub, GitHub Packages, etc.)

## Installation

```bash
git clone https://github.com/your-username/ping-service.git
cd ping-service

# Backend
cd backend && npm install

# Frontend
cd ../frontend && npm install
