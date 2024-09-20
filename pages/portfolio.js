export default function Portfolio() {
    return (
      <div className="min-h-screen bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-purple-800">My Portfolio</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Networking Projects</h2>
              <p className="text-gray-700 mb-4">
                Developed a network-wide ad-blocking server using Raspberry Pi and Pi-hole, significantly improving browsing security across the network.
              </p>
              <a
                href="https://github.com/your-repo"
                className="text-purple-700 hover:underline"
              >
                View on GitHub
              </a>
            </div>
  
            {/* Project 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Web Development</h2>
              <p className="text-gray-700 mb-4">
                Currently building a portfolio website with an AI-powered resume parser using Next.js and integrating external APIs for enhanced functionality.
              </p>
              <a
                href="https://your-deployed-site.com"
                className="text-purple-700 hover:underline"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  