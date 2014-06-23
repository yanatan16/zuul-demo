// zuul-demo/test/index.js
// Test the functions in zuul-demo/index.js
// mocha/tdd style tests

var demo = require('..')
  , assert = require('assert')
  , foreach = require('foreach')

suite('Zuul Demo', function () {
  test('hello world', function () {
    assert.equal(demo.hello_world(), 'hello world')
  })

  test('fibonacci numbers 1-10', function () {
    var real_fibs = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

    // We use foreach here because its browser compatible
    foreach(real_fibs, function (x, n) {
      assert.equal(demo.fib(n), x, 'Fibonacci number ' + n + ' was incorrect: ' + demo.fib(n) + ' vs. ' + x)
    })
  })

  test('failure', function () {
    try {
      demo.fail()
      assert(false, 'An error should have been thrown')
    } catch (err) {
      assert.equal(err.toString(), 'Error: fail!')
    }
  })

  test('federal document query', function (done) {
    demo.get_federal_document('2014-14488', function (err, doc) {
      assert.ifError(err)
      assert.equal(doc.title, 'Adjustment of Passenger Civil Aviation Security Service Fee')
      assert.equal(doc.type, 'Rule')
      done()
    })
  })

  test('foreach incompatible', function () {
    var i = 0
    demo.foreach([1,2,3,4,5], function (x, j) { i += x + j })
    assert.equal(i, 25)
  })

  test('foreach compatible', function () {
    var i = 0
    demo.foreach_compat([1,2,3,4,5], function (x, j) { i += x + j })
    assert.equal(i, 25)
  })
})