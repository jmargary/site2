import type { SectionTranslations } from '../types';

export const menuData: SectionTranslations = {
  id: 'menu',
  btnLabel: { en: 'Menu', ru: 'Меню', am: 'Մենյու' },
  content: {
    en: { 
      title: 'Our Menu', subtitle: 'Exquisite Gastronomy', 
      description: ['We provide a comprehensive range of dishes designed to delight your senses and offer a unique culinary experience.'],
      layoutType: 'alternatingList',
      alternatingList: [
        { 
          title: 'Signature Dishes', 
          text: 'Our chef creations using the finest ingredients. Includes a variety of seasonal specialties and house originals.', 
          imageUrl: 'images/menu/pic1.webp' 
        },
        { 
          title: 'Fine Wine Selection', 
          text: 'Curated wines from the world best vineyards. Perfectly paired to enhance the flavors of our cuisine.', 
          imageUrl: 'images/menu/pic2.webp' 
        },
        { 
          title: 'Artisanal Desserts', 
          text: 'Handcrafted sweets that provide the perfect ending to your meal. Made with premium chocolate and fresh local fruits.', 
          imageUrl: 'images/menu/pic3.jpeg' 
        },
        { 
          title: 'Craft Cocktails', 
          text: 'Expertly mixed drinks featuring house-made infusions and premium spirits. A vibrant addition to any evening.', 
          imageUrl: 'images/menu/pic4.webp' 
        },
        { 
          title: 'Fresh Seafood', 
          text: 'Daily catches delivered fresh to ensure the highest quality. Prepared with minimal intervention to let the natural flavors shine.', 
          imageUrl: 'images/menu/pic5.webp' 
        },
        { 
          title: 'Gourmet Appetizers', 
          text: 'Small bites with big personality. Perfect for sharing or as a sophisticated start to your dining experience.', 
          imageUrl: 'images/menu/pic6.jpeg' 
        },
        { 
          title: 'Organic Salads', 
          text: 'Wholesome greens and vibrant vegetables sourced from local organic farms. Freshness you can taste in every bite.', 
          imageUrl: 'images/menu/pic7.webp' 
        },
        { 
          title: 'Private Dining Service', 
          text: 'Exclusively available for our VIP guests and their companies. Personalized menus and dedicated service in our private halls.', 
          imageUrl: 'images/menu/pic8.webp' 
        }
      ]
    },
    ru: { 
      title: 'Наше Меню', subtitle: 'Изысканная Гастрономия', 
      description: ['Мы предлагаем широкий ассортимент блюд, призванных порадовать ваши чувства и подарить уникальный кулинарный опыт.'],
      layoutType: 'alternatingList',
      alternatingList: [
        { 
          title: 'Фирменные Блюда', 
          text: 'Творения нашего шеф-повара из лучших ингредиентов. Включает сезонные новинки и оригинальные рецепты дома.', 
          imageUrl: 'images/menu/pic1.webp' 
        },
        { 
          title: 'Винная Карта', 
          text: 'Отобранные вина из лучших виноградников мира. Идеально подходят для подчеркивания вкуса нашей кухни.', 
          imageUrl: 'images/menu/pic2.webp' 
        },
        { 
          title: 'Автoрские Десерты', 
          text: 'Сладости ручной работы, которые станут идеальным завершением вашей трапезы.', 
          imageUrl: 'images/menu/pic3.jpeg' 
        },
        { 
          title: 'Крафтовые Коктейли', 
          text: 'Профессионально смешанные напитки с использованием домашних настоек и премиальных спиртов.', 
          imageUrl: 'images/menu/pic4.webp' 
        },
        { 
          title: 'Свежие Морепродукты', 
          text: 'Ежедневные поставки свежих морепродуктов для обеспечения высочайшего качества каждого блюда.', 
          imageUrl: 'images/menu/pic5.webp' 
        },
        { 
          title: 'Гурман-Закуски', 
          text: 'Маленькие шедевры с ярким характером. Идеально для начала вечера.', 
          imageUrl: 'images/menu/pic6.jpeg' 
        },
        { 
          title: 'Органические Салаты', 
          text: 'Полезная зелень и сезонные овощи с местных органических ферм.', 
          imageUrl: 'images/menu/pic7.webp' 
        },
        { 
          title: 'Приватное Обслуживание', 
          text: 'Эксклюзивно для наших VIP-гостей. Персонализированное меню и выделенное обслуживание.', 
          imageUrl: 'images/menu/pic8.webp' 
        }
      ]
    },
    am: { 
      title: 'Մեր Մենյուն', subtitle: 'Նրբաճաշակ Գաստրոնոմիա', 
      description: ['Մենք առաջարկում ենք ուտեստների լայն տեսականի՝ ստեղծված Ձեր զգայարանները հիացնելու և եզակի խոհարարական փորձառություն հաղորդելու համար:'], 
      layoutType: 'alternatingList',
      alternatingList: [
        { 
          title: 'Ֆիրմային ուտեստներ', 
          text: 'Մեր շեֆ-խոհարարի ստեղծագործությունները լավագույն բաղադրիչներից: Ներառում է սեզոնային մասնագիտություններ և տնական օրիգինալ բաղադրատոմսեր:', 
          imageUrl: 'images/menu/pic1.webp' 
        },
        { 
          title: 'Գինիների ընտրանի', 
          text: 'Ընտրված գինիներ աշխարհի լավագույն խաղողի այգիներից: Իդեալականորեն համադրված մեր խոհանոցի համերը հարստացնելու համար:', 
          imageUrl: 'images/menu/pic2.webp' 
        },
        { 
          title: 'Հեղինակային աղանդեր', 
          text: 'Ձեռքով պատրաստված քաղցրավենիք, որն ապահովում է Ձեր ճաշի կատարյալ ավարտը:', 
          imageUrl: 'images/menu/pic3.jpeg' 
        },
        { 
          title: 'Կրաֆտային կոկտեյլներ', 
          text: 'Պրոֆեսիոնալ կերպով խառնված ըմպելիքներ՝ տնական թուրմերով և պրեմիում սպիրտներով:', 
          imageUrl: 'images/menu/pic4.webp' 
        },
        { 
          title: 'Թարմ ծովամթերք', 
          text: 'Ամենօրյա թարմ մատակարարումներ՝ բարձրորակ որակ ապահովելու համար:', 
          imageUrl: 'images/menu/pic5.webp' 
        },
        { 
          title: 'Գուրման նախուտեստներ', 
          text: 'Փոքրիկ գլուխգործոցներ մեծ բնավորությամբ: Կատարյալ է կիսվելու կամ որպես ճաշի սկիզբ:', 
          imageUrl: 'images/menu/pic6.jpeg' 
        },
        { 
          title: 'Օրգանական աղցաններ', 
          text: 'Առողջարար կանաչիներ և վառ բանջարեղեն՝ տեղական օրգանական ֆերմաներից:', 
          imageUrl: 'images/menu/pic7.webp' 
        },
        { 
          title: 'Անհատական սպասարկում', 
          text: 'Բացառապես մեր VIP հյուրերի և նրանց ընկերակցության համար: Անհատականացված մենյու և հատուկ սպասարկում մեր առանձնասենյակներում:', 
          imageUrl: 'images/menu/pic8.webp' 
        }
      ]
    }
  }
};
