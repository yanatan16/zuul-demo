// zuul-demo/index.js
// Provide some functions for testing
var http = require('https')
  , foreach = require('foreach')
  , is_browser = !!global.document

// Returns "hello world"
exports.hello_world = function () {
  return 'hello world'
}

// Calculates fibonacci number `n` efficiently (using O(n) steps)
exports.fib = function (n) {
  return fibup(n-2, 1, 1)

  function fibup(m, last, last2) {
    if (m < 0)
      return last
    return fibup(m-1, last+last2, last)
  }
}

// Throws an error
exports.fail = function () {
  throw new Error('fail!')
}

// Queries timeapi.org for the current UTC time
var base_url = 'https://www.federalregister.gov/api/v1/articles/%(doc_number).json'
if (is_browser)
  base_url = '/document/%(doc_number)' // Go through a localtunnel server

exports.get_federal_document = function (doc_number, callback) {
  var url = base_url.replace('%(doc_number)', doc_number)

  getJsonUrl(url, callback)
}

// runs for-each on the array. It doesn't work in old browsers
exports.foreach = function (array, callback) {
  array.forEach(callback)
}

exports.foreach_compat = function (array, callback) {
  foreach(array, callback)
}

// -- Helper --

function getJsonUrl(url, callback) {
  http.get(url, function (res) {
    if (res.statusCode !== 200) {
      res.close()
      return callback(new Error('Bad status code: ' + res.statusCode))
    }

    var buffer = ''
    res.on('data', function (data) {
      buffer += data
    })
    .on('end', function () {
      try {
        callback(null, JSON.parse(buffer))
      } catch (err) {
        callback(err)
      }
    })
  }).on('error', callback)
}