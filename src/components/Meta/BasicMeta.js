import React from 'react';
import { Helmet } from 'react-helmet';

export const BasicMeta = ({ meta }) => (
  <Helmet>
    <title>{meta.title}</title>
    <meta name="description" content={meta.description} />
    <meta name="keywords" content={meta.keywords} />
    <link rel="canonical" href={meta.page_url} />
  </Helmet>
);
