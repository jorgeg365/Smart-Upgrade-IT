import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "training", label: "Training" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navigate = (id) => {
    const target = document.getElementById(id);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveSection(id);
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <button className="brand" type="button" onClick={() => navigate("home")}>
        <span className="brand-name">Smart Upgrade IT</span>
      </button>

      <div className="profile-badge" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=240&q=80"
          alt=""
        />
      </div>

      <button
        className="menu-button"
        type="button"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <nav className={`nav ${menuOpen ? "open" : ""}`} aria-label="Primary navigation">
        {navItems.map((item) => (
          <button
            className={activeSection === item.id ? "active" : ""}
            key={item.id}
            type="button"
            onClick={() => navigate(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
}
