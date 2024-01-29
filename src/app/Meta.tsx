// Meta.tsx
import Head from 'next/head';

const Meta = ({ 
  title = 'Your Site Title', 
  keywords = 'web development, programming', 
  description = 'Your description here'
}) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

export default Meta;
