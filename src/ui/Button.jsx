import { Link } from "react-router-dom";

function Button({ children, disabled, to, type }) {
  const base = `
    bg-yellow-400 disabled:cursor-not-allowed
    rounded-full focus:outline-none focus:ring focus:ring-offset-2
    focus:ring-yellow-300 hover:bg-yellow-300 transition-colors duration-300 
    ease-in-out focus:bg-yellow-300
  `;

  const styles = {
    primary: base + " px-6 py-4 md:px-8 md:py-5 md:text-md ",
    small: base + " px-3 py-2 text-xs md:px-4 md:py-3 md:text-sm ",
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
