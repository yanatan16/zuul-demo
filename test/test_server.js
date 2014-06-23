var express = require('express')
  , request = require('request')
  , app = express()

app.use(express.query())

app.get('/document/:doc_number', function (req, res, next) {
  console.log('Got request for document ' + req.params.doc_number)
  var url = 'https://www.federalregister.gov/api/v1/articles/%(doc_number).json'.replace('%(doc_number)', req.params.doc_number)
  request({ url: url, json: true }, function (err, resp, body) {
    if (err)
      return res.send(500, {error: err.stack})
    if (resp.statusCode !== 200)
      return res.send(resp.statusCode, new Error('status code invalid: ' + resp.statusCode))
    res.send(body)
  })
})

app.listen(process.env.ZUUL_PORT, function () {
  console.log('zuul test server listening on ' + process.env.ZUUL_PORT)
})