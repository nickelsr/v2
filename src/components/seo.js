import React from 'react';
import { useSiteMetadata } from '@hooks';

const Seo = ({ title, children }) => {
  const { title: defaultTitle, description, siteUrl } = useSiteMetadata();

  const seo = {
    title: title ? (title + " | " + defaultTitle) : defaultTitle,
    description: description,
    url: siteUrl
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {children}
    </>
  );
}

export default Seo;