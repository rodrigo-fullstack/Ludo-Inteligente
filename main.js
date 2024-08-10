//Importa a classe Ludo
import { Ludo } from './ludo/Ludo.js';
import RespostaControlador from "./ludo/Resposta.js";

//Inicia a classe Ludo
const ludo = new Ludo();

// controladorTeste.sortear()
// console.log(controladorTeste.definirPerguntaResposta())
// console.log(controladorTeste.questao.pergunta)
// console.log(controladorTeste.questao.resposta)
// console.log(controladorTeste.questao.dificuldade)
// controladorTeste.executarSorteio()
// const popupEnvolver = document.querySelector(".popup-wrapper")
// const pergunta = document.querySelector(".pergunta")
// const inputResposta = document.querySelector(".entrada-resposta");
// const botaoAdmitirResposta = document.querySelector(".admitir-resposta-botao")
// const popupFechar = document.querySelector(".popup-close")
// const popupDificuldade = document.querySelector(".popup-difficulty")

// let resposta = ""
// let acerto = false
// let dificuldade = "";
// let areaConhecimento = "";
// let sorteio = 0;
// let sorteados = [];
// let contadorFuncao = 0;
// const qtdPerguntas = 32; 

// function gerarNumeroAleatorioIntervalo(min, max){
//     return Math.floor(Math.random() * ((max + 1) - min) + min);
// }

// //É possível transformar em objeto
// function sortear(){
//     let numSorteio = 0;
//     //Estrutura de Repetição que impede de vir perguntas iguais    
//     while(true){
//         numSorteio = gerarNumeroAleatorioIntervalo(1, qtdPerguntas);
//         //vetor.indexOf(elemento) != -1 também verifica se está presente
//         /* Método Includes
//         Verifica se possui o elemento sorteado no Array*/
//         if(!sorteados.includes(numSorteio)){
//             sorteados.push(numSorteio);
//             break;
//         }
//     } return numSorteio;
// }

// function definirPerguntaResposta(sorteio){
//     switch(sorteio){
//         case 1: 
//             pergunta.textContent = "Qual é a capital da França?";
//             resposta = "paris";
//             dificuldade = "Fácil";
//             break; //H

//         case 2: 
//         pergunta.textContent = "Qual é o maior bioma brasileiro em extensão territorial?";
//         resposta = "amazônia"; //H
//         dificuldade = "Fácil";
//         break;

//         case 3: 
//             pergunta.textContent = "Qual expressão refere-se ao movimento político e ideológico contrário ao comunismo nos Estados Unidos, no começo da década de 50?";
//             resposta = "macartismo"; //H
//             dificuldade = "Difícil";
//             break;

//         case 4:
//             pergunta.textContent = "A função f(x) = 2x - 1 é uma função de qual grau?";
//             resposta = "primeiro grau";
//             dificuldade = "Fácil";
//             break;

//         case 5:
//                 pergunta.textContent = "EMBORA ela tenha feito o dever de casa, não foi bem na prova. Qual é o tipo da conjunção em destaque?";
//             resposta = "concessiva"; 
//             dificuldade = "Difícil";
//             break;

//         case 6:
//             pergunta.textContent = "Qual filósofo grego escreveu 'A República?'";
//             resposta = "platão"; //H
//             dificuldade = "Média";
//             break;
        
//         case 7: 
//         pergunta.textContent = "Em qual área do Brasil é comum possuir chuvas ciclônicas?";
//         resposta = "sul e sudeste";
//         dificuldade = "Média";
//             break;
        
//         case 8: 
//             pergunta.textContent = "Em qual área do Brasil é comum possuir chuvas ciclônicas?";
//             resposta = "sul e sudeste";
//             dificuldade = "Média";
//             break;
        
//         case 9: 
//             pergunta.textContent = "Quem foi o líder da Inconfidência Mineira?";
//             resposta = "tiradentes";
//             dificuldade = "Média";
//             break;
        
//         case 10: 
//             pergunta.textContent = "Quem foi o primeiro governador-geral do Brasil?";
//             resposta = "tomé de sousa";
//             dificuldade = "Fácil";
//             break;
        
//         case 11: 
//             pergunta.textContent = "Qual foi o tratado que encerrou a Primeira Guerra Mundial?";
//             resposta = "tratado de versalhes";
//             dificuldade = "Média";
//             break;
            
//         case 12: 
//             pergunta.textContent = "Quem foi o imperador responsável pela construção do Coliseu em Roma?";
//             resposta = "vespasiano";
//             dificuldade = "Difícil";
//             break;
        
//         case 13: 
//             pergunta.textContent = "Quem pintou a obra 'Guernica'?";
//             resposta = "picasso"; //L
//             dificuldade = "Média";
//             break;
        
//         case 14: 
//             pergunta.textContent = "Quem é o autor do livro 'Dom Casmurro'?";
//             resposta = "machado de assis";
//             dificuldade = "Fácil";
//             break;
            
//         case 15: 
//             pergunta.textContent = "Qual movimento artístico é caracterizado pelo uso de formas geométricas e pela fragmentação da imagem?";
//             resposta = "cubismo";
//             dificuldade = "Fácil";
//             break;
        
