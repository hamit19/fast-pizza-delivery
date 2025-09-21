import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <div
      className='bg-yellow-500  p-4 uppercase tracking-widest flex flex-col items-center gap-2 sm:flex-row sm:justify-between
    '>
      <Link to='/'>Fast React pizza co.</Link>
      <SearchOrder />
      <Username className={"hidden sm:block "} />
    </div>
  );
}

export default Header;
