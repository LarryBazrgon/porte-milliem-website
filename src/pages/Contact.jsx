import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Înlocuiește cu datele din contul tău EmailJS
  const serviceID = 'SERVICE_ID_TAU';
  const templateID = 'TEMPLATE_ID_TAU';
  const publicKey = 'PUBLIC_KEY_TAU';

  try {
    await emailjs.sendForm(serviceID, templateID, e.target, publicKey);
    alert('Mesaj trimis cu succes! Te vom contacta în curând.');
    e.target.reset();
  } catch (error) {
    alert('Ups! A apărut o eroare. Te rugăm să ne suni direct.');
  }
};

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-[40vh] bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80)' }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative h-full flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-light text-white"
          >
            Contact
          </motion.h1>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-light text-gray-800 mb-2">
                  Trimite <span className="text-[#A32035] font-semibold">mesajul tău</span>
                </h2>
                <div className="w-20 h-0.5 bg-[#A32035] mb-6" />
                <p className="text-gray-600 mb-8">
                  Nu ezita să ne contactezi pentru orice întrebare legată de ușile noastre. 
                  Mesajul tău va fi trimis direct echipei noastre care îți va răspunde în cel mai scurt timp posibil.
                </p>
              </motion.div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-lg p-8 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Mesaj trimis cu succes!</h3>
                  <p className="text-gray-600">Vom reveni cu un răspuns în cel mai scurt timp.</p>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-[#A32035] mb-2">Nume și Prenume *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Nume și Prenume"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#A32035] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-[#A32035] mb-2">Adresă Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Adresă E-mail"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#A32035] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-[#A32035] mb-2">Localitate *</label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="Localitate"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#A32035] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-[#A32035] mb-2">Număr de telefon *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Număr de telefon"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#A32035] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-[#A32035] mb-2">Mesaj *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Scrie mesajul tău..."
                      rows={6}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#A32035] transition-colors resize-none"
                    />
                  </div>

                  <div className="flex items-center gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex items-center gap-2 bg-[#A32035] text-white px-8 py-3 hover:bg-[#8a1b2d] transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm uppercase tracking-wider font-medium"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Se trimite...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Trimite mesajul
                        </>
                      )}
                    </button>
                    <span className="text-sm text-gray-500">
                      * Câmpuri obligatorii
                    </span>
                  </div>
                </motion.form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-8 mb-8"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Informații de contact</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#A32035]/10 rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-[#A32035]" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Adresă</p>
                      <p className="text-gray-600 mt-1">
                        Strada Industriei Nr. 15<br />
                        București, România 012345
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#A32035]/10 rounded-full flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-[#A32035]" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Telefon</p>
                      <p className="text-gray-600 mt-1">+40 21 123 4567</p>
                      <p className="text-gray-600">+40 722 123 456</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#A32035]/10 rounded-full flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-[#A32035]" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Email</p>
                      <p className="text-gray-600 mt-1">info@condoleoporte.ro</p>
                      <p className="text-gray-600">comenzi@condoleoporte.ro</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#A32035]/10 rounded-full flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-[#A32035]" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Program</p>
                      <p className="text-gray-600 mt-1">Luni - Vineri: 08:00 - 18:00</p>
                      <p className="text-gray-600">Sâmbătă: 09:00 - 14:00</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Map placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-200 rounded-lg overflow-hidden h-64"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91158.11095559564!2d25.95137567010856!3d44.43786840893563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1f93abf3cce51%3A0xac0632e37c9ca628!2sBucharest%2C%20Romania!5e0!3m2!1sen!2sus!4v1679597851048!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Locație Porte Milliem"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Showroom Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-white mb-4">
              Vizitează <span className="text-[#A32035]">Showroom-ul</span> nostru
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Te invităm să ne vizitezi showroom-ul pentru a vedea și atinge ușile noastre. 
              Consultanții noștri îți vor oferi toate informațiile necesare.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Expunere completă', desc: 'Toate colecțiile disponibile pentru vizualizare' },
              { title: 'Consultanță gratuită', desc: 'Specialiști disponibili pentru recomandări' },
              { title: 'Mostre gratuite', desc: 'Poți solicita mostre pentru a le vedea acasă' }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-[#A32035]/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-[#A32035]">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}