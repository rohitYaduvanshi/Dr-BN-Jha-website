import { useState } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Heart, Droplets, Microscope, Phone, MapPin, Clock, Star, Menu, X, ChevronRight } from 'lucide-react';
import './index.css';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="app">
      {/* Background Decorations */}
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>

      {/* Navigation */}
      <nav className="glass-nav">
        <div className="container navbar">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="logo-container"
          >
            <img src="/logo.png" alt="Dr. B. N. Jha Logo" className="logo-img" />
            <div className="logo-text">
              DR. PROF. <span>B. N. JHA</span>
            </div>
          </motion.div>
          
          <button className="hamburger" onClick={toggleMenu}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            {['Home', 'Services', 'Research', 'Testimonials', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
          
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact" 
            className="btn btn-primary"
          >
            Book Appointment
          </motion.a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-grid">
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="hero-content"
            >
              <motion.h4 variants={fadeIn} style={{ color: 'var(--accent)', fontWeight: 600 }}>
                Pioneering Cardio-Diabetic Excellence
              </motion.h4>
              <motion.h1 variants={fadeIn}>
                Precision Medicine <br />
                Driven by <span style={{ fontStyle: 'italic', color: 'var(--primary-light)' }}>Research.</span>
              </motion.h1>
              <motion.p variants={fadeIn} style={{ maxWidth: '600px', fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '3rem' }}>
                Senior Consultant Physician & Head of Anveshan Cardio-Diabetic Research Centre. 
                Providing world-class healthcare with academic mastery in Patna.
              </motion.p>
              <motion.div variants={fadeIn} style={{ display: 'flex', gap: '1rem' }} className="hero-btns">
                <a href="#services" className="btn btn-primary">
                  Explore Expertise <ChevronRight size={18} style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
                </a>
                <a href="#contact" className="btn" style={{ border: '1px solid var(--primary)', color: 'var(--primary)' }}>Visit Clinic</a>
              </motion.div>
            </motion.div>
            
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000} transitionSpeed={1500}>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hero-img-container"
              >
                <img src="/doctor.png" alt="Dr. B. N. Jha" className="hero-img" />
              </motion.div>
            </Tilt>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section" style={{ background: 'var(--primary)', color: 'white', overflow: 'hidden' }}>
        <div className="container stats-grid">
          {[
            { label: 'Years of Experience', val: '25+' },
            { label: 'Star Patient Rating', val: '5.0' },
            { label: 'Patients Treated', val: '10k+' }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="stats-card"
            >
              <h2 style={{ color: 'var(--accent)' }}>{stat.val}</h2>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              style={{ fontSize: '2.5rem' }}
            >
              Core Specializations
            </motion.h2>
            <div style={{ width: '60px', height: '4px', background: 'var(--accent)', margin: '1rem auto' }}></div>
          </div>
          
          <div className="services-grid">
            <ServiceCard 
              icon={<Heart color="var(--primary)" size={40} />}
              title="Cardiology Consultation"
              desc="Advanced diagnostics for heart health, hypertension management, and preventive cardiac care."
            />
            <ServiceCard 
              icon={<Droplets color="var(--primary)" size={40} />}
              title="Diabetology Excellence"
              desc="Comprehensive type-1 and type-2 diabetes management, focusing on chronic complication prevention."
            />
            <ServiceCard 
              icon={<Microscope color="var(--primary)" size={40} />}
              title="Internal Medicine"
              desc="Expert diagnosis and treatment of complex multi-system disorders with clinical precision."
            />
          </div>
        </div>
      </section>

      {/* Anveshan Centre Highlight */}
      <section id="research" className="section" style={{ background: '#0f172a', color: 'white', position: 'relative' }}>
        <div className="container research-grid">
          <div className="research-content">
            <h4 style={{ color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '2px' }}>Research Domain</h4>
            <h2 style={{ color: 'white', fontSize: '3rem', margin: '1.5rem 0' }}>Anveshan Research Centre</h2>
            <p style={{ fontSize: '1.1rem', opacity: 0.9, marginBottom: '2rem' }}>
              A hub for medical innovation, integrating the latest clinical trials and international research directly into patient care strategies.
            </p>
            <ul style={{ marginBottom: '2rem' }}>
              {['Clinical Trials Participation', 'Advanced Metabolic Analysis', 'Academic Publishing & Training'].map(item => (
                <li key={item} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>✓</div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="research-img-container" style={{ border: 'none', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
            <img src="/lab.png" alt="Research Lab" className="research-img" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem' }}>Patient Testimonials</h2>
            <p style={{ color: 'var(--text-muted)' }}>Recognized for clinical empathy and professional excellence.</p>
          </div>
          <div className="services-grid">
            {[1, 2, 3].map((i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                style={{ padding: '2rem', border: '1px solid #e2e8f0', borderRadius: '12px', background: 'white', boxShadow: 'var(--shadow-md)' }}
              >
                <div style={{ display: 'flex', gap: '4px', color: '#fbbf24', marginBottom: '1rem' }}>
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="#fbbf24" />)}
                </div>
                <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', color: 'var(--text-main)' }}>
                  "Dr. Jha is exceptionally knowledgeable. His approach to diabetes management transformed my daily life."
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: 'var(--primary)' }}>V</div>
                  <div>
                    <h5 style={{ fontWeight: 600, margin: 0 }}>Verified Patient</h5>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Google Review</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section" style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
        <div className="container contact-grid">
          <div className="contact-info">
            <h2 style={{ fontSize: '3rem' }}>Get in Touch</h2>
            <p style={{ marginBottom: '3rem', fontSize: '1.1rem' }}>Visit our facility in Khajpura or book a priority consultation below.</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <ContactItem icon={<MapPin color="var(--accent)" />} title="Clinic Address" text="Maurya Path, Khajpura, Patna, Bihar 800014" />
              <ContactItem icon={<Clock color="var(--accent)" />} title="Consultation Hours" text="Mon - Sat: 10:00 AM - 08:00 PM" />
              <ContactItem icon={<Phone color="var(--accent)" />} title="Emergency Contact" text="+91 000 000 0000" />
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '3rem' }}>
              <a href="tel:+910000000000" className="btn btn-primary">Call Now</a>
              <a href="https://www.google.com/maps" target="_blank" className="btn" style={{ border: '1px solid var(--primary)' }}>Directions</a>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="contact-form"
          >
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <select required>
              <option value="">Select Service</option>
              <option>Cardiology Consultation</option>
              <option>Diabetic Management</option>
              <option>General Checkup</option>
            </select>
            <textarea placeholder="How can we help?" rows={4} required></textarea>
            <button type="submit" className="btn btn-primary" style={{ padding: '1.2rem', fontSize: '1.1rem' }}>Request Appointment</button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="section" style={{ padding: '6rem 0 2rem', background: '#070b14', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <div className="logo-container" style={{ justifyContent: 'center', marginBottom: '2rem' }}>
            <img src="/logo.png" alt="Logo" className="logo-img" style={{ filter: 'brightness(0) invert(1)' }} />
            <div className="logo-text" style={{ color: 'white', fontSize: '2rem' }}>
              DR. PROF. <span>B. N. JHA</span>
            </div>
          </div>
          <p style={{ opacity: 0.5, maxWidth: '600px', margin: '0 auto 3rem', lineHeight: 1.8 }}>
            Elevating healthcare standards through clinical precision and academic excellence. 
            Providing evidence-based care for the heart and metabolic health.
          </p>
          <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.1)', marginBottom: '2rem' }}></div>
          <p style={{ opacity: 0.4, fontSize: '0.9rem' }}>
            © {new Date().getFullYear()} Dr. B. N. Jha. All rights reserved. | <a href="#" style={{ textDecoration: 'underline' }}>Privacy Policy</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

const ServiceCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={1000}>
    <motion.div 
      whileHover={{ y: -5 }}
      className="service-card" 
      style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '1rem', background: 'white', boxShadow: 'var(--shadow-lg)' }}
    >
      <div style={{ marginBottom: '1rem' }}>{icon}</div>
      <h3 style={{ fontSize: '1.5rem' }}>{title}</h3>
      <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>{desc}</p>
    </motion.div>
  </Tilt>
);

const ContactItem = ({ icon, title, text }: { icon: React.ReactNode, title: string, text: string }) => (
  <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
    <div style={{ padding: '12px', background: 'rgba(0,35,102,0.05)', borderRadius: '12px' }}>
      {icon}
    </div>
    <div>
      <h5 style={{ margin: '0 0 4px 0', fontSize: '1.1rem', fontWeight: 600 }}>{title}</h5>
      <p style={{ margin: 0, opacity: 0.7 }}>{text}</p>
    </div>
  </div>
);

export default App;
