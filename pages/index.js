import { useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
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
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white flex flex-col justify-center items-center bg-animate-wave">
      <h1 className="text-5xl font-extrabold mb-6">Welcome to My Portfolio</h1>
      <p className="mb-8 text-lg max-w-lg text-center">
        Explore my journey as an IT professional. From networking to desktop support to web development, I blend technology with creativity.
      </p>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/about">
              <a className="px-4 py-2 bg-white text-purple-700 font-semibold rounded-lg shadow-md hover:bg-purple-100">About Me</a>
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              <a className="px-4 py-2 bg-white text-purple-700 font-semibold rounded-lg shadow-md hover:bg-purple-100">Portfolio</a>
            </Link>
          </li>
          <li>
            <Link href="/resume-parser">
              <a className="px-4 py-2 bg-white text-purple-700 font-semibold rounded-lg shadow-md hover:bg-purple-100">My Resume</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className="px-4 py-2 bg-white text-purple-700 font-semibold rounded-lg shadow-md hover:bg-purple-100">Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
