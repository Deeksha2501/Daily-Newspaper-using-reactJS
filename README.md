## Quick Overview

```sh
npx create-react-app my-app
cd my-app
npm start
```

If you've previously installed `create-react-app` globally via `npm install -g create-react-app`, we recommend you uninstall the package using `npm uninstall -g create-react-app` to ensure that npx always uses the latest version.


## Creating an App

**You’ll need to have Node 8.16.0 or Node 10.16.0 or later version on your local development machine** (but it’s not required on the server). You can use [nvm](https://github.com/creationix/nvm#installation) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) to switch Node versions between different projects.

To create a new app, you may choose one of the following methods:

### npx

```sh
npx create-react-app my-app
```

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) is a package runner tool that comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))_

### npm

```sh
npm init react-app my-app
```

_`npm init <initializer>` is available in npm 6+_


    ```
    assignment-privado
    ├── README.md
    ├── node_modules
    ├── package.json
    ├── .gitignore
    ├── .env
    ├── yarn.lock
    ├── public
    │   ├── image2.jpg
    │   ├── index.html
    │   └── manifest.json
    └── src
        ├── App.js
        ├── index.js
        ├── sun-log.png
        └── serviceWorker.js
        └── Components
        |   ├── comp-1.js
        |   ├── comp-2.js
        |   ├── comp-3.png
        |   └── comp-4.js
        |   └── comp-5
        |   ├── component.css
        |   ├── innerComp2.js
        |   ├── main-comp.js
        |   ├── upperComp.js
        └── Containers
        |   ├── storyCont.js
        └── Services
        |   ├── hacknApi.js
        └── Stories
            ├── story.js
            ├── story.css
    

    ```

### `npm start` or `yarn start`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will automatically reload if you make changes to the code.<br>
You will see the build errors and lint warnings in the console.


## `Screenshots of the project`


<p align='center'>
<img src='./src/ss1.png' width='600' alt='screenshot'>
<img src='./src/ss2.png' width='600' alt='screenshot'>
</p>


## License

Create React App is open source software [licensed as MIT](https://github.com/facebook/create-react-app/blob/master/LICENSE).