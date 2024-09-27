let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("chocolate");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(40);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "jumanji";
    } else {
      if (idade >= 1) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Homem aranha: sem volta para casa";          
        } else{
         return "velozes e furiosos 8";
        }
      } else {
        if (gostaDeFantasia) {
          return "alice no pais das maravilhas";
        } else {
          return "a fantastica fabrica de chocolate";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "A viagem ao centro da terra";
    } else {
      return "pedro coelho";
    }
  }
}
