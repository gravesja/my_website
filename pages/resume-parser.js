export default function Resume() {
    return (
      <div className="min-h-screen bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-purple-800">My Resume</h1>
  
          {/* Personal Summary Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Personal Summary</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Passionate and dedicated IT professional with experience in network administration, system troubleshooting, and web development. Skilled at integrating creative problem-solving with technical expertise to develop reliable and efficient systems. Currently focusing on enhancing web development skills with AI and dynamic applications.
            </p>
          </section>
  
          {/* Work Experience Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Work Experience</h2>
  
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-purple-800">Junior Network Administrator</h3>
              <p className="text-gray-600 italic">Kean University, March 2024 - Present</p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>Troubleshoot network connectivity issues and maintain system stability for over 500+ users.</li>
                <li>Manage and configure network switches using PuTTY and ExtremeCloud IQ Pilot.</li>
                <li>Develop and teach networking seminars for university staff and students.</li>
                <li>Collaborate with network and system administrators to optimize network performance.</li>
              </ul>
            </div>
  
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-purple-800">Course Instructor</h3>
              <p className="text-gray-600 italic">Kean University, 2024</p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>Top course instructor of the year, providing in-depth networking tutorials and hands-on labs.</li>
                <li>Designed custom graphics and manuals for course materials.</li>
              </ul>
            </div>
          </section>
  
          {/* Education Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Education</h2>
  
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-purple-800">BSc Information Technology</h3>
              <p className="text-gray-600 italic">Kean University, Expected Graduation: 2025</p>
            </div>
          </section>
  
          {/* Skills Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Skills</h2>
  
            <div className="grid grid-cols-2 gap-6">
              <ul className="list-disc list-inside text-gray-700">
                <li>Network Troubleshooting</li>
                <li>Firewall Configuration (WatchGuard)</li>
                <li>PuTTY & Switch Configuration</li>
                <li>ExtremeCloud IQ Pilot</li>
              </ul>
  
              <ul className="list-disc list-inside text-gray-700">
                <li>Web Development (Next.js, Flask)</li>
                <li>AI Integration</li>
                <li>HTML, CSS, JavaScript</li>
                <li>Python & Django</li>
              </ul>
            </div>
          </section>
  
          {/* Certifications Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Certifications</h2>
  
            <ul className="list-disc list-inside text-gray-700">
              <li>CompTIA Network+ (Expected Dec 2024)</li>
              <li>Cisco Threat Management (Expected Dec 2024)</li>
            </ul>
          </section>
  
          {/* AI-powered Resume Parser */}
          <section>
            <h2 className="text-2xl font-bold text-purple-700 mb-4">AI-powered Resume Parser</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Upload your resume to see an AI-powered summary of your key skills and experience. This feature uses advanced NLP techniques to parse your resume and give you instant feedback.
            </p>
  
            {/* Placeholder for Upload Button */}
            <button className="px-4 py-2 bg-purple-700 text-white font-semibold rounded-lg shadow-md hover:bg-purple-800">
              Upload Resume
            </button>
          </section>
        </div>
      </div>
    );
  }
  