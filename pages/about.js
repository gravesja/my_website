const ResumePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-6"> {/*width */}
        {/* Personal Summary Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">Profile</h2>
          <button
            className="mb-8 px-4 py-2 bg-purple-700 text-white rounded-md hover:bg-purple-800 focus:outline-none"
            onClick={() => window.location.href = '/'}
          >
            Go Back to Homepage
          </button>
          <p className="text-black text-lg leading-relaxed">
            Passionate and dedicated IT professional with experience in network administration, system troubleshooting, and web development. Skilled at integrating creative problem-solving with technical expertise to develop reliable and efficient systems. Currently focusing on enhancing network automation skills with AI and dynamic applications.
          </p>
        </section>

        {/* Career Highlights Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">Career Highlights</h2>
          <ul className="list-disc list-inside text-black">
            <li><strong>Network Administration Course Instructor:</strong> Recognized as the #1 instructor for the 2024 Kean University IT Student Rotational Learning Program.</li>
            <li><strong>Senior Project: Portable Mobile Network:</strong> Built a scalable mobile network with an AT&T Netgear router, Fortinet FortiGate-90D, pfSense firewalls, GL.iNet router, captive portal, Cisco Catalyst 2960X, ad-blocking DNS, and a NAS.</li>
            <li>Developed a dedicated website showcasing the project, including an AI chatbot for technical assistance.</li>
            <li><strong>Network Security:</strong> Configured WatchGuard firewall for AD, Group Policy, Linux DNS, MFA, DHCP, and a captive portal.</li>
            <li>Integrated pfSense and OPNsense firewalls into security appliances.</li>
            <li>Implemented SNMP-based monitoring with Python automation and alerts.</li>
            <li>Deployed Splunk Enterprise SIEM for advanced threat detection.</li>
            <li>Developed a Firewall Recovery Plan for a WatchGuard Firebox to ensure failover and business continuity.</li>
          </ul>
        </section>

        {/* Skills Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">Skills</h2>
          <div className="grid grid-cols-2 gap-6">
            <ul className="list-disc list-inside text-black">
              <li><strong>Networking:</strong> PowerShell, Wireshark, PuTTY, VLAN/LAN/WAN, DHCP, ARP, NAT, DNS, 802.11, Nmap, Cisco IOS, TCP/IP, WPA2/3, QoS</li>
              <li><strong>Cybersecurity:</strong> IPS/IDS, EDR, Fortinet, Netgate- pfSense, Ubiquiti Cloud Gateway, 802.1x, TLS/SSL,  VPN, ACLs, MFA, ZTNA DLP, RBAC</li>
              <li><strong>IT:</strong> Windows, Mac, IOS, Office 365, Dell, Google Suite, Xerox, Sharp, Webex  Freshservice</li>
            </ul>
            <ul className="list-disc list-inside text-black">
              <li><strong>Cloud:</strong> Azure, WatchGuard Cloud, AWS</li>
              <li><strong>Hardware:</strong> Cisco switches, routers, APs, patch panels</li>
              <li><strong>Coding:</strong> React.js, Node.js, JavaScript, Python, SQL, PHP, Rest API, OpenAI API</li>
              <li><strong>Video Editing:</strong> Premiere, DaVinci Resolve</li>
            </ul>
          </div>
        </section>
        {/* Work Experience Section */}
        <section class="mb-10">
  <h2 class="text-2xl font-bold text-purple-700 mb-4">Work Experience</h2>
  <div class="mb-6">
    <h3 class="font-semibold text-lg text-black">Network Administrator</h3>
    <p class="text-black">March 2024 - Present | Kean University, Union, NJ</p>
    <ul class="list-disc list-inside text-black mt-2">
      <li>Resolve Tier III network issues across 34 buildings and collaborate with Network & System Administrators and vendors to optimize and maintain an enterprise-grade network.</li>
      <li>Implemented and managed a quarantine server to isolate and analyze potentially compromised devices while testing security policies.</li>
      <li>Optimized firewall security (FortiGate & WatchGuard) by analyzing traffic and mitigating threats.</li>
      <li>Leverage ExtremeCloud IQ Pilot and Extreme Site Engine for real-time network diagnostics and performance optimization.</li>
      <li>Develop training materials and lead networking seminars for technicians, providing hands-on skill assessments.</li>
    </ul>
  </div>

  <div class="mb-6">
    <h3 class="font-semibold text-lg text-black">IT Support Specialist</h3>
    <p class="text-black">September 2022 - March 2024 | Kean University, Union, NJ</p>
    <ul class="list-disc list-inside text-black mt-2">
      <li>Performed Tier II system troubleshooting and repairs on laptops, projectors, desktops, and peripheral devices.</li>
      <li>Managed 20–35 weekly support tickets, assisting faculty, staff, and students with IT-related concerns to minimize downtime.</li>
      <li>Tracked IT assets using spreadsheets and ManageEngine Endpoint Central, improving accountability.</li>
      <li>Supported IT projects and large-scale deployments across offices and computer labs, ensuring efficient implementation.</li>
    </ul>
  </div>

  <div class="mb-6">
    <h3 class="font-semibold text-lg text-black">Audio Visual Technician</h3>
    <p class="text-black">September 2021 - September 2022 | Kean University, Union, NJ</p>
    <ul class="list-disc list-inside text-black mt-2">
      <li>Provided Tier I A/V support for faculty in classrooms, ensuring smooth operation of projectors and multimedia equipment.</li>
      <li>Operated 4K camera equipment to live stream on-campus events, enhancing accessibility for remote participants.</li>
      <li>Answered technical inquiries and offered prompt resolutions for faculty, staff, and students during events and classes.</li>
    </ul>
  </div>

</section>


        {/* Certifications Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">Certifications</h2>
          <ul className="list-disc list-inside text-black">
            <li>CISCO Threat Management - December 2024</li>
            <li>Cisco Certified Network Associate (CCNA) – In Progress</li>
          </ul>
        </section>

        {/* Education Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">Education</h2>
          <div>
            <h3 className="font-semibold text-lg text-black">Kean University</h3>
            <p className="text-black">Bachelor of Science in Information Technology/Cybersecurity</p>
            <p className="text-black">Expected Graduation: May 2025</p>
            <ul className="list-disc list-inside text-black mt-2">
              <li><strong>Awards:</strong> Dean’s List, Athletics Director’s Honor Roll</li>
              <li><strong>Organizations:</strong> ACM, National Student Cybersecurity Association, Kean Esports</li>
            </ul>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ResumePage;
