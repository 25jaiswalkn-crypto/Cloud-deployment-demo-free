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

## Local load-balancing demonstration

Two application containers run from the same Docker image:

- `cloud-demo-1` — port `3001`
- `cloud-demo-2` — port `3002`
- Nginx load balancer — port `8080`

 Test the load balancer: 
```powershell
curl.exe http://localhost:8080/
curl.exe http://localhost:8080/health
