import React, { useState } from "react";
import API from "../api/enquiryApi.js";
function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handlechange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await API.post("/enquiry", formData);
      setSuccess(res.data.message);
      setFormData({
        name: "",
        email: "",
        phone: "",
      });
      setError("");
    } catch (err) {
      setError(err.response.data.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const faqs = [
    {
      question: "Who can join this workshop?",
      answer:
        "This workshop is designed for children aged 8–14 years who are interested in AI, Robotics, Coding, and Technology.",
    },
    {
      question: "Do kids need prior coding knowledge?",
      answer:
        "No. This workshop is beginner-friendly. Students will learn everything from the basics.",
    },
    {
      question: "What will kids learn in this workshop?",
      answer:
        "Students will learn AI fundamentals, Robotics concepts, Coding basics, Problem Solving, and Real-World Projects.",
    },
    {
      question: "Will a certificate be provided?",
      answer:
        "Yes. Every student who successfully completes the workshop will receive a Certificate of Completion.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section id="faq" className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border rounded-xl overflow-hidden">
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex justify-between items-center p-5 text-left font-semibold"
                >
                  {faq.question}

                  <span
                    className={`text-xl transition-transform duration-300 ${
                      openIndex === index ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <p className="px-5 pb-5 text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-linear-to-r from-orange-500 to-yellow-400 rounded-3xl shadow-lg p-8 relative overflow-hidden">
          <h2 className="text-4xl font-bold text-white">Register Now</h2>

          <p className="text-white mt-2 mb-8">Fill in the details to enroll</p>
          {success && (
            <div className="mb-4 p-4 rounded-xl bg-green-100 text-green-700 border border-green-300">
              {success}
            </div>
          )}
          {error && (
            <div className="mb-4 p-4 rounded-xl bg-red-100 text-red-700 border border-red-300">
              {error}
            </div>
          )}
          <form className="space-y-4" onSubmit={handlesubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Your Name"
              className="w-full p-4 rounded-xl bg-white outline-none"
              onChange={handlechange}
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Email Address"
              className="w-full p-4 rounded-xl bg-white outline-none"
              onChange={handlechange}
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              placeholder="Phone Number"
              className="w-full p-4 rounded-xl bg-white outline-none"
              onChange={handlechange}
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-slate-900 text-white p-4 rounded-xl font-bold disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  Submitting...
                </span>
              ) : (
                "Enroll Now →"
              )}
            </button>
          </form>

          <img
            src="/Robot.png"
            alt="robot"
            className="absolute bottom-0 right-0 w-36 hidden md:block"
          />
        </div>
      </div>
    </section>
  );
}

export default FAQ;
