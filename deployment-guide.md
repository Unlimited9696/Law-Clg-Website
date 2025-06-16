# Deployment Guide for SSNLC Website on Hostinger VPS

This guide provides step-by-step instructions for deploying the SSNLC website on a Hostinger VPS.

## Prerequisites

- A Hostinger VPS with SSH access
- Node.js (v14+ recommended)
- Git
- PM2 (for running the application in production)
- Nginx (for reverse proxy)

## Step 1: Clone the Repository from GitHub

```bash
# Connect to your VPS via SSH
ssh user@your-vps-ip

# Navigate to the directory where you want to deploy the website
cd /var/www

# Clone the repository
git clone https://github.com/YOUR-USERNAME/Law-Clg-Website.git
cd Law-Clg-Website
```

## Step 2: Install Dependencies

```bash
# Install server dependencies
cd server
npm install --production
cd ..

# Install client dependencies
cd client
npm install --production
cd ..
```

## Step 3: Build the Next.js Application

```bash
# Navigate to the client directory
cd client

# Build the Next.js application
npm run build
```

## Step 4: Set Up Environment Variables

```bash
# Create .env file for server
cd ../server
nano .env

# Add your environment variables
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
# Add other necessary environment variables
```

## Step 5: Set Up PM2 for Process Management

```bash
# Install PM2 globally if not already installed
npm install -g pm2

# Start the server with PM2
cd /var/www/Law-Clg-Website/server
pm2 start server.js --name "ssnlc-server"

# Start the Next.js application with PM2
cd /var/www/Law-Clg-Website/client
pm2 start npm --name "ssnlc-client" -- start

# Save the PM2 process list
pm2 save

# Set up PM2 to start on system boot
pm2 startup
# Follow the instructions provided by PM2
```

## Step 6: Set Up Nginx as a Reverse Proxy

```bash
# Install Nginx if not already installed
sudo apt update
sudo apt install nginx

# Create a new Nginx configuration file
sudo nano /etc/nginx/sites-available/ssnlc
```

Add the following configuration:

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;  # Next.js default port
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    location /api {
        proxy_pass http://localhost:5000;  # Backend API port
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable the configuration:

```bash
sudo ln -s /etc/nginx/sites-available/ssnlc /etc/nginx/sites-enabled/
sudo nginx -t  # Test the configuration
sudo systemctl restart nginx
```

## Step 7: Set Up SSL with Let's Encrypt

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Obtain and install SSL certificate
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Follow the prompts from Certbot
```

## Step 8: Update the Website

When you need to update the website:

```bash
# Navigate to your project directory
cd /var/www/Law-Clg-Website

# Pull the latest changes
git pull

# Install any new dependencies and rebuild (if needed)
cd client
npm install
npm run build

cd ../server
npm install

# Restart the applications
pm2 restart all
```

## Troubleshooting

- Check logs with `pm2 logs`
- Verify Nginx configuration with `sudo nginx -t`
- Restart services with `sudo systemctl restart nginx` and `pm2 restart all`
- Check server status with `pm2 status`

## Backup

Regularly backup your MongoDB database and any uploaded files in the public directory.

```bash
# Example MongoDB backup command
mongodump --uri="your_mongodb_connection_string" --out=/path/to/backup/directory
``` 