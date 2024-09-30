// _app.js or _app.tsx
import '../dist/output.css'; // Correct path to your output.css

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
