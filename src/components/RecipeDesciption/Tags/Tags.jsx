import React from 'react';

const Tags = ({ tag }) => {
  return (
    <div>
      <a href={`https://www.google.co.uk/search?q=${tag}`} target="blank">
        {tag}
      </a>
    </div>
  );
};

export default Tags;
