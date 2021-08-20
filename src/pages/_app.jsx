import "bootstrap/dist/css/bootstrap.min.css";
import "react-modal-video/css/modal-video.min.css";
import Head from "next/head";

export default function CustomApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Best Lead - Site</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-192.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2FC6CE" />
        <meta name="description" content="Best Lead" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
