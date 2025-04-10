# Docker Deployment Guide

This guide explains how to deploy the barcode scanner web application using Docker.

## Prerequisites

- Docker and Docker Compose installed on your server
- Your Scandit license key

## Deployment Steps

1. **Clone the repository**

```bash
git clone https://github.com/uchkunrakhimow/barcode-scanner-web.git
cd barcode-scanner-web
```

2. **Set your Scandit license key**

Create a `.env` file in the project root:

```bash
echo "SCANDIT_LICENSE_KEY=your-scandit-license-key" > .env
```

3. **Build and run the Docker container**

```bash
docker-compose up -d
```

This will:

- Build the Docker image
- Start the container
- Expose the application on port 8080

4. **Access the application**

Your barcode scanner application is now running at:

```
http://127.0.0.1:8080
```

## Customization

### Changing the port

To use a different port, modify the `ports` section in `docker-compose.yml`:

```yaml
ports:
  - "your-port:80"
```

### Enabling HTTPS

To enable HTTPS, uncomment the nginx-proxy service in docker-compose.yml and set up SSL certificates.

## Troubleshooting

- **Camera access issues**: Ensure your application is served over HTTPS when deployed to production, as camera access requires a secure context.
- **Container fails to start**: Check logs with `docker-compose logs`
