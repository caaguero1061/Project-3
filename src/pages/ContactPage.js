import React, { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
  });

  function updateField(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    alert(`Thanks, ${form.firstName || "there"}! We received your message.`);
    setForm({ firstName: "", lastName: "", email: "", comments: "" });
  }

  return (
    <section className="card">
      <div className="card__header">
        <h1 className="title">Contact</h1>
        <p className="subtitle">
          Controlled form: typing updates local component state immediately.
        </p>
      </div>

      <form className="contact" onSubmit={onSubmit}>
        <div className="grid">
          <div>
            <label className="label" htmlFor="firstName">First Name</label>
            <input
              className="input"
              id="firstName"
              name="firstName"
              value={form.firstName}
              onChange={updateField}
              required
            />
          </div>

          <div>
            <label className="label" htmlFor="lastName">Last Name</label>
            <input
              className="input"
              id="lastName"
              name="lastName"
              value={form.lastName}
              onChange={updateField}
              required
            />
          </div>

          <div className="grid__full">
            <label className="label" htmlFor="email">Email</label>
            <input
              className="input"
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={updateField}
              required
            />
          </div>

          <div className="grid__full">
            <label className="label" htmlFor="comments">Comments</label>
            <textarea
              className="textarea"
              id="comments"
              name="comments"
              value={form.comments}
              onChange={updateField}
              rows={5}
              required
            />
          </div>
        </div>

        <button className="button" type="submit">Submit</button>

        <pre className="debug">
          {JSON.stringify(form, null, 2)}
        </pre>
      </form>
    </section>
  );
}
