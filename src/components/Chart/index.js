
import { useSelector } from "react-redux";
import styles from "./Chart.module.scss";
import getReports from "../../redux/reports/reports-selectors";
import Chart from "./Chart"
import ChartCanvas from "./ChartCanvas"

const categoryMap = {
  products: "Продукты",
  alcohol: "Алкоголь",
  entertaiment: "Развлечения",
  health: "Здоровье",
  transport: "Транспорт",
  housing: "Все для дома",
  equipment: "Техника",
  utilities: "Коммуналка, связь",
  hobbies: "Спорт, хобби",
  education: "Образование",
  other: "Прочее",
  "additional-incomes": "Доп.доход",
  salary: "ЗП",
};

export default function ChartContainer(props) {
  const transactionType = props.reportName.toLowerCase();
  const category = props.match.params.category;

  const report = useSelector(getReports.getUserReports);

  const currentObject =
    transactionType === "расходы" ? report.costs : report.incomes;

  const categoryRu = categoryMap[category];

  const labelToValueObject = currentObject[categoryRu];

  console.log("labelToValueObject", labelToValueObject);
  console.log("currentObject", currentObject);
  console.log("categoryRu", categoryRu);
  // todo: remove when not required
  // const labelToValueObject = {
  //   Свинина: 5000,
  //   Говядина: 4500,
  //   Курица: 3200,
  //   Рыба: 2100,
  //   Панини: 1800,
  //   Кофе: 1700,
  //   Спагетти: 1500,
  //   Шоколад: 800,
  //   Маслины: 500,
  //   Зелень: 300,
  // };

  const allCategoriesObj = {};
  for (const property in currentObject) {
    if (property === "total") {
      continue;
    }
    allCategoriesObj[property] = currentObject[property];
  }

  const currentCategory = allCategoriesObj[categoryRu];
  console.log("currentCategory", currentCategory);

  const { total, ...finalObj } = currentCategory
    ? currentCategory
    : { total: 0, ...{} };
  const labelToValueArray = Object.entries(finalObj).map(([label, value]) => ({
    label,
    value,
  }));

  labelToValueArray.sort(function (a, b) {
    const aValue = a["value"];
    const bValue = b["value"];

    if (bValue > aValue) {
      return 1;
    } else if (aValue > bValue) {
      return -1;
    }
    return 0;
  });


  return (<>
  
  <Chart labelToValueArray = {labelToValueArray}/>
{/* <ChartCanvas maxValue = {labelToValueArray.length?labelToValueArray[0]:0}/> */}
  </>);
}
