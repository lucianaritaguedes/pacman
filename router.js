var express = require('express')
var app = express()
var fs = require('fs')
var path = require('path')
app.use(express.static(path.join(__dirname)))

app.get('/a', function(req, res) {
    let filePath = __dirname + '/data.txt'

    //Escreve o arquivo
	fs.appendFile(filePath, "Hello world!", function(err) {
		if (err) { throw err }
        res.status(200)
        
    })


    res.sendFile(__dirname + '/index.html')
    
})

app.listen(3000, function() {
    console.log(`App ouvindo na porta 3000!`)
})

