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
            Versatile Network and Systems Administrator with deep hands-on experience supporting secure, hybrid enterprise infrastructure across government, 
            academic, and research environments. Proven ability to architect and maintain high-availability systems using advanced firewalls, virtualization platforms, 
            and endpoint protection. Skilled in troubleshooting Tier I–III issues, implementing network segmentation, and deploying cybersecurity frameworks that align with 
            HIPAA, PCI-DSS, and NIST 800-53. Known for improving uptime, reducing ticket resolution times, and proactively building resilient, zero-trust environments through 
            automation and strategic infrastructure upgrades.
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
        skills: ["PowerShell", "Wireshark", "PuTTY", "VLAN/LAN/WAN/SAN", "DHCP", "ARP", "NAT", "DNS/DDNS", "802.11", "Nmap", "TCP/IP", "QoS"]
      },
      {
        title: "Cybersecurity",
        image: "/cyber.png",
        skills: ["IPS/IDS", "EDR", "SIEM-Wazuh", "802.1x","Tailscale", "Group Policy", "Bitlocker", "VPN", "ACLs", "MFA", "SSO","ZTNA", "DLP", "RBAC"]
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
        skills: ["Windows","Freshservice(ITSM)", "Lenovo","MacOS", "IOS", "Office 365 Admin",  "Google Suite", "Dell", "Xerox","HP", "Sharp", "Cisco Webex"]
      },
      {
        title: "Coding",
        image: "/coding.png",
        skills: ["React.js", "Node.js", "JavaScript", "Ruby", "HTML", "Python", "Ansible Playbooks", "SQL", "PHP", "REST API", "OpenAI API"]
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
      <a
        href="/network+.png"  target="_blank"
        className="text-purple-700 hover:underline"
        >
          View Certificate
      </a>
       <li> Fortinet Certified Associate in Cybersecurity</li>
      <a
        href="/fortinet.png"  target="_blank"
        className="text-purple-700 hover:underline"
        >
          View Certificate
      </a>
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
       <li className="mb-2">Coordinate full-scale IT infrastructure support across three municipalities, including law enforcement, fire, 
        and government buildings; impact spans 500+ staff.</li>
       <li className="mb-2">Deliver Tier I–III endpoint and infrastructure support across Lenovo systems, printers, 
        VoIP, and mobile law enforcement systems using Splashtop, Synchro, and PowerShell. </li>
       <li className="mb-2">Reduced ticket resolution time by 50%, handling 30+ weekly support tickets with 1–2 hour resolution rates.</li>
       <li className="mb-2">Administer Azure AD and Microsoft 365 across a multi-tenant setup, supporting 400+ users with MFA, licensing,
         and GPO management, demonstrating expertise in identity management and enterprise-level system administration.</li>
       <li className="mb-2">Led decommissioning of legacy SATA-based storage, migrating domain controller services to QNAP-based SAN 
        infrastructure in under one week, exhibiting speed and technical precision.</li>
       <li className="mb-2">Deployed SentinelOne EDR across endpoints, enhancing detection response and remediation capabilities.</li>
       <li className="mb-2">Integrated SonicWall firewall logs into Wazuh SIEM via Rsyslog, improving threat visibility and real-time
         detection across municipal environments.</li>
       <li className="mb-2">Executed township-wide hardware upgrades for ~100 machines, improved WAN performance, and led a 10–12 department 
        printer refresh in under one week—underscoring efficiency and cross-departmental coordination. </li>
       <li className="mb-2">Rapidly restored law enforcement record systems within 30 minutes during a mission-critical outage, coordinating
         vendors to recover Lawsoft access within 2 hours and minimizing police dispatch downtime.</li>
       <li className="mb-2">Deployed WatchGuard evidence management server in coordination with vendor, enabling stable integration with 
        police body camera systems</li>
       <li className="mb-2">Configured and troubleshot Lawsoft, Infocop, and Infoshare connections, ensuring reliable access for patrol 
        officers despite limited vendor-level knowledge.</li>
       <li className="mb-2">Maintained VMware ESXi hosts and supported QNAP-based SANs to ensure system redundancy and uptime.</li>
       <li className="mb-2">Provided VPN configuration and deployment (NetExtender) for secure municipal and public safety remote access.</li>
       <li className="mb-2">Coordinated with legal and administrative departments to process OPRA requests, maintaining compliance with NJ 
        public transparency regulations.</li>
       <li className="mb-2">Serviced Panasonic Toughbooks in patrol vehicles, amplifying stable access to mission-critical applications.</li>
     </ul>
   </div>


   {/* Network Admin*/}
   <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
     <h3 className="font-semibold text-lg text-black">Network Administrator</h3>
     <p className="text-black">March 2024 - May 2025 | Kean University, Union, NJ</p>
     <ul className="list-disc list-inside text-black mt-2">
       <li className="mb-2">Resolved escalated Tier III network tickets across 34 campus buildings; resolved 5–7 complex issues weekly with
         1–2-hour average resolution.</li>
       <li className="mb-2">Migrated 20,000+ AD objects and transitioned identity infrastructure from Google to Microsoft over a one-year
         project—completed on time following a 3-month preparation phase.</li>
       <li className="mb-2">Supported migration process for 20,000+ AD objects during the transition from Google to Microsoft, assisting 
        end users and tracking critical Google objects like sites.</li>
       <li className="mb-2">Built a quarantine server in less than 24 hours to isolate endpoints for policy testing; managed server hardening and 
        network isolation protocols.</li>
       <li className="mb-2">Designed/implemented hybrid Azure AD network with Entra ID; mirrored lab production environments within 2 hours.</li>
       <li className="mb-2">Developed proof-of-concept lab for 802.1X NAC, preparing groundwork for future production deployment.</li>
       <li className="mb-2">Configured and enforced WatchGuard and FortiGate firewall policies; reduced system downtime by 10% through updated 
        firmware and ACLs.</li>
       <li className="mb-2">Engineered WatchGuard Firebox M370 deployment to integrate AD, Group Policy, Linux DNS, DHCP, MFA, and captive portal, 
        securing segmented network access.</li>
       <li className="mb-2">Led wireless network overhaul with vendor and engineering teams, increasing coverage by 50% across 6–7 buildings.</li>
       <li className="mb-2">Created DLP simulation policies for HIPAA/PCI-DSS environments; implemented PII/PHI filtering controls on outbound traffic.</li>
       <li className="mb-2">Built custom SNMP monitoring system with Python; deployed Splunk Enterprise for centralized SIEM log collection.</li>
       <li className="mb-2">Ranked #1 instructor among all rotational programs, training 60+ technicians and developing future security analysts.</li>
       <li className="mb-2">Played a key role in data center reorganization; decommissioned legacy servers and helped integrate new rack/PDUs with 
        structured cabling.</li>
       <li className="mb-2">Supported Extreme Networks CLI-based switch integration; contributed to core fabric configuration and maintenance.</li>
     </ul>
   </div>


    {/* IT */}
    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
     <h3 className="font-semibold text-lg text-black">IT Support Specialist</h3>
     <p className="text-black">September 2022 – March 2024 | Kean University, Union, NJ</p>
     <ul className="list-disc list-inside text-black mt-2">
      <li className="mb-2">Resolved 500+ Tier II support issues across endpoints, AV, and peripherals, attaining 90%+ first-contact 
        resolution rate on 20–35 weekly tickets and supporting lab refreshes and IT deployments with zero disruption to operations.</li>
      <li className="mb-2">Partnered directly with Kean’s enterprise network team, assisting with switch port activation, VLAN assignments,
         and Wi-Fi reliability 
        improvements—early exposure to Tier III responsibilities.</li>
      <li className="mb-2">Tracked and managed IT assets using spreadsheets and ManageEngine Endpoint Central, improving inventory accuracy
         and accountability.</li>
      <li className="mb-2">Supported 5+ large-scale IT deployments, coordinating logistics to ensure seamless setups for new office and 
        lab environments with zero downtime.</li>
    </ul>
   </div>

    {/* A/V */}
    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
      <h3 className="font-semibold text-lg text-black">Audio Visual Technician</h3>
      <p className="text-black">September 2021 - September 2022</p>
      <p className="text-black">Kean Information Technology - Kean University | Union, NJ</p>
     <ul className="list-disc list-inside text-black mt-2">
      <li className="mb-2">Provided Tier I AV support across classrooms and campus events, including 4K camera setup, projector troubleshooting,
         and audio configuration; supported 1,300+ faculty with reliable AV functionality across campus.</li>
      <li className="mb-2">Maintained a 95%+ first-contact resolution rate across 8–10 weekly AV service tickets.</li>
    </ul>
    </div>
  </div>
</section>
 
 {/* Career Highlights Section */}
 {/*
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
 */}
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
        logo: "/networking.jpg",
        paragraph:
           "Designed, built, and maintain a comprehensive Unifi network infrastructure featuring the Cloud Gateway Ultra, Ultra POE switch, Power Distribution Pro, and NanoHD access point. This network integrates and hosts multiple enterprise-grade firewalls, including pfSense, SonicWall TZ400, WatchGuard M370, Fortinet Fortigate 90D, and Palo Alto 220 Next-Gen Firewall. The environment also includes a Cisco stack composed of a Catalyst 2960-X switch, a 1900 series router, and an ASA 5515-X Firewall. Proxmox VE orchestrates virtualized infrastructure, and Tailscale enables secure remote access and device management.",
          
        sectionHeader: "Notable Projects",
        detailedPoints: [
          "SIEM Deployment & Log Ingestion Project: Deployed Wazuh SIEM on Proxmox to monitor Windows and Linux endpoints. Configured secure agent enrollment with authentication keys and AES encryption. Customized manager and syslog ports for optimized log ingestion. Integrated UniFi syslog feeds and ensured real-time log collection and parsing.",
          "Enterprise Network Diagnostics & Asset Intelligence with SolarWinds Toolset: Deployed SolarWinds Engineer’s Toolset to simulate enterprise diagnostics. Configured SNMP polling and bandwidth gauges across Proxmox VMs and Cisco devices. Used Network Sonar to auto-discover subnets and generate live topology maps. Mapped MAC-to-IP bindings into a custom inventory DB. Performed Wake-on-LAN, TCP session resets, and Switch Port Mapping to trace live port-to-endpoint connections on Catalyst 2960-X.",
          "Virtualized HPC Lab: Developed a multi-node high-performance computing cluster using Docker and Ubuntu VMs hosted in Proxmox. Emulated scheduler-like behavior for workload distribution, integrated shared storage, and implemented node health monitoring using Prometheus and Grafana.",
          "Zero-Trust DNS Filtering with DNS-over-HTTPS: Deployed a privacy-focused recursive DNS stack using Pi-hole, Unbound, and Cloudflared to encrypt DNS resolution. Pi-hole forwards all DNS requests to Unbound for recursive resolution, then tunneled upstream requests to Cloudflare via DoH (DNS-over-HTTPS) using Cloudflared.",
          "Network Access Control & VLAN Segmentation: Configured UniFi network with role-based access control and automated VLAN assignment. Implemented dynamic VLAN segmentation for IoT, guest, and internal devices based on credentials.",
          "Cloudflare DNS Governance & Email Security Management: Orchestrated secure domain management through Cloudflare by configuring and enforcing DNS policies that support reliable email delivery and domain integrity. Implemented SPF, MX, DKIM, and DMARC protocols to mitigate spoofing and phishing risks. Hardened email infrastructure by ensuring DNS-only exposure for mail records and eliminating legacy name server conflicts, aligning with best practices for zero-trust DNS.",
          "Automation Lab (Infrastructure as Code): Implemented automated information parsing utilizing Ansible playbooks to enhance deployment efficiency.",
          "Active Directory Deployment: Deployed a Windows Server-based AD domain controller in Proxmox; configured GPOs, centralized user authentication, and managed policy enforcement across multiple virtual clients.",
          "Network Monitoring Dashboard: Deployed a full-stack monitoring solution using Prometheus, InfluxDB, Unpoller, and Grafana to visualize and analyze network and system performance hosted on Proxmox with Ubuntu and Docker for container orchestration.",
        ],
      },
     {
        title: "Full-Stack Employee Management Dashboard",
        logo: "/database2.png",
        points: [
          "Developed a secure, role-based employee management system (LAMP stack) supporting 10,000+ records. Enforced RBAC, audit logging, and security hardening (SQL injection prevention, hashed passwords). Automated MySQL backups and report generation with PowerShell scripts. Built custom UI with Tailwind CSS, dynamic table search, and session management for accessible UX.",
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
    <p className="text-black">Graduation: May 2025</p>
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
