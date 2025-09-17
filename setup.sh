#!/bin/bash

# Create project directory structure
mkdir -p poloniex-trading-bot
cd poloniex-trading-bot

# Initialize Bun project
bun init -y

# Create directory structure
mkdir -p src/{exchanges,strategies,services,utils,types,config,models}
mkdir -p src/exchanges/poloniex
mkdir -p src/strategies/{scalping,swing}
mkdir -p src/services/{market-data,order-management,risk-management,portfolio}
mkdir -p src/utils/{crypto,logging}
mkdir -p logs
mkdir -p data

# Install dependencies
bun add ccxt winston zod dotenv crypto-js ws
bun add -d @types/node @types/ws typescript

echo "Project structure created successfully!"
echo "Next steps:"
echo "1. Copy the provided source files to their respective directories"
echo "2. Create a .env file with your Poloniex API credentials"
echo "3. Run 'bun run src/index.ts' to start the bot"