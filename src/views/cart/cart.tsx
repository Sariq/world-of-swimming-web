// src/Cart.js
import React, { useState } from 'react';

const Cart = () => {
  const initialProducts = [
    { id: 1, name: 'Towel', price: 10, image: '/images/products/towel.png', quantity: 1 },
    { id: 1, name: 'Swimming suit', price: 10, image: '/images/products/swim-suit.png', quantity: 1 },
    { id: 1, name: 'Paddles', price: 10, image: '/images/products/paddles.png', quantity: 1 },
    { id: 1, name: 'Flippers', price: 10, image: '/images/products/flippers.png', quantity: 1 },
    { id: 1, name: 'Pull Buoy', price: 10, image: '/images/products/pull-buoy.png', quantity: 1 },
    { id: 1, name: 'Cap', price: 10, image: '/images/products/cap.png', quantity: 1 },
    { id: 1, name: 'Water bottle', price: 10, image: '/images/products/water-bottle.png', quantity: 1 },
    { id: 1, name: 'Kickboard', price: 10, image: '/images/products/kickboard.png', quantity: 1 },
    { id: 1, name: 'Swim goggles', price: 10, image: '/images/products/swim-goggles.png', quantity: 1 },
    { id: 1, name: 'Snorkel', price: 10, image: '/images/products/snorkel.png', quantity: 1 },
    { id: 1, name: 'Mesh bag', price: 10, image: '/images/products/mesh-bag.png', quantity: 1 },
    { id: 1, name: 'Bag black', price: 10, image: '/images/products/bag.png', quantity: 1 },
    { id: 1, name: 'Bag pink', price: 10, image: '/images/products/bag.png', quantity: 1 },
    { id: 1, name: 'Zoomers', price: 10, image: '/images/products/zoomers.png', quantity: 1 },
  ];

  const [products, setProducts] = useState(initialProducts);

  const updateQuantity = (id:any, value: any) => {
    setProducts(products.map(product => 
      product.id === id ? { ...product, quantity: value } : product
    ));
  };

  const totalPrice = products.reduce((total, product) => total + (product.price * product.quantity), 0);

  return (
    <div className="container mx-auto mt-10 ">
      <h1 className="text-2xl font-bold mb-5">Your Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Product List */}
        <div className="lg:col-span-2">
          {products.map(product => (
            <div key={product.id} className="flex justify-between items-center bg-white p-4 rounded shadow mb-4">
              <img src={product.image} alt={product.name} className="w-12 h-12 rounded" />
              <div className="ml-4">
                <h2 className="text-lg">{product.name}</h2>
                <p className="text-gray-500">${product.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center">
                <input
                  type="number"
                  value={product.quantity}
                  min="1"
                  className="border p-2 w-16 text-center"
                  onChange={(e) => updateQuantity(product.id, parseInt(e.target.value))}
                />
                <p className="ml-4">${(product.price * product.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Tax (10%):</span>
            <span>${(totalPrice * 0.1).toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <span>Total:</span>
            <span>${(totalPrice * 1.1).toFixed(2)}</span>
          </div>
          <button className="mt-5 w-full bg-blue-500 text-white py-2 rounded">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
