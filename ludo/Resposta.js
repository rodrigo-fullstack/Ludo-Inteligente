const popupEnvolver = document.querySelector(".popup-wrapper")
const pergunta = document.querySelector(".pergunta")
const inputResposta = document.querySelector(".entrada-resposta");
const botaoAdmitirResposta = document.querySelector(".admitir-resposta-botao")
const popupFechar = document.querySelector(".popup-close")
const popupDificuldade = document.querySelector(".popup-difficulty")

export default class RespostaControlador{

    acerto = false
    // this.areaConhecimento = "";
    sorteio = 0;
    sorteados = [];
    contadorFuncao = 0;
    timeoutId = 0;
    
    questoes = [
        {
            "pergunta": "Qual é a capital da França?",
            "resposta": "paris",
            "dificuldade": "Fácil"
        },
        {
            "pergunta": "Qual é o maior bioma brasileiro em extensão territorial?",
            "resposta": "amazônia",
            "dificuldade": "Fácil"
        },
        {
            "pergunta": "Qual expressão refere-se ao movimento político e ideológico contrário ao comunismo nos Estados Unidos, no começo da década de 50?",
            "resposta": "macartismo",
            "dificuldade": "Difícil"
        },
        {
            "pergunta": "A função f(x) = 2x - 1 é uma função de qual grau?",
            "resposta": "primeiro grau",
            "dificuldade": "Fácil"
        },
        {
            "pergunta": "EMBORA ela tenha feito o dever de casa, não foi bem na prova. Qual é o tipo da conjunção em destaque?",
            "resposta": "concessiva",
            "dificuldade": "Difícil"
        },
        {
            "pergunta": "Qual filósofo grego escreveu 'A República?'",
            "resposta": "platão",
            "dificuldade": "Média"
        },
        {
            "pergunta": "Em qual área do Brasil é comum possuir chuvas ciclônicas?",
            "resposta": "sul e sudeste",
            "dificuldade": "Média"
        },
        {
            "pergunta": "Quem foi o líder da Inconfidência Mineira?",
            "resposta": "tiradentes",
            "dificuldade": "Média"
        },
        {
            "pergunta": "Quem foi o primeiro governador-geral do Brasil?",
            "resposta": "tomé de sousa",
            "dificuldade": "Fácil"
        },
        {
            "pergunta": "Qual foi o tratado que encerrou a Primeira Guerra Mundial?",
            "resposta": "tratado de versalhes",
            "dificuldade": "Média"
        },
        {
            "pergunta": "Quem foi o imperador responsável pela construção do Coliseu em Roma?",
            "resposta": "vespasiano",
            "dificuldade": "Difícil"
        },
        {
            "pergunta": "Quem pintou a obra 'Guernica'?",
            "resposta": "picasso",
            "dificuldade": "Média"
        },
        {
            "pergunta": "Quem é o autor do livro 'Dom Casmurro'?",
            "resposta": "machado de assis",
            "dificuldade": "Fácil"
        },
        {
            "pergunta": "Qual movimento artístico é caracterizado pelo uso de formas geométricas e pela fragmentação da imagem?",
            "resposta": "cubismo",
            "dificuldade": "Fácil"
        },
        {
            "pergunta": "Qual é a forma correta do verbo “to be” na frase “She ___ a teacher”?",
            "resposta": "is",
            "dificuldade": "Média"
        },
        {
            "pergunta": "Qual é a forma correta do verbo 'work' na frase 'She ___ in a town.'?",
            "resposta": "works",
            "dificuldade": "Média"
        },
        {
            "pergunta": "Qual é o termo usado para descrever a capacidade de um atleta de se concentrar e manter o foco durante a competição?",
            "resposta": "atenção",
            "dificuldade": "Média"
        },
        {
            "pergunta": "Crie um verbo a partir do Substantivo 'vergonha' no processo de parassíntese",
            "resposta": "envergonhar",
            "dificuldade": "Difícil"
        },
        {
            "pergunta": "Quanto vale 219234^0?",
            "resposta": "1",
            "dificuldade": "Média"
        },
        {
            "pergunta": "Se um triângulo tem lados de 3 cm, 4 cm e 5 cm, qual é o perímetro do triângulo? (Digite sem unidade de medida)",
            "resposta": "12",
            "dificuldade": "Média"
        },
        {
            "pergunta": "Qual é o resultado de 15 ÷ 3 + 4 * 2?",
            "resposta": "13",
            "dificuldade": "Fácil"
        },
        {
            "pergunta": "Qual é a área de um círculo com raio de 7 cm (use π≈3 e Area = π*r²)?",
            "resposta": "147",
            "dificuldade": "Difícil"
        },
        {
            "pergunta": "Se um ângulo de um triângulo é de 90 graus e os outros dois ângulos são iguais, qual é o valor de cada um desses ângulos? (Coloque somente o número)",
            "resposta": "45",
            "dificuldade": "Média"
        },
    
        {
            "pergunta": "Qual o resultado da expressão 3 + 4!",
            "resposta": "27",
            "dificuldade": "Difícil"
        },
        {
            "pergunta": "Qual é a fórmula química do dióxido de carbono?",
            "resposta": "co2",
            "dificuldade": "Fácil"
        },
        {
            "pergunta": "Qual é a camada mais externa da Terra?",
            "resposta": "crosta",
            "dificuldade": "Média"
        },
        {
            "pergunta": "Qual é o pH de uma solução neutra?",
            "resposta": "7",
            "dificuldade": "Fácil"
        },
        {
            "pergunta": "Qual é a terceira lei de Newton?",
            "resposta": "ação e reação",
            "dificuldade": "Média"
        },
        {
            "pergunta": "Qual é o elemento químico representado pelo símbolo “Ag”?",
            "resposta": "prata",
            "dificuldade": "Média"
        },
        {
            "pergunta": "Qual é a organela responsável pela produção de energia na célula?",
            "resposta": "mitocôndria",
            "dificuldade": "Difícil"
        },
        {
            "pergunta": "Qual é a unidade de medida da intensidade da corrente elétrica?",
            "resposta": "ampère",
            "dificuldade": "Difícil"
        }
    ]

