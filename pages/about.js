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
      <strong>Network Administration Course Instructor:</strong> Recognized as the #1 instructor for the 2024 Kean University IT Student Rotational Learning Program.
    </li>
    <li>
      <strong>Senior Project: Portable Mobile Network (See website portfolio for more details):</strong>Constructed a mobile network with an AT&T Netgear router, integrating Fortinet FortiGate-90D and pfsense firewalls, GL.inet  router, captive portal, Cisco Catalyst 2960X, ad-blocking DNS, and a NAS interchangeably for scalable enterprise field deployments.
    </li>
    <li>
    Developed a dedicated website showcasing the project, including an AI chatbot for technical assistance and troubleshooting.
    </li>
    <li>
      <strong>Network Configuration and Security:</strong> Configured a WatchGuard firewall to host AD, Group Policy, Linux DNS, MFA, DHCP, and a captive portal for network access.
    </li>
    <li>
    Imaged and configured pfSense and OPNsense firewalls on mini-PCs and integrated them into network security appliances.
    </li>
    <li>
    Constructed an SNMP-based network monitoring solution, incorporating automated Python scripts and alert systems. 
    </li>
    <li>
    Deployed Splunk Enterprise SIEM, improving threat detection and response efficiency.
    </li>
    <li>
    Developed a Firewall Recovery Plan for a WatchGuard Firebox, ensuring rapid restoration, failover, and business continuity.
    </li>
    <li>
      <strong>Data Center Network Operations:</strong> Collaborated on a data center reorganization project, optimizing space and rack positioning. Decommissioned legacy servers and PDUs, installed new ones, and mapped, inventoried, and labeled servers while tracking operational status in Excel.
    </li>
    <li>
    Set up and deploy Extreme Networks switches using PuTTY and assist with data center integration.
    </li>
    <li>
      <strong>Active Directory & Identity Management:</strong> Administered 20,000+ active objects, including user groups and computers, ensuring secure and efficient directory operations.
    </li>
    <li>
    Migrated a standalone Windows Server 2019 AD to Microsoft Entra ID (Azure AD), for user access across hybrid cloud environments.
    </li>
    <li>
      <strong>Talent Development & Hiring:</strong> Led the hiring process for the Student Security Operations Analyst position, refining candidate evaluation methods and leading interviews to recruit top talent for IT security operations.
    </li>
  </ul>
</section>

        {/* Skills Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">Skills</h2>
          <div className="grid grid-cols-2 gap-6">
            <ul className="list-disc list-inside text-gray-700">
              <li>
                <strong>Networking:</strong> PowerShell, Wireshark, PuTTY, VLAN/LAN/WAN, DHCP, ARP, NAT, DNS, 802.11, Nmap, Cisco IOS, TCP/IP, WPA2/3, QoS
              </li>
              <li>
                <strong>Cybersecurity:</strong> IPS/IDS, EDR, Fortinet, Netgate- pfSense, Ubiquiti Cloud Gateway, 802.1x, TLS/SSL,  VPN, ACLs, MFA, ZTNA DLP, RBAC
              </li>
              <li>
                <strong>IT:</strong> Windows, BeyondTrust remote support, IOS, Office 365, Dell, Mac, Sharp, Xerox, HP, Webex, Google, Freshservice
              </li>
            </ul>
            <ul className="list-disc list-inside text-gray-700">
            <li>
                <strong>Cloud:</strong> Azure, WatchGuard Cloud, AWS
              </li>
            <li>
                <strong>Hardware:</strong> Cisco switches, routers, Ap&apos;s, Fiber, Coaxial, patch panels
              </li>
              <li>
                <strong>Coding:</strong> React.js, Node.js, JavaScript, Ruby, HTML, Python, SQL, PHP, OpenAI API 
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
  <li>Resolved Tier III network issues across 34 buildings, minimizing disruptions for seamless connectivity for faculty, staff, and students.</li>
  <li>Collaborate with Network & System Administrators and vendors to deploy, optimize, and maintain enterprise-grade network infrastructure.</li>
  <li>Monitor and analyze firewall traffic (FortiGate & WatchGuard) to detect and mitigate potential cyber threats.</li>
  <li>Leverage ExtremeCloud IQ Pilot and Extreme Site Engine for real-time network diagnostics and performance optimization.</li>
  <li>Conduct system troubleshooting and proactive maintenance on access points, minimizing downtime and connectivity disruptions.</li>
  <li>Configure, test, and refine web policies in WatchGuard Fireware, adapting to dynamic network security requirements.</li>
  <li>Set up and deploy Extreme Networks switches using PuTTY and assist with data center integration.</li>
  <li>Develop training materials and lead networking seminars for IT technicians, providing hands-on skill assessments.</li>
  <li>Design custom graphics and user manuals to enhance in-house training programs and client-facing resources.</li>
</ul>
  </div>
  <div className="mb-6">
    <h3 className="font-semibold text-lg text-gray-800">IT Support Specialist</h3>
    <p className="text-gray-600">September 2022 - March 2024</p>
    <p className="text-gray-600">Kean Information Technology - Kean University | Union, NJ</p>
    <ul className="list-disc list-inside text-gray-700 mt-2">
      <li>Performed Tier II system troubleshooting and repairs on laptops, projectors, desktops, and other peripheral devices.</li>
      <li>Managed 20–35 weekly support tickets, assisting faculty, staff, and students with IT-related concerns to ensure minimal downtime.</li>
      <li>Maintained IT inventory by asset tracking using spreadsheets and ManageEngine Endpoint Central, improving equipment accountability.</li>
      <li>Supported IT projects and large-scale deployments across offices and computer labs, ensuring efficient implementation. </li>
    </ul>
  </div>
  <div className="mb-6">
    <h3 className="font-semibold text-lg text-gray-800">Audio Visual Technician</h3>
    <p className="text-gray-600">September 2021 - September 2022</p>
    <p className="text-gray-600">Kean Information Technology - Kean University | Union, NJ</p>
    <ul className="list-disc list-inside text-gray-700 mt-2">
      <li>Provided classroom A/V support for faculty, ensuring smooth projector and multimedia operation and resolving Tier I technical issues.</li>
      <li>Operated 4K camera equipment to live stream on-campus events, enhancing accessibility for remote participants.</li>
      <li>Answered technical inquiries, offering prompt resolutions for faculty, staff, and students during events and classes.</li>
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
