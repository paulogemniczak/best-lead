import "bootstrap/dist/css/bootstrap.min.css";
import "react-modal-video/css/modal-video.min.css";
import Seo from '../components/SEO';

export default function CustomApp({ Component, pageProps }) {
  return (
    <>
      <Seo />
      <Component {...pageProps} />
    </>
  );
}
