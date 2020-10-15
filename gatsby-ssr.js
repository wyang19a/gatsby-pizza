import React from 'react';
import Layout from './src/components/Layout';
// this file enables us to hook into gatsby APIs
// gatsby-ssr is server side

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
