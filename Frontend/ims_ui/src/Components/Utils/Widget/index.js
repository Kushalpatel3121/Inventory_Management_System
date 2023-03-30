import "./widget.css";
import Stack from "@mui/material/Stack";

var data = {};

const Index = (props) => {
  switch (props.type) {
    case "items":
      data = {
        title1: "Total Items Registered",
        data1: 1200,
        title2: "Total Categories Created",
        data2: 24,
      };
      break;
    case "maintenance":
      data = {
        title1: "Total Items Available",
        data1: 120,
        title2: "Items in Maintenance",
        data2: 12,
      };
      break;
    case "scrap resell":
      data = {
        title1: "Total Scrap Items",
        data1: 120,
        title2: "Items to Resell",
        data2: 12,
      };
      break;
    case "cost summary":
      data = {
        title1: "Total Expense",
        data1: 120000,
        title2: "Total Revenue",
        data2: 12000,
      };
      break;
  }
  return (
    <div className="fe-widget">
      <div className="fe-widget-data">
        {/* <div className="fe-widget-data"> */}
        <Stack direction="row" alignItems="center" spacing={4}>
          <p>{data.title1}</p>
          <p>{data.data1}</p>
        </Stack>
        <br></br>
        {/* </div> */}
        {/* <div className="fe-widget-data"> */}
        <Stack direction="row" alignItems="center" spacing={4}>
          <p>{data.title2}</p>
          <p>{data.data2}</p>
        </Stack>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Index;
