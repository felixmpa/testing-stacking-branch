// Core type definitions for the trading bot

export interface OrderBook {
  symbol: string;
  timestamp: number;
  bids: [number, number][]; // [price, amount]
  asks: [number, number][]; // [price, amount]
  spread: number;
  midPrice: number;
}

export interface Candle {
  timestamp: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

export interface Trade {
  id: string;
  symbol: string;
  side: 'buy' | 'sell';
  price: number;
  amount: number;
  timestamp: number;
  fee?: number;
  orderId?: string;
}

export interface Order {
  id: string;
  clientOrderId?: string;
  symbol: string;
  type: 'market' | 'limit' | 'stop' | 'stop_limit';
  side: 'buy' | 'sell';
  price?: number;
  amount: number;
  status: 'pending' | 'open' | 'filled' | 'cancelled' | 'rejected';
  filled: number;
  remaining: number;
  timestamp: number;
  average?: number;
}

export interface Position {
  symbol: string;
  side: 'long' | 'short';
  amount: number;
  entryPrice: number;
  currentPrice: number;
  unrealizedPnl: number;
  realizedPnl: number;
  stopLoss?: number;
  takeProfit?: number;
  timestamp: number;
}

export interface Balance {
  currency: string;
  free: number;
  used: number;
  total: number;
}

export interface TradingSignal {
  strategy: string;
  symbol: string;
  action: 'buy' | 'sell' | 'hold';
  confidence: number; // 0-1
  price?: number;
  amount?: number;
  stopLoss?: number;
  takeProfit?: number;
  timestamp: number;
  metadata?: Record<string, any>;
}

export interface StrategyConfig {
  name: string;
  enabled: boolean;
  symbols: string[];
  timeframe: string;
  allocation: number; // percentage of portfolio
  maxPositions: number;
  riskPerTrade: number; // percentage
  stopLoss?: number;
  takeProfit?: number;
  trailingStop?: {
    enabled: boolean;
    activation: number;
    distance: number;
  };
  parameters: Record<string, any>;
}

export interface BotConfig {
  mode: 'live' | 'paper' | 'backtest';
  exchange: {
    name: string;
    apiKey: string;
    apiSecret: string;
    testnet: boolean;
    rateLimit: number;
  };
  trading: {
    defaultSymbols: string[];
    maxOpenOrders: number;
    maxPositionSize: number;
    minOrderSize: number;
    slippage: number;
  };
  risk: {
    maxDrawdown: number;
    maxDailyLoss: number;
    maxPortfolioRisk: number;
    positionSizing: 'fixed' | 'kelly' | 'percentage';
  };
  strategies: StrategyConfig[];
  monitoring: {
    logLevel: string;
    alertChannels: string[];
    metricsInterval: number;
  };
}

export interface MarketData {
  symbol: string;
  orderBook: OrderBook;
  recentTrades: Trade[];
  candles: Map<string, Candle[]>; // timeframe -> candles
  ticker: {
    bid: number;
    ask: number;
    last: number;
    volume24h: number;
    change24h: number;
  };
}

export interface PerformanceMetrics {
  totalTrades: number;
  winningTrades: number;
  losingTrades: number;
  winRate: number;
  profitFactor: number;
  sharpeRatio: number;
  maxDrawdown: number;
  totalPnl: number;
  averagePnl: number;
  bestTrade: Trade;
  worstTrade: Trade;
}

export type WebSocketMessage = 
  | { type: 'subscribe'; channel: string; symbols?: string[] }
  | { type: 'unsubscribe'; channel: string }
  | { type: 'ping' }
  | { type: 'orderbook'; data: OrderBook }
  | { type: 'trade'; data: Trade }
  | { type: 'candle'; data: Candle }
  | { type: 'ticker'; data: any }
  | { type: 'error'; error: string };

export interface IStrategy {
  name: string;
  config: StrategyConfig;
  analyze(marketData: MarketData): Promise<TradingSignal | null>;
  onOrderFilled(order: Order): void;
  onPositionClosed(position: Position): void;
  getMetrics(): PerformanceMetrics;
}