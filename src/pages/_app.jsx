import "bootstrap/dist/css/bootstrap.min.css";
import "react-modal-video/css/modal-video.min.css";
import Seo from "../components/SEO";
import * as gtag from "../../lib/gtag";
import { useRouter } from 'next/router';
import { useEffect } from 'react'

export default function CustomApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <Seo />
      <Component {...pageProps} />
    </>
  );
}
