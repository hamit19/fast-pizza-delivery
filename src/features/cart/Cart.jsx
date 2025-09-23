import LinkButton from "../../ui/LinkButton";
import CartItem from "./CartItem";
import Button from "../../ui/Button";

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

function Cart() {
  const cart = fakeCart;

  return (
    <div className='p-4'>
      <LinkButton to='/menu'>&larr; Back to menu </LinkButton>

      <h1 className='md:text-lg lg:text-xl mt-6'>Your Cart, %NAME%</h1>

      <ul className='divide-y divide-stone-300 py-4 '>
        {cart.map((item) => (
          <CartItem key={item.pizzaId} item={item} />
        ))}
      </ul>

      <div className=' flex items-center justify-center md:justify-start gap-4 '>
        <Button type={"primary"} to='/order/new'>
          Order pizzas
        </Button>
        <Button type={"secondary"}>Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
