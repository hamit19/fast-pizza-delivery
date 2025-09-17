import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div
      className={`h-[75vh] flex items-center justify-center text-center flex-col gap-6`}>
      <h1 className=' text-xl '>
        The best pizza.
        <br />
        <span className='text-yellow-500'>
          Straight out of the oven, straight to you.
        </span>
      </h1>

      <CreateUser />
    </div>
  );
}

export default Home;
