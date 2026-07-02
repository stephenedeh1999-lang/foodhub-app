const menuItems = [
    // ============================================================
    // 🍔 AMERICAN FAVORITES
    // ============================================================
    { 
        id: 1, 
        name: 'Classic Burger', 
        category: 'american', 
        price: 8.99, 
        emoji: '🍔', 
        description: 'Juicy beef patty with lettuce, tomato, and cheese',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=400&fit=crop'
    },
    { 
        id: 2, 
        name: 'Bacon Burger', 
        category: 'american', 
        price: 10.99, 
        emoji: '🥓', 
        description: 'With crispy bacon, BBQ sauce, and onion rings',
        image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=500&h=400&fit=crop'
    },
    { 
        id: 3, 
        name: 'Margherita Pizza', 
        category: 'american', 
        price: 12.99, 
        emoji: '🍕', 
        description: 'Fresh mozzarella, tomato sauce, and basil on thin crust',
        image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&h=400&fit=crop'
    },
    { 
        id: 4, 
        name: 'French Fries', 
        category: 'american', 
        price: 4.99, 
        emoji: '🍟', 
        description: 'Crispy golden fries with special seasoning',
        image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?w=500&h=400&fit=crop'
    },
    { 
        id: 5, 
        name: 'Chicken Wings', 
        category: 'american', 
        price: 11.99, 
        emoji: '🍗', 
        description: 'Spicy buffalo wings with ranch dipping sauce',
        image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=500&h=400&fit=crop'
    },
    { 
        id: 6, 
        name: 'Chocolate Milkshake', 
        category: 'american', 
        price: 5.99, 
        emoji: '🥤', 
        description: 'Rich and creamy chocolate milkshake with whipped cream',
        image: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?w=500&h=400&fit=crop'
    },

    // ============================================================
    // 🇳🇬 NIGERIAN FOODS - USING LOCAL IMAGES
    // ============================================================
    { 
        id: 7, 
        name: 'Jollof Rice with Chicken', 
        category: 'rice', 
        price: 12.99, 
        emoji: '🍛', 
        description: 'West Africa\'s signature one-pot rice dish with tomatoes, onions, spices and grilled chicken',
        image: 'images/jollof-rice.jpg'
    },
    { 
        id: 8, 
        name: 'Fried Rice with Chicken', 
        category: 'rice', 
        price: 11.99, 
        emoji: '🍚', 
        description: 'Colorful Nigerian fried rice with mixed vegetables and grilled chicken',
        image: 'images/fried-rice.jpg'
    },
    { 
        id: 9, 
        name: 'Ofada Rice with Stew', 
        category: 'rice', 
        price: 13.99, 
        emoji: '🍚', 
        description: 'Local unpolished rice served with spicy ofada stew and assorted meat',
        image: 'images/ofada-rice.jpg'
    },
    { 
        id: 10, 
        name: 'Egusi Soup', 
        category: 'soups', 
        price: 10.99, 
        emoji: '🥣', 
        description: 'Rich melon seed soup with vegetables, assorted meat, and stockfish',
        image: 'images/egusi-soup.jpg'
    },
    { 
        id: 11, 
        name: 'Pepper Soup with Catfish', 
        category: 'soups', 
        price: 11.99, 
        emoji: '🐟', 
        description: 'Spicy traditional pepper soup with fresh catfish - perfect for cold days',
        image: 'images/pepper-soup.jpg'
    },
    { 
        id: 12, 
        name: 'Banga Soup', 
        category: 'soups', 
        price: 10.99, 
        emoji: '🥣', 
        description: 'Rich palm nut soup with assorted meat - a Delta delicacy',
        image: 'images/banga-soup.jpg'
    },
    { 
        id: 13, 
        name: 'Semo with Egusi Soup', 
        category: 'swallows', 
        price: 13.99, 
        emoji: '🍲', 
        description: 'Smooth cassava-based semolina paired with rich egusi soup - a Yoruba delicacy',
        image: 'images/semo.jpg'
    },
    { 
        id: 14, 
        name: 'Eba with Ogbono Soup', 
        category: 'swallows', 
        price: 11.99, 
        emoji: '🍲', 
        description: 'Cassava flour swallow served with slimy, flavorful ogbono (wild mango seed) soup',
        image: 'images/eba.jpg'
    },
    { 
        id: 15, 
        name: 'Amala with Ewedu & Gbegiri', 
        category: 'swallows', 
        price: 12.99, 
        emoji: '🍲', 
        description: 'Yam flour swallow paired with jute leaf soup and bean puree',
        image: 'images/amala.jpg'
    },
    { 
        id: 16, 
        name: 'Pounded Yam & Egusi', 
        category: 'swallows', 
        price: 15.99, 
        emoji: '🍲', 
        description: 'Smooth pounded yam with rich egusi soup and assorted meat',
        image: 'images/pounded-yam.jpg'
    },
    { 
        id: 17, 
        name: 'Moi Moi', 
        category: 'snacks', 
        price: 6.99, 
        emoji: '🧆', 
        description: 'Steamed bean pudding with fish, eggs, and spices - a Nigerian favorite',
        image: 'images/moi-moi.jpg'
    },
    { 
        id: 18, 
        name: 'Dodo (Fried Plantain)', 
        category: 'snacks', 
        price: 4.99, 
        emoji: '🍌', 
        description: 'Sweet fried ripe plantains - the perfect side dish for any meal',
        image: 'images/dodo.jpg'
    },
    { 
        id: 19, 
        name: 'Suya', 
        category: 'snacks', 
        price: 8.99, 
        emoji: '🥩', 
        description: 'Spicy grilled beef skewers with peanut seasoning - popular street food',
        image: 'images/suya.jpg'
    },
    { 
        id: 20, 
        name: 'Abacha (African Salad)', 
        category: 'snacks', 
        price: 7.99, 
        emoji: '🥗', 
        description: 'Cassava-based salad with palm oil, garden eggs, and fish',
        image: 'images/abacha.jpg'
    },
    { 
        id: 21, 
        name: 'Zobo Drink', 
        category: 'drinks', 
        price: 3.99, 
        emoji: '🍹', 
        description: 'Refreshing hibiscus flower drink with ginger and pineapple',
        image: 'images/zobo.jpg'
    }
];