'use strict';

require('./mongoose');
const QuestionModel = require('../app/models/question');
const CourseModel = require('../app/models/course');
const Cities = require('./cities');

let questions = [
    {
        question: 'Sexo',
        options: [
            { value: 'Masculino' },
            { value: 'Feminino' }
        ]
    },

    {
        question: 'Idade',
        options: [
            { value: '16 - 18' },
            { value: '19 - 21' },
            { value: '22 - 24' },
            { value: '25 - 27' },
            { value: '28 - 30' },
            { value: '31 - 33' },
            { value: '34 - 36' },
            { value: '37 - 39' },
            { value: '40 +' }
        ]
    },

    {
        question: 'Renda familiar',
        options: [
            { value: '0 - 1000' },
            { value: '1000 - 2000' },
            { value: '2000 - 3000' },
            { value: '3000 - 4000' },
            { value: '5000 - 6000' },
            { value: '6000 +' }
        ]
    },

    {
        question: 'Cidade',
        options: Cities
    },

    {
        question: 'Gosto de',
        options: [
            { value: 'Filmes' },
            { value: 'Idiomas' },
            { value: 'Jogos' },
            { value: 'Músicas' },
            { value: 'Saúde' },
            { value: 'Tecnologias' },
            { value: 'Viagens' },
            { value: 'Ginástica' },
            { value: 'Musculação' },
            { value: 'Dança' },
            { value: 'Exercícios Físicos' },
            { value: 'Praticar Esportes' }
        ]
    },

    {
        question: 'Estilo musical favorito',
        options: [
            { value: 'Axé' },
            { value: 'Bossa Nova' },
            { value: 'Clássico' },
            { value: 'Eletrônica' },
            { value: 'Folk' },
            { value: 'Forró' },
            { value: 'Funk' },
            { value: 'Gospel' },
            { value: 'MPB' },
            { value: 'Pagode' },
            { value: 'Pop' },
            { value: 'Rap' },
            { value: 'Reggae' },
            { value: 'Rock' },
            { value: 'Samba' },
            { value: 'Sertanejo' },
            { value: 'Tradicionalista' }
        ]
    },

    {
        question: 'Você está indo trabalhar. Faltam 15 minutos para seu horário de início de trabalho, e estando quase chegando no prédio da sua empresa, você se depara com uma caixa com 3 cachorros abandonados. Você (responda sinceramente, ponha-se na situação, imagine isso amanhã pela manhã)',
        options: [
            { value: 'Lamenta, mas segue sua rotina' },
            { value: 'Para e tenta achar algum lugar para deixar os cachorros' },
            { value: 'Vai para o trabalho e posta algo nas redes sociais lamentando esse tipo de fato' },
            { value: 'Vai para o trabalho e posta algo nas redes sociais pedindo ajuda' },
            { value: 'Para e tenta achar algum lugar para deixar os cachorros. No fim do dia, vai ver se eles foram tratados por alguém' },
            { value: 'Dá um jeito de pegar para você mesmo cuidar dos cachorros, leva para sua casa' }
        ]
    },

    {
        question: 'Seu chefe está ao seu lado e fala mal do time de futebol pelo qual você torce. Reação',
        options: [
            { value: 'Ignora, faz que não escutou' },
            { value: 'Tenta devolver a provocação de alguma forma meio na brincadeira' },
            { value: 'Fala mal também do time do chefe, pois afinal, ele falou mal do seu' }
        ]
    },

    {
        question: 'Como você se comporta em almoços com a família?',
        options: [
            { value: 'Almoço tranquilamente e ouço o que dizem com atenção, se alguma situação desagradável ocorrer procuro solucioná-la da melhor maneira' },
            { value: 'Entro no clima do almoço: se todos estiverem felizes, também fico e se todos ficarem irritados, compartilho mesmo sentimento' },
            { value: 'Fico feliz com a reunião e consigo me manter bem até que ocorra alguma discussão, caso aconteça prefiro ir embora' }
        ]
    },

    {
        question: 'Facilidade de comunicação',
        options: [
            { value: 'Fico tenso(a) quando tenho que explicar algo em público' },
            { value: 'Não consigo falar em público, fico **muito** tenso(a)' },
            { value: 'Não digo que adore, mas me viro quando preciso falar em público' },
            { value: 'Falo bem, tranquilamente, não vejo nada de mais em ter que falar em público' }
        ]
    },

    {
        question: 'Você prefere ser visto como',
        options: [
            { value: 'Constante' },
            { value: 'Imprevisível' }
        ]
    },

    {
        question: 'Você tende a gastar dinheiro',
        options: [
            { value: 'Muito cuidadosamente' },
            { value: 'De forma impulsiva' }
        ]
    },

    {
        question: 'Rede social favorita',
        options: [
            { value: 'Facebook' },
            { value: 'Google+' },
            { value: 'Instagram' },
            { value: 'Pinterest' },
            { value: 'Snapchat' },
            { value: 'Twitter' },
            { value: 'Não possuo' }
        ]
    },

    {
        question: 'Visão política',
        options: [
            { value: 'Acredito que o mercado deva se regular totalmente sozinho. Fornecimento de luz elétrica, de água, os bancos, estradas, hospitais, presídios, etc., devem ser de controle de empresas privadas. Nenhum desses serviços deve ser administrado pelo governo, e os preços devem ser liberados e controlados pelo mercado e acionistas' },
            { value: 'Acredito que alguns setores ou serviços devem ser controlados pelo governo. Luz, água e produção de gás e combustíveis por exemplo, devem ser empresas do governo' },
            { value: 'A polícia deve intervir mais em questões como manifestações nas ruas e nas escolas, nos casos de greve. Não devem ser permitidas greves gerais em colégios, muito menos "ocupações" por parte de alunos' },
            { value: 'Acredito que cada pessoa, independentemente do local e das condições da família onde nasceu e se criou, devem ter as mesmas formas de acesso à concursos públicos e universidades por exemplo. Também não vejo motivo para a existência de ajudas governamentais financeiras a quem quer que seja, pois cada pessoa é livre para decidir e construir suas condições de vida... e se esta pessoa está mal de vida, foi por escolha própria' },
            { value: 'Não possuo' }
        ]
    },

    {
        question: 'Esporte favorito',
        options: [
            { value: 'Atletismo' },
            { value: 'Automobilismo' },
            { value: 'Basquete' },
            { value: 'Ciclismo' },
            { value: 'Futebol' },
            { value: 'Handball' },
            { value: 'Lutas' },
            { value: 'Motociclismo' },
            { value: 'Natação' },
            { value: 'Paddle' },
            { value: 'Tênis' },
            { value: 'Vôlei' },
            { value: 'Não gosto' },
            { value: 'Dança' }
        ]
    },

    {
        question: 'No seu dia a dia, você tem facilidade de lidar com:',
        options: [
            { value: 'Pessoas' },
            { value: 'Números' },
            { value: 'Máquinas' },
            { value: 'Natureza' },
            { value: 'Animais' },
            { value: 'Arte' },
            { value: 'Religião' }
        ]
    },

    {
        question: 'Espero que daqui a dez anos eu seja um profissional:',
        options: [
            { value: 'Reconhecido e valorizado no mercado' },
            { value: 'Sério, dando continuidade ao trabalho dos meus pais' },
            { value: 'Atuante em minha comunidade' },
            { value: 'Realizado e fazendo aquilo que gosto' },
            { value: 'Bem sucedido financeiramente' }
        ]
    },

    {
        question: 'Admiro profissionais que:',
        options: [
            { value: 'São muito bons e sempre estão envolvidos com trabalhos voluntários' },
            { value: 'Seguem a tradição profissional da família e têm sucesso' },
            { value: 'São considerados os melhores na sua profissão' },
            { value: 'Sentem-se felizes e plenamente satisfeitos com seu trabalho' },
            { value: 'Fazem sucesso e ficam ricos com seu trabalho' }
        ]
    },

    {
        question: 'Em um ambiente onde você não conhece ninguém, você costuma:',
        options: [
            { value: 'Ficar em um lugar isolado.' },
            { value: 'Conversar com alguém que possa lhe introduzir a um grupo.' },
            { value: 'Curtir sozinho' },
            { value: 'Se socializar e conquistar amigos.' },
            { value: 'Se sentir incomodado por estar sozinho e vai embora.' }
        ]
    },

    {
        question: 'Você se considera religioso?',
        options: [
            { value: 'Sim, bastante' },
            { value: 'Sim, mas não praticante da minha religião' },
            { value: 'Sim, apesar de não seguir nenhuma religião, e sim minhas próprias ideias a respeito de religiosidade' },
            { value: 'Não. Sou Agnóstico (para os agnósticos, a razão humana não possui capacidade de fundamentar racionalmente a existência de Deus)' },
            { value: 'Não. Sou Ateu (não crê em Deus ou em qualquer ser superior)' }
        ]
    }
];

let courses = [
    { name: 'Administração' },
    { name: 'Ciências Contábeis' },
    { name: 'Design' },
    { name: 'Direito' },
    { name: 'Enfermagem' },
    { name: 'Engenharia de Produção' },
    { name: 'Gestão Comercial' },
    { name: 'Gestão de Qualidade' },
    { name: 'História' },
    { name: 'Jogos Digitais' },
    { name: 'Letras' },
    { name: 'Matemática' },
    { name: 'Pedagogia' },
    { name: 'Psicologia' },
    { name: 'Publicidade e Propaganda' },
    { name: 'Relações Públicas' },
    { name: 'Sistemas de Informação' },
    { name: 'Sistemas para Internet' },
    { name: 'Turismo' },
    { name: 'Jornalismo' }
];

const cb = err => {
    if (err) return console.log('ERR: ', err);
    console.log('DONE');
};

QuestionModel.create(questions, cb);
CourseModel.create(courses, cb)
