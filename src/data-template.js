const initialSubscriptions = [
  {
    id: crypto.randomUUID(),
    name: 'Netflix',
    price: 15.49,
    billingDate: 10,
    category: 'Entertainment',
  },
  {
    id: crypto.randomUUID(),
    name: 'ChatGPT Plus',
    price: 20.0,
    billingDate: 20,
    category: 'Productivity',
  },
  {
    id: crypto.randomUUID(),
    name: 'Spotify',
    price: 10.99,
    billingDate: 15,
    category: 'Entertainment',
  },
  {
    id: crypto.randomUUID(),
    name: 'iCloud+',
    price: 10.99,
    billingDate: 1,
    category: 'Cloud Storage',
  },
  {
    id: crypto.randomUUID(),
    name: 'GitHub Copilot',
    price: 10.0,
    billingDate: 12,
    category: 'Productivity',
  },
];

export default initialSubscriptions;
