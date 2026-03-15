import { useState } from "react";
import { Phone, Mail, Clock, MapPin, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [subject, setSubject] = useState("Buy");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Header */}
      <div className="bg-[#1B2D4F] pt-28 pb-14 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-5xl text-white font-bold mb-4">Contact Us</h1>
          <div className="w-16 h-1 bg-[#C9A84C] mx-auto rounded-full mb-4" />
          <p className="text-white/60 text-lg">
            Ready to buy, sell, or auction? We'd love to hear from you.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                  <CheckCircle size={40} className="text-green-600" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1B2D4F] mb-3">Message Sent!</h3>
                <p className="text-gray-600 mb-6">
                  Thank you for reaching out. Ken will get back to you within one business day.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", message: "" }); }}
                  className="text-[#C9A84C] font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h2 className="font-serif text-2xl font-bold text-[#1B2D4F] mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="John Smith"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C]/30 transition-colors"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Email *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C]/30 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="(859) 000-0000"
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C]/30 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">I'm interested in *</label>
                    <div className="flex flex-wrap gap-2">
                      {["Buy", "Sell", "Auction", "Property Management", "Other"].map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setSubject(opt)}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                            subject === opt
                              ? "bg-[#1B2D4F] text-white shadow-md"
                              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Message *</label>
                    <textarea
                      rows={5}
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder={`Tell us about your ${subject.toLowerCase()} needs...`}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C]/30 transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#b8933e] text-white font-bold py-4 rounded-xl transition-all hover:shadow-lg"
                  >
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Contact Info + Map */}
          <div className="space-y-6">
            {/* Ken */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-serif text-xl font-bold text-[#1B2D4F] mb-5">Contact Information</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4 p-4 bg-[#F5F5F5] rounded-lg">
                  <img src="https://via.placeholder.com/60x60?text=KD" alt="Ken DeGrant" className="w-12 h-12 rounded-full border-2 border-[#C9A84C]/30" />
                  <div>
                    <div className="font-bold text-[#1B2D4F]">Ken DeGrant</div>
                    <div className="text-[#C9A84C] text-xs font-semibold uppercase tracking-wide mb-2">Broker/Owner</div>
                    <a href="tel:8592002084" className="flex items-center gap-2 text-gray-600 hover:text-[#C9A84C] text-sm transition-colors mb-1">
                      <Phone size={14} /> 859-200-2084
                    </a>
                    <a href="mailto:ken@highpointky.com" className="flex items-center gap-2 text-gray-600 hover:text-[#C9A84C] text-sm transition-colors">
                      <Mail size={14} /> ken@highpointky.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-[#F5F5F5] rounded-lg">
                  <img src="https://via.placeholder.com/60x60?text=JM" alt="John Montgomery" className="w-12 h-12 rounded-full border-2 border-[#C9A84C]/30" />
                  <div>
                    <div className="font-bold text-[#1B2D4F]">John Montgomery</div>
                    <div className="text-[#C9A84C] text-xs font-semibold uppercase tracking-wide mb-2">Auctioneer</div>
                    <a href="tel:6064966530" className="flex items-center gap-2 text-gray-600 hover:text-[#C9A84C] text-sm transition-colors">
                      <Phone size={14} /> 606-496-6530
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-600 text-sm">
                  <div className="w-10 h-10 bg-[#1B2D4F]/5 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-[#C9A84C]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#1B2D4F] text-sm">Service Area</div>
                    <div>Serving Central & Eastern Kentucky</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-600 text-sm">
                  <div className="w-10 h-10 bg-[#1B2D4F]/5 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock size={18} className="text-[#C9A84C]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#1B2D4F] text-sm">Business Hours</div>
                    <div>Mon–Fri 8am–6pm</div>
                    <div>Sat 9am–2pm</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-64 bg-gray-100 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <MapPin size={40} className="mx-auto mb-3 opacity-30" />
                  <p className="font-medium text-gray-500">Map Coming Soon</p>
                  <p className="text-sm mt-1">Serving Central & Eastern Kentucky</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="tel:8592002084"
                className="flex flex-col items-center justify-center gap-2 bg-[#1B2D4F] text-white font-semibold py-5 rounded-xl hover:bg-[#162540] transition-colors text-center"
              >
                <Phone size={22} />
                <span className="text-sm">Call Ken</span>
                <span className="text-[#C9A84C] text-xs font-bold">859-200-2084</span>
              </a>
              <a
                href="mailto:ken@highpointky.com"
                className="flex flex-col items-center justify-center gap-2 bg-[#C9A84C] text-white font-semibold py-5 rounded-xl hover:bg-[#b8933e] transition-colors text-center"
              >
                <Mail size={22} />
                <span className="text-sm">Email Ken</span>
                <span className="text-xs text-white/80">ken@highpointky.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
