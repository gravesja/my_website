import { useState, useEffect } from 'react';

const ResumePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true); 
      } else {
        setIsVisible(false); 
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      {/* Navbar */}
      <nav className="bg-purple-700 p-4">
        <div className="flex justify-center">
          <ul className="flex space-x-8 text-white font-semibold">
            <li>
              <a
                href="#work-experience"
                className="bg-white text-purple-700 py-2 px-4 rounded-full hover:bg-purple-100 transition duration-300"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#certifications"
                className="bg-white text-purple-700 py-2 px-4 rounded-full hover:bg-purple-100 transition duration-300"
              >
                Certifications
              </a>
            </li>
            <li>
              <a
                href="#education"
                className="bg-white text-purple-700 py-2 px-4 rounded-full hover:bg-purple-100 transition duration-300"
              >
                Education
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6">
        {/* Personal Summary Section */}
        <section className="mb-10">
          <button
            className="mb-8 px-4 py-2 bg-purple-700 text-white rounded-md hover:bg-purple-800 focus:outline-none"
            onClick={() => window.location.href = '/'} // Redirect to homepage
          >
            Go Back to Homepage
          </button>
          <h2 className="text-2xl font-bold text-purple-700 mb-4">Profile</h2>
          <p className="text-black text-lg leading-relaxed">
            Passionate and dedicated IT professional with experience in network administration, system troubleshooting, and web development. Skilled at integrating creative problem-solving with technical expertise to develop reliable and efficient systems. Currently focusing on enhancing network automation skills with AI and dynamic applications.
          </p>
        </section>

        {/* Career Highlights Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">Career Highlights</h2>
          <ul className="list-disc list-inside text-black">
            <li><strong>Network Administration Course Instructor:</strong> Recognized as the #1 instructor for the 2024 Kean University IT Student Rotational Learning Program.</li>
            <li><strong>Senior Project: Portable Mobile Network:</strong> Constructed a mobile network with an AT&T Netgear router, integrating Fortinet FortiGate-90D and pfsense firewalls, GL.inet  router, captive portal, Cisco Catalyst 2960X, ad-blocking DNS, and a NAS interchangeably for scalable enterprise field deployments.</li>
            <li>Developed a dedicated website showcasing the project, including an AI chatbot for technical assistance and troubleshooting.</li>
            <li><strong>Network Security:</strong> Configured a WatchGuard firewall to host AD, Group Policy, Linux DNS, MFA, DHCP, and a captive portal for network access.</li>
            <li>Imaged and configured pfSense and OPNsense firewalls on mini-PCs and integrated them into network security appliances.</li>
            <li>Designed an SNMP-based monitoring system with automated Python scripts for real-time alerts and performance tracking.</li>
            <li>Deployed Splunk Enterprise SIEM, improving threat detection and response efficiency.</li>
            <li>Developed a Firewall Recovery Plan for a WatchGuard Firebox, ensuring rapid restoration, failover, and business continuity.</li>
            <li><strong>Data Center Network Operations:</strong> Collaborated on a data center reorganization project, optimizing space and rack positioning. Decommissioned legacy servers and PDUs, installed new ones, and mapped, inventoried, and labeled servers while tracking operational status in Excel.</li>
            <li>Set up and deploy Extreme Networks switches using PuTTY and assist with data center integration.</li>
            <li><strong>Active Directory & Identity Management:</strong> Managed 20,000+ AD objects (users, groups, devices), enforcing security policies for authentication and compliance.</li>
            <li>Migrated a Windows Server 2019 AD to Microsoft Entra ID (Azure AD) for user access across hybrid cloud environments.</li>
            <li><strong>Talent Development & Hiring:</strong> Led the hiring process for the Student Security Operations Analyst position, refining candidate evaluation methods and leading interviews to recruit top talent for IT security operations.</li>
          </ul>
        </section>

        <section className="mb-10">
  <h2 className="text-xl font-bold text-purple-700 mb-4 text-center">Technical Skills</h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
    {[ 
      {
        title: "Networking",
        image: "/network.png",
        skills: ["PowerShell", "Wireshark", "PuTTY", "VLAN/LAN/WAN", "DHCP", "ARP", "NAT", "DNS/DDNS", "802.11", "Nmap", "Cisco IOS", "TCP/IP", "WPA2/3", "QoS"]
      },
      {
        title: "Cybersecurity",
        image: "/cyber.png",
        skills: ["IPS/IDS", "EDR", "Fortinet", "Netgate - pfSense", "Ubiquiti Cloud Gateway", "802.1x", "TLS/SSL", "VPN", "ACLs", "MFA", "ZTNA", "DLP", "RBAC"]
      },
      {
        title: "Cloud",
        image: "/cloud.jpg",
        skills: ["Azure", "WatchGuard Cloud", "AWS"]
      },
      {
        title: "Hardware",
        image: "/hardware.jpg",
        skills: ["Routers", "APs", "Fiber", "Coaxial"]
      },
      {
        title: "IT",
        image: "/it.jpg",
        skills: ["Windows", "Mac", "iOS", "Office 365", "Dell", "Xerox", "Sharp", "Webex"]
      },
      {
        title: "Coding",
        image: "/coding.png",
        skills: ["React.js", "Node.js", "JavaScript", "Ruby", "HTML", "Python", "SQL", "PHP", "REST API", "OpenAI API"]
      },
      {
        title: "Editing",
        image: "/edit.jpg",
        skills: ["Premiere", "DaVinci Resolve", "Filmora"]
      }
    ].map((category, index) => (
      <div key={index} className="bg-white p-3 rounded-lg shadow-md w-full sm:w-1/4 md:w-1/5 flex-grow transition-transform transform hover:shadow-lg duration-300">
        <div className="flex flex-col items-center">
          <img src={category.image} alt={category.title} className="w-12 h-12 mb-2 object-contain" />
          <h3 className="text-sm font-semibold text-gray-800 text-center">{category.title}</h3>
        </div>
        <div className="flex flex-wrap justify-center">
          {category.skills.map(skill => (
            <span key={skill} className="m-1 px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded-md transition-colors duration-300 hover:bg-purple-700 hover:text-white">
              {skill}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>

        {/* Work Experience Section */}
        <section id="work-experience" className="mb-10">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">Work Experience</h2>
          <div className="mb-6">
            <h3 className="font-semibold text-lg text-black">Network Administrator</h3>
            <p className="text-black">March 2024 - Present | Kean University, Union, NJ</p>
            <ul className="list-disc list-inside text-black mt-2">
              <li>Resolve Tier III network issues across 34 buildings and collaborate with Network & System Administrators and vendors to optimize and maintain an enterprise-grade network.</li>
              <li>Implemented and managed a quarantine server to isolate and analyze potentially compromised devices while testing security policies.</li>
              <li>Optimized firewall security (FortiGate & WatchGuard) by analyzing traffic and mitigating threats.</li>
              <li>Leverage ExtremeCloud IQ Pilot and Extreme Site Engine for real-time network diagnostics and performance optimization.</li>
              <li>Develop training materials and lead networking seminars for technicians, providing hands-on skill assessments.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-lg text-black">IT Support Specialist</h3>
            <p className="text-black">September 2022 - March 2024 | Kean University, Union, NJ</p>
            <ul className="list-disc list-inside text-black mt-2">
              <li>Performed Tier II system troubleshooting and repairs on laptops, projectors, desktops, and peripheral devices.</li>
              <li>Managed 20–35 weekly support tickets, assisting faculty, staff, and students with IT-related concerns to minimize downtime.</li>
              <li>Tracked IT assets using spreadsheets and ManageEngine Endpoint Central, improving accountability.</li>
              <li>Supported IT projects and office networking for improved efficiency.</li>
            </ul>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="mb-10">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">Certifications</h2>
          <ul className="list-disc list-inside text-black">
            <li>CompTIA Security+</li>
            <li>CCNA Routing & Switching</li>
            <li>Fortinet NSE4</li>
            <li>Certified Ethical Hacker (CEH)</li>
          </ul>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-10">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">Education</h2>
          <p className="text-black">
            <strong>Bachelor of Science in Information Technology</strong> - Kean University, Union, NJ
            <br />
            <strong>Graduation:</strong> May 2025
          </p>
        </section>
      </div>

      {/* Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-purple-700 text-white rounded-full p-3 shadow-lg hover:bg-purple-800 transition duration-300"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default ResumePage;
