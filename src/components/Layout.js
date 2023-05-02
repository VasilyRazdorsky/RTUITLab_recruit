import Header from "./Header";
export default function Layout({ children, isLoggedIn, onLogout }) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} onLogout={onLogout} />
      {children}
    </>
  );
}
