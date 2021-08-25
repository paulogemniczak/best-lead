import React from "react";
import Head from "next/head";
import { GA_TRACKING_ID } from "../../../lib/gtag";

export default function SEO({
  description = "Encontre e gere seus leads automaticamente. Tenha acesso à todas empresas do mercado pelo menor preço.",
  author = "BestLead",
  meta,
  title = "BestLead - Melhor custo por lead",
}) {
  const metaData = [
    {
      name: `description`,
      content: description,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
    {
      name: `keywords`,
      content: `prospecção de clientes, abordagem ao cliente, captação de clientes, empresa leads, como vender mais e melhor, como vender mais, técnicas de vendas, comprar leads, venda mais, carteira de cliente, lead, leads`,
    },
    {
      name: `theme-color`,
      content: `#2FC6CE`,
    },
  ].concat(meta);

  return (
    <Head>
      <title>{title}</title>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <link rel="shortcut icon" href="/img/icon-512.png" />
      <link rel="apple-touch-icon" href="/img/icon-192.png" />
      <link rel="manifest" href="/manifest.json" />
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
    </Head>
  );
}

SEO.defaultProps = {
  lang: `pt-br`,
  meta: [],
};
