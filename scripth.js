const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A Inteligência Artificial pode analisar grandes quantidades de dados em segundos, ajudando empresas, governos e pessoas a tomar decisões mais rápidas e precisas. Na sua opinião, isso é:",
        alternativas: [
            {
                texto: "Bom!",
                afirmacao: "Ajuda a resolver problemas rapidamente."
            },
            {
                texto: "Ruim!",
                afirmacao: "Pode gerar decisões automáticas sem empatia."
            }
        ]
    },
    {
        enunciado: "Com a evolução da IA, tarefas repetitivas podem ser automatizadas, liberando tempo para trabalhos criativos. Você acha que isso é:",
        alternativas: [
            {
                texto: "Vantagem.",
                afirmacao: "Dá mais tempo para atividades estratégicas."
            },
            {
                texto: "Desvantagem.",
                afirmacao: "Pode tirar empregos tradicionais."
            }
        ]
    },
    {
        enunciado: "Sistemas de IA podem aprender a partir de erros e melhorar sozinhos, o que pode gerar grandes avanços, mas também riscos. Para você, isso é:",
        alternativas: [
            {
                texto: "Seguro.",
                afirmacao: "Evolui e corrige falhas com o tempo."
            },
            {
                texto: "Perigoso.",
                afirmacao: "Pode agir de forma imprevisível."
            }
        ]
    },
    {
        enunciado: "Chatbots e assistentes virtuais já conversam de forma quase humana, influenciando opiniões e decisões. Você considera isso:",
        alternativas: [
            {
                texto: "Positivo.",
                afirmacao: "Facilita a comunicação e o atendimento."
            },
            {
                texto: "Negativo.",
                afirmacao: "Pode manipular ou confundir pessoas"
            }
        ]
    },
    {
        enunciado: "Algoritmos de IA estão sendo usados para criar imagens, músicas e textos originais, mudando a forma como consumimos e produzimos arte. Isso desperta debates sobre autoria, direitos autorais e até sobre o que significa ser criativo. Para você, isso é: ",
        alternativas: [
            {
                texto: "Revolução.",
                afirmacao: "Abre novas possibilidades criativas e acessíveis.."
            },
            {
                texto: "Ameaça.",
                afirmacao: "Pode desvalorizar o trabalho de artistas humanos.. "
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
    caixaPerguntas.textContent = "";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
