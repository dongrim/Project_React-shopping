# React Shopping

## 1. References

- 리액트16 (Adam Freeman)

## 2. Getting Started

> ### Basic

- npm init
- git init

> ### CSS

- bootstrap
- @fortawesome/fontawesome-free

> ### React & Redux

- react
- react-dom
- react-redux

> ### Dependency

- applyMiddleware (redux)
- chancejs (sub. faker)

> ### Webpack & Babel

- webpack
- webpack-cli
- webpack-dev-server
- babel-loader
- @babel/core
- @babel/preset-env
- @babel/preset-react
- style-loader
- css-loader

> ### ESLint & Prettier

- blank

> ### Husky & lint-staged

- blank

> ### CSS & Icons

```js
1) CDN
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

<i className="fa fa-shipping-fast text-success" />
<i className="fa fa-exclamation-circle text-danger" />

2) Modules
@fortawesome/fontawesome-free
bootstrap, react-bootstrap
```

> ### etc.

- react-intl

## 3. Server

```js
1) Set Header
response.setHeader("Content-Type", "text/html");
response.setHeader("Content-Length", Buffer.byteLength(body));
response.setHeader("Set-Cookie", ["type=ninja", "language=javascript"]);
response.getHeader("set-cookie");
```

```js
2) Set Cookie
response.set("X-Total-Count", 503);
response.cookie("name", "Bob");
request.cookies["name"];
```

```js
3) Set CORS
response.header("Access-Control-Expose-Headers", "X-Total-Count");
Access-Control-Allow-Origin
Access-Control-Allow-Credentials
Access-Control-Allow-Methods
Access-Control-Allow-Headers
```
