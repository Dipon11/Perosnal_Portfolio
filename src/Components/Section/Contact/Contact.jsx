import { useState } from "react";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data with time included
    emailjs
      .sendForm(
        "service_rdm3arm", // Your Service ID
        "template_2g0rq4i", // Your Template ID
        e.target, // Pass the entire form to capture all data
        "S8rZ4cQnsCM8tgZEC" // Your Public Key
      )
      .then((result) => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <div className="px-6 w-full max-w-[600px]">
        <h2 className="text-4xl font-extrabold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Get In Touch
          <br />
          <span className="text-sm text-white underline">This actually works send me a text ( provide valid email & name ) </span>
        </h2>

       
        <form
          className="space-y-6 p-8 rounded-lg shadow-xl bg-gradient-to-b from-gray-800 to-gray-900"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            placeholder="Your Name"
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />

          <input
            type="email"
            name="email"
            required
            value={formData.email}
            className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            placeholder="you@example.com"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />

          <textarea
            name="message"
            required
            rows={5}
            value={formData.message}
            className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            placeholder="Your Message"
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all hover:shadow-[0_4px_20px_rgba(59,130,246,0.4)]"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
