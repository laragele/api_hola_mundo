const http= require(`http`); //● La constante http ahora puede gestionar peticiones HTTP. 
const hostname= `127.0.0.1`; //cordenada local
const port= 3000;


const servidor= http.createServer((req, res) => { 
     res.statusCode=200;
     res.setHeader(`Content-Type`, `text/plain`);
    res.end(`{"mensaje": "Hola Mundo :D"}`);

})
servidor.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
})

