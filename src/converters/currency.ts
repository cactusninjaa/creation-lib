import fetch from 'node-fetch';

export type ExchangeRates = Record<string, number>;

interface ExchangeRateApiResponse {
  base: string;
  rates: Record<string, number>;
}

const API_KEY = process.env.EXCHANGE_API_KEY || ''; // par exemple avec variable d'environnement


let cachedRates: ExchangeRates | null = null;
let cachedBase = 'EUR';

export async function fetchRates(base: string = 'EUR'): Promise<ExchangeRates> {
  const url = `https://api.exchangerate.host/latest?base=${base}&apikey=${API_KEY}`;
  const response = await fetch(url, {
    headers: {
      'x-api-key': API_KEY,
    },
  });  
  if (!response.ok) throw new Error(`Failed to fetch rates: ${response.status}`);
  const data = (await response.json()) as ExchangeRateApiResponse;
  cachedRates = data.rates;
  cachedBase = data.base;
  return cachedRates;
}

export function getCachedRates(): ExchangeRates | null {
  return cachedRates;
}

export function convert(
  amount: number,
  from: string,
  to: string,
  rates: ExchangeRates
): number {
  if (from === to) return amount;

  const fromRate = from === cachedBase ? 1 : rates[from];
  const toRate = rates[to];
  if (!fromRate || !toRate) {
    throw new Error(`Rate for ${from} or ${to} not found`);
  }

  const amountInBase = amount / fromRate;
  return amountInBase * toRate;
}
