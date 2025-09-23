import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className=' flex gap-4  py-2'>
      <img
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
        src={imageUrl}
        alt={name}
      />
      <div className='flex flex-col grow '>
        <p className='font-medium'>{name}</p>
        <p className='text-stone-500 italic capitalize  '>
          {ingredients.join(", ")}
        </p>
        <div className=' flex items-center justify-between mt-auto'>
          {!soldOut ? (
            <p className='text-sm  '>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className='text-stone-500 font-medium uppercase  text-sm '>
              Sold out
            </p>
          )}
          <Button>ADD TO CART</Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
