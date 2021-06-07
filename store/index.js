import imgHome from '@/assets/img/mudese.png';
import imgPsychologist from '@/assets/img/psychologist.png';
import imgMasterDegree from '@/assets/img/master-degree.png';
import imgUniversity from '@/assets/img/university.png';
import imgTeacher from '@/assets/img/teacher.png';
import imgBook from '@/assets/img/book.png';
import imgBrain from '@/assets/img/brain.png';
import imgPerson from '@/assets/img/natanna.png';
import imgClinic1 from '@/assets/img/clinic-1.jpg';
import imgClinic2 from '@/assets/img/clinic-2.jpg';
import imgClinic3 from '@/assets/img/clinic-3.jpg';
import imgClinic4 from '@/assets/img/clinic-4.jpg';
import imgClinic5 from '@/assets/img/clinic-5.jpg';
import imgClinic6 from '@/assets/img/clinic-6.jpg';
import imgGps from '@/assets/img/gps.png';
import imgPublication1 from '@/assets/img/pub-1.jpg';
import imgPublication2 from '@/assets/img/pub-2.jpg';
import imgPublication3 from '@/assets/img/pub-3.jpg';
import imgPublication4 from '@/assets/img/pub-4.jpg';
import imgPublication5 from '@/assets/img/pub-5.jpg';
import imgPublication6 from '@/assets/img/pub-6.jpg';
import imgPublication7 from '@/assets/img/pub-7.jpg';
import imgPublication8 from '@/assets/img/pub-8.jpg';
import imgWhatsApp from '@/assets/img/whatsapp.png';
import imgInstagram from '@/assets/img/instagram.png';
import imgFacebook from '@/assets/img/facebook.png';
import imgYoutube from '@/assets/img/youtube.png';
import imgLattes from '@/assets/img/lattes.png';

