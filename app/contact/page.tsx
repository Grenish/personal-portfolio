"use client";

import { useState } from "react";
import { Send, Mail, Github, Linkedin, Twitter, Coffee } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
      
      // Reset status after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const socials = [
    { icon: Mail, href: "mailto:mrcoder2033d@gmail.com", label: "Email" },
    { icon: Github, href: "https://github.com/grenish", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/grenish-rai",
      label: "LinkedIn",
    },
    { icon: Twitter, href: "https://twitter.com/grenish_rai", label: "Twitter" },
    { icon: Coffee, href: "https://buymeacoffee.com/grenish", label: "Buy me a coffee" },
  ];

  return (
    <section className="min-h-screen bg-gray-950 py-12">
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-light text-gray-100 mb-4">
            Let's Connect
          </h1>
          <p className="text-base text-gray-400 max-w-xl">
            Have a project in mind or just want to chat? Feel free to reach out.
            I'm always open to discussing new opportunities and ideas.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 md:gap-10">
          {/* Contact Form */}
          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Field */}
              <div className="group">
                <label
                  htmlFor="name"
                  className="block text-xs font-medium text-gray-400 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-2.5 bg-transparent border-0 border-b border-gray-800 text-gray-100 placeholder-gray-600 focus:border-gray-600 focus:outline-none transition-colors text-sm"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Field */}
              <div className="group">
                <label
                  htmlFor="email"
                  className="block text-xs font-medium text-gray-400 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-2.5 bg-transparent border-0 border-b border-gray-800 text-gray-100 placeholder-gray-600 focus:border-gray-600 focus:outline-none transition-colors text-sm"
                  placeholder="john@example.com"
                />
              </div>

              {/* Message Field */}
              <div className="group">
                <label
                  htmlFor="message"
                  className="block text-xs font-medium text-gray-400 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-0 py-2.5 bg-transparent border-0 border-b border-gray-800 text-gray-100 placeholder-gray-600 focus:border-gray-600 focus:outline-none transition-colors resize-none text-sm"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative inline-flex items-center gap-2 px-6 py-2.5 text-sm text-gray-100 transition-all duration-300 disabled:opacity-50"
                >
                  <span className="relative z-10">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </span>
                  <Send
                    size={14}
                    className={`relative z-10 transition-transform duration-300 ${
                      isSubmitting ? "" : "group-hover:translate-x-1"
                    }`}
                  />

                  {/* Button background effect */}
                  <div className="absolute inset-0 bg-gray-900 rounded-lg -z-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                  {/* Button border */}
                  <div className="absolute inset-0 border border-gray-800 rounded-lg" />
                </button>

                {/* Status Message */}
                {status === "success" && (
                  <p className="mt-3 text-xs text-green-500">
                    Message sent successfully! I'll get back to you soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="mt-3 text-xs text-red-500">
                    Failed to send message. Please try again or contact me directly.
                  </p>
                )}
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-2 space-y-6">
            {/* Quick Contact */}
            <div>
              <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
                Quick Contact
              </h3>
              <a
                href="mailto:mrcoder2033d@gmail.com"
                className="text-base text-gray-300 hover:text-gray-100 transition-colors"
              >
                mrcoder2033d@gmail.com
              </a>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
                Connect
              </h3>
              <div className="space-y-2.5">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-gray-400 hover:text-gray-100 transition-colors group"
                    >
                      <Icon
                        size={16}
                        className="text-gray-600 group-hover:text-gray-400 transition-colors"
                      />
                      <span>{social.label}</span>
                      <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <line x1="7" y1="17" x2="17" y2="7" />
                          <polyline points="7 7 17 7 17 17" />
                        </svg>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability */}
            <div>
              <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
                Availability
              </h3>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                </div>
                <span className="text-sm text-gray-400">
                  Available for new projects
                </span>
              </div>
            </div>

            {/* Response Time */}
            <div className="pt-6 border-t border-gray-900">
              <p className="text-xs text-gray-500">
                I typically respond within 24-48 hours. For urgent matters,
                please reach out via social media.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
