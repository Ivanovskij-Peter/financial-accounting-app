import React from "react";

import sprite from "../../images/sprite.svg";

//expected answer arr = [{category:total summ}, {category:total summ}, {...}, ....]

const imgObject = {
  продукты: `${sprite}#products.svg`,
  алкоголь: `${sprite}#cocktail.svg`,
  развлечение: `${sprite}#kite.svg`,
  здоровье: `${sprite}#hands-holding-heart.svg`,
  транспорт: `${sprite}#car.svg`,
  "все для дома": `${sprite}#couch.svg`,
  техника: `${sprite}#tools.svg`,
  "коммуналка, связь": `${sprite}#invoice.svg`,
  "спорт, хобби": `${sprite}#clay.svg`,
  образование: `${sprite}#book.svg`,
  прочее: `${sprite}#ufo.svg`,
};

const CategoriesList = ({ objProduct }) => {
  return (
    <li>
      <p></p>
      <img src={imgObject.objProduct} alt="" />
    </li>
  );
};
