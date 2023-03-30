import { Chart } from "react-google-charts";

export const data = [
  ["Status", "Count"],
  ["Pending", 19],
  ["Sold", 55],
];

export const options = {
  title: "Resell Items Status Distribution",
  pieHole: 0.3,
  is3D: false,
  colors:['#FFC107','#1565C0','#C62828'],
  backgroundColor:'transparent',
  fontName:'sans-serif',
  fontSize:16,
  chartArea:{height:'100%',width:'100%',left:'20%',top:"10%"},
  height:'90%',
  width:"90%"
//   legend:{position: 'bottom', textStyle: {color: 'blue', fontSize: 16}}
  
};

export default function App() {
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="100%"
      data={data}
      options={options}
    />
  );
}
