import React from "react";

import sprite from "../../images/sprite.svg";
import style from "./Reports.module.scss";

//expected answer arr = [{category:total summ}, {category:total summ}, {...}, ....]

const imgObject = {
  продукты: `${sprite}#products`,
  алкоголь: `${sprite}#cocktail`,
  развлечение: `${sprite}#kite`,
  здоровье: `${sprite}#hands-holding-heart`,
  транспорт: `${sprite}#car`,
  "все для дома": `${sprite}#couch`,
  техника: `${sprite}#tools`,
  "коммуналка, связь": `${sprite}#invoice`,
  "спорт, хобби": `${sprite}#clay`,
  образование: `${sprite}#book`,
  прочее: `${sprite}#ufo`,
  "ДОП. ДОХОД": `${sprite}#salary`,
  ЗП: `${sprite}#money`,
};

const CategoriesList = ({ categoriesArr }) => {
  return (
    <ul className={style.categoryList}>
      {categoriesArr.map(({ total, name }) => {
        const currencyTotal = total
          .toFixed(2)
          .replace(/\d(?=(\d{3})+\.)/g, "$& ");
        return (
          <li key={name} className={style.categoryListItem}>
            <p>{currencyTotal}</p>
            <svg className={style.categoryIcon} height="63" width="56">
              <use href={imgObject[name]}></use>
            </svg>
            <div className={style.circle}></div>
            <p>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default CategoriesList;
