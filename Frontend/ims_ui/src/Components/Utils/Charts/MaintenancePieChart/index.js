import { Chart } from "react-google-charts";

export const data = [
  ["Items", "Count"],
  ["Pending", 120],
  ["Recieved", 55],
];

export const options = {
  title: "Maintenance Items Distribution",
  pieHole: 0.3,
  is3D: false,
  colors:['#1565C0','#C62828','#FFC107'],
  backgroundColor:'transparent',
  fontName:'sans-serif',
  fontSize:16,
  chartArea:{height:'100%',width:'100%',left:'20%',top:"10%"},
  height:'70%',
  width:"70%"
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
