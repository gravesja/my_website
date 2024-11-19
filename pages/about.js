export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4 text-purple-800">About Me</h1>
        <button
          className="mb-8 px-4 py-2 bg-purple-700 text-white rounded-md hover:bg-purple-800 focus:outline-none"
          onClick={() => window.location.href = '/'}
        >
          Go Back to Homepage
        </button>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Hello! My name is Jayden Graves, a passionate IT professional currently working as a Network Administrator at Kean University. With a background in desktop support and audio/visual, I aim to combine technology with creative problem-solving. I’ve been responsible for managing network-wide infrastructure, testing firewall policies, and leading networking seminars. 
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          I’m also developing my skills in full-stack web development and networking, with a focus on building dynamic applications using Linux software like Raspberry Pi, and Windows Server. My current project is a portfolio site showcasing my expertise in both networking and development.
        </p>
      </div>
    </div>
  );
}
