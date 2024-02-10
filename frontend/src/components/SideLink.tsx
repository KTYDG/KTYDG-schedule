import { Link, LinkProps, useLocation } from 'react-router-dom';

const SideLink = ({ children, to }: LinkProps) => {
  const path = useLocation().pathname;
  const match = path === to;
  const className = "text-white text-3xl text-sideways text-center h-1/3 w-12 rounded-r-2xl px-1 bg-book z-20";
  return (
    <Link
      className={match ? className+" shadow-button_r" : className+" shadow-button_ir_r"}
      to={to}
    >
      {children}
    </Link>
  );
};

export default SideLink;