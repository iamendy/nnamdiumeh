import Head from "next/head";

function SEOHead({
  href = process.env.NEXT_PUBLIC_APP_URL,
}: {
  href?: string;
}) {
  const content =
    "Fullstack engineer with over 7+ years crafting fast and scalable web applications that help 10x your business growth.";
  return (
    <Head>
      <title> Nnamdi Umeh </title>
      <meta name="description" content={content} />
      <meta
        name="keywords"
        content="nnamdi umeh nnamdiumeh software engineer 10xEngineer developer upwork specialist expert developer"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={href} />
      <link rel="icon" href="/favicon.ico" type="image/icon" />
      <meta property="og:title" content="Nnamdi Umeh" />
      <meta property="og:description" content={content} />
      <meta property="og:image" content={`${href}/img/banner.png`} />
      <meta property="og:url" content={href} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content={content} />
      <meta name="twitter:title" content="Nnamdi Umeh" />
      <meta name="twitter:description" content={content} />
      <meta name="twitter:image" content={`${href}/img/banner.png`} />
    </Head>
  );
}

export default SEOHead;