    qtdPerguntas = this.questoes.length;
    questao = this.questoes[0];
    passo = 0;
    tempo = 0;
    botaoAdmitirClicado = false;

    escutarPopupFechar(){
        return new Promise((resolve) =>{
            popupFechar.addEventListener("click", () => {
                clearTimeout(this.timeoutId)
                this.validarResposta()
                resolve()
            }, {once: true})

        })
    }

    
    gerarNumeroAleatorioIntervalo(min, max){
        return Math.floor(Math.random() * ((max + 1) - min) + min);
    }

    sortear(){
        let numSorteio = 0;
        //Estrutura de Repetição que impede de vir perguntas iguais    
        while(true){
            numSorteio = this.gerarNumeroAleatorioIntervalo(0, this.qtdPerguntas - 1);
            //vetor.indexOf(elemento) != -1 também verifica se está presente
            /* Método Includes
            Verifica se possui o elemento sorteado no Array*/
            if(!this.sorteados.includes(numSorteio)){
                this.sorteados.push(numSorteio);
                break;
            }
        } 
        this.sorteio = numSorteio;
        return numSorteio;
    }

    definirPerguntaResposta(){
        this.questao = this.questoes[this.sorteio];
        pergunta.textContent = this.questao.pergunta
    }

    definirDificuldadeTextoCor(){
        console.log(this.questao.dificuldade)
        popupDificuldade.textContent = this.questao.dificuldade;
        switch(this.questao.dificuldade){
            case "Fácil":
                popupDificuldade.style.backgroundColor = "#2290FF" 
                break;
            case "Média":
                popupDificuldade.style.backgroundColor = "#6E07F5"
                break;
    
            case "Difícil":
                popupDificuldade.style.backgroundColor = "#DB1623"
                break;
        }
    }