//         case 16: 
//             pergunta.textContent = "Qual é a forma correta do verbo “to be” na frase “She ___ a teacher”?";
//             resposta = "is";
//             dificuldade = "Média";
//             break;
        
//         case 17: 
//             pergunta.textContent = "Qual é a forma correta do verbo 'work' na frase 'She ___ in a town.'?";
//             resposta = "works";
//             dificuldade = "Média";
//             break;
        
//         case 18: 
//             pergunta.textContent = "Qual é o termo usado para descrever a capacidade de um atleta de se concentrar e manter o foco durante a competição?";
//             resposta = "atenção";
//             dificuldade = "Média";
//             break;
        
//         case 19: 
//             pergunta.textContent = "Crie um verbo a partir do Substantivo 'vergonha' no processo de parassíntese";
//             resposta = "envergonhar";
//             dificuldade = "Difícil";
//             break;
        
//         case 20: 
//             pergunta.innerHTML = "Quanto vale 219234^0?";
//             resposta = "1";
//             dificuldade = "Média";
//             break;
        
//         case 21: 
//             pergunta.textContent = "Se um triângulo tem lados de 3 cm, 4 cm e 5 cm, qual é o perímetro do triângulo? (Digite sem unidade de medida)";
//             resposta = "12";
//             dificuldade = "Média";
//             break;
        
//         case 22: 
//             pergunta.textContent = "Qual é o resultado de 15 ÷ 3 + 4 * 2?";
//             resposta = "13";
//             dificuldade = "Fácil";
//             break;
//         case 23: 
//             pergunta.textContent = "Qual é a área de um círculo com raio de 7 cm (use π≈3 e Area = π*r²)?";
//             resposta = "147";
//             dificuldade = "Difícil";
//             break;
        
//         case 24: 
//             pergunta.textContent = "Se um ângulo de um triângulo é de 90 graus e os outros dois ângulos são iguais, qual é o valor de cada um desses ângulos? (Coloque somente o número)";
//             resposta = "45";
//             dificuldade = "Média";
//             break;
        
//         case 25: 
//             pergunta.textContent = "Qual o resultado da expressão 3 + 4!";
//             resposta = "27";
//             dificuldade = "Difícil";
//             break;
        
//         case 26: 
//             pergunta.textContent = "Qual é a fórmula química do dióxido de carbono?";
//             resposta = "co2";
//             dificuldade = "Fácil";
//             break;
        
//         case 27: 
//             pergunta.textContent = "Qual é a camada mais externa da Terra?";
//             resposta = "crosta";
//             dificuldade = "Média";
//             break;
        
//         case 28: 
//             pergunta.textContent = "Qual é o pH de uma solução neutra?";
//             resposta = "7";
//             dificuldade = "Fácil";
//             break;
        
//         case 29: 
//             pergunta.textContent = "Qual é a terceira lei de Newton?";
//             resposta = "ação e reação";
//             dificuldade = "Média";
//             break;
        
//         case 30: 
//             pergunta.textContent = "Qual é o elemento químico representado pelo símbolo “Ag”?";
//             resposta = "prata";
//             dificuldade = "Média";
//             break;
        
//         case 31: 
//             pergunta.textContent = "Qual é a organela responsável pela produção de energia na célula?";
//             resposta = "mitocôndria";
//             dificuldade = "Difícil";
//             break;
        
//         case 32:
//             pergunta.textContent = "Qual é a unidade de medida da intensidade da corrente elétrica?"
//             resposta = "ampère";
//             dificuldade = "Difícil"
            
//     }
// }

// function definirDificuldadeTextoCor(){
//     popupDificuldade.textContent = dificuldade;
//     switch(dificuldade){
//         case "Fácil":
//             popupDificuldade.style.backgroundColor = "#2290FF" 
//             break;
//         case "Média":
//             popupDificuldade.style.backgroundColor = "#6E07F5"
//             break;

//         case "Difícil":
//             popupDificuldade.style.backgroundColor = "#DB1623"
//     }
// }

// function aparecerWrapper(){
//     // if(!popupEnvolver.classList.contains("aparecer")){

//         //Como adicionar ou remover classes?
//         //Vai exibir a div pergunta
//         popupEnvolver.classList.add("aparecer");
//     // }
// }

// function ocultarWrapper(){
//     popupEnvolver.classList.remove("aparecer")
// }

// function inserirPergunta(sorteio){
//     definirPerguntaResposta(sorteio);

//     definirDificuldadeTextoCor();
    
//     aparecerWrapper();

//     //Verifica se não possui a classe aparecer
    

    
// }

// function executarSorteio(){
//     if(contadorFuncao < qtdPerguntas){
//         sorteio = sortear();
//         console.log(contadorFuncao)
//         inserirPergunta(sorteio);

//     } else{
//         alert("Sem mais perguntas")
//     }
//     contadorFuncao++;
// }

// //
// function escutarPopupFechar(){
//     popupFechar.addEventListener("click", ocultarWrapper)

// }