# Just Another Text Editor (PWA)
[![License](https://img.shields.io/badge/License-MIT-blue)](https://opensource.org/licenses/MIT)

## Description

For this project, I built a text editor as a Progressive Web Application (PWA) using webpack, IndexedDB, and Workbox. This text editor allows users to type text into the browser, where it uses IndexedDB to store the data when the user closes the application and then retrieve the data whenever the user reopens the application. The webpack will bundle the application's static assets and use plugins and loaders to optimize the application. The service worker caches the application's resources and allows the application to function offline. The text editor can even be installed onto the user's device.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Screenshots](#screenshots)
* [Technologies Used](#technologies-used)
* [Credits](#credits)
* [Links](#links)
* [License](#license)

## Installation

To install this application on your local machine:

- Clone the application's repository and place it into a local directory on your computer.
- Ensure that your computer has node.js installed.
- Open a command-line interface (VS Code, Git Bash, etc.) and navigate to the root directory.
- In the command-line, download the application's dependencies by typing: 
```
    npm install
```
- Start the application by typing the following command. Your default web browser will then open the application in a new tab. 
```
    npm start
```

## Usage

To use this application, navigate to links section and click on the link to the deployed application on Heroku. The text editor will open up and allow the user to type any text into the application. The application will use IndexedDB to store the content into the browser. Whenever the user closes and reopens the application, it will retrieve any data stored in IndexedDB and place it back into the text editor. To install this application, click on the Install button on the upper left of the application. 

## Screenshots

The following images demonstrate the application's appearance and functionality.

![text-editor-24339 herokuapp com_](https://user-images.githubusercontent.com/103476893/193425044-dc826ebb-387f-4546-8442-8cea374e3f49.png)

## Technologies Used

- Webpack
- IndexedDB
- Workbox
- Heroku

## Credits

- [kt946](https://github.com/kt946)

## Links

- [Link to deployed application](https://just-another-text-editor.onrender.com/)

- [Link to GitHub repository](https://github.com/kt946/just-another-blue-text-editor-PWA)

## License

This application is covered under the [MIT](https://opensource.org/licenses/MIT) License.
