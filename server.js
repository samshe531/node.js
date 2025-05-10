// require === import du local module http 
const http = require ('http') // création du serveur
const fs = require ('fs') // manipulation des fichiers
const generate = require ('./password-generator')


fs.writeFile('./welcome.txt', 'Hello Node', (err) => {
    err? console.log("une erreur est arrivée lors du création dufichier:", err) :
    console.log("création du fichier réussi")
} )

fs.readFile('./welcome.txt', 'utf-8', (err, data) => {
    if(err) console.log('Une erreur est arrivée lors de la lecture du fichier:', err)
        console.log(data)
})

















// création du serveur
http.createServer((req, res) => {
    res.end("<h1>Bonjour Node !!!!</h1>\n")
}).listen(3000)