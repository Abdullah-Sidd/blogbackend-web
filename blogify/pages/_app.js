import "../styles/globals.css";
import { BlogifyProvider } from "../context/BlogifyContext";
function MyApp({ Component, pageProps }) {
  return (
    <BlogifyProvider>
      <Component {...pageProps} />
    </BlogifyProvider>
  );
}

export default MyApp;
