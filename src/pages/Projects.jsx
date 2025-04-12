const Projects = () => {
    return (
      <section id="projects" className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((proj) => (
              <article key={proj} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2">Project {proj}</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;
  