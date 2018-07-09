import * as React from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';

const Site = ({ siteInfo }) => {
  let input;
  const doOnBlur = e => {
    siteInfo.newTitle = input.value;
  };

  return (
    <li
      style={{
        color: siteInfo.Exists ? 'black' : 'red'
      }}
    >
      <span style={{
        display: siteInfo.Exists ? 'none' : 'inline'
      }}>
      {`Provided URL '${siteInfo.userProvidedUrl}' does not exist`}
      </span>
      <span style={{
        display: siteInfo.Exists ? 'inline' : 'none'
      }}>
        <TextField ref={node => input = node} placeholder="New title of Installation site."
          label={siteInfo.Title}
          onBlur={doOnBlur}
          disabled={!siteInfo.Exists} />
      </span>
    </li>
  );
};

export default Site;