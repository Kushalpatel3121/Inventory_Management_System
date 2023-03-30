import React from "react";
import { Chart } from "react-google-charts";

const dataOld = [
  ["Category", "Qty in Scrap"],
  ["Monitor", 279],
  ["CPU", 201],
  ["Mouse", 389],
];

const dataNew = [
    ["Category", "Qty in Scrap"],
    ["Monitor", 190],
    ["CPU", 187],
    ["Mouse", 290],
];

export const diffdata = {
  old: dataOld,
  new: dataNew,
};

export const options = {
  title:"Scrap Items by Category",
  pieSliceText: "none",
  backgroundColor:'transparent',
  fontName:'sans-serif',
  fontSize:16,
  chartArea:{height:'100%',width:'100%'},
  colors:['#C62828','#00C853','#1565C0','#7B5BDB','#FFC107'],
  height:'100%',
  width:"100%"
};

export default function App() {
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="100%"
      diffdata={diffdata}
      options={options}
    />
  );
}
