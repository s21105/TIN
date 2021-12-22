const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.set('views','./')
app.set('view engine','ejs')

const path = require('path')
app.get('/',(req,res)=>res.sendFile(path.resolve('./9b.html')))

app.post('/json',(req,res)=>{
    console.log(req.body);
    let result = calc(
    	Number.parseFloat(req.body.FirstNumber),
    	Number.parseFloat(req.body.LastNumber),
    	req.body.Operation
    	);
        console.log(result);
        res.json(({"result":result}));
})

const calc = (a,b,operation)=>{
    switch(operation){
        case '+':
            return a+b;
        case '-':
            return a-b;
        case '/':
            return a/b;
        case '*':
            return a*b;
        default:
            return null;
    }
}
app.listen(3000)
