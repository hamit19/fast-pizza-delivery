import LinkButton from "../../ui/LinkButton";

function CartOverview() {
  return (
    <div className='bg-stone-800 text-stone-100 p-4'>
      <p className=' space-x-4'>
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <LinkButton to='/cart'>Open cart &rarr;</LinkButton>
    </div>
  );
}

export default CartOverview;
