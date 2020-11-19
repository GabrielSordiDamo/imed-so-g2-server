const http = require('http');



const server = http.createServer((requisicao, resposta) => {

    resposta.end("EUUUU FUNCIONOOOOO LOOOOOOOOOOOOOOOOOOOLLLLLLLL")
});

server.listen(8080);


