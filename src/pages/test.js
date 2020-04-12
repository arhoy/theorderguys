import React from 'react';

import Butter from 'buttercms';
export const butter = Butter(process.env.GATSBY_BUTTER_API_TOKEN);

const TestPage = () => {
  butter.post.list({ page: 1, page_size: 10 }).then(function(response) {
    console.log(response);
  });
  return <div></div>;
};

export default TestPage;
