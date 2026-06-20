import { useRef, useEffect } from "react";
import heroBg from "../assets/videos/hero-bg.mp4";
import aboutBg from "../assets/videos/about-bg.mp4";
import {
  BadgeDollarSign,
  BarChart3,
  Briefcase,
  Camera,
  ChevronDown,
  CircleDot,
  Clock,
  Cloud,
  Database,
  Feather,
  Globe,
  HardDrive,
  Lightbulb,
  Medal,
  Monitor,
  Phone,
  Server,
  Shapes,
  Shield,
  ToggleRight,
  Users,
  Wifi,
  Wrench,
} from "lucide-react";

const services = [
  { title: "Managed IT Services",               Icon: Monitor  },
  { title: "Cybersecurity Solutions",            Icon: Shield   },
  { title: "Cloud & Microsoft 365",              Icon: Cloud    },
  { title: "Network Infrastructure & Wi-Fi",    Icon: Wifi     },
  { title: "Data Backup & Recovery",             Icon: Database },
  { title: "IT Consulting",                      Icon: Briefcase},
  { title: "VoIP Phone Systems",                 Icon: Phone    },
  { title: "Hardware & Software Support",        Icon: Wrench   },
  { title: "Security Cameras & Access Control",  Icon: Camera   },
  { title: "Remote Workforce Solutions",         Icon: Globe    },
  { title: "24/7 Monitoring & Support",          Icon: Clock    },
];

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

function useFadeLoop(ref, fadeDuration = 1.0) {
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    let raf;
    const tick = () => {
      if (video.duration) {
        const t = video.currentTime;
        const left = video.duration - t;
        if (left < fadeDuration) {
          video.style.opacity = Math.max(0, left / fadeDuration);
        } else if (t < fadeDuration) {
          video.style.opacity = Math.min(1, t / fadeDuration);
        } else {
          video.style.opacity = 1;
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [ref, fadeDuration]);
}

export default function Home() {
  const videoRef = useRef(null);
  const aboutVideoRef = useRef(null);

  useFadeLoop(videoRef);
  useFadeLoop(aboutVideoRef);

  return (
    <main id="home">
      <section className="hero hero-home">
        <video ref={videoRef} className="hero-video" src={heroBg} autoPlay muted loop playsInline />
        <div className="hero-copy">
          <h1>Smart Upgrade IT</h1>
          <p>
            Making lives easier with the innovation of Technology. We will S.U.I.T your
            tech needs.
          </p>
          <div className="hero-actions">
            <div className="hero-input-group">
              <input
                type="email"
                className="hero-email"
                placeholder="Enter your email"
                aria-label="Email address"
              />
              <button className="button cta-button" type="button">
                Get started
              </button>
            </div>
            <button
              className="down-button"
              type="button"
              aria-label="Scroll to services"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            >
              <ChevronDown size={32} strokeWidth={1.3} />
            </button>
          </div>
        </div>
      </section>

      <section className="intro-section" id="services">
        <h2>Services For Businesses</h2>
        <p>
          You will find the latest information about us on this page. Our company is constantly
          evolving and growing. We provide wide range of services. Our mission is to provide best
          solution that helps everyone.
        </p>
        <div className="services-list">
          <p className="services-label">Our Services</p>
          <div className="services-grid">
            {services.map(({ title, Icon }) => (
              <div className="service-card" key={title}>
                <span className="service-icon"><Icon size={22} strokeWidth={1.6} /></span>
                <span className="service-name">{title}</span>
              </div>
            ))}
          </div>
        </div>

      </section>

<section className="upgrade-section" id="training">
        <h2 className="training-title">Training For Your Future</h2>
        <p className="training-body">
          At Smart Upgrade IT, we are committed to empowering individuals and organizations
          through high-quality technology education and professional development. In addition
          to industry-leading training programs from vendors such as CompTIA and Cisco, we
          are developing our own suite of professional certification programs designed to
          validate real-world skills in IT support, cybersecurity, networking, cloud
          technologies, and emerging digital solutions. Our goal is to provide practical,
          career-focused training that equips learners with the knowledge, hands-on
          experience, and credentials needed to succeed in today's rapidly evolving
          technology landscape. Stay tuned for the launch of our industry-aligned
          certification pathways and advanced training opportunities.
        </p>
        <div className="dotted-rule" />
      </section>

      <section className="future-section" id="about">
        <div className="about-video-wrap">
          <video ref={aboutVideoRef} className="about-video" src={aboutBg} autoPlay muted loop playsInline />
        </div>
        <div className="about-text">
          <h2>Built on Real Experience. Driven by Community.</h2>
          <p>
            Smart Upgrade IT (SUIT LLC) was founded during the COVID-19 pandemic out of a need
            to put skilled people to work. Starting as a subcontractor, SUIT operated as an IT
            staffing business — placing trained students in IT roles at medical offices and clinics.
            The results spoke for themselves.
          </p>
          <p>
            Beyond staffing, SUIT gave back to the next generation of tech professionals by
            mentoring students who needed internship experience, building hands-on projects
            tailored to their goals and career paths.
          </p>
          <p>
            What started as a response to a crisis became a mission: upgrade people, upgrade
            businesses, and keep technology accessible to everyone.
          </p>
        </div>
      </section>
    </main>
  );
}
