/* =========================================
   1. BANCO DE DADOS DOS PROJETOS
   ========================================= */
const dadosProjetos = [
    // PROJETO 0 (Camélia)
    {
        titulo: "Casa Camélia",
        subtitulo: "Arquitetura Orgânica & Conforto Bioclimático",
        corDestaque: "#e9b2bd",
        corFundo: "#5c3e46",
        corTexto: "#fcedf0",
        conceito: 'Um refúgio para almas jovens e notívagas. Um espaço que vibra entre a tranquilidade íntima e o calor das festas de família. \n\n"De um traço nasce a arquitetura. E quando ele é bonito e cria surpresa, ela pode atingir, sendo bem conduzida, o nível superior de uma obra de arte." - Oscar Niemeyer',
        imagemMoodboard: "assets/Camelia/Inspiracao_Camelia.jpeg",
        imagemCapa: "assets/Camelia/Render_Tarde_Externo.jpeg",
        ano: "2025 (4º Semestre)",
        tipologia: "Edificação de Uso Misto com foco no uso residencial unifamiliar.",
        softwares: [
            "SketchUp", 
            "AutoCAD", 
            "Gemini"
        ],
        desafio: "Projetar um residencial unifamiliar com alguma utilização de uso misto, com enfoque em projetos integrados ao Conforto, Bioclimatismo e Sustentabilidade Ambiental.",
        inspiracao: "Símbolo de admiração e perfeição, a Camélia empresta suas curvas para dar forma a este lar. A planta circular evoca o abraço das pétalas, enquanto a integridade da estrutura reflete a característica única da flor: a união indissociável entre pétala e cálice. Um espaço de ternura desenhado para um casal cuja essência é, acima de tudo, permanecer juntos.",
        solucao: "A Casa Camélia harmoniza a estética orgânica com a eficiência bioclimática exigida para a Zona 3. Através de estratégias passivas como o teto verde, a ventilação cruzada e a alta permeabilidade do solo, o projeto garante conforto térmico superior e sustentabilidade, criando um refúgio que une tecnologia, natureza e afeto em total simbiose com o clima local.",
        imagensGaleria: [
            "assets/Camelia/Apresentacao_Camelia.pdf", 
            "assets/Camelia/Sintese_das_estrategias_bioclimaticas_camelia.pdf",
            "assets/Camelia/Atelie_4-Pavimento_Terreo-1_150-A3-420x297.pdf",
            "assets/Camelia/Atelie_4-Pavimento_Superior-1_150-A3-420x297.pdf",
            "assets/Camelia/Atelie_4-Pavimento_Inferior-1_150-A3-420x297.pdf",
            "assets/Camelia/Render_Dia_Externo.jpeg", 
            "assets/Camelia/Render_Dia_Externo_Lateral.jpeg", 
            "assets/Camelia/Render_Noite_Externo.jpeg", 
            "assets/Camelia/Render_Noite_Externo_Lateral.jpeg", 
            "assets/Camelia/Render_Tarde_Externo.jpeg"
        ]
    },
    // PROJETO 1 (Arquitetura, Romance e Tijolo)
    {
        titulo: "Arquitetura, Romance e Tijolo",
        subtitulo: "Alvenaria Estrutural & Modulação Cerâmica",
        corDestaque: "#c29674",
        corFundo: "#7a3a23",
        corTexto: "#f7f0eb",
        conceito: "Onde o tempo desacelera entre texturas rústicas e o horizonte catarinense. Um convite para almas que buscam o silêncio do inverno no calor de um abrigo esculpido à mão. \n\n \"Cada material tem as suas características específicas que temos de entender se os queremos usar. Por outras palavras, nenhum design é possível até que todos os materiais que você projeta sejam totalmente compreendidos.\" - Luwig Mies Van Der Rohe.",
        imagemMoodboard: "assets/Tijolo/Inspiracao_Tijolo.jpg",
        imagemCapa: "assets/Tijolo/Render_Dia_Frontal.jpeg", 
        ano: "2025 (4° Semestre - Sistemas Construtivos)",
        tipologia: "Residencial - Hospedagem",
        softwares: [
            "SketchUp", 
            "AutoCAD", 
            "Lumion"
        ],
        desafio: "Projetar uma edificação modular de 40m² utilizando especificamente o tijolo cerâmico como material construtivo.",
        inspiracao: " Inspirado na honestidade da alvenaria convencional, o projeto nasce do estudo profundo da fabricação do tijolo cerâmico para transformar o rigor técnico em um elemento de conforto térmico e expressão estética.",
        solucao: "O projeto foi executado com o uso de bloco cerâmico estrutural, otimizando a montagem através de uma malha modular que minimiza desperdícios e organiza o canteiro de obras. A base de alvenaria aproveita a resistência do material para sustentar o sistema de telhado A-frame autoportante, que integra estrutura e fechamento, dispensando pilares internos e reforçando a geometria da cabana. A escolha do barro cozido garante alta inércia térmica, solução passiva fundamental para o conforto interno diante do rigor climático da Serra Catarinense.",
        imagensGaleria: [
            "assets/Tijolo/Planta_Baixa.jpg", 
            "assets/Tijolo/Planta_Cobertura.jpg", 
            "assets/Tijolo/corteAA.jpg",
            "assets/Tijolo/corteBB.jpg",
            "assets/Tijolo/CorteBB2.jpg",
            "assets/Tijolo/Fachada_Frontal.jpg",
            "assets/Tijolo/Fachada_Lateral_Direita.jpg",
            "assets/Tijolo/Fachada_Lateral_Esquerda.jpg",
            "assets/Tijolo/Fachada_Posterior.jpg",
            "assets/Tijolo/Caderno_Tijolos.pdf",
            "assets/Tijolo/Render_Dia_Frontal.jpeg",
            "assets/Tijolo/Render_Dia_Lateral_Direita_Perspectiva.jpeg",
            "assets/Tijolo/Render_Dia_Lateral_Esquerda_Perspectiva.jpeg",
            "assets/Tijolo/Render_Dia_Traseiro.jpeg",
            "assets/Tijolo/Render_Neve_Frontal.jpeg",
            "assets/Tijolo/Render_Noite_Frontal.jpeg",
        ]
    },
    // PROJETO 2 (Refúgio Tropical)
    {
        titulo: "Planejamento Urbano e Refúgio Tropical",
        subtitulo: "Revitalização e Reutilização dos espaços públicos",
        corDestaque: "#628f31",
        corFundo: "#33461d",
        corTexto: "#eaf4df",
        conceito: "Um oásis de brasilidade no centro urbano, um refúgio escondido no coração da cidade, onde a alma brasileira vibra em cada canto. Aqui, o clima é quente, a música é boa e a energia contagia. Um ambiente acolhedor que mistura a hospitalidade típica brasileira. \n\n \"A arquitetura é sempre uma modificação temporária do espaço, da cidade, da paisagem. Achamos que é permanente. Mas nós nunca sabemos.\” - Jean Nouvel",
        imagemMoodboard: "assets/Tropical/Inspiracao_Tropical.jpeg",
        imagemCapa: "assets/Tropical/Render_Capa.png", 
        ano: "2024 (3º Semestre / Ateliê III)",
        tipologia: "Revitalização Urbana e Uso Comercial",
        softwares: [
            "AutoCAD", 
            "SketchUp",
            "Maquete Física"
        ],
        desafio: "Duas abordagens, duas escalas. Na primeira etapa trabalhamos a escala macro, a revitalização e revalorização do espaço público, a Rua Presidente Getulio Vargas, localizada no centro de Blumenau, uma rua privilegiada pela localização e esquecida pelo público. Na segunda etapa, a escala micro, o desafio era desenvolver uma edificação de uso comercial com metragem máxima de 100m² e com acessibilidade como principal diretriz, que trouxesse vitalidade para região pouco movimentada, onde foram trabalhados os lotes da Rua Presidente Getúlio Vargas, estudada na primera etapa, levando em consideração a revitalização proposta anteriormente e as edificações de longa permanência.",
        inspiracao: "A proposta floresce como um manifesto de brasilidade, uma arquitetura que não apenas ocupa o solo, mas respira e pulsa em harmonia com a luz tropical. O conceito celebra a exuberância da nossa flora como um elemento de cura, transformando o lote em um respiro verde onde a sombra e o silêncio convidam a alma a desacelerar. É um convite ao pertencimento que exalta a essência do nosso clima, convertendo o cenário urbano em um destino de afeto e permitindo que o público redescubra o prazer de habitar o Brasil sob o abrigo de um oásis particular.",
        solucao: "A viabilidade técnica do Refúgio Tropical foi alcançada através da plena adequação às normas de acessibilidade universal, garantindo um percurso inclusivo que conecta o lote comercial à revalorização do espaço público da Rua Getúlio Vargas. A solução aplicou um telhado verde como estratégia de infraestrutura azul e verde, otimizando o conforto térmico passivo e criando o respiro necessário em meio à densidade central de Blumenau. Essa configuração não apenas mitiga as ilhas de calor, mas materializa o conceito de vitalidade urbana proposto, transformando a edificação em um oásis que convida o público a reocupar esta região.",
        imagensGaleria: [
            "assets/Tropical/Apresentacao_Atelie_03.pdf",
            "assets/Tropical/Render_Capa.png", 
            "assets/Tropical/Render_Entrada_Lateral.jpg",
            "assets/Tropical/Render_Fundos.png",
            "assets/Tropical/Render_Entrada_Fundos.png",
            "assets/Tropical/Render_Entrada.png",            
            "assets/Tropical/Maquete_Rua_01.jpeg", 
            "assets/Tropical/Maquete_Rua_02.jpeg",
            "assets/Tropical/Maquete_Rua_03.jpeg",  
            "assets/Tropical/Maquete_Rua_04.jpeg",     
            "assets/Tropical/Maquete_Rua_05.jpeg",    
            "assets/Tropical/Maquete_Rua_06.jpeg",    
            "assets/Tropical/Maquete_Rua_07.jpeg"   
        ]
    },
    // PROJETO 3 (Topologia)
    {
        titulo: "Topografia e Geologia Aplicada",
        subtitulo: "Estudo de Relevo, Corte, Aterro e Maquete Física",
        
        // KIT DE CORES TROPICAL/TERRENO (Inspirado nas curvas de nível verdes da maquete)
        corDestaque: "#b86d35", // Verde esmeralda/folha vibrante
        corFundo: "#4b220f",    // Fundo verde muito escuro (quase preto, cor de floresta densa)
        corTexto: "#e6f2eb",    // Branco esverdeado suave para leitura
        
        conceito: "Compreender que a terra não como uma tela em branco, mas como um volume vivo que dita as regras, os limites e as possibilidades da implantação arquitetônica. \n\n \"Conhecer o solo é o primeiro passo para que o design não seja apenas beleza, mas permanência e estabilidade.\" Autor Desconhecido.",
        
        // MOODBOARD: Uma foto focada nos detalhes das curvas cortadas a laser
        imagemMoodboard: "assets/Topografia/Topografia_mood.jpg",
        
        // CAPA: A foto geral da maquete vista de cima/diagonal
        imagemCapa: "assets/Topografia/maquete-Capa.jpeg", 
        
        ano: "2025 (3º Semestre)",
        tipologia: "Estudo Topográfico",
        softwares: [
            "AutoCAD", 
            "Corte a Laser", 
            "Trabalho Manual"
        ],
        
        desafio: "O desafio proposto foi dominar a modificação do relevo natural. Foi necessário selecionar um terreno acidentado no município de Blumenau (área superior a 1.000 m²) e projetar a implantação de uma plataforma plana que ocupasse no mínimo 20% da área. O maior rigor técnico exigido foi o cálculo exato para gerar alturas semelhantes entre os volumes de corte e de aterro, garantindo eficiência e economia na movimentação de terra.",
        
        solucao: "A partir do levantamento aerofotogramétrico, o terreno foi modelado no AutoCAD. As curvas de nível foram retificadas, definindo com precisão as cristas de corte e pés de aterro. Para a representação, optou-se pela maquete física: o arquivo digital foi rigorosamente preparado, separando as curvas e as linhas de guia (impressão e corte) em 'layers' distintos para a máquina de corte a laser. A montagem em chapas sobrepostas e a pintura em degradê transformaram dados topográficos áridos em uma representação tátil impressionante.",
        
        imagensGaleria: [
            "assets/Topografia/maquete-angulo1.jpeg", 
            "assets/Topografia/maquete-angulo2.jpeg",
            "assets/Topografia/maquete-Superior.jpeg",
            "assets/Topografia/maquete-Capa.jpeg",  
        ]
    },
    // PROJETO 4 (Sensacoes)
    {
        titulo: "Planos",
        subtitulo: "Sensações e Percepções do Espaço através da Arquitetura",
        
        // KIT DE CORES: ABSTRAÇÃO E LUZ (Índigo e Violeta)
        corDestaque: "#ff9d00", // Violeta luminoso/neon suave (representa a luz e a abstração)
        corFundo: "#b43636",    // Azul noturno/índigo muito escuro (cria profundidade)
        corTexto: "#ffeeee",    // Branco com um toque levíssimo de azul/roxo
        
        conceito: "A arquitetura é a arte de moldar o espaço para criar experiências sensoriais que transcendem a mera funcionalidade. Este projeto é uma exploração das sensações e percepções do espaço, onde cada curva, cada plano e cada material são cuidadosamente escolhidos para evocar emoções e estimular os sentidos. \n\n \"A arquitetura é a música petrificada, onde as formas e os volumes compõem uma sinfonia visual que ressoa na alma de quem a habita.\" - Autor Desconecido.",
        
        imagemMoodboard: "assets/Sensacoes/Inspiracao_Sensacoes.jpeg",
        
        imagemCapa: "assets/Sensacoes/Maquete_Capa.png", 
        
        ano: "2024 (2º Semestre)",
        tipologia: "Sensações",
        softwares: [
            "Corte a Laser", 
            "Trabalho Manual"
        ],
        
        desafio: "Criar e construir uma estrutura espacia abstrata composta por planos (reais ou virtuais), cuja o resultado gere no mínimo 5 boas sensações espaciais diferentes. Explorando diferentes recursos de opacidade, trasparencia, cores e texturas.",

        imagensGaleria: [
            "assets/Sensacoes/Maquete_Capa.png",
            "https://drive.google.com/file/d/1obhEfe3407uqcvp3daLtmXxyv41awn8A/view?usp=sharing", 
        ]
    },
    // PROJETO 5 (Biônica)
    {
        titulo: "Biomimética",
        subtitulo: "Forma, composição e espaços na Arquitetura.",
        
        // KIT DE CORES: PÂNTANO E BIOLOGIA (Tons de Verde Réptil)
        corDestaque: "#6b8e23", // Verde "jacaré" / folha nova
        corFundo: "#dac153",    // Verde selva/pântano muito escuro e denso
        corTexto: "#1c1700",    // Branco esverdeado suave
        
        conceito: "Desenvolver a capacidade de criação de formas e sua estruturação através da observação de características sigificativas.\n\n \"As respostas as nossas perguntas estão em todad parte, só precisamos mudar a lente a qual vemos o mundo\" - Janine Benyus",
        
        imagemMoodboard: "assets/Jacare/Inspiracao_Jacare.jpeg",
        
        imagemCapa: "assets/Jacare/Maquete_Superior.jpeg", 
        
        ano: "2024 (2º Semestre)",
        tipologia: "Biônica",
        softwares: [
            "Corte a Laser", 
            "Trabalho Manual"
        ],
        
        desafio: "Criar e construir uma estrutura espacia abstrata utilizando os conceitos da bionica e da abstração da forma, desenvolvendo um modelo biológico que apresente caracteristicas significativas de um ser vivo a definir.",

        imagensGaleria: [
            "assets/Jacare/Maquete_Superior.jpeg",
            "https://drive.google.com/file/d/1OvUtdh3pboxPuydowVRtwIsu31ZtQ26D/view?usp=sharing", 
        ]
    },
    // PROJETO 6 (Sustentabilidade do Material)
    {
        titulo: "Sustentabilidade do Material",
        subtitulo: "Escola isolada sustentável",
        
       // KIT DE CORES: BAMBU E TERRA (Ocre e Marrom Quente)
        corDestaque: "#593617", // Amarelo Bambu / Ocre (traz luz e aspecto natural)
        corFundo: "#e3d3c1",    // Marrom terra profunda / argila escura
        corTexto: "#2b1a0a",    // Off-white quente (lembra papel reciclado/palha)
        
        conceito: "As escolas isoladas no Brasil estão localizadas em regiões remotas, como áreas rurais e de difícil acesso, desempenhando um papel importante na educação de crianças e adolecentes.\n\"Sustentabilidade é toda ação destinada a manter as condições energéticas informacionais físico-químicas que sustentam todos os seres, especialmente a Terraviva, a comunidade devida e a vida humana.\" - Leonardo Boff",
        
        imagemMoodboard: "assets/Escola/Inspiracao_Escola.jpeg",
        
        imagemCapa: "assets/Escola/Maquete_Perspectiva_Direita.jpeg", 
        
        ano: "2024 (2º Semestre)",
        tipologia: "Escola",
        softwares: [
            "Trabalho Manual"
        ],
        
        desafio: "Desenvolver uma maquete utilizando com o principal material o bambu e resgatar as técnicas construtivas indígeno brasileito.",

        imagensGaleria: [
            "assets/Escola/Maquete_Frontal.jpeg",
            "assets/Escola/Maquete_Lateral_Esquerda.jpeg",
            "assets/Escola/Maquete_Perspectiva_Direita.jpeg",
            "assets/Escola/Maquete_Perspectiva_Esquerda.jpeg",
        ]
    },
    // PROJETO 7 (Le Corbusier)
    {
        titulo: "Le Corbusier",
        subtitulo: "Cabanon de Le Corbusier (1952)",
        
        // KIT DE CORES: MODERNISMO (Concreto Aparente e Vermelho Primário)
        corDestaque: "#c94b36", // Vermelho clássico de Le Corbusier / Policromia arquitetônica
        corFundo: "#2b2c2e",    // Cinza grafite escuro (representando o concreto bruto)
        corTexto: "#f0f0f0",    // Branco puro e limpo, bem modernista
        
        conceito: "Vista como uma disciplina que prospera inovação, a arquitetura avança por meio de um acúmulo de concepções do que pela geração subta de novas ideeias.\n\"A casa é uma máquina de morar\ - Le Corbusier",
        
        imagemMoodboard: "assets/Le_Corbusier/Inspiracao_Le_Corbusier.jpeg",
        
        imagemCapa: "assets/Le_Corbusier/Maquete_Capa.png", 
        
        ano: "2024 (1º Semestre)",
        tipologia: "Diorama",
        softwares: [
            "Trabalho Manual"
        ],
        
        desafio: "Omenagiar um arquiteto cujo o trabalho construido demonstra uma combinação das qualidade de talento, visão e compromisso que produziu contribuições consistentes e significativas para a humanidade e o ambiente construido através da arte da arquitetura. Desenvolvendo um diorama tendo como base as princiáis características do estilo arquitetônico do profissional estudado.",

        imagensGaleria: [
            "assets/Le_Corbusier/Maquete_Capa.png",
            "assets/Le_Corbusier/Conceito.jpeg",
            "https://drive.google.com/file/d/1YwYHsdIhQbMxceGpLv5yueik2C7y7KKu/view?usp=sharing"
        ]
    },
    
];