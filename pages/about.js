import { useEffect } from 'react';

const ResumePage = () => {
  /*
  useEffect(() => {
    // Inject the ChatBot.com script
    const script = document.createElement('script');
    script.innerHTML = `
      window.__ow = window.__ow || {};
      window.__ow.organizationId = "3bfb754c-b8f1-48e6-adaf-2f5eeea78d79";  
      window.__ow.template_id = "f06407a9-6d79-4f53-8163-023a4f372d36";  
      window.__ow.integration_name = "manual_settings";
      window.__ow.product_name = "chatbot";   
      (function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[OpenWidget] You can&apos;t use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.openwidget.com/openwidget.js",t.head.appendChild(n)}};!n.__ow.asyncInit&&e.init(),n.OpenWidget=n.OpenWidget||e}(window,document,[].slice))
    `;
    document.body.appendChild(script);
  }, []);
  */

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Personal Summary Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">Profile</h2>
          <button
            className="mb-8 px-4 py-2 bg-purple-700 text-white rounded-md hover:bg-purple-800 focus:outline-none"
            onClick={() => window.location.href = '/'}
          >
            Go Back to Homepage
          </button>
          <p className="text-gray-700 text-lg leading-relaxed">
            Passionate and dedicated IT professional with experience in network administration, system troubleshooting, and web development. Skilled at integrating creative problem-solving with technical expertise to develop reliable and efficient systems. Currently focusing on enhancing network automation skills with AI and dynamic applications.
          </p>
        </section>

        {/* Career Highlights Section */}
        <section className="mb-10">
  <h2 className="text-2xl font-bold text-purple-700 mb-4">Career Highlights</h2>
  <ul className="list-disc list-inside text-gray-700">
    <li>
      <strong>Network Administration Course Instructor:</strong> Recognized as the #1 course instructor for the 2024 Kean University IT Student Rotational Learning Program.
    </li>
    <li>
      <strong>Network Configuration and Security:</strong> Developed a mobile network with an AT&T Netgear router, integrating a Fortinet FortiGate-90D Firewall, and a GL-SFT1200 travel router. This project will be presented at the Senior Project Fair, showcasing networking security solutions for enterprise environments.
    </li>
    <li>
    Configured WatchGuard firewall policies, integrating Windows Server Active Directory, MFA, and DHCP to ensure secure Ethernet connectivity.
    </li>
    <li>
      Set up a Raspberry Pi 4 to operate as a network-wide ad-blocking server, NAS, and mobile VPN, reducing unwanted traffic.
    </li>
    <li>
      Designed and implemented a quarantine server to isolate and analyze potentially compromised devices in a controlled environment.
    </li>
    <li>
    Configured an SNMP-based network monitoring solution, integrating automated Python scripts and alert systems. 
    </li>
    <li>
    Implemented Splunk Enterprise SIEM to monitor real-time network security and automate threat detection in a simulated network.
    </li>
    <li>
    Designed a Disaster Recovery Plan for a WatchGuard Firebox network to ensure rapid firewall restoration and seamless failover.
    </li>
    <li>
      <strong>Hiring and Talent Development:</strong> Led the hiring process for the Student Security Operations Analyst position, streamlining resume reviews, questionnaire analysis, and leading interviews to assess fit for IT security operations.
    </li>
    <li>
      <strong>Active Directory Operations:</strong> Managed user groups and computer accounts within Active Directory, ensuring system integrity with 20,000+ active objects.
    </li>
  </ul>
</section>

        {/* Skills Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">Skills</h2>
          <div className="grid grid-cols-2 gap-6">
            <ul className="list-disc list-inside text-gray-700">
              <li>
                <strong>Networking:</strong> Windows Server, Powershell, Linux, Cisco, Wireshark, PuTTY, CISCO, VLAN, LAN, WAN, DHCP, DNS, 802.ax/ac, TCP/IP
              </li>
              <li>
                <strong>Cybersecurity:</strong> IPS/IDS, EDR, Fortinet firewalls, 802.1x, TLS/SSL, Splunk, VPN, ACLs, MFA, ZTNA, DRP, DLP-HIPAA, RBAC
              </li>
              <li>
                <strong>IT:</strong> Windows, BeyondTrust remote support, IOS, Office 365, Dell, Mac, Xerox, HP, Google, Freshservice, Help Desk
              </li>
            </ul>
            <ul className="list-disc list-inside text-gray-700">
            <li>
                <strong>Hardware:</strong> Cisco switches/ AP&apos;s,  Fiber, Coaxial, routers, patch panels
              </li>
              <li>
                <strong>Coding:</strong> React.js, Node.js, JavaScript, HTML, Python, SQL, PHP, OpenAI API
              </li>
              <li>
                <strong>Video Editing:</strong> Filmora, Premiere, DaVinci Resolve
              </li>
            </ul>
          </div>
        </section>

        {/* Work Experience Section */}
<section className="mb-10">
  <h2 className="text-2xl font-bold text-purple-700 mb-4">Work Experience</h2>
  <div className="mb-6">
    <h3 className="font-semibold text-lg text-gray-800">Network Administrator</h3>
    <p className="text-gray-600">March 2024 - Present</p>
    <p className="text-gray-600">Kean Information Technology - Kean University | Union, NJ</p>
    <ul className="list-disc list-inside text-gray-700 mt-2">
  <li>Troubleshoot Tier III network connectivity issues for computers, printers, and other end systems across 34 buildings.</li>
  <li>Collaborate with Network and System Administrators and vendors to deploy and maintain advanced network technologies.</li>
  <li>Analyze FortiGate and WatchGuard firewall traffic to identify and mitigate potential cyber threats and vulnerabilities.</li>
  <li>Utilize ExtremeCloud IQ Pilot and Extreme Site Engine to diagnose and resolve network-related issues.</li>
  <li>Conduct system troubleshooting and maintenance on access points to ensure uninterrupted connectivity.</li>
  <li>Configure and test web policies using WatchGuard Fireware software in dynamic network environments.</li>
  <li>Set up and configure Extreme Networks switches via PuTTY and assist with deployment in the Kean Data Center.</li>
  <li>Develop course materials, lead networking seminars for technicians, and evaluate skills through hands-on examinations.</li>
  <li>Design custom graphics and user manuals for in-house training programs and client resources.</li>
</ul>
  </div>
  <div className="mb-6">
    <h3 className="font-semibold text-lg text-gray-800">IT Support Specialist</h3>
    <p className="text-gray-600">September 2022 - March 2024</p>
    <p className="text-gray-600">Kean Information Technology - Kean University | Union, NJ</p>
    <ul className="list-disc list-inside text-gray-700 mt-2">
      <li>Performed Tier II system troubleshooting and repairs on laptops, projectors, desktops, and other peripheral devices.</li>
      <li>Assisted staff, faculty, and students with computer-related issues, managing 15–35 support tickets weekly.</li>
      <li>Tracked IT equipment and inventory using spreadsheets and ManageEngine Endpoint Central.</li>
      <li>Contributed to multistage IT projects and deployments across offices and computer labs, ensuring seamless operations.</li>
    </ul>
  </div>
  <div className="mb-6">
    <h3 className="font-semibold text-lg text-gray-800">Audio Visual Technician</h3>
    <p className="text-gray-600">September 2021 - September 2022</p>
    <p className="text-gray-600">Kean Information Technology - Kean University | Union, NJ</p>
    <ul className="list-disc list-inside text-gray-700 mt-2">
      <li>Provided classroom support for faculty using projector systems and resolved Tier I A/V technical issues.</li>
      <li>Operated 4K camera equipment to live stream on-campus events, enhancing accessibility for remote participants.</li>
      <li>Answered phones, coordinated event support scheduling, and set up A/V equipment for meetings and functions across campus.</li>
    </ul>
  </div>
</section>
        {/* Certifications Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">Certifications</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>CISCO Threat Management - December 2024</li>
            <li>CompTIA Network+ Expected April 2025</li>
          </ul>
        </section>
{/* Education Section */}
<section className="mb-10">
  <h2 className="text-2xl font-bold text-purple-700 mb-4">Education</h2>
  <div>
    <h3 className="font-semibold text-lg text-gray-800">Kean University</h3>
    <p className="text-gray-600">Bachelor of Science in Information Technology/Cybersecurity</p>
    <p className="text-gray-600">Expected Graduation: May 2025</p>
    <ul className="list-disc list-inside text-gray-700 mt-2">
      <li><strong>Awards:</strong> Dean&apos;s List, Athletics Director&apos;s Honor Roll</li>
      <li><strong>Organizations:</strong> Association for Computer Machinery, National Student Cybersecurity Association, Kean Esports</li>
    </ul>
  </div>
</section>

      </div>
    </div>
  );
};

export default ResumePage;
