import type { SectionTranslations } from '../types';

export const menuData: SectionTranslations = {
  id: 'menu',
  btnLabel: { en: 'Menu', ru: 'Меню', am: 'Մենյու' },
  content: {
    en: { 
      title: 'Our Menu', 
      subtitle: 'Exquisite Gastronomy', 
      description: [],
      layoutType: 'menuList',
      menuItems: [
        { 
          title: 'Starters', 
          images: ['images/menu/m1.png', 'images/menu/m1.1.png'] 
        },
        { 
          title: 'Salads', 
          images: ['images/menu/m2.1.png', 'images/menu/m2.2.png', 'images/menu/m2.3.png'] 
        },
        { 
          title: 'Soups', 
          images: ['images/menu/m3.1.png'] 
        },
        { 
          title: 'Hot Dishes', 
          images: ['images/menu/m4.1.png', 'images/menu/m4.2.png', 'images/menu/m4.3.png', 'images/menu/m4.4.png', 'images/menu/m4.5.png'] 
        },
        { 
          title: 'Grill / Tandoor', 
          images: ['images/menu/m5.1.png', 'images/menu/m5.2.png'] 
        },
        { 
          title: 'Side Dishes', 
          images: ['images/menu/m6.1.png'] 
        },
        { 
          title: 'Sauces', 
          images: ['images/menu/m7.1.png'] 
        },
        { 
          title: 'Beverages',
          subItems: [
            'Vodka',
            'Fruit Brandy',
            'Armenian Wines',
            'Sparkling Wine / Champagne',
            'French Wines',
            'Italian Wines',
            'Cognac / Armenian Brandy',
            'Whiskey / Tequila / Vermouth',
            'Beer',
            'Soft Drinks',
            'Coffee / Tea'
          ],
          images: ['images/menu/m8.1.jpg', 'images/menu/m8.2.jpg', 'images/menu/m8.3.jpg', 'images/menu/m8.4.jpg', 'images/menu/m8.5.jpg', 'images/menu/m8.6.jpg']
        },
        { title: 'Desserts', images: ['images/menu/m9.jpg'] }
      ]
    },
    ru: { 
      title: 'Наше Меню', 
      subtitle: 'Изысканная Гастрономия', 
      description: [],
      layoutType: 'menuList',
      menuItems: [
        { 
          title: 'Закуски', 
          images: ['images/menu/m1.png', 'images/menu/m1.1.png'] 
        },
        { 
          title: 'Салаты', 
          images: ['images/menu/m2.1.png', 'images/menu/m2.2.png', 'images/menu/m2.3.png'] 
        },
        { 
          title: 'Супы', 
          images: ['images/menu/m3.1.png'] 
        },
        { 
          title: 'Горячие блюда', 
          images: ['images/menu/m4.1.png', 'images/menu/m4.2.png', 'images/menu/m4.3.png', 'images/menu/m4.4.png', 'images/menu/m4.5.png'] 
        },
        { 
          title: 'Мангал / Тонир', 
          images: ['images/menu/m5.1.png', 'images/menu/m5.2.png'] 
        },
        { 
          title: 'Гарниры', 
          images: ['images/menu/m6.1.png'] 
        },
        { 
          title: 'Соусы', 
          images: ['images/menu/m7.1.png'] 
        },
        { 
          title: 'Напитки',
          subItems: [
            'Водка',
            'Фруктовая водка',
            'Армянские вина',
            'Игристое вино / Шампанское',
            'Французские вина',
            'Итальянские вина',
            'Коньяк',
            'Виски / Текила / Вермут',
            'Пиво',
            'Безалкагольные напитки',
            'Кофе / Чай'
          ],
          images: ['images/menu/m8.1.jpg', 'images/menu/m8.2.jpg', 'images/menu/m8.3.jpg', 'images/menu/m8.4.jpg', 'images/menu/m8.5.jpg', 'images/menu/m8.6.jpg']
        },
        { title: 'Десерты', images: ['images/menu/m9.jpg'] }
      ]
    },
    am: { 
      title: 'Մեր Մենյուն', 
      subtitle: 'Նրբաճաշակ Գաստրոնոմիա', 
      description: [],
      layoutType: 'menuList',
      menuItems: [
        { 
          title: 'Նախուտեստներ', 
          images: ['images/menu/m1.png', 'images/menu/m1.1.png'] 
        },
        { 
          title: 'Աղցաններ', 
          images: ['images/menu/m2.1.png', 'images/menu/m2.2.png', 'images/menu/m2.3.png'] 
        },
        { 
          title: 'Ապուրներ', 
          images: ['images/menu/m3.1.png'] 
        },
        { 
          title: 'Տաք ուտեստներ', 
          images: ['images/menu/m4.1.png', 'images/menu/m4.2.png', 'images/menu/m4.3.png', 'images/menu/m4.4.png', 'images/menu/m4.5.png'] 
        },
        { 
          title: 'Մանղալ/թոնիր', 
          images: ['images/menu/m5.1.png', 'images/menu/m5.2.png'] 
        },
        { 
          title: 'Խավարտներ', 
          images: ['images/menu/m6.1.png'] 
        },
        { 
          title: 'Սոուսներ', 
          images: ['images/menu/m7.1.png'] 
        },
        { 
          title: 'Խմիչքներ',
          subItems: [
            'Օղի',
            'Մրգային օղի',
            'Հայկական գինիներ',
            'Փրփրուն գինի / Շամպայն',
            'Ֆրանսիական գինիներ',
            'Իտալական գինիներ',
            'Կոնյակ',
            'Վիսկի / Տեկիլա / Վերմուտ',
            'Գարեջուր',
            'Զովացուցիչ ըմպելիքներ',
            'Սուրճ / Թեյ'
          ],
          images: ['images/menu/m8.1.jpg', 'images/menu/m8.2.jpg', 'images/menu/m8.3.jpg', 'images/menu/m8.4.jpg', 'images/menu/m8.5.jpg', 'images/menu/m8.6.jpg']
        },
        { title: 'Աղանդեր', images: ['images/menu/m9.jpg'] }
      ]
    }
  }
};
