import type { SectionTranslations } from '../types';

export const privilegesData: SectionTranslations = {
  id: 'privileges',
  btnLabel: { en: 'Advantages', ru: 'Преимущества', am: 'Ինտերիեր' },
  content: {
    en: {
      title: 'Our Interior', 
      subtitle: 'Where every detail tells a story', 
      description: [
        'Step into a world of refined elegance and timeless design. Our interiors are crafted to provide a perfect backdrop for your most memorable moments, blending classical charm with modern sophistication.'
      ],
      slides: [
        { imageUrl: 'images/default/slide1.jpg', title: 'Architecture where every detail tells a unique story' },
        { imageUrl: 'images/default/slide2.jpg', title: 'Signature cuisine: a taste to remember forever' },
        { imageUrl: 'images/default/slide3.jpg', title: 'Exclusive VIP lounges for your most private moments' },
        { imageUrl: 'images/slide4.jpg', title: 'Sophisticated design for elegant celebrations' }
      ]
    },
    ru: {
      title: 'Наш Интерьер', 
      subtitle: 'История в деталях', 
      description: [
        'Окунитесь в атмосферу изысканной элегантности. Наши интерьеры созданы для того, чтобы стать идеальным фоном для ваших самых запоминающихся моментов, сочетая в себе классический шарм и современную утонченность.'
      ],
      slides: [
        { imageUrl: 'images/default/slide1.jpg', title: 'Архитектура, где каждая деталь рассказывает свою историю' },
        { imageUrl: 'images/default/slide2.jpg', title: 'Уникальная кухня: вкус, который остается навсегда' },
        { imageUrl: 'images/default/slide3.jpg', title: 'Эксклюзивные VIP-залы для ваших особенных моментов' },
        { imageUrl: 'images/slide4.jpg', title: 'Изысканный дизайн для элегантных торжеств' }
      ]
    },
    am: {
      title: 'Ինտերիեր', 
      subtitle: 'Որտեղ ամեն դետալ պատմում է մի պատմություն', 
      description: [
        'Մուտք գործեք նրբագեղության և հավերժական դիզայնի աշխարհ: Մեր ինտերիերը ստեղծված է Ձեր անմոռանալի պահերի համար կատարյալ միջավայր ապահովելու համար՝ համատեղելով դասական հմայքը ժամանակակից նրբության հետ:'
      ],
      slides: [
        { imageUrl: 'images/default/slide1.jpg', title: 'Ճարտարապետություն, որտեղ ամեն դետալ պատմում է մի պատմություն' },
        { imageUrl: 'images/default/slide2.jpg', title: 'Յուրօրինակ խոհանոց՝ հավերժ հիշվող համերով' },
        { imageUrl: 'images/default/slide3.jpg', title: 'Շքեղ VIP սրահներ՝ Ձեր առանձնահատուկ պահերի համար' },
        { imageUrl: 'images/slide4.jpg', title: 'Նրբագեղ դիզայն շքեղ միջոցառումների համար' }
      ]
    }
  }
};
