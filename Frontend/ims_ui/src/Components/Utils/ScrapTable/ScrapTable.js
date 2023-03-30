import "./ScrapTable.css";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "Item ID", width: 200, editable: false,headerClassName: "super-app-theme--header" },
  {
    field: "itemName",
    headerName: "Item Name",
    width: 200,
    editable: false,
    headerClassName: "super-app-theme--header"
  },
  {
    field: "dateAdded",
    headerName: "Date Added",
    width: 170,
    type: "date",
    // editable: true,
    editable: false,
    headerClassName: "super-app-theme--header"
  },
  {
    field: "scrapAmount",
    headerName: "Amount Recieved",
    width: 170,
    type: "number",
    // editable: true,
    editable: false,
    headerClassName: "super-app-theme--header"
  },
  // {
  //   field: 'dateRecieved',
  //   headerName: 'Date Recieved',
  //   type: 'date',
  //   width: 170,
  //   // editable: true,
  //   editable: false,
  // },
  // {
  //   field: 'state',
  //   headerName: 'State',
  //   editable: false,
  //   width: 160,
  // },
  // {
  //   field: 'cost',
  //   headerName: 'Cost',
  //   type:'number',
  //   width: 170,
  //   editable: false,
  // },
  // {
  //   field: 'agency',
  //   headerName: 'Agency',
  //   width: 170,
  //   editable: false,
  // },
];

const rows = [
  { id: 1, itemName: "Snow", dateAdded: "20-11-21", scrapAmount: 3000},
  { id: 2, itemName: "Snow", dateAdded: "20-11-21", scrapAmount: 3000 },
  { id: 3, itemName: "Snow", dateAdded: "20-11-21", scrapAmount: 3000 },
  { id: 4, itemName: "Snow", dateAdded: "20-11-21", scrapAmount: 3000 },
  { id: 5, itemName: "Snow", dateAdded: "20-11-21", scrapAmount: 3000 },
  { id: 6, itemName: "Snow", dateAdded: "20-11-21", scrapAmount: 3000 },
  { id: 7, itemName: "Snow", dateAdded: "20-11-21", scrapAmount: 3000 },
  { id: 8, itemName: "Snow", dateAdded: "20-11-21", scrapAmount: 3000 },
  { id: 9, itemName: "Snow", dateAdded: "20-11-21", scrapAmount: 3000 },
  { id: 10, itemName: "Snow", dateAdded: "20-11-21", scrapAmount: 3000 },
  { id: 11, itemName: "Snow", dateAdded: "20-11-21", scrapAmount: 3000 },
  { id: 12, itemName: "Snow", dateAdded: "20-11-21", scrapAmount: 3000 },
];

export default function ScrapTable(props) {
  var data;
  switch (props.type) {
    case "full":
      data = rows;
      break;
    case "recent":
      data = [
        { id: 1, itemName: "Snow", dateAdded: "20-11-21", scrapAmount: 3000 },
        { id: 2, itemName: "Snow", dateAdded: "20-11-21", scrapAmount: 3000 },
        { id: 3, itemName: "Snow", dateAdded: "20-11-21", scrapAmount: 3000 },
        { id: 4, itemName: "Snow", dateAdded: "20-11-21", scrapAmount: 3000 },
        { id: 5, itemName: "Snow", dateAdded: "20-11-21", scrapAmount: 3000 },
        { id: 6, itemName: "Snow", dateAdded: "20-11-21", scrapAmount: 3000 },
      ];
      break;
    default:
      data = rows;
      break;
  }

  return (
    <div className="fe-scrap-table">
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          // autoHeight
          rowsPerPageOptions={[5]}
          // checkboxSelection
          disableSelectionOnClick
          sx={{
            border: 2,
            borderColor: "#673AB7",
            borderRadius: 1,
            "& .MuiDataGrid-cell:hover": {
              color: "black",
              // backgroundColor:'primary.light',
            },
            "& .MuiDataGrid-cell": {
              color: "white",
              // backgroundColor:'primary.light',
            },
            "& .super-app-theme--header": {
              backgroundColor: "#673AB7",
              color: "white",
              fontWeight: "bold",
            },
            
          }}
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </div>
  );
}
