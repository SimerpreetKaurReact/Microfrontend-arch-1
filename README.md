We are not using the traditional CRA method for creating the react app. Instead we are using the webpack and babel method.
• We must use the babel presets in the .babelrc file for making the project a react project.
• The presets can be found in the package.json file.
• Also, we are using the hot reload property of webpack-dev-server
• To run the project and to make a build of it, scripts are also in the package.json file.
• Finally, after making a build, a dist folder gets created which contains the index_bundle file which has the entire project.
• To access the file from different server we have to run npm start in each individual repo
• This will make the dist folder available to other servers.
In the repo microfrontend1, the “main” component is present which calls the “sidebar” and “header” components onClick.
• To load the other components, their build needs to be hosted on different localhost ports.
• Also, the main component sends a message to other components.
• This can be achieved by creating a new CustomEvent.
• We will have to access the details in the event using
document.addEventListener in the “header” component.
• In this way messages and data can be passed on to the other
components.
The demo of this can be viewed by running the microfrontend1-arch-1, microfrontend-arch-2 and microfrontend-arch-3 repo codes.
