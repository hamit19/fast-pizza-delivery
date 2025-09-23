import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className='flex items-center justify-between px-4 py-6'>
      <p className=''>
        {quantity}&times; {name}
      </p>
      <div className='flex items-center gap-3'>
        <p>{formatCurrency(totalPrice)}</p>
        <Button type={"small"}>DELETE</Button>
      </div>
    </li>
  );
}

export default CartItem;
