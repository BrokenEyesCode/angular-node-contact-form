const express = require('express')
const app = express()
app.use(express.json())
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.status(400).send({ status: 404, message: "Bad REquest" });
    }
    next();
});
const port = 3000
// endable CORS Cross domain. 
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      
    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};
app.use(allowCrossDomain);

app.get('/', (req, res) => {
  res.send('Success')
})
app.post('/formSubmit', (req, res) => {
    // allow Angular to access the server CORS 
    const resData = req.body
    let response = {}
    let resCode = 0
    if (resData.contact=="phone" || resData.contact == "email" || resData.contact == "text"){
        resCode = 200
        message = "Sucess";
    } else {
        resCode = 400
        message = "Bad REquest";
    }
    response = { status: resCode, message: message};
    return res.status(resCode).send(response);
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})