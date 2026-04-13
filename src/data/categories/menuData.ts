import type { SectionTranslations } from '../types';

export const menuData: SectionTranslations = {
  id: 'menu',
  btnLabel: { en: 'Menu', ru: 'Menu', am: 'Մենյու' },
  content: {
    en: { 
      title: 'Our Menu', 
      subtitle: 'Exquisite Gastronomy', 
      description: [],
      layoutType: 'menuList',
      menuItems: [
        { 
          title: 'Starters', 
          sections: [
            {
              images: ['images/menu/m1.png'],
              dishes: [
                { name: 'Signature Meat Selection', price: '4500 AMD' },
                { name: 'European Meat Selection', price: '5600 AMD' },
                { name: 'Armenian Cheese Selection', price: '2800 AMD' },
                { name: 'Pickle Selection', price: '1800 AMD' },
                { name: 'European Cheese Selection', price: '4900 AMD' },
                { name: 'Fish Selection', price: '8500 AMD' },
                { name: 'Caviar', price: '8000 AMD' },
                { name: 'Greens Selection', price: '1200 AMD' },
                { name: 'Strained Yogurt (Matsun)', price: '1000 AMD' },
                { name: 'Rehan', price: '1200 AMD' },
                { name: 'Bread Basket', price: '600 AMD' },
                { name: 'Fresh Vegetables', price: '1800 AMD' },
                { name: 'Fresh Vegetable Basket', price: '3800 AMD' },
                { name: 'Lemon', price: '600 AMD' },
                { name: 'Olive Selection', price: '1400 AMD' }
              ]
            },
            {
              images: ['images/menu/m1.1.png'],
              dishes: [
                { name: 'Meat Crepes', price: '1000 AMD' },
                { name: 'Mushroom Crepes', price: '1000 AMD' },
                { name: 'Ghavurma', price: '4000 AMD' },
                { name: 'Roll Set', price: '9500 AMD' },
                { name: 'Salmon Carpaccio', price: '2800 AMD' },
                { name: 'Veal Carpaccio', price: '4200 AMD' },
                { name: 'Khmogh Mard (Drinker Set)', price: '9500 AMD' },
                { name: 'Eggplant Caviar', price: '1200 AMD' },
                { name: 'Adjika', price: '1000 AMD' }
              ]
            }
          ]
        },
        { title: 'Salads', images: ['images/menu/m2.1.png', 'images/menu/m2.2.png', 'images/menu/m2.3.png'] },
        { title: 'Soups', images: ['images/menu/m3.1.png'] },
        { title: 'Hot Dishes', images: ['images/menu/m4.1.png', 'images/menu/m4.2.png', 'images/menu/m4.3.png', 'images/menu/m4.4.png', 'images/menu/m4.5.png'] },
        { title: 'Grill / Tandoor', images: ['images/menu/m5.1.png', 'images/menu/m5.2.png'] },
        { title: 'Side Dishes', images: ['images/menu/m6.1.png'] },
        { title: 'Sauces', images: ['images/menu/m7.1.png'] },
        { 
          title: 'Beverages',
          subItems: [
            'Vodka', 'Fruit Brandy', 'Armenian Wines', 'Sparkling Wine / Champagne',
            'French Wines', 'Italian Wines', 'Cognac / Armenian Brandy',
            'Whiskey / Tequila / Vermouth', 'Beer', 'Soft Drinks', 'Coffee / Tea'
          ],
          images: []
        },
        { title: 'Desserts', images: [] }
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
          sections: [
            {
              images: ['images/menu/m1.png'],
              dishes: [
                { name: 'Фирменное мясное ассорти', price: '4500 др' },
                { name: 'Европейское мясное ассорти', price: '5600 др' },
                { name: 'Армянское сырное ассорти', price: '2800 др' },
                { name: 'Ассорти солений', price: '1800 др' },
                { name: 'Европейское сырное ассорти', price: '4900 др' },
                { name: 'Рыбное ассорти', price: '8500 др' },
                { name: 'Икра', price: '8000 др' },
                { name: 'Ассорти зелени', price: '1200 др' },
                { name: 'Мацун', price: '1000 др' },
                { name: 'Режан', price: '1200 др' },
                { name: 'Хлебная корзина', price: '600 др' },
                { name: 'Свежие овощи', price: '1800 др' },
                { name: 'Корзина свежих овощей', price: '3800 др' },
                { name: 'Лимон', price: '600 др' },
                { name: 'Ассорти оливок', price: '1400 др' }
              ]
            },
            {
              images: ['images/menu/m1.1.png'],
              dishes: [
                { name: 'Блинчики с мясом', price: '1000 др' },
                { name: 'Блинчики с грибами', price: '1000 др' },
                { name: 'Кавурма', price: '4000 др' },
                { name: 'Сет роллов', price: '9500 др' },
                { name: 'Карпаччо из лосося', price: '2800 др' },
                { name: 'Карпаччо из телятины', price: '4200 др' },
                { name: 'Кхмох Мард', price: '9500 др' },
                { name: 'Баклажанная икра', price: '1200 др' },
                { name: 'Аджика', price: '1000 др' }
              ]
            }
          ]
        },
        { title: 'Салаты', images: ['images/menu/m2.1.png', 'images/menu/m2.2.png', 'images/menu/m2.3.png'] },
        { title: 'Супы', images: ['images/menu/m3.1.png'] },
        { title: 'Горячие блюда', images: ['images/menu/m4.1.png', 'images/menu/m4.2.png', 'images/menu/m4.3.png', 'images/menu/m4.4.png', 'images/menu/m4.5.png'] },
        { title: 'Мангал / Тонир', images: ['images/menu/m5.1.png', 'images/menu/m5.2.png'] },
        { title: 'Гарниры', images: ['images/menu/m6.1.png'] },
        { title: 'Соусы', images: ['images/menu/m7.1.png'] },
        { 
          title: 'Напитки',
          subItems: [
            'Водка', 'Фруктовая водка', 'Армянские вина', 'Игристое вино / Шампанское',
            'Французские вина', 'Итальянские вина', 'Коньяк',
            'Виски / Текила / Вермут', 'Пиво', 'Безалкагольные напитки', 'Кофе / Чай'
          ],
          images: []
        },
        { title: 'Десерты', images: [] }
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
          sections: [
            {
              images: ['images/menu/m1.png'],
              dishes: [
                { name: 'Ֆիրմային մսի տեսականի', price: '4500դր' },
                { name: 'ևրոպական մսի տեսականի', price: '5600դր' },
                { name: 'հայկական պանրի տեսականի', price: '2800դր' },
                { name: 'թթվի տեսականի', price: '1800դր' },
                { name: 'ևրոպական պանրի տեսականի', price: '4900դր' },
                { name: 'ձկան տեսականի', price: '8500դր' },
                { name: 'ձկնկիթ', price: '8000դր' },
                { name: 'կանաչու տեսականի', price: '1200դր' },
                { name: 'քամած մածուն', price: '1000դր' },
                { name: 'ռեժան', price: '1200դր' },
                { name: 'հացի զամբյուղ', price: '600դր' },
                { name: 'թարմ բանջարեղեն', price: '1800դր' },
                { name: 'թարմ բանջարեղենի զամբյուղ', price: '3800դր' },
                { name: 'կիտրոն', price: '600դր' },
                { name: 'ձիթապտղի տեսականի', price: '1400դր' }
              ]
            },
            {
              images: ['images/menu/m1.1.png'],
              dishes: [
                { name: 'նրբաբլիթ մսով', price: '1000դր' },
                { name: 'նրբաբլիթ սնկով', price: '1000դր' },
                { name: 'ղավուրմա', price: '4000դր' },
                { name: 'ռոլերով սեթ', price: '9500դր' },
                { name: 'կարպաչո սաղմոնով', price: '2800դր' },
                { name: 'կարպաչո հորթի մսով', price: '4200դր' },
                { name: 'խմող մարդ վատ օր չունենաս', price: '9500դր' },
                { name: 'սմբուկի խավիար', price: '1200դր' },
                { name: 'աջիկա', price: '1000դր' }
              ]
            }
          ]
        },
        { title: 'Աղցաններ', images: ['images/menu/m2.1.png', 'images/menu/m2.2.png', 'images/menu/m2.3.png'] },
        { title: 'Ապուրներ', images: ['images/menu/m3.1.png'] },
        { title: 'Տաք ուտեստներ', images: ['images/menu/m4.1.png', 'images/menu/m4.2.png', 'images/menu/m4.3.png', 'images/menu/m4.4.png', 'images/menu/m4.5.png'] },
        { title: 'Մանղալ/թոնիր', images: ['images/menu/m5.1.png', 'images/menu/m5.2.png'] },
        { title: 'Խավարտներ', images: ['images/menu/m6.1.png'] },
        { title: 'Սոուսներ', images: ['images/menu/m7.1.png'] },
        { 
          title: 'Խմիչքներ',
          subItems: [
            'Օղի', 'Մրգային օղի', 'Հայկական գինիներ', 'Փրփրուն գինի / Շամպայն',
            'Ֆրանսիական գինիներ', 'Իտալական գինիներ', 'Կոնյակ',
            'Վիսկի / Տեկիլա / Վերմուտ', 'Գարեջուր', 'Զովացուցիչ ըմպելիքներ', 'Սուրճ / Թեյ'
          ],
          images: []
        },
        { title: 'Աղանդեր', images: [] }
      ]
    }
  }
};
