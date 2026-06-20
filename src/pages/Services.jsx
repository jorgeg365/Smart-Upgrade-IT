const services = [
  {
    title: "Managed IT Support",
    text: "Help desk, maintenance, device setup, software support, and proactive troubleshooting.",
  },
  {
    title: "Cloud and Security",
    text: "Email, storage, account security, backups, access control, and cybersecurity improvements.",
  },
  {
    title: "Web and Automation",
    text: "Website updates, workflow automation, CRM support, and smarter business systems.",
  },
];

export default function Services() {
  return (
    <main className="page">
      <p className="eyebrow">Services</p>
      <h1>IT services we can shape around your business.</h1>
      <div className="content-list">
        {services.map((service) => (
          <section key={service.title}>
            <h2>{service.title}</h2>
            <p>{service.text}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
