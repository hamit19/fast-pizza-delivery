import { Link } from "react-router-dom";

function Button({ children, disabled, to, type }) {
  const base = `
    bg-yellow-400 disabled:cursor-not-allowed
    rounded-full focus:outline-none focus:ring focus:ring-offset-2
    focus:ring-yellow-300 hover:bg-yellow-300 transition-colors duration-300 
    ease-in-out focus:bg-yellow-300
  `;

  const styles = {
    primary: base + " px-6 py-4 md:px-8 md:text-md ",
    small: base + " px-3 py-2 text-xs md:px-4 md:py-2 md:text-sm ",
    secondary: `
      disabled:cursor-not-allowed
      rounded-full focus:outline-none focus:ring border-stone-300 px-6 py-4 md:px-8 border focus:ring-offset-2
      focus:ring-stone-300 hover:bg-stone-300 transition-colors duration-300 
      ease-in-out focus:bg-stone-300
    `,
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
