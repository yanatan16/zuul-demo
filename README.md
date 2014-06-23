zuul-demo
=========

A demo for node's [zuul](/defunctzombie/zuul) test runner. Made for a javascript meetup presentation.

## 1: Local Testing

[`local-tests` branch](/yanatan16/zuul-demo/tree/local-tests)

- [implementation](/yanatan16/zuul-demo/blob/master/index.js)
- [tests](/yanatan16/zuul-demo/blob/master/test/index.js)

```
mocha test/index.js
```

## 2: Browser Testing

[`browser-tests` branch](/yanatan16/zuul-demo/tree/browser-tests)

[diff with `local-tests`](/yanatan16/zuul-demo/compare/local-tests...browser-tests)

- [.zuul.yml](/yanatan16/zuul-demo/blob/master/.zuul.yml)
- [test_server.js](/yanatan16/zuul-demo/blob/master/test/test_server.js)

```
zuul --local 8123 -- test/index.js
```

## 3: Cloud Testing

[`cloud-tests` branch](/yanatan16/zuul-demo/tree/cloud-tests)

[diff with `browser-tests`](/yanatan16/zuul-demo/compare/browser-tests...cloud-tests)

- [.zuul.yml](/yanatan16/zuul-demo/blob/master/.zuul.yml)

```
zuul -- test/index.js
```

## 4: Travis-CI

[`master` branch](/yanatan16/zuul-demo/tree/master)

[diff with `cloud-tests`](/yanatan16/zuul-demo/compare/cloud-tests...master)

- [.travis.yml](/yanatan16/zuul-demo/blob/master/.travis.yml)
- [package.json](/yanatan16/zuul-demo/blob/master/package.json)
- [Travis CI](travis-ci.org)

```
git push
```