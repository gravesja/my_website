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
            Passionate and dedicated IT professional with hands-on experience in network administration, cybersecurity, 
            system administration, and web development. Skilled at integrating creative problem-solving with technical expertise to develop reliable and efficient systems. 
            Currently focusing on enhancing network automation skills with AI and dynamic applications.
          </p>
        </section>

 {/* Skills section */}
        <section className="mb-10">
  <h2 className="text-xl font-bold text-purple-700 mb-4 text-center">Technical Skills</h2>
  <div className="flex justify-between flex-wrap gap-3">
    {[ 
      {
        title: "Networking",
        image: "/network.png",
        skills: ["PowerShell", "Wireshark", "PuTTY", "VLAN/LAN/WAN/SAN", "DHCP", "ARP", "NAT", "DNS/DDNS", "802.11", "Nmap", "Cisco IOS", "TCP/IP", "WPA2/3", "QoS"]
      },
      {
        title: "Cybersecurity",
        image: "/cyber.png",
        skills: ["IPS/IDS", "EDR", "Netgate - pfSense", "SIEM-Wazuh", "802.1x","Tailscale", "TLS/SSL", "VPN", "ACLs", "MFA", "ZTNA", "DLP", "RBAC"]
      },
      {
        title: "Firewalls",
        image: "/firewall.png",
        skills: ["Fortinet Fortigate 90D", "Cisco ASA 5515-X", "WatchGuard M370", "Palo Alto 220 Next-Gen", "SonicWall TZ400", "Netgate- pfSense "]
      },
      {
        title: "Cloud",
        image: "/cloud.jpg",
        skills: ["Azure AD,", "AWS", "WatchGuard Cloud", "Okta Admin (IAM, IDP)"]
      },
      {
        title: "Virtualization & Containers",
        image: "/virtual.png",
        skills: ["VMware ESXi (Windows Server 2019)", "Proxmox VE (Windows Server 2022, Pi-hole: DNS, Prometheus)", " Docker (InfluxDB, Grafana)", "VirtualBox (Kali Linux, Windows 11/10-Lenovo specific image)"]
      },
      {
        title: "IT",
        image: "/it.jpg",
        skills: ["Windows","Freshservice(ITSM)", "MacOS", "iOS", "Office 365 Admin",  "Google Suite", "Cisco Webex", "Dell", "Xerox","HP", "Sharp", "Cisco Webex"]
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
{/* Certifications Section */}
<section id="certifications" className="mb-10 flex flex-col items-center">
  <h2 className="text-2xl font-bold text-purple-700 mb-4 text-center">Certifications</h2>
  <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 w-full max-w-4xl">
    <ul className="list-disc list-inside text-black">
      <li>CompTIA Network+ - July 2025</li>
      <li>CISCO Threat Management - December 2024</li>
      <li>Cisco Certified Network Associate (CCNA) – In Progress</li>
    </ul>
  </div>
</section>

    {/* Work Experience Section */}
<section id="work-experience" className="mb-10 flex flex-col items-center">
  <h2 className="text-2xl font-bold text-purple-700 mb-6">Work Experience</h2>
  <div className="grid gap-6 max-w-6xl w-full px-4 md:grid-cols-1">


   {/* Sysadmin */}
   <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
     <h3 className="font-semibold text-lg text-black">System Administrator/Data Technician</h3>
     <p className="text-black">May 2025 - Present | JCT Solutions, Springfield, NJ</p>
     <ul className="list-disc list-inside text-black mt-2">
       <li className="mb-2">Provide full-scope IT support and infrastructure management for three municipalities (police/fire stations, and government sites) 
        under a Managed Service Provider structure, ensuring uptime and compliance across mission-critical systems.</li>
       <li className="mb-2">Deliver tier 2–3 technical support and endpoint deployment across Lenovo systems, printers, 
        VoIP, and networked peripherals; utilize Synchro, Splashtop, and PowerShell scripting to manage AD provisioning and enforce policy compliance. </li>
       <li className="mb-2">Administer Azure AD and Office 365 Admin Center in a multi-tenant environment; manage licensing, GPOs, and MFA for 400+ users.</li>
       <li className="mb-2">Maintain VMware ESXi and QNAP infrastructure, hosting SANs to support high-availability operations across departments.</li>
       <li className="mb-2">Integrated SonicWall firewall logs into Wazuh (OSSIM-based SIEM) using rsyslog, enhancing visibility into network traffic and 
        improving threat detection across municipal environments.</li>
       <li className="mb-2">Coordinated with legal and administrative departments to process OPRA requests, maintaining compliance with transparency regulations.</li>
       <li className="mb-2">Roll out SentinelOne agents across endpoints to enhance threat detection and endpoint security response times.</li>
       <li className="mb-2">Deploy and maintain secure VPN access using SonicWall NetExtender for staff across government and public safety departments.</li>
       <li className="mb-2">Serviced Panasonic Toughbooks deployed in police squad vehicles to ensure reliable operation of mobile law enforcement systems.</li>
     </ul>
   </div>


   {/* Network Admin */}
   <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
     <h3 className="font-semibold text-lg text-black">Network Administrator</h3>
     <p className="text-black">March 2024 - Present | Kean University, Union, NJ</p>
     <ul className="list-disc list-inside text-black mt-2">
       <li className="mb-2">Resolved Tier III network issues across 34 buildings and collaborated with Network & 
         System Administrators and vendors to optimize and maintain an enterprise-grade network.</li>
       <li className="mb-2">Implemented and managed a quarantine server to isolate and analyze potentially compromised devices while testing security policies.</li>
       <li className="mb-2">Optimized firewall security (FortiGate & WatchGuard) by analyzing traffic and mitigating threats.</li>
       <li className="mb-2">Utilized ExtremeCloud IQ Pilot and Site Engine to conduct real-time network diagnostics, reducing latency for access points.</li>
       <li className="mb-2">Developed and led networking workshops for 60+ technicians; improved team skillset through hands-on training and materials.</li>
       <li className="mb-2">Led hiring for Student Security Analyst role, refining evaluation criteria, and selecting top cybersecurity candidates.</li>
     </ul>
   </div>


    {/* IT */}
    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
     <h3 className="font-semibold text-lg text-black">IT Support Specialist</h3>
     <p className="text-black">September 2022 – March 2024 | Kean University, Union, NJ</p>
     <ul className="list-disc list-inside text-black mt-2">
      <li className="mb-2">Diagnosed and resolved 500+ Tier II issues across laptops, desktops, projectors, and peripheral devices, enhancing classroom and office tech performance.</li>
      <li className="mb-2">Managed 20–35 weekly IT support tickets, maintaining a 90%+ first-contact resolution rate to reduce faculty and staff downtime.</li>
      <li className="mb-2">Tracked and managed IT assets using spreadsheets and ManageEngine Endpoint Central, improving inventory accuracy and accountability.</li>
      <li className="mb-2">Supported 5+ large-scale IT deployments, coordinating logistics to ensure seamless setups for new office and lab environments with zero downtime.</li>
    </ul>
   </div>

    {/* A/V */}
    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
      <h3 className="font-semibold text-lg text-black">Audio Visual Technician</h3>
      <p className="text-black">September 2021 - September 2022</p>
      <p className="text-black">Kean Information Technology - Kean University | Union, NJ</p>
     <ul className="list-disc list-inside text-black mt-2">
      <li className="mb-2">Provided classroom Tier I A/V support for faculty, ensuring smooth projector/multimedia operation and resolving technical issues.</li>
      <li className="mb-2">Operated 4K camera equipment to live stream on-campus events, enhancing accessibility for remote participants.</li>
      <li className="mb-2">Answered technical inquiries, offering prompt resolutions for faculty, staff, and students during events and classes.</li>
    </ul>
    </div>
  </div>
</section>

 {/* Career Highlights Section */}
<section className="mb-10 text-center flex flex-col items-center">
  <h2 className="text-2xl font-bold text-purple-700 mb-6">Professional Highlights</h2>
  <div className="grid gap-6 max-w-6xl w-full px-4 md:grid-cols-1">
    {[
      {
        title: "Network Administration Course Instructor",
        logo: "/teach.png",
        points: [
          "Recognized as the #1 instructor for the 2024 Kean University IT Student Rotational Learning Program.",
        ],
      },
      {
        title: "Network Security & Infrastructure",
        logo: "/security.jpg",
        points: [
          "Configured a WatchGuard firewall to host AD, Group Policy, Linux DNS, MFA, DHCP, and a captive portal for network access.",
          "Imaged and configured pfSense and OPNsense firewalls on mini-PCs and integrated them into network security appliances.",
          "Deployed Splunk Enterprise SIEM, improving threat detection and response efficiency.",
          "Developed a Firewall Recovery Plan for a WatchGuard Firebox, ensuring rapid restoration, failover, and business continuity.",
        ],
      },
      {
        title: "Data Center Network Operations",
        logo: "/center.png",
        points: [
          "Collaborated on a data center reorganization project, optimizing space and rack positioning.",
          "Decommissioned legacy servers and PDUs, installed new ones, and mapped, inventoried, and labeled servers while tracking operational status in Excel.",
          "Set up and deployed Extreme Networks switches using PuTTY and assisted with data center integration.",
        ],
      },
      {
        title: "Active Directory & Identity Management",
        logo: "/AD.png",
        points: [
          "Managed 20,000+ AD objects (users, groups, devices), enforcing security policies for authentication and compliance.",
          "Migrated a Windows Server 2019 AD to Microsoft Entra ID (Azure AD) for user access across hybrid cloud environments.",
        ],
      },

    ].map((category, index) => (
      <div
        key={index}
        className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
      >
        <div className="flex items-center space-x-4 mb-3">
          <img src={category.logo} alt={category.title} className="w-12 h-12 object-contain" />
          <h3 className="text-lg font-semibold text-black">{category.title}</h3>
        </div>
        <ul className="list-disc list-inside text-left text-black">
          {category.points.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</section>

 {/* Technical Projects Section */}
<section className="mb-10 text-center flex flex-col items-center">
  <h2 className="text-2xl font-bold text-purple-700 mb-6">Technical Projects</h2>
  <div className="grid gap-6 max-w-6xl w-full px-4 md:grid-cols-1">
    {[
      {
        title: "Senior Project: Portable Mobile Network (See portfolio page for more details)",
        logo: "/moblie.png",
        points: [
          "Designed and deployed a scalable mobile network for enterprise field use. Integrated Fortinet FortiGate 90D, pfSense, Cisco Catalyst 2960-X, GL.iNet router, and a NAS with a captive portal.",
          "Deployed an AI-powered troubleshooting chatbot and website to support users.",
        ],
      },
      {
        title: "Hybrid Cloud VPN Network Deployment (See portfolio page for more details)",
        logo: "/awslogo.png",
        points: [
          "Deployed a hybrid network with AWS Lightsail Windows Server VMs connected via WireGuard VPN on an ASUS router; configured one as a NAS and another as a MySQL server for secure file and database access.",
        ],
      },
      {
        title: "Full-Stack Enterprise Network Environment Lab",
        logo: "/moblie.png",
        paragraph:
           "Designed, built, and maintain a comprehensive Unifi network infrastructure featuring the Cloud Gateway Ultra, Ultra POE switch, Power Distribution Pro, and NanoHD access point. This network integrates and hosts multiple enterprise-grade firewalls, including pfSense, SonicWall TZ400, WatchGuard M370, Fortinet Fortigate 90D, and Palo Alto 220 Next-Gen Firewall. The environment also includes a Cisco stack composed of a Catalyst 2960-X switch, a 1900 series router, and an ASA 5515-X Firewall. Remote access and endpoint management are enabled via Tailscale.",
          
        sectionHeader: "Notable Projects",
        detailedPoints: [
          "SIEM Deployment & Log Ingestion Project: Deployed Wazuh SIEM on Proxmox to monitor Windows and Linux endpoints. Configured secure agent enrollment with authentication keys and AES encryption. Customized manager and syslog ports for optimized log ingestion. Integrated UniFi syslog feeds and ensured real-time log collection and parsing.",
          "Cloudflare DNS Governance & Email Security Management: Orchestrated secure domain management through Cloudflare by configuring and enforcing DNS policies that support reliable email delivery and domain integrity. Implemented SPF, MX, DKIM, and DMARC protocols to mitigate spoofing and phishing risks. Hardened email infrastructure by ensuring DNS-only exposure for mail records and eliminating legacy name server conflicts, aligning with best practices for zero-trust DNS.",
          "Network Access Control & VLAN Segmentation: Configured UniFi network with role-based access control and automated VLAN assignment. Implemented dynamic VLAN segmentation for IoT, guest, and internal devices based on credentials.",
          "Automation Lab (Infrastructure as Code): Implemented automated information parsing utilizing Ansible playbooks to enhance deployment efficiency.",
          "Active Directory Deployment: Configured a Windows Server-based Active Directory Domain Controller to manage user authentication, apply Group Policy, and streamline device administration for multiple Windows clients in Proxmox.",
          "Network Monitoring Dashboard: Deployed a full-stack monitoring solution using Prometheus, InfluxDB, Unpoller, and Grafana to visualize and analyze network and system performance hosted on Proxmox with Ubuntu and Docker for container orchestration.",
        ],
      },
     
    ].map((category, index) => (
  <div
    key={index}
    className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
  >
    <div className="flex items-center space-x-4 mb-3">
      <img
        src={category.logo}
        alt={category.title}
        className="w-12 h-12 object-contain"
      />
      <h3 className="text-lg font-semibold text-black">{category.title}</h3>
    </div>

    {category.paragraph && (
      <p className="text-black mb-4">{category.paragraph}</p>
    )}

    {category.sectionHeader && (
      <h4 className="text-black font-semibold mb-2">{category.sectionHeader}</h4>
    )}

    <ul className="list-disc list-inside text-left text-black">
      {category.detailedPoints
        ? category.detailedPoints.map((point, idx) => {
            const [label, ...rest] = point.split(":");
            return (
              <li key={idx} className="mb-2">
                <strong>{label.trim()}:</strong>
                {rest.length > 0 && rest.join(":")}
              </li>
            );
          })
        : category.points.map((point, idx) => (
            <li key={idx} className="mb-2">{point}</li>
          ))}
    </ul>
  </div>
    ))}
  </div>
</section>

{/* Education Section */}
<section id="education" className="mb-10 flex flex-col items-center">
  <h2 className="text-2xl font-bold text-purple-700 mb-4 text-center">Education</h2>
  <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 w-full max-w-4xl">
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
