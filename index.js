const express = require('express');
const app =express();
const port = process.env.PORT || 3001;
const cors = require('cors');

app.use(cors());

app.get('/',(req,res)=>{
	res.send("gutditdutdutd8tf");
});

app.listen(port,()=>{
	console.log('port run @ ',port);
});
