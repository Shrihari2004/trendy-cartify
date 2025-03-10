
import { Product } from "@/context/CartContext";

export const products: Product[] = [
  // Women's Category
  {
    id: "w1",
    name: "Floral Summer Dress",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?q=80&w=500&auto=format&fit=crop",
    category: "Women's Clothing"
  },
  {
    id: "w2",
    name: "Slim Fit Jeans",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1475178626620-a4d074967452?q=80&w=500&auto=format&fit=crop",
    category: "Women's Clothing"
  },
  {
    id: "w3",
    name: "V-Neck Blouse",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?q=80&w=500&auto=format&fit=crop",
    category: "Women's Clothing"
  },
  {
    id: "w4",
    name: "Designer Handbag",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=500&auto=format&fit=crop",
    category: "Women's Accessories"
  },
  {
    id: "w5",
    name: "High-Waisted Skirt",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=500&auto=format&fit=crop",
    category: "Women's Clothing"
  },
  
  // Men's Category
  {
    id: "m1",
    name: "Premium Cotton T-Shirt",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=500&auto=format&fit=crop",
    category: "Men's Clothing"
  },
  {
    id: "m2",
    name: "Slim Fit Jeans",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=500&auto=format&fit=crop",
    category: "Men's Clothing"
  },
  {
    id: "m3",
    name: "Formal Button-Down Shirt",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=500&auto=format&fit=crop",
    category: "Men's Clothing"
  },
  {
    id: "m4",
    name: "Leather Dress Shoes",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1614253429340-98120bd6d753?q=80&w=500&auto=format&fit=crop",
    category: "Men's Footwear"
  },
  {
    id: "m5",
    name: "Classic Watch",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?q=80&w=500&auto=format&fit=crop",
    category: "Men's Accessories"
  },
  
  // Kids Category
  {
    id: "k1",
    name: "Children's Play Set",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?q=80&w=500&auto=format&fit=crop",
    category: "Kids Clothing"
  },
  {
    id: "k2",
    name: "Educational Toy Set",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=500&auto=format&fit=crop",
    category: "Kids Toys"
  },
  {
    id: "k3",
    name: "Children's Sneakers",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?q=80&w=500&auto=format&fit=crop",
    category: "Kids Footwear"
  },
  {
    id: "k4",
    name: "Character Backpack",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=500&auto=format&fit=crop",
    category: "Kids Accessories"
  },
  {
    id: "k5",
    name: "Baby Gift Set",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=500&auto=format&fit=crop",
    category: "Kids Clothing"
  },
  
  // Home & Living Category
  {
    id: "h1",
    name: "Decorative Throw Pillows",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=500&auto=format&fit=crop",
    category: "Home Decor"
  },
  {
    id: "h2",
    name: "Bedding Set",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=500&auto=format&fit=crop",
    category: "Home Living"
  },
  {
    id: "h3",
    name: "Modern Coffee Table",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1532372576444-dda954194ad0?q=80&w=500&auto=format&fit=crop",
    category: "Furniture"
  },
  {
    id: "h4",
    name: "Kitchen Cookware Set",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1590794056426-7071c98cb7ca?q=80&w=500&auto=format&fit=crop",
    category: "Kitchen Essentials"
  },
  {
    id: "h5",
    name: "Indoor Plants",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=500&auto=format&fit=crop",
    category: "Home Decor"
  },
  
  // Beauty Category
  {
    id: "b1",
    name: "Skincare Gift Set",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=500&auto=format&fit=crop",
    category: "Beauty"
  },
  {
    id: "b2",
    name: "Makeup Palette",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=500&auto=format&fit=crop",
    category: "Cosmetics"
  },
  {
    id: "b3",
    name: "Luxury Perfume",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=500&auto=format&fit=crop",
    category: "Fragrance"
  },
  {
    id: "b4",
    name: "Hair Care Bundle",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=500&auto=format&fit=crop",
    category: "Beauty"
  },
  {
    id: "b5",
    name: "Manicure Kit",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1577775054177-b141cc7bd459?q=80&w=500&auto=format&fit=crop",
    category: "Beauty"
  },
  
  // Original products from FeaturedProducts component
  {
    id: "1-new",
    name: "Premium Cotton T-Shirt",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=500&auto=format&fit=crop",
    category: "Men's Clothing"
  },
  {
    id: "2",
    name: "Slim Fit Jeans",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=500&auto=format&fit=crop",
    category: "Men's Clothing"
  },
  {
    id: "3-sale",
    name: "Casual Summer Dress",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=500&auto=format&fit=crop",
    category: "Women's Clothing"
  },
  {
    id: "4",
    name: "Leather Crossbody Bag",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=500&auto=format&fit=crop",
    category: "Accessories"
  },
  {
    id: "5-new",
    name: "Wireless Headphones",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=500&auto=format&fit=crop",
    category: "Electronics"
  },
  {
    id: "6",
    name: "Smartwatch",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=500&auto=format&fit=crop",
    category: "Electronics"
  },
  {
    id: "7-sale",
    name: "Running Shoes",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500&auto=format&fit=crop",
    category: "Footwear"
  },
  {
    id: "8",
    name: "Designer Sunglasses",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=500&auto=format&fit=crop",
    category: "Accessories"
  }
];
