import Link from "next/link";
import UpArrow from "./UpArrow";

export default function Footer() {
  const date = new Date();

  return (
    <section className="footer">
      <p className="footer__year">© {date.getFullYear()}</p>
      <Link href="/about-us" className="footer__link">
        О нас
      </Link>
      <Link href="/support" className="footer__link">
        Поддержка
      </Link>
      <UpArrow />
    </section>
  );
}
