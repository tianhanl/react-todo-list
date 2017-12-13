import React from 'react';

const Link = (onLinkClick, text, active) => {
  if (active) {
    return <span>{text}</span>;
  } else {
    return (
      <a
        href={''}
        onClick={e => {
          e.preventDefault();
          onLinkClick();
        }}
      >
        {text}
      </a>
    );
  }
};
