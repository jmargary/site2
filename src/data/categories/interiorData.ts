import type { SectionTranslations } from '../types';

const allInteriorImages = [
  'images/interior/pic1.1.jpg',
  'images/interior/pic1.jpg',
  'images/interior/pic2.1.jpg',
  'images/interior/pic2.10.jpg',
  'images/interior/pic2.2.jpg',
  'images/interior/pic2.3.jpg',
  'images/interior/pic2.4.jpg',
  'images/interior/pic2.5.jpg',
  'images/interior/pic2.6.jpg',
  'images/interior/pic2.7.jpg',
  'images/interior/pic2.8.jpg',
  'images/interior/pic2.9.jpg',
  'images/interior/pic2.jpg',
  'images/interior/pic3.1.jpg',
  'images/interior/pic3.2.jpg',
  'images/interior/pic3.3.jpg',
  'images/interior/pic3.4.jpg',
  'images/interior/pic3.5.jpg',
  'images/interior/pic3.jpg',
  'images/interior/pic4.1.jpg',
  'images/interior/pic4.2.jpg',
  'images/interior/pic4.3.jpg',
  'images/interior/pic4.4.jpg',
  'images/interior/pic4.jpg',
  'images/interior/pic5.1.jpg',
  'images/interior/pic5.2.jpg',
  'images/interior/pic5.jpg'
];

export const interiorData: SectionTranslations = {
  id: 'interior',
  btnLabel: { en: 'Interior', ru: 'Интерьер', am: 'Ինտերիեր' },
  content: {
    en: {
      title: 'Our Futuristic Interior',
      subtitle: 'Experience the art of space',
      description: ['A premium atmosphere designed for unforgettable experiences.', 'State-of-the-art design, elegant lighting, and an environment that inspires at every turn.'],
      layoutType: 'triangleGallery',
      secondaryGrid: allInteriorImages
    },
    ru: {
      title: 'Наш футуристический интерьер',
      subtitle: 'Искусство пространства',
      description: ['Премиальная атмосфера для незабываемых впечатлений.', 'Современный дизайн, элегантное освещение и вдохновляющая среда на каждом шагу.'],
      layoutType: 'triangleGallery',
      secondaryGrid: allInteriorImages
    },
    am: {
      title: 'Մեր ֆուտուրիստական ինտերիերը',
      subtitle: 'Տարածության արվեստը',
      description: ['Պրեմիում միջավայր՝ նախատեսված անմոռանալի փորձառությունների համար:', 'Ժամանակակից դիզայն, էլեգանտ լուսավորություն և միջավայր, որը ոգեշնչում է ամեն քայլափոխի:'],
      layoutType: 'triangleGallery',
      secondaryGrid: allInteriorImages
    }
  }
};
