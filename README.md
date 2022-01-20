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

> ### dependency

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

> ### etc.

- react-intl

## 3. Server

```js
1)
response.setHeader("Content-Type", "text/html");
response.setHeader("Content-Length", Buffer.byteLength(body));
response.setHeader("Set-Cookie", ["type=ninja", "language=javascript"]);
response.getHeader("set-cookie");
```

```js
2)
response.set("X-Total-Count", 503);
response.cookie("name", "Bob");
request.cookies["name"];
```

```js
3)
response.header("Access-Control-Expose-Headers", "X-Total-Count");
Access-Control-Allow-Origin
Access-Control-Allow-Credentials
Access-Control-Allow-Methods
Access-Control-Allow-Headers
```
