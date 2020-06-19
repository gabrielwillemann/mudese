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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin blandit neque in sodales. Fusce finibus mi elementum tortor finibus ultrices. Aliquam erat ligula, laoreet nec orci et, scelerisque dignissim lorem. Donec dignissim velit sit amet quam tristique iaculis. In ac nibh pharetra, tristique velit et, auctor magna.',
      'Maecenas nisl tortor, malesuada vitae sem ac, pharetra vehicula sem. Suspendisse aliquam purus tellus, sit amet aliquam nunc blandit eu. Nulla fringilla pretium libero, sit amet dapibus diam accumsan ut. Nulla facilisi. Vestibulum consequat, lacus at lacinia tincidunt, enim justo malesuada ipsum, nec consectetur est erat in ex. Sed et egestas nisi. Maecenas fringilla finibus neque, in bibendum libero commodo nec.',
      'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum condimentum elit quis augue rhoncus hendrerit. Praesent egestas vulputate metus venenatis placerat. Aliquam eu lectus ante. Nunc nec odio eu urna congue consectetur. Integer quis ipsum dapibus, congue augue et, pulvinar lorem.',
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
