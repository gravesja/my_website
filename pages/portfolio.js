export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4 text-purple-800">My Portfolio</h1>
        <button
          className="mb-8 px-4 py-2 bg-purple-700 text-white rounded-md hover:bg-purple-800 focus:outline-none"
          onClick={() => window.location.href = '/'}
        >
          Go Back to Homepage
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
          {/* Project 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">AI Voice Cloning Project</h2>
            <p className="text-gray-700 mb-4">
              Learn how to register for classes at Kean University with our nation&apos;s great leaders!
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
            <h2 className="text-2xl font-bold mb-4">Moblie Network Solution- Senior Project</h2>
            <p className="text-gray-700 mb-4">
            Developed a portable, scalable mobile network with a focus on security and performance optimization.
            </p>
            <a
              href="https://wiflightauth.vercel.app/index.html"
              className="text-purple-700 hover:underline"
            >
              Visit Website
            </a>
          </div>

          {/* Project 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Open AI API- Homework Helper Bot</h2>
            <p className="text-gray-700 mb-4">
            A bot designed to assist grade school students with thier homework and provide supplemental instruction. 
            </p>
            <a
              href="https://homeworkhelper-gravesja.vercel.app/"
              className="text-purple-700 hover:underline"
            >
              Visit Website
            </a>
          </div>

          {/* Project 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">OpenAI API- SESmag chatbot</h2>
            <p className="text-gray-700 mb-4">
            Engage with a personalized AI chatbot modeled after Fee&apos;s SESmag personality. Upload a PDF to the chat and have dynamic discussions about its content.
            </p>
            <a
              href="https://sesmagbot-fee.vercel.app/index.html"
              className="text-purple-700 hover:underline"
            >
              Visit Website
            </a>
          </div>

          {/* Project 5 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Web Development- Comic Book Website</h2>
            <p className="text-gray-700 mb-4">
              Developed and publicly deployed a functional comicbook store that incorporates streamlined functionality with vibrant and modern designs. 
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
