import { v4 as uuidv4 } from 'uuid';


const data = [
    {
        itemName: 'Pain',
        emoji: '🥖',
        view: false,
        selected: false
    },
    {
        itemName: 'Fromage',
        emoji: '🧀',
        view: false,
        selected: false
    },
    {
        itemName: 'Lait',
        emoji: '🥛',
        view: false,
        selected: false
    },
    {
        itemName: 'Café',
        emoji: '☕',
        view: false,
        selected: false
    },
    {
        itemName: 'Chocolat',
        emoji: '🍫',
        view: false,
        selected: false
    },
    {
        itemName: 'Œuf',
        emoji: '🥚',
        view: false,
        selected: false
    },
    {
        itemName: 'Piment',
        emoji: '🌶️',
        view: false,
        selected: false
    },
    {
        itemName: 'Oignon',
        emoji: '🧅',
        view: false,
        selected: false
    },
    {
        itemName: 'Ail',
        emoji: '🧄',
        view: false,
        selected: false
    },
    {
        itemName: 'Banane',
        emoji: '🍌',
        view: false,
        selected: false
    },
    {
        itemName: 'Fraise',
        emoji: '🍓',
        view: false,
        selected: false
    },
    {
        itemName: 'Pomme',
        emoji: '🍎',
        view: false,
        selected: false
    },
    {
        itemName: 'Pain',
        emoji: '🥖',
        view: false,
        selected: false
    },
    {
        itemName: 'Fromage',
        emoji: '🧀',
        view: false,
        selected: false
    },
    {
        itemName: 'Lait',
        emoji: '🥛',
        view: false,
        selected: false
    },
    {
        itemName: 'Café',
        emoji: '☕',
        view: false,
        selected: false
    },
    {
        itemName: 'Chocolat',
        emoji: '🍫',
        view: false,
        selected: false
    },
    {
        itemName: 'Œuf',
        emoji: '🥚',
        view: false,
        selected: false
    },
    {
        itemName: 'Piment',
        emoji: '🌶️',
        view: false,
        selected: false
    },
    {
        itemName: 'Oignon',
        emoji: '🧅',
        view: false,
        selected: false
    },
    {
        itemName: 'Ail',
        emoji: '🧄',
        view: false,
        selected: false
    },
    {
        itemName: 'Banane',
        emoji: '🍌',
        view: false,
        selected: false
    },
    {
        itemName: 'Fraise',
        emoji: '🍓',
        view: false,
        selected: false
    },
    {
        itemName: 'Pomme',
        emoji: '🍎',
        view: false,
        selected: false
    }
    
  ];
  
  const dataWithIds = data.map(item => ({ ...item, id: uuidv4() }));

  export default dataWithIds;
  