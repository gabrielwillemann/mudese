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
      'Cinco dias após minha formatura, em março de 2016, num consultório sublocado, iniciava-se a minha trajetória clínica. Em 2017 iniciei meu mestrado na Universidade Federal de Santa Catarina, rodando incontáveis vezes mais de 400km por semana para tornar esse sonho possível. No ano de 2018 fui convidada para coordenar Pós Graduações na cidade de Rio do Sul pelo Instituto Educar Brasil.',
      'Durante esse período me certifiquei como treinadora de neurofeedback pela Brain Trainer e atualmente também me dedico a escrever livros e materiais terapêuticos. O ano de 2019 foi um grande marco na minha carreira de psicóloga, pois comprei minha primeira sala para o consultório e publiquei meu primeiro material terapêutico. Agora em 2020 vários outros materiais que sou autora e coautora estão sendo publicados, o que me deixa muito feliz por estar contribuindo com a Psicologia também dessa forma.',
      'Acredito na capacidade de mudança, que merecemos uma vida significativa, apesar das adversidades pelas quais passamos, por isso, busco com meu exemplo e conhecimento e auxiliar as pessoas que encontro.   ',
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
    images: [imgPublication1, imgPublication2],
  },
  footer: {
    navigation: 'Navegação',
    links: 'Links',
    address: 'Endereço',
  },
});
