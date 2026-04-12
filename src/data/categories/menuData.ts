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
        { title: 'Starters' },
        { title: 'Salads' },
        { title: 'Soups' },
        { title: 'Hot Dishes' },
        { title: 'Grill / Tandoor' },
        { title: 'Side Dishes' },
        { title: 'Sauces' },
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
          ]
        },
        { title: 'Desserts' }
      ]
    },
    ru: { 
      title: 'Наше Меню', 
      subtitle: 'Изысканная Гастрономия', 
      description: [],
      layoutType: 'menuList',
      menuItems: [
        { title: 'Закуски' },
        { title: 'Салаты' },
        { title: 'Супы' },
        { title: 'Горячие блюда' },
        { title: 'Мангал / Тонир' },
        { title: 'Гарниры' },
        { title: 'Соусы' },
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
          ]
        },
        { title: 'Десерты' }
      ]
    },
    am: { 
      title: 'Մեր Մենյուն', 
      subtitle: 'Նրբաճաշակ Գաստրոնոմիա', 
      description: [],
      layoutType: 'menuList',
      menuItems: [
        { title: 'Նախուտեստներ' },
        { title: 'Աղցաններ' },
        { title: 'Ապուրներ' },
        { title: 'Տաք ուտեստներ' },
        { title: 'Մանղալ/թոնիր' },
        { title: 'Խավարտներ' },
        { title: 'Սոուսներ' },
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
          ]
        },
        { title: 'Աղանդեր' }
      ]
    }
  }
};
