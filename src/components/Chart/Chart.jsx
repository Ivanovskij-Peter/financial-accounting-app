import styles from "./Chart.module.scss";

export default function Chart({ labelToValueArray }) {
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
    labelToValueArray.length && (
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
                <p
                  className={
                    value / heightCoefficient < 78 ? styles.sumLow : styles.sum
                  }
                >
                  {value} грн
                </p>
                <p className={styles.label}>{label}</p>
              </li>
            );
          })}
        </ul>
      </div>
    )
  );
}
