import './index.css';

const App = () => {
  return (
    <div className="app">
      {/* Navigation */}
      <nav className="glass-nav">
        <div className="container navbar">
          <div className="logo">
            DR. PROF. <span>B. N. JHA</span>
          </div>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#research">Anveshan Centre</a>
            <a href="#testimonials">Patient Reviews</a>
            <a href="#contact">Contact</a>
          </div>
          <a href="#contact" className="btn btn-primary">Book Consultation</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-grid animate-fade-up">
            <div className="hero-content">
              <h4>Pioneering Cardio-Diabetic Excellence</h4>
              <h1>
                Precision Medicine Driven by <br />
                <span style={{ fontStyle: 'italic', borderBottom: '4px solid var(--accent)' }}>Clinical Research.</span>
              </h1>
              <p style={{ maxWidth: '600px', fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '3rem' }}>
                Senior Consultant Physician & Head of Anveshan Cardio-Diabetic Research Centre. 
                Providing world-class healthcare with over two decades of academic and clinical mastery in Patna.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="#services" className="btn btn-primary" style={{ padding: '1rem 2.5rem' }}>Explore Expertise</a>
                <a href="#contact" className="btn" style={{ border: '1px solid var(--primary)', color: 'var(--primary)', padding: '1rem 2.5rem' }}>Visit Clinic</a>
              </div>
            </div>
            <div className="hero-img-container">
              <img src="/doctor.png" alt="Dr. B. N. Jha" className="hero-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section" style={{ background: 'var(--primary)', color: 'white', padding: '4rem 0' }}>
        <div className="container stats-grid">
          <div className="stats-card">
            <h2>25+</h2>
            <p>Years of Experience</p>
          </div>
          <div className="stats-card">
            <h2>5.0</h2>
            <p>Star Patient Rating</p>
          </div>
          <div className="stats-card">
            <h2>10k+</h2>
            <p>Patients Treated</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem' }}>Core Specializations</h2>
            <div style={{ width: '60px', height: '4px', background: 'var(--accent)', margin: '1rem auto' }}></div>
          </div>
          
          <div className="services-grid">
            <div className="service-card">
              <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>❤️</div>
              <h3>Cardiology Consultation</h3>
              <p style={{ color: 'var(--text-muted)' }}>Advanced diagnostics for heart health, hypertension management, and preventive cardiac care using evidence-based protocols.</p>
            </div>
            <div className="service-card">
              <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>🩸</div>
              <h3>Diabetology Excellence</h3>
              <p style={{ color: 'var(--text-muted)' }}>Comprehensive type-1 and type-2 diabetes management, focusing on chronic complication prevention and lifestyle integration.</p>
            </div>
            <div className="service-card">
              <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>🔬</div>
              <h3>Internal Medicine</h3>
              <p style={{ color: 'var(--text-muted)' }}>Expert diagnosis and treatment of complex multi-system disorders, leveraging academic depth and clinical precision.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Anveshan Centre Highlight */}
      <section id="research" className="section" style={{ background: '#0f172a', color: 'white' }}>
        <div className="container research-grid">
          <div className="research-content">
            <h4 style={{ color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '2px' }}>Research Domain</h4>
            <h2 style={{ color: 'white', fontSize: '3rem', margin: '1.5rem 0' }}>Anveshan Cardio-Diabetic Research Centre</h2>
            <p style={{ fontSize: '1.1rem', opacity: 0.9, marginBottom: '2rem' }}>
              Directed by Dr. Prof. B. N. Jha, Anveshan is a hub for medical innovation. We integrate the latest clinical trials and international research directly into our patient care strategies.
            </p>
            <ul style={{ marginBottom: '2rem' }}>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ color: 'var(--accent)' }}>✓</span> Clinical Trials Participation
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ color: 'var(--accent)' }}>✓</span> Advanced Metabolic Analysis
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ color: 'var(--accent)' }}>✓</span> Academic Publishing & Training
              </li>
            </ul>
          </div>
          <div className="research-img-container">
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
              <div key={i} style={{ padding: '2rem', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
                <div style={{ color: '#fbbf24', fontSize: '1.2rem', marginBottom: '1rem' }}>★★★★★</div>
                <p style={{ fontStyle: 'italic', marginBottom: '1.5rem' }}>
                  "Dr. Jha is exceptionally knowledgeable and patient. His approach to diabetes management transformed my daily life. Truly the best in Patna."
                </p>
                <h5 style={{ fontWeight: 600 }}>Verified Patient</h5>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Google Review</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container contact-grid">
          <div className="contact-info">
            <h2>Connect with Excellence</h2>
            <p style={{ marginBottom: '2rem' }}>Visit our facility in Khajpura or book a priority consultation below.</p>
            
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Clinic Address</h4>
              <p>Maurya Path, Khajpura, Patna, Bihar 800014</p>
            </div>
            
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Consultation Hours</h4>
              <p>Mon - Sat: 10:00 AM - 08:00 PM</p>
              <p>Sunday: By Appointment Only</p>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="tel:+910000000000" className="btn btn-primary">Call Now</a>
              <a href="https://www.google.com/maps/place/Dr+B+N+Jha+-+Consultant+Physician/@25.6129856,85.0732856,17z" target="_blank" className="btn" style={{ border: '1px solid var(--primary)' }}>Get Directions</a>
            </div>
          </div>
          <form className="contact-form">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <select required>
              <option value="">Select Service</option>
              <option>Cardiology Consultation</option>
              <option>Diabetic Management</option>
              <option>General Checkup</option>
            </select>
            <textarea placeholder="How can we help?" rows={4} required></textarea>
            <button type="submit" className="btn btn-primary" style={{ padding: '1.2rem' }}>Request Appointment</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="section" style={{ padding: '4rem 0', background: 'var(--primary)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <div className="logo" style={{ color: 'white', fontSize: '1.5rem', marginBottom: '2rem' }}>
            DR. PROF. <span>B. N. JHA</span>
          </div>
          <p style={{ opacity: 0.6, maxWidth: '600px', margin: '0 auto 2rem' }}>
            Elevating healthcare standards through clinical precision and academic excellence. 
            © {new Date().getFullYear()} Dr. B. N. Jha. All rights reserved.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', opacity: 0.8 }}>
            <a href="#">Privacy Policy</a>
            <a href="#">Medical Disclaimer</a>
            <a href="#">Professional Bio</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
