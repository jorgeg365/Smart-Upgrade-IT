import { Github, Instagram, Linkedin, Menu, Twitter, X } from "lucide-react";
import { useState } from "react";

const socialLinks = [
  { label: "GitHub",    Icon: Github,    href: "https://github.com" },
  { label: "LinkedIn",  Icon: Linkedin,  href: "https://linkedin.com" },
  { label: "Instagram", Icon: Instagram, href: "https://instagram.com" },
  { label: "X",         Icon: Twitter,   href: "https://x.com" },
];

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
  const [flashId, setFlashId] = useState(null);

  const navigate = (id) => {
    const target = document.getElementById(id);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveSection(id);
    setMenuOpen(false);
    setFlashId(id);
    setTimeout(() => setFlashId(null), 700);
  };

  return (
    <header className="site-header">
      <button className="brand" type="button" onClick={() => navigate("home")}>
        <span className="brand-name">Smart Upgrade IT</span>
      </button>


      <div className="header-socials">
        {socialLinks.map(({ label, Icon, href }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="social-link" aria-label={label}>
            <Icon size={17} strokeWidth={1.7} />
          </a>
        ))}
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
            className={[activeSection === item.id ? "active" : "", flashId === item.id ? "nav-flash" : ""].filter(Boolean).join(" ")}
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
