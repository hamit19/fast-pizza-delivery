// Test ID: IIDSAT

import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";

import OrderItem from "./OrderItem";
// const order = {
//   id: "ABCDEF",
//   customer: "Jonas",
//   phone: "123456789",
//   address: "Arroios, Lisbon , Portugal",
//   priority: true,
//   estimatedDelivery: "2027-04-25T10:00:00",
//   cart: [
//     {
//       pizzaId: 7,
//       name: "Napoli",
//       quantity: 3,
//       unitPrice: 16,
//       totalPrice: 48,
//     },
//     {
//       pizzaId: 5,
//       name: "Diavola",
//       quantity: 2,
//       unitPrice: 16,
//       totalPrice: 32,
//     },
//     {
//       pizzaId: 3,
//       name: "Romana",
//       quantity: 1,
//       unitPrice: 15,
//       totalPrice: 15,
//     },
//   ],
//   position: "-9.000,38.000",
//   orderPrice: 95,
//   priorityPrice: 19,
// };

function Order() {
  const order = useLoaderData();

  console.log(order);

  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className='py-6 px-4 space-y-8 '>
      <div className='flex flex-col sm:flex-row gap-4 justify-between items-center'>
        <h2 className=' text-lg capitalize '> order #{id} Status</h2>

        <div className='space-x-2 uppercase '>
          {priority && (
            <span className='bg-red-500 text-red-50 rounded-full px-2 py-1'>
              Priority
            </span>
          )}
          <span className='bg-green-500 text-green-50 rounded-full px-2 py-1'>
            {status} order
          </span>
        </div>
      </div>

      <div className='bg-stone-200 px-6 py-5 rounded-md flex flex-col gap-2 sm:flex-row justify-between items-center'>
        <p className='text-stone-600'>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className='text-stone-400 text-sm '>
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className='divide-y divide-stone-200 border-t border-b '>
        {cart.map((item) => (
          <OrderItem key={item.key} item={item} />
        ))}
      </ul>

      <div className='bg-stone-200 px-6 py-5 space-y-2 rounded-md '>
        <p className='text-stone-600 text-sm font-medium '>
          Price pizza: {formatCurrency(orderPrice)}
        </p>

        {priority && (
          <p className='text-stone-600 text-sm font-medium'>
            Price priority: {formatCurrency(priorityPrice)}
          </p>
        )}

        <p className='font-bold'>
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
    </div>
  );
}

export const loader = async function ({ params }) {
  const order = await getOrder(params.orderId);
  return order;
};

export default Order;
