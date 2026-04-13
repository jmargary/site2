import type { SectionTranslations } from '../types';

export const contactData: SectionTranslations = {
  id: 'contact',
  btnLabel: { en: 'Contact', ru: 'Контакты', am: 'Կապ' },
  content: {
    en: { 
      title: 'Contact & Delivery', 
      subtitle: '', 
      description: [], 
      layoutType: 'contactForm',
      contactInfo: {
        deliveryTitle: 'Delivery in the following areas:',
        deliveryAreas: [
          'Komitas',
          'Zeytun',
          'Bagrevand',
          'Jrvezh',
          'Masiv',
          'Avan',
          'Dzoraghbyur'
        ],
        actionText: 'Order and enjoy at your preferred address',
        phoneLabel: 'Tel.',
        phoneValue: '096 66 77 88',
        addressLabel: 'Address',
        addressValue: 'Jrvezh 16'
      }
    },
    ru: { 
      title: 'Контакты и Доставка', 
      subtitle: '', 
      description: [], 
      layoutType: 'contactForm',
      contactInfo: {
        deliveryTitle: 'Доставка в следующие районы:',
        deliveryAreas: [
          'Комитас',
          'Зейтун',
          'Багреванд',
          'Джрвеж',
          'Масив',
          'Аван',
          'Дзорахбюр'
        ],
        actionText: 'Заказывайте и наслаждайтесь по вашему предпочтительному адресу',
        phoneLabel: 'Тел.',
        phoneValue: '096 66 77 88',
        addressLabel: 'Адрес',
        addressValue: 'Джрвеж 16'
      }
    },
    am: { 
      title: 'Կապ և Առաքում', 
      subtitle: '', 
      description: [], 
      layoutType: 'contactForm',
      contactInfo: {
        deliveryTitle: 'Առաքում հետևյալ տարածքներում․',
        deliveryAreas: [
          'Կոմիտաս',
          'Զեյթուն',
          'Բագրևանդ',
          'Ջրվեժ',
          'Մասիվ',
          'Ավան',
          'Ձորաղբյուր'
        ],
        actionText: 'Պատվիրի\'ր ու վայելի՛ր քո նախընտրած հասցեում',
        phoneLabel: 'Հեռ․',
        phoneValue: '096 66 77 88',
        addressLabel: 'Հասցե․',
        addressValue: 'Ջրվեժ 16'
      }
    }
  }
};
