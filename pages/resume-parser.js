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
        <h1 className="text-4xl font-bold mb-8 text-purple-800">Resume Parser</h1>

        {/* Example Resume Section */}
        <section className="mb-10">
          <h2 className="text-4xl font-bold mb-8 text-purple-800">My Example Resume</h2>

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
                <li>Top course instructor of the year, providing in-depth networking tutorials and hands-on labs.</li>
                <li>Designed custom graphics and manuals for course materials.</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-purple-800">IT Technician</h3>
              <p className="text-gray-600 italic">September 2022 - March 2024</p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>Performed Tier II system troubleshooting and repairs on laptops, projectors, desktops, and other peripheral devices.</li>
                <li>Participated in multistage projects and deployments across multiple offices and computer labs.</li>
                <li>Perform system troubleshooting repairs to laptops, projectors, and desktops.</li>
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
        </section>
      </div>
    </div>
  );
};

export default ResumePage;
