import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white flex flex-col justify-center items-center">
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
              <a className="px-4 py-2 bg-white text-purple-700 font-semibold rounded-lg shadow-md hover:bg-purple-100">Resume Parser</a>
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
