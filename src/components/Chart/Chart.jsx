import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import styles from "./Chart.module.scss";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ["Мясо", "Картоха", "Овощи", "Фрукты", "Рыба"],
      
        datasets: [{ 
          label: "Money",
          data: [400, 40, 80, 100, 300], 
          backgroundColor: "yellow"
        }]
      }
    }
}

  render() {
    return (
      <div className={styles.chart}>
        <Bar
          data={this.state.chartData}
          options={{ maintainAspectRatio: false }}
        />
      </div>
    );
  }
}

export default Chart;
