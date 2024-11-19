import { useEffect } from 'react';

const ResumePage = () => {
  useEffect(() => {
    // Inject the ChatBot.com script
    const script = document.createElement('script');
    script.innerHTML = `
      window.__ow = window.__ow || {};
      window.__ow.organizationId = "3bfb754c-b8f1-48e6-adaf-2f5eeea78d79";  // Replace with your Organization ID
      window.__ow.template_id = "f06407a9-6d79-4f53-8163-023a4f372d36";  // Replace with your template ID
      window.__ow.integration_name = "manual_settings";
      window.__ow.product_name = "chatbot";   
      (function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[OpenWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.openwidget.com/openwidget.js",t.head.appendChild(n)}};!n.__ow.asyncInit&&e.init(),n.OpenWidget=n.OpenWidget||e}(window,document,[].slice))
    `;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4 text-purple-800">My Resume</h1>
        
        {/* Go Back to Homepage Button */}
        <button
          className="mb-8 px-4 py-2 bg-purple-700 text-white rounded-md hover:bg-purple-800 focus:outline-none"
          onClick={() => window.location.href = '/'}
        >
          Go Back to Homepage
        </button>

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
  <h3 className="text-xl font-semibold text-purple-800">Network Administrator</h3>
  <p className="text-gray-600 italic">Kean University | Union, NJ | March 2024 - Present</p>
  <ul className="list-disc list-inside text-gray-700 mt-2">
    <li>Troubleshoot network connectivity issues and maintain system stability for over 500 users across campus.</li>
    <li>Manage and configure network switches using PuTTY and ExtremeCloud IQ Pilot to ensure optimal performance.</li>
    <li>Develop and teach networking seminars to university staff and students, focusing on enhancing technical skills.</li>
    <li>Collaborate with network and system administrators to optimize and maintain the university's network infrastructure.</li>
    <li>Ranked #1 course instructor for the 2024 Kean University IT Student Rotational Learning Program, excelling in student engagement and knowledge transfer.</li>
    <li>Design and create custom graphics, training manuals, and documentation for course materials and technical guides.</li>
  </ul>
  <h4 className="text-lg font-semibold text-purple-800 mt-4">Key Accomplishments:</h4>
  <ul className="list-disc list-inside text-gray-700 mt-2">
    <li>Successfully configured WatchGuard firewall policies for secure ethernet connections in a test environment, integrating MFA, DHCP, and Windows Server Active Directory for enhanced security.</li>
    <li>Configured a Raspberry Pi 4 to run a network-wide ad-blocking server, NAS, and mobile VPN, improving network privacy and reducing unwanted traffic.</li>
    <li>Led the hiring process for the Student Security Operations Analyst role, managing resume reviews, candidate questionnaire evaluations, and behavioral interviews.</li>
  </ul>
</div>


          <div className="mb-6">
            <h3 className="text-xl font-semibold text-purple-800">IT Technician</h3>
            <p className="text-gray-600 italic">September 2022 - March 2024</p>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Performed Tier II system troubleshooting and repairs on laptops, projectors, desktops, and other peripheral devices.</li>
              <li>Participated in multistage projects and deployments across multiple offices and computer labs.</li>
              <li>Track IT equipment, and inventory, using spreadsheets, and ManageEngine Endpoint Central.</li>
              <li>Administered user groups and computer accounts via Active Directory.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-purple-800">Audio Visual Technician</h3>
            <p className="text-gray-600 italic">September 2021 - September 2022</p>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Answer phones, resolve Tier I A/V technical issues, and schedule event support.</li>
              <li>Operate 4k camera equipment to live stream on-campus events.</li>
              <li>Set up A/V equipment for meetings and various functions around the campus.</li>
              <li>Provide classroom support for faculty who utilize the projector systems.</li>
            </ul>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">Education</h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-purple-800">Bachelor of Science in Information Technology/Cybersecurity</h3>
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
              <li>Windows server</li>
              <li>PuTTY & Switch Configuration</li>
              <li>ExtremeCloud IQ Pilot</li>
            </ul>

            <ul className="list-disc list-inside text-gray-700">
              <li>Web Development (Next.js, Flask, React)</li>
              <li>MySQL</li>
              <li>AI Integration</li>
              <li>HTML, CSS, JavaScript, PHP</li>
              <li>Python & Django</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ResumePage;
