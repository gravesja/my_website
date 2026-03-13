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
            Versatile Infrastructure and Network Engineer experienced in deploying, securing, and maintaining hybrid enterprise environments across government, 
            financial, and academic sectors. Proven track record of engineering resilient network systems using next-generation firewalls (Palo Alto, Fortinet), 
            Cisco enterprise switching, and cloud services (AWS). 
            Skilled in implementing Zero-Trust segmentation and automation to drive security compliance in mission-critical environments.
          </p>
        </section>

 {/* Skills section */}
        <section className="mb-10">
  <h2 className="text-xl font-bold text-purple-700 mb-4 text-center">Technical Skills</h2>
  <div className="flex justify-between flex-wrap gap-3">
    {[ 
      {
  title: "Networking & Infrastructure",
  image: "/network.png",
  skills: [
    "TCP/IP",
    "VLAN (802.1Q)",
    "LAN / WAN / SAN",
    "OSPF",
    "STP",
    "NAT",
    "DHCP",
    "DNS",
    "802.11 Wireless",
    "802.1X NAC",
    "SNMP",
    "SD-WAN",
    "Cisco (Meraki / Nexus)",
    "Arista CVP",
    "Extreme Fabric",
    "UniFi"
  ]
},
      {
        title: "Cybersecurity",
        image: "/cyber.png",
        skills: [ "SIEM (Wazuh, Splunk)",
    "IPS / IDS",
    "EDR",
    "Zero Trust (ZTNA)",
    "VPN",
    "MFA",
    "SSO",
    "RBAC",
    "ACLs",
    "DLP",
    "BitLocker",
    "Incident Response",
    "Group Policy"]
      },
      {
        title: "Firewalls",
        image: "/firewall.png",
        skills: [ "Fortinet FortiGate",
    "WatchGuard",
    "Palo Alto Panorama",
    "SonicWall TZ400",
    "Cisco ASA",
    "pfSense / OPNsense"]
      },
      {
  title: "Cloud & Identity",
  image: "/cloud.jpg",
  skills: [
    "Azure AD / Entra ID",
    "AWS",
    "AWS VPC",
    "Microsoft 365",
    "Okta (IAM / IDP)",
    "WatchGuard Cloud"
  ]
},
      {
  title: "Virtualization & Systems",
  image: "/virtual.png",
  skills: [
    "VMware ESXi",
    "Proxmox VE",
    "Docker",
    "QNAP SAN/NAS",
    "Windows Server",
    "Linux",
    "macOS"]
      },
      {
  title: "Monitoring & IT Operations",
  image: "/it.jpg",
  skills: [
    "SolarWinds",
    "ServiceNow",
    "ManageEngine",
    "Freshservice",
    "Windows",
    "Lenovo",
    "MacOS",
    "IOS",
    "Office 365 Admin",
    "Google Workspace",
    "Dell",
    "Xerox",
    "HP",
    "Sharp",
    "Cisco Webex"
  ]
},
 {
  title: "Coding & Automation",
  image: "/coding.png",
  skills: [
    "PowerShell",
    "Python",
    "Ansible",
    "REST APIs",
    "Git",
    "SQL / MySQL",
    "Node.js",
    "React",
    "JavaScript",
    "Ruby",
    "HTML",
    "PHP",
    "OpenAI API",
    "CI/CD"
  ]
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
       <li className="mb-2">Coordinated full-scale IT infrastructure support across three municipalities, ensuring 24/7 uptime 
        and secure connectivity for critical law enforcement and government operations.</li>
       <li className="mb-2">Delivered Tier II–III endpoint and infrastructure support using PowerShell automation, reducing manual 
        configuration time by 40% across multi-tenant municipal environments. </li>
       <li className="mb-2">Reduced ticket resolution time by 50%, managing 30+ weekly support tickets with less than 1 hour resolution rates.</li>
       <li className="mb-2">Administered Azure AD and Microsoft 365 for 500+ users across multi-tenant environments, implementing MFA and GPO policies 
        to enhance identity security and ensure 100% license compliance.</li>
       <li className="mb-2">Led the decommissioning of legacy storage, migrating domain services to QNAP SAN infrastructure in one week.</li>
       <li className="mb-2">Integrated SonicWall firewall logs into Wazuh SIEM utilizing Rsyslog, reducing false positives by 20%.</li>
       <li className="mb-2">Coordinated hardware refreshes for 100+ systems and executed major network upgrades, minimizing disruption and 
        ensuring a 100% successful migration rate.</li>
       <li className="mb-2">Coordinated hardware refreshes and infrastructure upgrades for 100+ systems across multiple departments with zero operational downtime. </li>
       <li className="mb-2">Maintained VMware ESXi hosts and QNAP SANs, optimizing resource allocation and ensuring 99.9% uptime.</li>
       <li className="mb-2">Rapidly restored law enforcement record systems (Lawsoft) within 30 minutes during a mission-critical outage.</li>
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
          "Engineered a field-deployable enterprise network using Fortinet, pfSense with a GL.iNet AP, enabling secure remote connectivity and captive portal automation.",
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
           "Designed and maintain a full-stack UniFi network with Cloud Gateway Max, PoE switching, and APs. Automated VLAN assignment via UniFi for guest, team, and IoT traffic isolation. Integrated multi-vendor firewalls (Fortinet, Palo Alto, SonicWall, WatchGuard, OPNsense/pfSense) and Cisco stack (Catalyst, ISR, ASA) orchestrated via Proxmox VE and Tailscale for secure remote lab access.",
          
        sectionHeader: "Notable Projects",
        detailedPoints: [
          "IPSec Site-to-Site VPN Architecture: Designed and implemented a policy-based IPSec site-to-site VPN between UniFi gateways, configuring IKEv2, encryption domains, and firewall policies to enable secure connectivity between networks.",
          "OSPF Dynamic Routing Implementation: Engineered a multi-gateway routing environment using OSPF to dynamically exchange routes between isolated LAN segments across a transit network.",
          "Network Storage Infrastructure: Deployed and hardened a QNAP NAS for 24/7 operation, implementing firewall enforcement, malware scanning, Active Directory–integrated IAM, and VM storage architecture.",
          "Wazuh SIEM Solution: Built a Wazuh SIEM lab ingesting Proxmox and UniFi telemetry to simulate HIPAA, PCI-DSS, and GDPR compliance frameworks, enabling correlation-based alerting and incident analysis.",
          "Enterprise Network Diagnostics & Asset Intelligence with SolarWinds Toolset: Deployed SolarWinds Engineer’s Toolset to simulate enterprise diagnostics. Configured SNMP polling and bandwidth gauges across Proxmox VMs and Cisco devices. Used Network Sonar to auto-discover subnets and generate live topology maps. Mapped MAC-to-IP bindings into a custom inventory DB. Performed Wake-on-LAN, TCP session resets, and Switch Port Mapping to trace live port-to-endpoint connections on Catalyst 2960-X.",
          "Virtualized HPC Lab: Developed a multi-node high-performance computing cluster using Docker and Ubuntu VMs hosted in Proxmox. Emulated scheduler-like behavior for workload distribution, integrated shared storage, and implemented node health monitoring using Prometheus and Grafana.",
          "Zero-Trust Internal DNS & Secure Service Architecture: Deployed a zero-trust internal DNS solution using Pi-hole, Unbound, Cloudflared, and Nginx reverse proxying to deliver network-level threat reduction without WAN exposure.",
          "Network Access Control & VLAN Segmentation: Configured UniFi network with role-based access control and automated VLAN assignment. Implemented dynamic VLAN segmentation for IoT, guest, and internal devices based on credentials.",
          "Cloudflare DNS Governance & Email Security Management: Orchestrated secure domain management through Cloudflare by configuring and enforcing DNS policies that support reliable email delivery and domain integrity. Implemented SPF, MX, DKIM, and DMARC protocols to mitigate spoofing and phishing risks. Hardened email infrastructure by ensuring DNS-only exposure for mail records and eliminating legacy name server conflicts, aligning with best practices for zero-trust DNS.",
          "Infrastructure Automation: Developed Ansible playbooks for automated environment provisioning and configuration.",
          "Active Directory & IAM: Provisioned an AD domain controller with GPOs for centralized IAM and policy enforcement.",
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
