import { Link } from "react-scroll";

export default function UpArrow() {
  return (
    <Link to="up" className="link-up" smooth={true}>
      Наверх
    </Link>
  );
}
