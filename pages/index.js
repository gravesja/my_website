import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <nav>
        <ul>
          {/* Use Next.js <Link> for internal navigation */}
          <li>
            <Link href="/about">
              <a>About Me</a>
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              <a>Portfolio</a>
            </Link>
          </li>
          <li>
            <Link href="/resume-parser">
              <a>Resume Parser</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
