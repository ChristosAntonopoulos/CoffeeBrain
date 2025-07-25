// Mock data for Coffee Brain website

import { Photo, MenuItem } from '../types';

export const mockPhotos: Photo[] = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1047&q=80",
    description: "Counter & espresso machine"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    description: "Latte art close-up"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "Customer seating area"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    description: "Elegant interior design"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    description: "Coffee beans and brewing equipment"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1261&q=80",
    description: "Filiatra street view at night"
  }
];

export const mockMenuItems: MenuItem[] = [
  // Coffee
  {
    id: 1,
    name: "Espresso",
    description: "Rich, bold single shot of premium Greek coffee",
    price: 2.50,
    category: "coffee",
    image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 2,
    name: "Cappuccino",
    description: "Creamy espresso with steamed milk and artistic foam",
    price: 3.80,
    category: "coffee",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 3,
    name: "Flat White",
    description: "Smooth double shot with velvety steamed milk",
    price: 4.20,
    category: "coffee",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 4,
    name: "Greek Coffee",
    description: "Traditional kafes Ellinikos, served with sugar",
    price: 3.00,
    category: "coffee",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 5,
    name: "Freddo Espresso",
    description: "Refreshing iced espresso with foam",
    price: 3.50,
    category: "coffee",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  
  // Cold Drinks
  {
    id: 6,
    name: "Freddo Cappuccino",
    description: "Iced cappuccino with cold milk foam",
    price: 4.00,
    category: "cold-drinks",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 7,
    name: "Iced Latte",
    description: "Chilled espresso with cold milk",
    price: 4.50,
    category: "cold-drinks",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 8,
    name: "Fresh Orange Juice",
    description: "Locally sourced oranges, freshly squeezed",
    price: 3.20,
    category: "cold-drinks",
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  
  // Pastries
  {
    id: 9,
    name: "Croissant",
    description: "Buttery, flaky French pastry",
    price: 2.80,
    category: "pastry",
    image: "https://images.unsplash.com/photo-1555507036-ac1c2147c1d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 10,
    name: "Tiramisu",
    description: "Classic Italian dessert with coffee and mascarpone",
    price: 5.50,
    category: "pastry",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 11,
    name: "Greek Yogurt & Honey",
    description: "Creamy yogurt with local thyme honey and walnuts",
    price: 4.20,
    category: "pastry",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 12,
    name: "Baklava",
    description: "Traditional Greek pastry with nuts and honey",
    price: 3.80,
    category: "pastry",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  
  // Snacks
  {
    id: 13,
    name: "Toast with Tomato",
    description: "Rustic bread with fresh tomato and olive oil",
    price: 3.50,
    category: "snacks",
    image: "https://images.unsplash.com/photo-1506280754576-f6fa8a873550?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 14,
    name: "Club Sandwich",
    description: "Triple-layer sandwich with premium ingredients",
    price: 6.80,
    category: "snacks",
    image: "https://images.unsplash.com/photo-1553909489-cd47e0ef937f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  }
];