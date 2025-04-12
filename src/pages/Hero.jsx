const Hero = () => {
    return (
      <section id="hero" className="h-screen bg-gradient-to-br from-blue-100 to-white flex items-center justify-center text-center px-4">
        <div>
          <h1 className="text-5xl font-bold mb-4">Hi, I'm Your Name</h1>
          <p className="text-xl max-w-xl mx-auto mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">View Projects</button>
        </div>
      </section>
    );
  };
  
  export default Hero;
  