'use strict';

require('./mongoose');
const QuestionModel = require('../app/models/question');

let questions = [
    {
        question: 'Curso',
        options: [
            'Administração',
            'Ciências Contábeis',
            'Design',
            'Direito',
            'Enfermagem',
            'Engenharia de Produção',
            'Gestão Comercial',
            'Gestão de Qualidade',
            'História',
            'Jogos Digitais',
            'Letras',
            'Matemática',
            'Pedagogia',
            'Psicologia',
            'Publicidade e Propaganda',
            'Relações Públicas',
            'Sistemas de Informação',
            'Sistemas para Internet',
            'Turismo',
            'Jornalismo'
        ]
    },

    {
        question: 'Gostaria de trocar de curso?',
        options: [
            'Não',
            'Administração',
            'Ciências Contábeis',
            'Design',
            'Direito',
            'Enfermagem',
            'Engenharia de Produção',
            'Gestão Comercial',
            'Gestão de Qualidade',
            'História',
            'Jogos Digitais',
            'Letras',
            'Matemática',
            'Pedagogia',
            'Psicologia',
            'Publicidade e Propaganda',
            'Relações Públicas',
            'Sistemas de Informação',
            'Sistemas para Internet',
            'Turismo',
            'Jornalismo'
        ]
    },

    {
        question: 'Sexo',
        options: [
            'Masculino',
            'Feminino'
        ]
    },

    {
        question: 'Idade',
        options: [
            '16 - 18',
            '19 - 21',
            '22 - 24',
            '25 - 27',
            '28 - 30',
            '31 - 33',
            '34 - 36',
            '37 - 39',
            '40 +'
        ]
    },

    {
        question: 'Renda familiar',
        options: [
            '0 - 1000',
            '1000 - 2000',
            '2000 - 3000',
            '3000 - 4000',
            '5000 - 6000',
            '6000 +'
        ]
    },

    {
        question: 'Cidade',
        options: [
        ]
    },

    {
        question: 'Gosto de',
        options: [
            'Filmes',
            'Idiomas',
            'Jogos',
            'Músicas',
            'Saúde',
            'Tecnologias',
            'Viagens',
            'Ginástica',
            'Musculação',
            'Dança',
            'Exercícios Físicos',
            'Praticar Esportes'
        ]
    },

    {
        question: 'Estilo musical favorito',
        options: [
            'Axé',
            'Bossa Nova',
            'Clássico',
            'Eletrônica',
            'Folk',
            'Forró',
            'Funk',
            'Gospel',
            'MPB',
            'Pagode',
            'Pop',
            'Rap',
            'Reggae',
            'Rock',
            'Samba',
            'Sertanejo',
            'Tradicionalista'
        ]
    },

    {
        question: 'Você está indo trabalhar. Faltam 15 minutos para seu horário de início de trabalho, e estando quase chegando no prédio da sua empresa, você se depara com uma caixa com 3 cachorros abandonados. Você (responda sinceramente, ponha-se na situação, imagine isso amanhã pela manhã)',
        options: [
            'Lamenta, mas segue sua rotina',
            'Para e tenta achar algum lugar para deixar os cachorros',
            'Vai para o trabalho e posta algo nas redes sociais lamentando esse tipo de fato',
            'Vai para o trabalho e posta algo nas redes sociais pedindo ajuda',
            'Para e tenta achar algum lugar para deixar os cachorros. No fim do dia, vai ver se eles foram tratados por alguém',
            'Dá um jeito de pegar para você mesmo cuidar dos cachorros, leva para sua casa'
        ]
    },

    {
        question: 'Seu chefe está ao seu lado e fala mal do time de futebol pelo qual você torce. Reação',
        options: [
            'Ignora, faz que não escutou',
            'Tenta devolver a provocação de alguma forma meio na brincadeira',
            'Fala mal também do time do chefe, pois afinal, ele falou mal do seu'
        ]
    },

    {
        question: 'Como você se comporta em almoços com a família?',
        options: [
            'Almoço tranquilamente e ouço o que dizem com atenção, se alguma situação desagradável ocorrer procuro solucioná-la da melhor maneira',
            'Entro no clima do almoço: se todos estiverem felizes, também fico e se todos ficarem irritados, compartilho mesmo sentimento',
            'Fico feliz com a reunião e consigo me manter bem até que ocorra alguma discussão, caso aconteça prefiro ir embora'
        ]
    },

    {
        question: 'Facilidade de comunicação',
        options: [
            'Fico tenso(a) quando tenho que explicar algo em público',
            'Não consigo falar em público, fico **muito** tenso(a)',
            'Não digo que adore, mas me viro quando preciso falar em público',
            'Falo bem, tranquilamente, não vejo nada de mais em ter que falar em público'
        ]
    },

    {
        question: 'Você prefere ser visto como',
        options: [
            'Constante',
            'Imprevisível'
        ]
    },

    {
        question: 'Você tende a gastar dinheiro',
        options: [
            'Muito cuidadosamente',
            'De forma impulsiva'
        ]
    },

    {
        question: 'Rede social favorita',
        options: [
            'Facebook',
            'Google+',
            'Instagram',
            'Pinterest',
            'Snapchat',
            'Twitter',
            'Não possuo'
        ]
    },

    {
        question: 'Visão política',
        options: [
            'Acredito que o mercado deva se regular totalmente sozinho. Fornecimento de luz elétrica, de água, os bancos, estradas, hospitais, presídios, etc., devem ser de controle de empresas privadas. Nenhum desses serviços deve ser administrado pelo governo, e os preços devem ser liberados e controlados pelo mercado e acionistas',
            'Acredito que alguns setores ou serviços devem ser controlados pelo governo. Luz, água e produção de gás e combustíveis por exemplo, devem ser empresas do governo',
            'A polícia deve intervir mais em questões como manifestações nas ruas e nas escolas, nos casos de greve. Não devem ser permitidas greves gerais em colégios, muito menos "ocupações" por parte de alunos',
            'Acredito que cada pessoa, independentemente do local e das condições da família onde nasceu e se criou, devem ter as mesmas formas de acesso à concursos públicos e universidades por exemplo. Também não vejo motivo para a existência de ajudas governamentais financeiras a quem quer que seja, pois cada pessoa é livre para decidir e construir suas condições de vida... e se esta pessoa está mal de vida, foi por escolha própria',
            'Não possuo'
        ]
    },

    {
        question: 'Esporte favorito',
        options: [
            'Atletismo',
            'Automobilismo',
            'Basquete',
            'Ciclismo',
            'Futebol',
            'Handball',
            'Lutas',
            'Motociclismo',
            'Natação',
            'Paddle',
            'Tênis',
            'Vôlei',
            'Não gosto',
            'Dança'
        ]
    },

    {
        question: 'No seu dia a dia, você tem facilidade de lidar com:',
        options: [
            'Pessoas',
            'Números',
            'Máquinas',
            'Natureza',
            'Animais',
            'Arte',
            'Religião'
        ]
    },

    {
        question: 'Espero que daqui a dez anos eu seja um profissional:',
        options: [
            'Reconhecido e valorizado no mercado',
            'Sério, dando continuidade ao trabalho dos meus pais',
            'Atuante em minha comunidade',
            'Realizado e fazendo aquilo que gosto',
            'Bem sucedido financeiramente'
        ]
    },

    {
        question: 'Admiro profissionais que:',
        options: [
            'São muito bons e sempre estão envolvidos com trabalhos voluntários',
            'Seguem a tradição profissional da família e têm sucesso',
            'São considerados os melhores na sua profissão',
            'Sentem-se felizes e plenamente satisfeitos com seu trabalho',
            'Fazem sucesso e ficam ricos com seu trabalho'
        ]
    },

    {
        question: 'Em um ambiente onde você não conhece ninguém, você costuma:',
        options: [
            'Ficar em um lugar isolado.',
            'Conversar com alguém que possa lhe introduzir a um grupo.',
            'Curtir sozinho',
            'Se socializar e conquistar amigos.',
            'Se sentir incomodado por estar sozinho e vai embora.'
        ]
    },

    {
        question: 'Você se considera religioso?',
        options: [
            'Sim, bastante',
            'Sim, mas não praticante da minha religião',
            'Sim, apesar de não seguir nenhuma religião, e sim minhas próprias ideias a respeito de religiosidade',
            'Não. Sou Agnóstico (para os agnósticos, a razão humana não possui capacidade de fundamentar racionalmente a existência de Deus)',
            'Não. Sou Ateu (não crê em Deus ou em qualquer ser superior)'
        ]
    }
];

QuestionModel.create(questions, err => {
    if (err) return console.log('ERR: ', err);
    console.log('DONE');
});
