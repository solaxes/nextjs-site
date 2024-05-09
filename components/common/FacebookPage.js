import React from "react";

const FacebookPage = () => {
  return (
    <div>
      <div id="fb-root"></div>
      <script
        async
        defer
        crossorigin="anonymous"
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v19.0&appId=1377214335850760"
        nonce="YPhgTVk8"
      ></script>
      <div
        class="fb-page"
        data-href="https://www.facebook.com/facebook"
        data-tabs=""
        data-width=""
        data-height="300"
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      >
        <blockquote
          cite="https://www.facebook.com/facebook"
          class="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/facebook">Facebook</a>
        </blockquote>
      </div>
    </div>
  );
};

export default FacebookPage;
