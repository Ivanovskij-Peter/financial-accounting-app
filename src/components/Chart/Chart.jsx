import React from "react";
import {useSelector} from "react-redux"
import styles from "./Chart.module.scss"
import getReports from "../../redux/reports/reports-selectors"




export default function Chart (props) {
//  console.log("props", props.match.params.category);
 console.log("props", props);

const transactionType = props.reportName.toLowerCase();
const category = props.match.params.category;

const report = useSelector(getReports.getUserReports)
console.log("report", report);
console.log("transactionType", transactionType);

const currentObject = transactionType==="расходы" ? report.costs :  report.incomes;

console.log("currentObject",currentObject );
    return (
      <div className={styles.chart}>
<ul className= {styles.list}>
<li className = {styles.item}>
  <p className = {styles.sum}>20000 грн</p>
  <p className = {styles.label}>Мясо</p>
</li>
<li className = {styles.item}>
  <p className = {styles.sum}>1000 грн</p>
  <p className = {styles.label}>Рыба</p>
</li>
<li className = {styles.item}>
  <p className = {styles.sum}>500 грн</p>
  <p className = {styles.label}>Овощи</p>
</li>
<li className = {styles.item}>
  <p className = {styles.sum}>400 грн</p>
  <p className = {styles.label}>Фрукты</p>
</li>
<li className = {styles.item}>
  <p className = {styles.sum}>200 грн</p>
  <p className = {styles.label}>Молоко</p>
</li>

</ul>
      </div>
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
