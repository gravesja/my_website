import '../dist/output.css'; // Correct path to your output.css
import { Analytics } from '@vercel/analytics/react'; // Import Analytics component

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics /> {/* Analytics component added */}
    </>
  );
}

export default MyApp;
