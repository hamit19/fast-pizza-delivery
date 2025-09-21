import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import CartOverView from "../features/cart/CartOverview";
import Loader from "./Loader";

function LayoutApp() {
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";

  return (
    <div className='grid grid-rows-[auto_1fr_auto] h-screen'>
      {isLoading && <Loader />}

      <Header />

      <div className='max-w-5xl'>
        <main className='overflow-auto'>
          <Outlet />
        </main>
      </div>

      <CartOverView />
    </div>
  );
}

export default LayoutApp;