export const state = () => ({
  url: 'https://mudese.com.br',
  mainText: 'Bem-vindo ao Mude-se',
  subText: 'Por Natanna Taynara',
  instagram: {
    text: 'Instagram',
    link: 'https://www.instagram.com/mudese.com.br',
    image: imgInstagram,
  },
  facebook: {
    text: 'Facebook',
    link: 'https://www.facebook.com/mudesepornatannataynara/',
    image: imgFacebook,
  },
  youtube: {
    text: 'Youtube',
    link: 'https://www.youtube.com/c/MudeseporNatannaTaynara',
    title: 'Vídeos',
    subscribe: 'Inscreva-se no Canal',
    videos: [
      'https://www.youtube.com/embed/oTUboYxDMnk',
      'https://www.youtube.com/embed/-IMTOn2s9xk',
      'https://www.youtube.com/embed/mneJnKxKgbc',
      'https://www.youtube.com/embed/F-YAKXL0WkQ',
    ],
    image: imgYoutube,
  },
  lattes: {
    text: 'Lattes',
    link: 'http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4369818U4',
    image: imgLattes,
  },
  whatsApp: {
    text: '47 9 9145-7669',
    link: 'https://api.whatsapp.com/send?phone=5547991457669',
    image: imgWhatsApp,
  },
  home: {
    text: 'Início',
    image: imgHome,
    link: '/#banner',
  },
  menuOptions: [
    { text: 'Sobre', link: '/#about' },
    { text: 'Consultório', link: '/#clinic' },
    { text: 'Publicações', link: '/#publications' },
    { text: 'Vídeos', link: '/#videos' },
    { text: 'eBooks', link: '/ebooks' },
  ],
  about: {
    title: 'Sobre o Mude-se',
    paragraphs: [
      'Cinco  dias após minha formatura, em março de 2016, num consultório sublocado, iniciava-se a minha trajetória clínica. Em 2017 iniciei meu mestrado na Universidade Federal de Santa Catarina, rodando incontáveis vezes mais de 400km por semana para tornar esse sonho possível.',
      'No ano de 2018 fui convidada para coordenar cursos de Pós-Graduação pelo Instituto Educar Brasil, e atualmente sou idealizadora de várias Especializações oferecidas pela Instituição. Durante esse período me certifiquei como treinadora de neurofeedback pela Brain Trainer, sendo hoje esse um recurso auxiliar no meu trabalho. Também me dedico a escrever livros e materiais terapêuticos, tendo hoje várias publicações em grandes editoras do país.',
      'Acredito na capacidade de mudança, que merecemos uma vida significativa, apesar das adversidades pelas quais passamos. Por isso, busco com meu exemplo e conhecimento auxiliar as pessoas que encontro a serem mais fortes emocionalmente. Desejo que meus conteúdos auxiliem você a viver com mais bem-estar e que sua mudança seja recompensadora!',
    ],
    image: imgPerson,
    author: 'Natanna Taynara Schütz',
    jobTitle: 'Psicóloga',
    services: [
      'Psicologia',
      'Psicologia para Adultos',
      'Psicologia para Crianças',
      'Psicóloga',
      'Terapia',
      'Terapia Cognitivo Comportamental',
      'Terapias de Terceira Geração',
      'Atendimento Clínico',
      'Neurofeedback Brain Trainer',
    ],
  },
  badges: [
    { image: imgPsychologist, text: '+4000 Horas de Atendimento Clínico' },
    { image: imgMasterDegree, text: 'Mestra pela UFSC' },
    { image: imgUniversity, text: 'Coordenadora de Pós-Graduação' },
    { image: imgTeacher, text: 'Professora' },
    { image: imgBook, text: 'Escritora' },
    { image: imgBrain, text: 'Certificada pela BrainTrainer' },
  ],
  clinic: {
    title: 'Consultório',
    images: [imgClinic1, imgClinic2, imgClinic3, imgClinic4, imgClinic5, imgClinic6],
    iconAddress: imgGps,
  },
  address: {
    street: 'Rua Coelho Neto',
    number: '191',
    office: 'Sala 504',
    city: 'Rio do Sul',
    state: 'SC',
    postalCode: '89160-155',
    country: 'Brasil',
  },
  publications: {
    title: 'Publicações',
    list: [
      { image: imgPublication1, link: 'https://www.terapiacriativa.com.br/estude-certo' },
      { image: imgPublication2, link: 'https://www.ideajogos.com.br/collections/destaque-da-home/products/mandando-a-real' },
      { image: imgPublication3, link: 'https://www.jurua.com.br/shop_item.asp?id=28805' },
      { image: imgPublication4, link: 'https://www.jurua.com.br/shop_item.asp?id=28457' },
      { image: imgPublication5, link: null },
      { image: imgPublication6, link: null },
      { image: imgPublication7, link: 'https://matrixeditora.com.br/produtos/autocompaixao' },
      { image: imgPublication8, link: 'https://www.jurua.com.br/shop_item.asp?id=28918' },
    ],
  },
  footer: {
    navigation: 'Navegação',
    links: 'Links',
    address: 'Endereço',
  },
  ebooks: {
    paragraphs: [
      'Sabe aquele dia horrível? Aquela pessoa que lhe faz mal? A exaustão diante de inúmeros contratempos? Os acontecimentos ruins que nos deixam sem chão! Pois é, infelizmente muitas dessas coisas não estão na órbita do nosso controle, elas fazem parte da realidade e vulnerabilidade da vida. Mas o que fazemos diante disso? Aceitamos viver mal e no sofrimento? Não me parece justo, pois acredito que merecemos uma vida de qualidade apesar das adversidades inerentes à ela. Por isso, idealizei um Programa que visa auxiliar no fortalecimento de uma das coisas que mais está no nosso controle frente às incertezas da vida: nossos recursos emocionais para lidar com o que passamos!',
      'Na minha trajetória dentro da Psicologia, ano após ano percebo que uma das formas mais importantes de auxiliar às pessoas consiste em fortalecê-las emocionalmente. Quando estamos mais fortes e preparados emocionalmente, passamos a lidar de forma mais assertiva com situações difíceis, e logo, nosso bem-estar tende a não ser tão afetado. Convido você a fazer parte dessa caminhada comigo nós próximos 10 meses no meu Instagram @mudese.com.br. Cada mês abordarei um tema que considero importante para o fortalecimento emocional, trazendo vários conteúdos, técnicas, indicações, reflexões e reels para isso.',
    ],
    group1: [
      {
        name: 'Ebook #1 - Autocompaixão',
        link: '/pdf/ebooks/forte-emocionalmente/ebook1-autocompaixao.pdf',
        category: 'ebook-forte-emocionalmente',
        action: 'ebook-download',
        label: 'ebook-forte-emocionalmente-#1',
      },
      {
        name: 'Ebook #2 - Tolerância à Frustração',
        link: '/pdf/ebooks/forte-emocionalmente/ebook2-tolerancia-frustracao.pdf',
        category: 'ebook-forte-emocionalmente',
        action: 'ebook-download',
        label: 'ebook-forte-emocionalmente-#2',
      },
      {
        name: 'Ebook #3 - Flexibilidade',
        link: '/pdf/ebooks/forte-emocionalmente/ebook3-flexibilidade.pdf',
        category: 'ebook-forte-emocionalmente',
        action: 'ebook-download',
        label: 'ebook-forte-emocionalmente-#3',
      },
      {
        name: 'Ebook #4 - Adaptação',
        link: '/pdf/ebooks/forte-emocionalmente/ebook4-adaptacao.pdf',
        category: 'ebook-forte-emocionalmente',
        action: 'ebook-download',
        label: 'ebook-forte-emocionalmente-#4',
      },
    ],
  },
});
