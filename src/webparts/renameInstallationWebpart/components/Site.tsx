import * as React from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';

const Site = ({ siteInfo }) => {
  let textField: TextField | undefined;
  const setNewSiteTitle = e => {
    siteInfo.newTitle = textField.value;
  };

  return (
    <li
      style={{
        color: siteInfo.Exists ? 'white' : 'red'
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
        <TextField ref={t => (textField = t!)} placeholder="New title of Installation site."
          label={siteInfo.Title}
          onBlur={setNewSiteTitle}
          disabled={!siteInfo.Exists} />
      </span>
    </li>
  );
};

export default Site;