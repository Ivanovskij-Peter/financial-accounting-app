import React from "react";
import { useParams } from "react-router-dom";
// import { Bar } from "react-chartjs-2";
// import styles from "./Chart.module.scss";
// import "chartjs-plugin-datalabels";

// export default function Chart ({categoryFromQueryString}){

// }

// let categories = {
//   transport: "Транспорт",
//   products: "Продукты",
//   health: "Здоровье",
//   alcohol: "Алкоголь",
//   entertainment: "Развлечения",
//   forHome: "Все для дома",
//   tech: "Техника",
//   utility: "Коммуналка, связь",
//   sportHobby: "Спорт, хобби",
//   education: "Образование",
//   other: "Прочее",
// };

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
//           },
//         ],
//       },
//     };
//   }

//   render() {
//     return (
//       <div className={styles.chart}>
//         <Bar
//           data={this.state.chartData}
//           className={styles.bar}
//           options={{
//             cornerRadius: 20,
//             tooltips: { enabled: false },
//             legend: {
//               display: false,
//             },

//             scales: {
//               xAxes: [
//                 {
//                   gridLines: {
//                     display: false,
//                   },
//                 },
//               ],
//               yAxes: [
//                 {
//                   ticks: {
//                     display: false, // this will remove only the label
//                     suggestedMax: Math.max(...chartData) * 1.05,
//                   },
//                   gridLines: {
//                     drawBorder: false,
//                   },
//                 },
//               ],
//             },
//             plugins: {
//               datalabels: {
//                 anchor: "end",
//                 align: "top",
//                 formatter: function (value, context) {
//                   return value + " грн";
//                 },
//                 font: {
//                   weight: "bold",
//                 },
//               },
//             },
//           }}
//         />
//       </div>
//     );
//   }
// }

const Chart = () => {
  const { category } = useParams();
  return <h1>Chart {category} Page</h1>;
};

export default Chart;
