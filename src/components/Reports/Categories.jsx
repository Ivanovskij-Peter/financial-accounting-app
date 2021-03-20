import React from "react";
import { NavLink, Route, useRouteMatch } from "react-router-dom";
import Chart from "../Chart";
import sprite from "../../images/sprite.svg";
import style from "./Reports.module.scss";

//expected answer arr = [{category:total summ}, {category:total summ}, {...}, ....]

const imgObject = {
  продукты: `${sprite}#products`,
  алкоголь: `${sprite}#cocktail`,
  развлечения: `${sprite}#kite`,
  здоровье: `${sprite}#hands-holding-heart`,
  транспорт: `${sprite}#car`,
  "все для дома": `${sprite}#couch`,
  техника: `${sprite}#tools`,
  "коммуналка, связь": `${sprite}#invoice`,
  "спорт, хобби": `${sprite}#clay`,
  образование: `${sprite}#book`,
  прочее: `${sprite}#ufo`,
  "ДОП. ДОХОД": `${sprite}#salary`,
  зп: `${sprite}#money`,
};

const nameObject = {
  продукты: "products",
  алкоголь: "alcohol",
  развлечения: "entertaiment",
  здоровье: "health",
  транспорт: "transport",
  "все для дома": "housing",
  техника: "equipment",
  "коммуналка, связь": "utilities",
  "спорт, хобби": "hobbies",
  образование: "education",
  прочее: "other",
  "ДОП. ДОХОД": "additional-incomes",
  зп: "salary",
};

const CategoriesList = ({ categoriesArr, reportName }) => {
  const match = useRouteMatch("/reports");
  return (
    <>
      <ul className={style.categoryList}>
        {categoriesArr.map(({ total, name }) => {
          const normalName = nameObject[name.toLowerCase()];
          const currencyTotal = total
            .toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, "$& ");
          return (
            <li key={normalName} className={style.categoryListItem}>
              <NavLink
                className={style.productLink}
                to={{
                  pathname: `${match.url}/${normalName}`,
                }}
              >
                <p>{currencyTotal}</p>
                <svg className={style.categoryIcon} height="63" width="56">
                  <use href={imgObject[name.toLowerCase()]}></use>
                </svg>
                <div className={style.circle}></div>
                <p>{name}</p>
              </NavLink>
            </li>
          );
        })}
      </ul>
      <Route
        path={`${match.path}/:category`}
        render={(props) => <Chart {...props} reportName = {reportName}/>}
      />
    </>
  );
};

export default CategoriesList;
