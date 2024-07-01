const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");




const perguntas = [
   {
       enunciado: "Qual dos seguintes gases é conhecido como o mais potente em termos de efeito estufa, porém menos abundante na atmosfera?",
       alternativas: [
           {
               texto: "Dióxido de carbono (CO2)",
         
           },
           {
               texto: "Óxido nitroso (N2O)",
             
           }
       ]
   },
   {
       enunciado: "Qual das seguintes fontes é a principal causa das emissões de dióxido de carbono(CO2)?",
       alternativas: [
           {
               texto: "Decomposição de resíduos orgânicos",
             
           },
           {
               texto: "Uso de combustíveis fósseis para geração de energia",
             
           }
       ]
   },
   {
       enunciado: "Qual dos seguintes impactos é um efeito secundário das mudanças climáticas, afentando diretamente a biodiversidade?",
       alternativas: [
           {
               texto: "Diminuição da desertificação",
             
           },
           {
               texto: "Aumento da produtividade agrícola",
             
           }
       ]
   },
 
];








let atual = 0;
let perguntaAtual;
let historiaFinal = "";




function mostraPergunta() {
   if (atual >= perguntas.length) {
       mostraResultado();
       return;
   }
   perguntaAtual = perguntas[atual];
   caixaPerguntas.textContent = perguntaAtual.enunciado;
   caixaAlternativas.textContent = "";
   mostraAlternativas();
}




function mostraAlternativas(){
   for(const alternativa of perguntaAtual.alternativas) {
       const botaoAlternativas = document.createElement("button");
       botaoAlternativas.textContent = alternativa.texto;
       botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
       caixaAlternativas.appendChild(botaoAlternativas);
   }
}




function respostaSelecionada(opcaoSelecionada) {
   const afirmacoes = opcaoSelecionada.afirmacao;
   historiaFinal += afirmacoes + " ";
   atual++;
   mostraPergunta();
}




function mostraResultado() {
   caixaPerguntas.textContent = "Em 2049...";
   textoResultado.textContent = historiaFinal;
   caixaAlternativas.textContent = "";
}




mostraPergunta();

