import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const submitForm = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <main className="page">
      <p className="eyebrow">Contact</p>
      <h1>Tell us what needs upgrading.</h1>
      <form className="contact-form" onSubmit={submitForm}>
        <label>
          Name
          <input
            type="text"
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={updateField}
            required
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            autoComplete="email"
            value={form.email}
            onChange={updateField}
            required
          />
        </label>
        <label>
          Message
          <textarea
            name="message"
            rows="5"
            value={form.message}
            onChange={updateField}
            required
          />
        </label>
        <button className="button primary" type="submit">Send Message</button>
        {submitted ? (
          <p className="form-status" role="status">
            Thanks. The form is ready to connect to email, CRM, or a backend.
          </p>
        ) : null}
      </form>
    </main>
  );
}
