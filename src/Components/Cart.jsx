import React from 'react';
import { IoAddCircle,IoRemoveCircleSharp  } from "react-icons/io5";
const Cart = () => {
  const foodItems = [
    { id: 1, name: 'Burger', price: 5.99, quantity: 2 },
    { id: 2, name: 'Pizza', price: 9.99, quantity: 1 },
    { id: 3, name: 'Salad', price: 7.49, quantity: 3 },
  ];
  const calculateSubtotal = (price, quantity) => {
    return (price * quantity).toFixed(2);
  };

  return (
    <div className="  md:mx-4 lg:mx-8  my-2 md:my-4 lg:my-8">
        <h1 className='text-center font-briem font-bold text-lg text-green-600 mb-4'>Your cart is here</h1>
        <div className='overflow-x-auto flex flex-col justify-center items-center'>
      <table className="table-auto border-collapse border border-gray-800 ">
        <thead>
          <tr className='font-briem text-green-600'>
            <th className="border border-gray-800 px-1 py-1">S.N</th>
            <th className="border border-gray-800 px-1 py-1">Food Name</th>
            <th className="border border-gray-800 px-1 py-1">Price</th>
            <th className="border border-gray-800 px-1 py-1">Quantity</th>
            <th className="border border-gray-800 px-1 py-1">Sub Total</th>
            <th className="border border-gray-800 px-1 py-1">Quntity control</th>
          </tr>
        </thead>
        <tbody>
          {foodItems.map((food, index) => (
              <tr key={food.id}>
              <td className="border border-gray-800 px-1 py-1">{index + 1}</td>
              <td className="border border-gray-800 px-1 py-1">{food.name}</td>
              <td className="border border-gray-800 px-1 py-1">${food.price.toFixed(2)}</td>
              <td className="border border-gray-800 px-1 py-1 ">{food.quantity}</td>
              <td className="border border-gray-800 px-1 py-1">${calculateSubtotal(food.price, food.quantity)}</td>
              <td className="border border-gray-800 flex flex-row justify-between "> <span className='flex justify-center items-center text-3xl cursor-pointer'><IoRemoveCircleSharp color='red'/></span><span className='flex justify-center items-center text-3xl cursor-pointer'><IoAddCircle color='green'/></span></td>
            </tr>
          ))}
        </tbody>
      </table>
 </div>
      <div className='text-right my-2'>
        <h1 className='font-briem text-lg font-semibold text-green-600'>Total cost:$5678</h1>
      </div>
      <div className='flex justify-center items-center'>
        <button className='bg-green-600 w-1/2 rounded-md text-white font-briem p-2'>Confirm Order?</button>
      </div>
    </div>
  );
};

export default Cart;
