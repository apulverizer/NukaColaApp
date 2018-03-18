/* eslint-env node */
'use strict';

module.exports = function(/* environment, appConfig */) {
  // See https://github.com/san650/ember-web-app#documentation for a list of
  // supported properties

  return {
    name: "Nuka Cola Bottle Controller",
    short_name: "Nuka Cola Bottle Controller",
    description: "An app to control the color of some bottles",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#C40A13",
    theme_color: "#C40A13",
    icons: [
      {
        src: "/assets/images/nuka-cola-cap-icon.png",
        sizes: "540x540",
        type: "image/png"
      }
    ],
    ms: {
      tileColor: '#C40A13'
    }
  };
}
