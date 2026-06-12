import {
  BadgeDollarSign,
  BarChart3,
  Camera,
  ChevronDown,
  CircleDot,
  Feather,
  Lightbulb,
  Medal,
  Shapes,
  ToggleRight,
  Users,
} from "lucide-react";

const gallery = [
  {
    title: "Mobile apps",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Automation",
    image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Training",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Business systems",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Business security",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Software setup",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80",
  },
];

const serviceIcons = [Feather, Users, Lightbulb, ToggleRight];
const updateIcons = [CircleDot, BadgeDollarSign, Medal, Shapes];

export default function Home() {
  return (
    <main id="home">
      <section className="hero hero-home">
        <div className="hero-copy">
          <h1>Smart Upgrade IT</h1>
          <p>
            Making lives easier with the innovation of Technology. We will S.U.I.T your
            tech needs.
          </p>
          <div className="hero-actions">
            <button className="button news-button" type="button">
              Latest news
            </button>
            <button
              className="down-button"
              type="button"
              aria-label="Scroll to services"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            >
              <ChevronDown size={64} strokeWidth={1.3} />
            </button>
          </div>
        </div>
      </section>

      <section className="intro-section" id="services">
        <h2>Apps For Business</h2>
        <p>
          You will find the latest information about us on this page. Our company is constantly
          evolving and growing. We provide wide range of services. Our mission is to provide best
          solution that helps everyone.
        </p>
        <div className="gallery-panel">
          <div className="gallery-grid">
            {gallery.map((item) => (
              <figure className="gallery-card" key={item.title}>
                <img src={item.image} alt={item.title} />
              </figure>
            ))}
          </div>
          <div className="social-row" aria-label="Social links">
            <Camera size={36} fill="currentColor" />
            <span>in</span>
            <BarChart3 size={36} />
            <span>f</span>
          </div>
        </div>
      </section>

      <section className="image-banner security-banner">
        <h2>Business Security</h2>
      </section>

      <section className="upgrade-section" id="training">
        <div className="icon-row">
          {updateIcons.map((Icon, index) => (
            <span className={index === 0 ? "icon-tile muted" : "icon-tile"} key={Icon.displayName ?? index}>
              <Icon size={58} fill="currentColor" strokeWidth={2.2} />
            </span>
          ))}
        </div>
        <p>New upgrades coming soon.</p>
        <div className="dotted-rule" />
      </section>

      <section className="image-banner training-banner" aria-label="Training technology image" />

      <section className="future-section" id="about">
        <h2>Changing Future</h2>
        <div className="icon-row purple">
          {serviceIcons.map((Icon, index) => {
            return (
              <span className="icon-tile" key={Icon.displayName ?? index}>
                <Icon size={58} fill="currentColor" strokeWidth={2.2} />
              </span>
            );
          })}
        </div>
        <p>Upgrading...</p>
      </section>
    </main>
  );
}
