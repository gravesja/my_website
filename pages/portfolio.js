export default function Portfolio() {
    return (
      <div className="min-h-screen bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-purple-800">My Portfolio</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">AI Voice Cloning Project</h2>
              <p className="text-gray-700 mb-4">
                Learn how to register for classes at Kean Univserity with our nation's great leaders!
              </p>
              <a
                href="https://youtu.be/8B8M89NanDE"
                className="text-purple-700 hover:underline"
              >
                View on YouTube
              </a>
            </div>
  
            {/* Project 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Web Development</h2>
              <p className="text-gray-700 mb-4">
                Developed and publicly deployed a functional comicbook store that incorporates streamline functionality with vibrant and modern designs. 
              </p>
              <a
                href="https://comic-book-store.vercel.app/"
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
  