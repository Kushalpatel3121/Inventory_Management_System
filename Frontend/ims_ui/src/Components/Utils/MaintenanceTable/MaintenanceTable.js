import './MaintenanceTable.css';
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  {
    field: "id",
    headerName: "Item ID",
    width: 150,
    editable: false,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "itemName",
    headerName: "Item Name",
    width: 170,
    editable: false,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "dateAdded",
    headerName: "Date Added",
    width: 170,
    type: "date",
    // editable: true,
    editable: false,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "dateRecieved",
    headerName: "Date Recieved",
    type: "date",
    width: 170,
    // editable: true,
    editable: false,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "state",
    headerName: "State",
    // description: 'This column has a value getter and is not sortable.',
    // sortable: false,
    editable: false,
    width: 160,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "cost",
    headerName: "Cost",
    headerAlign: "start",
    type: "number",
    width: 170,
    editable: false,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "agency",
    headerName: "Agency",
    width: 170,
    editable: false,
    headerClassName: "super-app-theme--header",
  },
];

const rows = [
  {
    id: 1,
    itemName: "Snow",
    dateAdded: "20-11-21",
    dateRecieved: "22-11-21",
    state: "done",
    cost: 3400,
    agency: "Vijay Sales",
  },
  {
    id: 2,
    itemName: "Snow",
    dateAdded: "20-11-21",
    dateRecieved: "22-11-21",
    state: "done",
    cost: 3400,
    agency: "Vijay Sales",
  },
  {
    id: 3,
    itemName: "Snow",
    dateAdded: "20-11-21",
    dateRecieved: "22-11-21",
    state: "done",
    cost: 3400,
    agency: "Vijay Sales",
  },
  {
    id: 4,
    itemName: "Snow",
    dateAdded: "20-11-21",
    dateRecieved: "22-11-21",
    state: "done",
    cost: 3400,
    agency: "Vijay Sales",
  },
  {
    id: 5,
    itemName: "Snow",
    dateAdded: "20-11-21",
    dateRecieved: "22-11-21",
    state: "done",
    cost: 3400,
    agency: "Vijay Sales",
  },
  {
    id: 6,
    itemName: "Snow",
    dateAdded: "20-11-21",
    dateRecieved: "22-11-21",
    state: "done",
    cost: 3400,
    agency: "Vijay Sales",
  },
  {
    id: 7,
    itemName: "Snow",
    dateAdded: "20-11-21",
    dateRecieved: "22-11-21",
    state: "done",
    cost: 3400,
    agency: "Vijay Sales",
  },
  {
    id: 8,
    itemName: "Snow",
    dateAdded: "20-11-21",
    dateRecieved: "22-11-21",
    state: "done",
    cost: 3400,
    agency: "Vijay Sales",
  },
  {
    id: 9,
    itemName: "Snow",
    dateAdded: "20-11-21",
    dateRecieved: "22-11-21",
    state: "done",
    cost: 3400,
    agency: "Vijay Sales",
  },
  {
    id: 10,
    itemName: "Snow",
    dateAdded: "20-11-21",
    dateRecieved: "22-11-21",
    state: "done",
    cost: 3400,
    agency: "Vijay Sales",
  },
  {
    id: 11,
    itemName: "Snow",
    dateAdded: "20-11-21",
    dateRecieved: "22-11-21",
    state: "done",
    cost: 3400,
    agency: "Vijay Sales",
  },
];

export default function MaintenanceTable(props) {
  var data;
  switch (props.type) {
    case "full":
      data = rows;
      break;
    case "recent":
      data = [
        {
          id: 1,
          itemName: "Snow",
          dateAdded: "20-11-21",
          dateRecieved: "22-11-21",
          state: "done",
          cost: 3400,
          agency: "Vijay Sales",
        },
        {
          id: 2,
          itemName: "Snow",
          dateAdded: "20-11-21",
          dateRecieved: "22-11-21",
          state: "done",
          cost: 3400,
          agency: "Vijay Sales",
        },
        {
          id: 3,
          itemName: "Snow",
          dateAdded: "20-11-21",
          dateRecieved: "22-11-21",
          state: "done",
          cost: 3400,
          agency: "Vijay Sales",
        },
        {
          id: 4,
          itemName: "Snow", 
          dateAdded: "20-11-21",
          dateRecieved: "22-11-21",
          state: "done",
          cost: 3400,
          agency: "Vijay Sales",
        },
      ];
      break;
    default:
      data = rows;
  }
  return (
    <div className="fe-maintenance-table">
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
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
