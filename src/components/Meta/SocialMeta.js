import React from 'react';
import { Helmet } from 'react-helmet';

// Can be generic share image / brand image.
import defaultImage from 'img/car.jpg';

export const SocialMeta = ({ meta }) => (
  <Helmet>
    <meta property="og:title" content={meta.title} />
    <meta property="og:type" content="article" />
    <meta property="og:url" content={meta.page_url} />
    <meta property="og:image" content={meta.image} />
    {meta.description && (
      <meta property="og:description" content={meta.description} />
    )}
    <meta property="og:site_name" content="website_name" />
    <meta property="og:image:width" content="500" />
    <meta property="og:image:height" content="500" />

    <meta name="twitter:card" content="summary_large_image" />

    <meta name="twitter:title" content={meta.title} />
    {/* TODO: Check 200 char limit constraint on description */
    meta.description && (
      <meta name="twitter:description" content={meta.description} />
    )}

    <meta name="twitter:site" content="@twitter_handle" />
    <meta name="twitter:creator" content="@twitter_handle" />

    {/* Twitter Summary card images must be at least 120x120px*/}
    <meta name="twitter:image" content={meta.image || defaultImage} />
  </Helmet>
);
