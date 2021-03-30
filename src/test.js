// const getScale = (val) => {
//   const diff = Math.ceil(val / 10);
//   const diffStr = diff.toString();
//   const firstNum = Number(diffStr[0]) < 5 ? 5 : 10;
//   const scaleValue = firstNum * 10 ** (diffStr.length - 1);
//   const scaleMarks = Math.ceil(val / scaleValue);
//   const result = [...new Array(scaleMarks+1)].map((_, i) => i * scaleValue);
//   return result;
// };
// console.log(getScale(837));
