import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li>
      <div className='flex items-center text-stone-600 justify-between py-3'>
        <p>
          <span className='text-stone-900 font-bold '>{quantity}&times;</span>{" "}
          {name}
        </p>
        <p className='text-stone-900 font-bold'>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
