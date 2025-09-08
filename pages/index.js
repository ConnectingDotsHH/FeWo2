export default function Home() {
  const heroStyle = {
    backgroundImage: 'url("/images/wohnung1.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '120px 20px',
    textAlign: 'center',
    color: 'white',
    borderRadius: '0 0 40px 40px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
  };
  const buttonStyle = {
    backgroundColor: '#0077b6',
    color: 'white',
    padding: '15px 30px',
    borderRadius: '25px',
    fontSize: '18px',
    border: 'none',
    cursor: 'pointer',
    marginTop: '20px'
  };
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#e0f7fa', color: '#023e8a' }}>
      <header style={heroStyle}>
        <h1 style={{ fontSize: '48px', fontWeight: 'bold' }}>Ferienwohnung im Ostseeresort Olpenitz</h1>
        <p style={{ fontSize: '20px', marginTop: '10px' }}>Erleben Sie erholsame Tage nur 300m vom Wasser entfernt.</p>
        <button style={buttonStyle} onClick={() => alert('Hier kommt später der Agentur-Link hin')}>Jetzt buchen</button>
      </header>

      <main style={{ maxWidth: '1000px', margin: '40px auto', padding: '0 20px' }}>
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '32px', borderBottom: '2px solid #0077b6', display: 'inline-block', paddingBottom: '5px' }}>Ausstattung & Highlights</h2>
          <ul style={{ columns: 2, listStyle: 'disc', paddingLeft: '20px', marginTop: '20px', fontSize: '18px' }}>
            <li>Wohnfläche: 81m²</li>
            <li>2 Schlafzimmer</li>
            <li>1 Wohn- und Essbereich mit offener Küche</li>
            <li>Sauna</li>
            <li>Kaminofen</li>
            <li>WLAN</li>
            <li>300m zum Wasser gelegen</li>
            <li>Grill & Terrasse</li>
            <li>Voll ausgestattete Küche</li>
          </ul>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '32px', borderBottom: '2px solid #0077b6', display: 'inline-block', paddingBottom: '5px' }}>Galerie</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', marginTop: '20px' }}>
            {Array.from({length:6}, (_,i)=>(
              <img key={i} src={`/images/wohnung${i+1}.jpg`} alt={`Bild ${i+1}`} style={{ width: '100%', borderRadius: '15px', transition: 'transform 0.3s', cursor: 'pointer' }} onMouseOver={e=>e.currentTarget.style.transform='scale(1.05)'} onMouseOut={e=>e.currentTarget.style.transform='scale(1)'} />
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '32px', borderBottom: '2px solid #0077b6', display: 'inline-block', paddingBottom: '5px' }}>Lage</h2>
          <div style={{ marginTop: '20px', borderRadius: '15px', overflow: 'hidden' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2296.535048808093!2d10.0486!3d54.6638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b23f0d9c4f9a4b%3A0x3b0b5c49a7b3a!2sMatrosenring%2095a%2C%2024376%20Kappeln!5e0!3m2!1sde!2sde!4v1630000000000!5m2!1sde!2sde"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </section>
      </main>

      <footer style={{ textAlign: 'center', padding: '30px 20px', backgroundColor: '#0077b6', color: 'white' }}>
        © {new Date().getFullYear()} Ferienwohnung Olpenitz – Matrosenring 95a, 24376 Kappeln
      </footer>
    </div>
  );
}