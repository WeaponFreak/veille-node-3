'use strict';

let fs = require('fs');
let pro = JSON.parse(fs.readFileSync('mois.json', 'utf8'));
/* 
permet d'extraire l'ensemble des propriétés valeurs de l'objet litéral */

const contenu_objet_json=(o)=>{
   let trace = '<table><tr><th><h3>Acronyme</h3></th><th><h3>province</h3></th></tr>';
   for (let p in o) { 
     trace +='<tr><td>'+ p + '</td><td>' + o[p] + '</td></tr>'; 
   } 
   trace += '</table>'
   return trace;
   }

//serveur   

const http = require("http");
let server = http.createServer((request, response) => {

response.writeHead(200, {"Content-Type": "text/html"});
 response.write('<!DOCTYPE "html">');
 response.write('<html>');
 response.write('<head>');
 response.write('<title>Vive Node.js</title>');
 response.write('</head>');
 response.write('<body>');
 response.write('<h1>');
 response.write('</h1>');
 response.write(contenu_objet_json(pro));
 response.write('</body>');
 response.write('</html>');
 response.end();

})
// le port 80 est le port standard on peut alors lancer la page avec seulement : localhost
server.listen(3000)