    aparecerPopup(){
        // if(!popupEnvolver.classList.contains("aparecer")){
    
            //Como adicionar ou remover classes?
            //Vai exibir a div pergunta
            popupEnvolver.classList.add("aparecer");
        // }
    }
    fecharPopup(){
        popupEnvolver.classList.remove("aparecer")
    }

    inserirPergunta(){
        this.definirPerguntaResposta();
    
        this.definirDificuldadeTextoCor();
        
        this.aparecerPopup();
    
        //Verifica se não possui a classe aparecer
    }

    executarSorteio(){
        this.botaoAdmitirClicado = false;
        if(this.contadorFuncao < this.qtdPerguntas){
            this.sortear();
            console.log(this.contadorFuncao)
            this.inserirPergunta();
            this.determinarTempoComDificuldade();
    
        } else{
            alert("Sem mais perguntas")
        }
        this.contadorFuncao++;
    }

    // escutarBotaoResposta(){
    //     botaoAdmitirResposta.addEventListener("click", () => this.validarResposta())
    // }
    
    determinarTempoComDificuldade(){
        switch(this.questao.dificuldade){
            case "Fácil": 
                this.tempo = 20000;
                break;

            case "Média": 
                this.tempo = 40000;
                break;

            case "Difícil":
                this.tempo = 60000;
                break;
        }
        return this.tempo
    }
    validarResposta(){
        this.botaoAdmitirClicado = true;
        this.acerto = false;
        const respostaUsuario = inputResposta.value.toLowerCase();
        inputResposta.value = ""

        console.log(this.questao.resposta)
        console.log(inputResposta.value.toLowerCase())
        this.acerto = (respostaUsuario === this.questao.resposta);
        this.fecharPopup();
        // this.verificarRespostaComDificuldade();
        this.questao = null;
    }
    
    async esperarValidarResposta(){
        console.log("Esperando")

        const temporizador = this.temporizadorValidarResposta();
    
        const cliqueAdmitir = this.escutarBotaoAdmitirResposta();
    
        //const cliqueFechar = this.escutarPopupFechar();

        //Espera o que acontecer primeiro
        await Promise.race([temporizador, cliqueAdmitir]);
    }
    
    escutarBotaoAdmitirResposta(){
        return new Promise((resolve) => {
            botaoAdmitirResposta.addEventListener("click", () =>{
                clearTimeout(this.timeoutId)
                this.validarResposta()
                resolve();
            }, {once: true})

            //popupFechar.addEventListener("click", () => {
            //     clearTimeout(this.timeoutId)
            //     this.validarResposta()
            //     resolve()
            // }, {once: true})
        })
        //Once especifica que é executado somente uma vez
    }
    
    temporizadorValidarResposta(){
        return new Promise(
            (resolve) => {
                this.timeoutId = setTimeout(
                    () => {
                        this.validarResposta()
                        resolve();
                    }, this.determinarTempoComDificuldade()
                )
            }
        )
    }

    // verificarRespostaComDificuldade(){
    //     let mensagem = ""
    //     this.passo = 0;
    //     if(this.acerto){
    //         mensagem = "Você acertou... "
    //         switch(this.questao.dificuldade){
    //             case "Fácil": 
    //             mensagem += "uma questão fácil";
    //             this.passo = 8
    //             break;
                
    //             case "Média":
    //             mensagem += "uma questão média";
    //             this.passo = 10
    //             break;
                    
    //             case "Difícil":
    //             mensagem += "uma questão difícil";
    //             this.passo = 12;
    //             break;
    //             }
    //             mensagem += ".";
    //             // this.passo = passo;
    //             } else{
    //                 mensagem = "Você errou!"
    //             }
    //             alert(mensagem)
    //         }


    }
        