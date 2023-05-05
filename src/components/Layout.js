import Header from "./Header";
import Footer from "./Footer";
export default function Layout({ children, isLoggedIn, onLogout }) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} onLogout={onLogout} />
      {children}
      <Footer />
    </>
  );
}
