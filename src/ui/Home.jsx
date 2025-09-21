import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-8 text-center`}>
      <h1 className=' text-xl '>
        The best pizza.
        <br />
        <span className='text-yellow-500 md:text-3xl'>
          Straight out of the oven, straight to you.
        </span>
      </h1>

      <CreateUser />
    </div>
  );
}

export default Home;
