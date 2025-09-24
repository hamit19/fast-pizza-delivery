import { useState } from "react";
import {
  Form,
  Navigate,
  redirect,
  useActionData,
  useNavigation,
} from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;
  const errForm = useActionData();
  const isSubmitting = useNavigation().state === "submitting";

  return (
    <div className='py-4 px-8'>
      <h2 className=' font-medium mb-2'>Ready to order? Let's go!</h2>

      <Form className='space-y-3' method='POST'>
        <div className='flex text-stone-500  sm:justify-center sm:items-center flex-col gap-2 text-sm sm:flex-row'>
          <label className='sm:basis-40'>First Name</label>
          <input className='input grow ' type='text' name='customer' required />
        </div>

        <div className='flex sm:justify-center sm:items-center sm:flex-row text-stone-500 flex-col gap-2 text-sm '>
          <label className='sm:basis-40'>Phone number</label>
          <div className='grow flex flex-col gap-2'>
            <input className='input w-full ' type='tel' name='phone' required />
            {errForm?.phone && (
              <span className='text-red-700 bg-red-100 p-2 text-xs rounded-lg'>
                {" "}
                {errForm.phone}
              </span>
            )}
          </div>
        </div>

        <div className='flex sm:justify-center sm:items-center sm:flex-row text-stone-500 flex-col gap-2 text-sm'>
          <label className='sm:basis-40'>Address</label>
          <div className='grow'>
            <input
              className='input w-full '
              type='text'
              name='address'
              required
            />
          </div>
        </div>

        <div className='flex items-center gap-2 font-medium text-sm '>
          <input
            className='check checked:ring checked:ring-yellow-300 checked:ring-offset-1 rounded-full checked:bg-yellow-400 checked:accent-yellow-300'
            type='checkbox'
            name='priority'
            id='priority'
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor='priority'>Want to yo give your order priority?</label>
        </div>

        <input type='hidden' name='cart' value={JSON.stringify(cart)} />
        <div className='text-xs font-bold sm:text-balance'>
          <Button type={"primary"} disabled={isSubmitting}>
            {isSubmitting ? "Order is placing..." : "Order now"}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();

  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };

  const error = {};

  if (!isValidPhone(order.phone))
    error.phone = "Please enter a valid phone number!";

  if (Object.keys(error).length > 0) return error;

  const newOrder = await createOrder(order);

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
