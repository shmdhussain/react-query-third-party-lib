import { Link } from "react-router-dom";
export const Nav = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <br />
      <br />
      <br />
      <Link to="/comp1">Comp1</Link>
      <br />
      <br />
      <br />
      <Link to="/comp2">Comp2</Link>
      <br />
      <br />
      <br />
    </nav>
  );
};
