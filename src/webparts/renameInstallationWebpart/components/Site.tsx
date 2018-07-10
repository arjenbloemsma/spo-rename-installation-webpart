import * as React from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { loadTheme, getTheme } from 'office-ui-fabric-react/lib/Styling';

const Site = ({ siteInfo }) => {
  let textField: TextField | undefined;
  const setNewSiteTitle = e => {
    siteInfo.newTitle = textField.value;
  };

  if (!siteInfo.Exists) {
    return (
      <li>
        {`Provided URL '${siteInfo.userProvidedUrl}' does not exist in this tenant.`}
      </li>
    );
  } else {
    return (
      <li>
        <TextField ref={t => (textField = t!)}
          placeholder="New title of Installation site."
          value={siteInfo.Title}
          onBlur={setNewSiteTitle}
          disabled={!siteInfo.Exists}
          label={`Title for '${siteInfo.userProvidedUrl}'.`} />
      </li>
    );
  }
};

export default Site;