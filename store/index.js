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
import imgGps from '@/assets/img/gps.png';
import imgPublication from '@/assets/img/tcc.jpg';
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
    link: 'https://www.facebook.com/natannataynarapsicologa',
    image: imgFacebook,
  },
  youtube: {
    text: 'Youtube',
    link: 'https://www.youtube.com/user/natannataynara',
    title: 'Vídeos',
    subscribe: 'Inscreva-se no Canal',
    videos: [
      'https://www.youtube.com/embed/mneJnKxKgbc',
      'https://www.youtube.com/embed/F-YAKXL0WkQ',
      'https://www.youtube.com/embed/mOUAYWO6ugo',
      'https://www.youtube.com/embed/-IMTOn2s9xk',
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
    link: '#banner',
  },
  menuOptions: [
    { text: 'Sobre', link: '#about' },
    { text: 'Consultório', link: '#clinic' },
    { text: 'Publicações', link: '#publications' },
    { text: 'Vídeos', link: '#videos' },
  ],
  about: {
    title: 'Sobre o Mude-se',
    paragraphs: [
      'Iniciei meu trabalho na Psicologia em março de 2016, após cinco dias da minha formatura comecei a atender no consultório. Semana após semana me dediquei para fazer o meu melhor, e contribuir com a vida das pessoas que começaram a procurar pelo meu trabalho. Tenho bons networks e sempre uso da criatividade para agregar valor ao que faço. O ano de 2019 foi um grande marco na minha carreira de psicóloga, pois comprei minha primeira sala para o consultório e publiquei meu primeiro material terapêutico.',
      'Desde a faculdade eu sempre tive dois objetivos: ser psicóloga clínica e professora. Por isso, em 2017 iniciei meu mestrado na Universidade Federal de Santa Catarina, e rodei incontáveis vezes mais de 400km por semana para tornar esse sonho possível. Em 2018 um pouco antes de concluir o mestrado, fui convidada para coordenar Pós Graduações na cidade de Rio do Sul pelo Instituto Educar Brasil.',
      'Nesse meio tempo também me dediquei a compreender mais o cérebro e por isso, também sou hoje, treinadora de neurofeedback certificada pela Brain Trainer e, nas sextas-feiras me dedico a escrever livros e materiais terapêuticos. Tudo isso foi possível por reconhecer e usar as minhas forças pessoais que são: criatividade, perspectiva, perseverança, curiosidade e amor ao aprendizado. E não menos importante: amo os animais e um estilo de vida saudável, com hábitos e relacionamentos bons.',
      'Acredito na capacidade de mudança, e que merecemos uma vida significativa, apesar das adversidades pelas quais passamos, por isso, busco com meu exemplo e conhecimento proporcionar uma vida melhor para aqueles que passam pela minha vida.',
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
    { image: imgPsychologist, text: '+3000 Horas de Atendimento Clínico' },
    { image: imgMasterDegree, text: 'Mestra pela UFSC' },
    { image: imgUniversity, text: 'Coordenadora de Pós-Graduação' },
    { image: imgTeacher, text: 'Professora' },
    { image: imgBook, text: 'Escritora' },
    { image: imgBrain, text: 'Certificada pela BrainTrainer' },
  ],
  clinic: {
    title: 'Consultório',
    images: [imgClinic1, imgClinic2, imgClinic3],
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
    images: [imgPublication, imgPublication, imgPublication],
  },
  footer: {
    navigation: 'Navegação',
    links: 'Links',
    address: 'Endereço',
  },
});
