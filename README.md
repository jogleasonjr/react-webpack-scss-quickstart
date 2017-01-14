# react-webpack-scss-quickstart
A minimal web application with [React](https://facebook.github.io/react/), [Router](https://github.com/reactjs/react-router), [Async Redux](http://redux.js.org/docs/advanced/AsyncActions.html), and [Webpack](https://webpack.github.io/). ES6/ES2015 support using [Babel](https://babeljs.io/). SASS/SCSS styling with [PostCss](https://github.com/postcss/postcss) and [Bootstrap](http://getbootstrap.com/).

## Demo
[Click here](http://react-webpack-scss-quickstart.s3-website-us-west-2.amazonaws.com/)

Log in with any username/password combination. The app will remember you between sessions.

![Image](https://github.com/jogleasonjr/react-webpack-scss-quickstart/blob/master/screenshots/run_through.gif)
<center>Logging in simulates an async authorization request. Use a library such as [Fetch](https://github.com/matthew-andrews/isomorphic-fetch) to implement your own authorization endpoint [here](https://github.com/jogleasonjr/react-webpack-scss-quickstart/blob/master/src/actions/authentication.js#L39).</center>

## To Build and Run via CLI

Dependencies:

* [Python 2.7](https://www.python.org/downloads/). I haven't tested Python 3.
* [Visual Studio 2015](https://www.visualstudio.com/downloads/). I used the Enterprise Edition, the Community Edition (free) will probably work. 

```bash
# Clone this repository
git clone https://github.com/jogleasonjr/react-webpack-scss-quickstart
# Go into the repository
cd react-webpack-scss-quickstart
# Install dependencies and run the app with Hot Reloading
npm install && npm run start
```
Now navigate to [http://localhost:8182/webpack-dev-server/](http://localhost:8182/webpack-dev-server/) in your browser.

## Next Steps
* Learn about managing Redux state [here](https://github.com/reactjs/redux)
* Learn more about React and JSX components [here](https://facebook.github.io/react/docs/getting-started.html).

## License

[MIT](https://tldrlegal.com/license/mit-license)
