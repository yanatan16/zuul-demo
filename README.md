zuul-demo
=========

A demo for node's [zuul](/defunctzombie/zuul) test runner. Made for a javascript meetup presentation.

## 1: Local Testing

[`local-tests` branch](https://github.com/yanatan16/zuul-demo/tree/local-tests)

- [implementation](index.js)
- [tests](test/index.js)

```
mocha test/index.js
```

## 2: Browser Testing

[`browser-tests` branch](https://github.com/yanatan16/zuul-demo/tree/browser-tests)

[diff with `local-tests`](https://github.com/yanatan16/zuul-demo/compare/local-tests...browser-tests)

- [.zuul.yml](.zuul.yml)
- [test_server.js](test/test_server.js)

```
zuul --local 8123 -- test/index.js
```

## 3: Cloud Testing

[`cloud-tests` branch](https://github.com/yanatan16/zuul-demo/tree/cloud-tests)

[diff with `browser-tests`](https://github.com/yanatan16/zuul-demo/compare/browser-tests...cloud-tests)

- [.zuul.yml](.zuul.yml)

```
zuul -- test/index.js
```

## 4: Travis-CI

[`travis-test` branch](https://github.com/yanatan16/zuul-demo/tree/travis-test)

[diff with `cloud-tests`](https://github.com/yanatan16/zuul-demo/compare/cloud-tests...travis-test)

- [.travis.yml](.travis.yml)
- [package.json](package.json)
- [Travis CI](http://travis-ci.org)

```
git push
```

# Slides

[zuul-demo.slide](slides/zuul-demo.slide) were made with the [go-present](https://code.google.com/p/go.tools/present) tool.

```
go get code.google.com/p/go.tools/cmd/present
cd zuul-demo
$GOPATH/bin/present
```

And open to [http://127.0.0.1:3999/slides/zuul-demo.slide](http://127.0.0.1:3999/slides/zuul-demo.slide).
