import { useEffect } from 'react';

const ResumePage = () => {
  useEffect(() => {
    //update
    // Inject the ChatBot.com script
    const script = document.createElement('script');
    script.innerHTML = `
      window.__ow = window.__ow || {};
      window.__ow.organizationId = "3bfb754c-b8f1-48e6-adaf-2f5eeea78d79";  // Replace with your Organization ID
      window.__ow.template_id = "f06407a9-6d79-4f53-8163-023a4f372d36";  // Replace with your template ID
      window.__ow.integration_name = "manual_settings";
      window.__ow.product_name = "chatbot";   
      (function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[OpenWidget] You can&apos;t use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.openwidget.com/openwidget.js",t.head.appendChild(n)}};!n.__ow.asyncInit&&e.init(),n.OpenWidget=n.OpenWidget||e}(window,document,[].slice))
    `;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Personal Summary Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">Personal Summary</h2>
          <button
          className="mb-8 px-4 py-2 bg-purple-700 text-white rounded-md hover:bg-purple-800 focus:outline-none"
          onClick={() => window.location.href = '/'}
        >
          Go Back to Homepage
        </button>
          <p className="text-gray-700 text-lg leading-relaxed">
            Passionate and dedicated IT professional with experience in network administration, system troubleshooting, and web development. Skilled at integrating creative problem-solving with technical expertise to develop reliable and efficient systems. Currently focusing on enhancing web development skills with AI and dynamic applications.
          </p>
        </section>

        {/* Work Experience Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">Work Experience</h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-purple-800">Network Administrator</h3>
            <p className="text-gray-600 italic">Kean Information Technology, Kean University | Union, NJ | March 2024 - Present</p>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Troubleshoot Tier III network connectivity issues for computers, printers, and other systems across 34 buildings.</li>
              <li>Collaborate with Network and System Administrators on deploying and maintaining network technology.</li>
              <li>Analyze firewall traffic to identify and investigate potential cyber threats and vulnerabilities.</li>
              <li>Analyze ExtremeCloud IQ Pilot and Extreme Site Engine data to pinpoint and troubleshoot network-related issues.</li>
              <li>Configure and test web policies utilizing WatchGuard Firebox software in test environments.</li>
              <li>Configure Extreme Networks switches utilizing PuTTY and assist in deploying them to the Kean Data Center.</li>
              <li>Create course material, teach networking seminars to technicians, and assess skills through examinations.</li>
              <li>Design custom graphics and user manuals for in-house training and customer use.</li>
            </ul>
            <h4 className="text-lg font-semibold text-purple-800 mt-4">Key Accomplishments:</h4>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Ranked #1 course instructor for the 2024 Kean University IT Student Rotational Learning Program.</li>
              <li>Successfully configured WatchGuard firewall policies to manage user authentication via Windows Server Active Directory, MFA, and DHCP for secure ethernet connections in a test environment.</li>
              <li>Successfully configured a Raspberry Pi 4 to run a network-wide ad-blocking server, NAS, and mobile VPN in a test environment, enhancing privacy and reducing unwanted traffic.</li>
              <li>Conducted the hiring process for the Student Security Operations Analyst position, including resume review, candidate questionnaire analysis, and leading behavioral interviews to assess fit for IT security operations.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-purple-800">IT Technician</h3>
            <p className="text-gray-600 italic">Kean Information Technology, Kean University | Union, NJ | September 2022 - March 2024</p>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Performed Tier II system troubleshooting and repairs on laptops, projectors, desktops, and other peripheral devices.</li>
              <li>Attended staff, faculty, and students with computer-related issues, processing 15 to 35 support tickets weekly.</li>
              <li>Tracked IT equipment, and inventory, using spreadsheets, and ManageEngine Endpoint Central.</li>
              <li>Administered user groups and computer accounts via Active Directory.</li>
              <li>Participated in multistage projects and deployments across multiple offices and computer labs.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-purple-800">Audio Visual Technician</h3>
            <p className="text-gray-600 italic">Kean Information Technology, Kean University | Union, NJ | September 2021 - September 2022</p>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Answered phones, resolved Tier I A/V technical issues, and scheduled event support.</li>
              <li>Operated 4k camera equipment to live stream on-campus events.</li>
              <li>Set up A/V equipment for meetings and various functions around the campus.</li>
              <li>Provided classroom support for faculty who utilize the projector systems.</li>
            </ul>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">Certifications</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>CISCO Threat Management (Expected December 2024)</li>
            <li>CompTIA Network+ (Expected December 2024)</li>
          </ul>
        </section>

        {/* Education Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">Education</h2>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-purple-800">Bachelor of Science in Information Technology/Cybersecurity</h3>
            <p className="text-gray-600 italic">Kean University | Expected Graduation: May 2025</p>
            <p className="text-gray-600">Award: Athletics Director&apos;s Honor Roll</p>
            <p className="text-gray-600">Organizations: Association for Computer Machinery, National Student Cybersecurity Association, Kean Esports</p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">Skills</h2>
          <div className="grid grid-cols-2 gap-6">
            <ul className="list-disc list-inside text-gray-700">
              <li>Networking: Windows Server, PuTTY, VLAN, LAN, DHCP, DNS, Linux, TCP/IP, MFA, Data analysis</li>
              <li>IT: Windows, BeyondTrust remote support, IOS, Office 365, Dell, Mac, Xerox, HP, Google, Freshservice, Help Desk, Customer Service, Adaptability</li>
            </ul>

            <ul className="list-disc list-inside text-gray-700">
              <li>Coding: Java, Javascript, HTML, Python, MySQL, PHP, OpenAI API</li>
              <li>Video Editing: Filmora, Premiere, DaVinci Resolve</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ResumePage;
