
import React, { createContext, useContext, useReducer, useEffect } from "react";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  size?: string;
}

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}

type CartAction =
  | { type: "ADD_ITEM"; payload: Product }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } }
  | { type: "CLEAR_CART" };

const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

const calculateTotals = (items: CartItem[]): { totalItems: number; totalPrice: number } => {
  return items.reduce(
    (acc, item) => ({
      totalItems: acc.totalItems + item.quantity,
      totalPrice: acc.totalPrice + item.price * item.quantity,
    }),
    { totalItems: 0, totalPrice: 0 }
  );
};

const getItemId = (item: Product): string => {
  // Create a unique ID that includes the size if present
  return item.size ? `${item.id}-${item.size}` : item.id;
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM": {
      const itemId = getItemId(action.payload);
      const existingItemIndex = state.items.findIndex((item) => getItemId(item) === itemId);
      
      let updatedItems: CartItem[];
      
      if (existingItemIndex >= 0) {
        updatedItems = state.items.map((item, index) => 
          index === existingItemIndex 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedItems = [...state.items, { ...action.payload, quantity: 1 }];
      }
      
      const { totalItems, totalPrice } = calculateTotals(updatedItems);
      
      return {
        items: updatedItems,
        totalItems,
        totalPrice,
      };
    }
    
    case "REMOVE_ITEM": {
      const updatedItems = state.items.filter((item) => getItemId(item) !== action.payload);
      const { totalItems, totalPrice } = calculateTotals(updatedItems);
      
      return {
        items: updatedItems,
        totalItems,
        totalPrice,
      };
    }
    
    case "UPDATE_QUANTITY": {
      const { id, quantity } = action.payload;
      
      if (quantity <= 0) {
        return cartReducer(state, { type: "REMOVE_ITEM", payload: id });
      }
      
      const updatedItems = state.items.map((item) =>
        getItemId(item) === id ? { ...item, quantity } : item
      );
      
      const { totalItems, totalPrice } = calculateTotals(updatedItems);
      
      return {
        items: updatedItems,
        totalItems,
        totalPrice,
      };
    }
    
    case "CLEAR_CART":
      return initialState;
      
    default:
      return state;
  }
};

interface CartContextType {
  state: CartState;
  addItem: (product: Product) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState, () => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : initialState;
  });
  
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state));
  }, [state]);
  
  const addItem = (product: Product) => {
    dispatch({ type: "ADD_ITEM", payload: product });
  };
  
  const removeItem = (id: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  
  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };
  
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  
  return (
    <CartContext.Provider
      value={{ state, addItem, removeItem, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
