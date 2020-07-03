const express = require('express');
const bodyparser = require('body-parser');

const app = express()
//content type : application/json
app.use(bodyparser.json())