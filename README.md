# Cloud Deployment Demo

A containerized Node.js application with Docker support and health checks.

## Endpoints

- GET / - Displays application information.
- GET /health - Returns the health status.

## Run locally

    npm install
    npm start

Open http://localhost:3000 and http://localhost:3000/health

## Run with Docker

    docker build -t cloud-deployment-demo:local .
    docker run --rm -p 3000:3000 cloud-deployment-demo:local

## CI/CD

GitHub Actions builds the Docker image on every push to main.

## Cost note

AWS resources were not created because they may generate charges.

## LLM usage

An AI coding assistant was used for guidance. The code was reviewed and tested manually.
