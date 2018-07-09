import * as React from 'react';

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
      {siteInfo.Exists ? siteInfo.Title : `Provided URL '${siteInfo.userProvidedUrl}' does not exist`}
      <input
        ref={node => input = node}
        style={{
          display: siteInfo.Exists ? 'inline' : 'none'
        }}
        type='text'
        onBlur={doOnBlur}
        disabled={!siteInfo.Exists} />
    </li>
  );
};

export default Site;