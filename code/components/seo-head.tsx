import Head from "next/head"

interface SEOHeadProps {
  title: string
  description: string
  image?: string
  url?: string
  type?: string
}

export function SEOHead({ title, description, image, url, type = "website" }: SEOHeadProps) {
  return (
    <Head>
      <meta name="description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      {url && <meta property="og:url" content={url} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Head>
  )
}
