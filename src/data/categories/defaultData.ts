import type { SectionTranslations } from '../types';

export const defaultData: SectionTranslations = {
  id: 'default',
  btnLabel: { en: '', ru: '', am: '' },
  content: {
    en: {
      title: 'Welcome to Afrikyan’s',
      subtitle: 'Afrikyan’s: Where Every Detail Tells a Story',
      description: [
        'Welcome to Afrikyan’s, a place where luxury, harmony, and elegance are redefined. Step into a world where architecture inspires and every moment is crafted to perfection. Whether it’s a private dinner or a grand celebration, we ensure an experience that lingers in your memory forever.',
        'Why Afrikyan’s?',
        'Signature Cuisine: Discover unique flavors that leave a lasting impression.',
        'Memorable Events: Celebrate your milestones in a vibrant, positive, and stylish atmosphere.',
        'Premium Service: Enjoy world-class hospitality in a sophisticated and modern setting.',
        'Timeless Design: A perfect blend of charm and elegance where every corner is a masterpiece.',
        'Our Facilities:',
        '▫️ Grand Banquet Halls',
        '▫️ Exclusive VIP Lounges'
      ],
      slides: [
        { imageUrl: 'images/default/image1.jpg', title: 'Main Workspace', subtitle: 'Experience the premium environment' },
        { imageUrl: 'images/default/image2.jpg', title: 'Meeting Rooms', subtitle: 'Equipped with top tech' },
        {
          imageUrl: 'images/default/image3.jpg',
          title: 'Interesting Facts',
          stats: [
            { value: '80+', label: 'rooms' },
            { value: '7000m²', label: 'total area' },
            { value: '100+', label: 'outdoor parking spots' }
          ]
        }
      ]
    },
    ru: {
      title: 'Добро пожаловать в Afrikyan’s',
      subtitle: 'Afrikyan’s: Искусство вкуса и эстетика архитектуры',
      description: [
        'Добро пожаловать в Afrikyan’s — обновленный ресторан, где изысканность и гармония ощущаются в каждой детали. Если вы ищете идеальное место для важного события или гастрономического удовольствия, мы создадим для вас атмосферу, превосходящую ожидания.',
        'Наши преимущества:',
        'Уникальная кухня: Блюда, вкус которых вы будете вспоминать с восторгом.',
        'Незабываемые события: Ваше торжество пройдет в атмосфере радости и элегантности.',
        'Высококлассный сервис: Безупречное обслуживание в стильном и современном интерьере.',
        'Вдохновляющий дизайн: Архитектура, в которой каждая деталь рассказывает свою историю.',
        'К вашим услугам:',
        '▫️ Величественные банкетные залы',
        '▫️ Эксклюзивные VIP-залы'
      ],
      slides: [
        { imageUrl: 'images/default/image1.jpg', title: 'Главное Пространство', subtitle: 'Оцените премиальную среду' },
        { imageUrl: 'images/default/image2.jpg', title: 'Переговорные', subtitle: 'Оснащены передовыми технологиями' },
        {
          imageUrl: 'images/default/image3.jpg',
          title: 'Интересные факты',
          stats: [
            { value: '80+', label: 'офисов' },
            { value: '7000м²', label: 'общая площадь' },
            { value: '100+', label: 'открытая парковка' }
          ]
        }
      ]
    },
    am: {
      title: 'Բարի գալուստ',
      subtitle: 'Afrikyan’s. Որտեղ ամեն դետալ պատմում է մի պատմություն',
      description: [
        'Բարի գալուստ Afrikyan’s՝ վայր, որտեղ շքեղությունը, ներդաշնակությունն ու էլեգանտությունը հանդիպում են նորովի։ Մենք ստեղծել ենք միջավայր, որտեղ Ձեր յուրաքանչյուր այցն ու միջոցառումը վերածվում է անմոռանալի հիշողության։',
        'Ինչու՞ ընտրել մեզ.',
        'Յուրօրինակ խոհանոց. Բացահայտեք համեր, որոնք հավերժ կմնան Ձեր հիշողության մեջ։',
        'Անթերի միջոցառումներ. Մենք երաշխավորում ենք բարձր տրամադրություն և միայն դրական էմոցիաներ։',
        'Բարի գալուստ. Նրբագեղ և նորաոճ միջավայր՝ համեմված պրոֆեսիոնալ մոտեցմամբ։',
        'Ճարտարապետական ներշնչանք. Մեր դիզայնի յուրաքանչյուր անկյունը ոգեշնչման աղբյուր է։',
        'Մեր հնարավորությունները.',
        '▫️ Շքեղ հանդիսությունների սրահներ',
        '▫️ Առանձնացված VIP սրահներ'
      ],
      slides: [
        {
          imageUrl: 'images/default/image1.jpg',
          topText: 'նոր, պրեմիում A դասի',
          title: 'բիզնես կենտրոն Երևանում',
          subtitle: 'որտեղ նորարարությունը հանդիպում է հնարավորություններին'
        },
        {
          imageUrl: 'images/default/image2.jpg',
          topText: 'UP&UP բիզնես կենտրոնն առաջարկում է',
          title: '25քմ-335քմ',
          subtitle: 'գրասենյակային տարածքներ'
        },
        {
          imageUrl: 'images/default/image3.jpg',
          title: 'Հետաքրքիր փաստեր',
          stats: [
            { value: '80+', label: 'սենյակ․' },
            { value: '7000մ²', label: 'ընդհանուր տարածք․' },
            { value: '100+', label: 'մեքենաների բացօթյա կայանատեղի' }
          ]
        }
      ]
    }
  }
};
