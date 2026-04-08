import { useState } from "react";
import NavBar from "./Navbar";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="desktop">
        <NavBar variant="desktop" />
      </div>
    </header>
  );
}
