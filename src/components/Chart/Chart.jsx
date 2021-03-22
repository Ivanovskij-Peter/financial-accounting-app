import React from "react";
import { useSelector } from "react-redux";
import styles from "./Chart.module.scss";
import getReports from "../../redux/reports/reports-selectors";

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
  "additional-incomes": "ДОП. ДОХОД",
  salary: "Зп",
};

export default function Chart(props) {
  //  console.log("props", props.match.params.category);
  // console.log("props", props);

  // const transactionType = props.reportName.toLowerCase();
  // const category = props.match.params.category;

  // const report = useSelector(getReports.getUserReports);
  // console.log("report", report);
  // console.log("transactionType", transactionType);
  // console.log("category", category);

  // const currentObject =
  //   transactionType === "расходы" ? report.costs : report.incomes;

  // const categoryRu = categoryMap[category];

  // console.log("currentObject", currentObject);
  // console.log("CategoryRu", currentObject[categoryRu]);
//? USE THIS
  // const labelToValueObject = currentObject[categoryRu];

  // todo: remove when not required
  const labelToValueObject = {
    Свинина: 5000,
    Говядина: 4500,
    Курица: 3200,
    Рыба: 2100,
    Панини: 1800,
    Кофе: 1700,
    Спагетти: 1500,
    Шоколад: 800,
    Маслины: 500,
    Зелень: 300,
  };

  const labelToValueArray = [];

  for (let label of Object.keys(labelToValueObject)) {
    if (label !== "total") {
      labelToValueArray.push({
        label: label,
        value: labelToValueObject[label],
      });
    }
  }

  console.log("labelToValueArray", labelToValueArray);

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

  console.log("labelToValueArray", labelToValueArray);

  const chartCanvasHeight = 328;
  const heightCoefficient = labelToValueArray.length
    ? labelToValueArray[0].value / chartCanvasHeight
    : 1;

  const chartCanvasWidth = 605;
  const maxBarWidth = 38;
  let barWidth = chartCanvasWidth / labelToValueArray.length - 25;
  if (barWidth > maxBarWidth) {
    barWidth = maxBarWidth;
  }

  return (
    <>
    <div className={styles.chart}>
      <ul className={styles.list}>
        {labelToValueArray.map(({ label, value }) => {
          return (
            <li
              key={label}
              className={styles.item}
              style={{
                height: value / heightCoefficient + "px",
                width: barWidth + "px",
              }}
            >
              <p className={styles.sum}>{value} грн</p>
              <p className={styles.label}>{label}</p>
            </li>
          );
        })}
      </ul>
    </div>
  </>
    // <>
    //   <div className={styles.chart}>
    //     <ul className={styles.list}>
    //       {labelToValueArray.map(({ label, value }) => {
    //         return (
    //           <li
    //             key={label}
    //             className={styles.item}
    //             style={{
    //               height: value / heightCoefficient + "px",
    //               width: barWidth + "px",
    //             }}
    //           >
    //             <p className={styles.sum}>{value} грн</p>
    //             <p className={styles.label}>{label}</p>
    //           </li>
    //         );
    //       })}
    //     </ul>
    //   </div>
    // </>
  );
}

// import React, { Component } from "react";
// import { Bar } from "react-chartjs-2";
// import styles from "./Chart.module.scss";
// import "chartjs-plugin-datalabels";

// //
// // export default function Chart ({categoryFromQueryString}){
//   let responce = {
//     "costs": {
//         "total": 12028,
//         "продукты": {
//             "milk": 12020,
//             "total": 12020
//         },
//         "алкоголь": {
//             "beer": 8,
//             "total": 8
//         }
//     },
//     "incomes": {
//         "total": 12000,
//         "ЗП": {
//             "муж": 12000,
//             "total": 12000
//         }
//     },

// }
// //}

// let categories = {
//     transport: "Транспорт",
//     products: "Продукты",
//     health: "Здоровье",
//     alcohol: "Алкоголь",
//     entertainment: "Развлечения",
//     forHome: "Все для дома",
//     tech: "Техника",
//     utility: "Коммуналка, связь",
//     sportHobby: "Спорт, хобби",
//     education: "Образование",
//     other: "Прочее",
// }

// let chartData = [400, 40, 80, 100, 300];

// class Chart extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       chartData: {
//         labels: ["Мясо", "Картоха", "Овощи", "Фрукты", "Рыба"],

//         datasets: [
//           {
//             data: chartData,
//             backgroundColor: "orange",
//             // maxBarThickness: 38,
//           }
//         ],
//       },
//     };
//   }

//   render() {
//     return (
//       <div className={styles.chart}>
// <ul className= {styles.list}>
// <li className = {styles.item}>
//   <p>Money</p>
//   <p>Category</p>

// </li>
// </ul>
//       </div>
//     );
//   }
// }

// // render() {
// //   return (
// //     <div className={styles.chart}>
// //       <Bar
// //         data={this.state.chartData}
// //         className={styles.bar}
// //         options={{
// //           cornerRadius: 20,
// //           tooltips: {enabled: false},
// //           legend: {
// //             display: false,
// //           },

// //           scales: {
// //             xAxes: [
// //               {
// //                 gridLines: {
// //                   display: false,
// //                 },
// //               },
// //             ],
// //             yAxes: [
// //               {
// //                 ticks: {
// //                   display: false, // this will remove only the label
// //                   suggestedMax: Math.max(...chartData) * 1.05,
// //                 },
// //                 gridLines: {
// //                   drawBorder: false,
// //                 },
// //               },
// //             ],
// //           },
// //           plugins: {
// //             datalabels: {
// //               anchor: "end",
// //               align: "top",
// //               formatter: function (value, context) {
// //                 return value + " грн";
// //               },
// //               font: {
// //                 weight: "bold",
// //               },
// //             },
// //           },
// //         }}
// //       />
// //     </div>
// //   );
// // }
// // }

// export default Chart;
