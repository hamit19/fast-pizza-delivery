import { Link } from "react-router-dom";

function Button({ children, disabled, to }) {
  const className = `bg-yellow-400 disabled:cursor-not-allowed
     px-6 rounded-full py-2 focus:outline-none focus:ring focus:ring-offset-2
    focus:ring-yellow-300 hover:bg-yellow-300 transition-colors duration-300 
    ease-in-out focus:bg-yellow-300`;

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button className={className} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
