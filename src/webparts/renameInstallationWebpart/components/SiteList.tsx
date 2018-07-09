import * as React from 'react';
import Site from './Site';

const SiteList = ({ sites }) => (
  <ul>
    {sites.map(site =>
      <Site
        key={site.id}
        {...site}
      />
    )}
  </ul>
);

export default SiteList;