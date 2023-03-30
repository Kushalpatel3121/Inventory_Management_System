import "./ResellTable.css";
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
    field: "sellinPrice",
    headerName: "Selling Price",
    type: "number",
    width: 170,
    editable: false,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "customer",
    headerName: "Customer Name",
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
    sellingPrice: 3400,
    customer: "Vijay Sales",
  },
  {
    id: 2,
    itemName: "Snow",
    dateAdded: "20-11-21",
    sellingPrice: 3400,
    customer: "Vijay Sales",
  },
  {
    id: 3,
    itemName: "Snow",
    dateAdded: "20-11-21",
    sellingPrice: 3400,
    customer: "Vijay Sales",
  },
  {
    id: 4,
    itemName: "Snow",
    dateAdded: "20-11-21",
    sellingPrice: 3400,
    customer: "Vijay Sales",
  },
  {
    id: 5,
    itemName: "Snow",
    dateAdded: "20-11-21",
    sellingPrice: 3400,
    customer: "Vijay Sales",
  },
  {
    id: 6,
    itemName: "Snow",
    dateAdded: "20-11-21",
    sellingPrice: 3400,
    customer: "Vijay Sales",
  },
  {
    id: 7,
    itemName: "Snow",
    dateAdded: "20-11-21",
    sellingPrice: 3400,
    customer: "Vijay Sales",
  },
  {
    id: 8,
    itemName: "Snow",
    dateAdded: "20-11-21",
    sellingPrice: 3400,
    customer: "Vijay Sales",
  },
  {
    id: 9,
    itemName: "Snow",
    dateAdded: "20-11-21",
    sellingPrice: 3400,
    customer: "Vijay Sales",
  },
  {
    id: 10,
    itemName: "Snow",
    dateAdded: "20-11-21",
    sellingPrice: 3400,
    customer: "Vijay Sales",
  },
  {
    id: 11,
    itemName: "Snow",
    dateAdded: "20-11-21",
    sellingPrice: 3400,
    customer: "Vijay Sales",
  },
  {
    id: 12,
    itemName: "Snow",
    dateAdded: "20-11-21",
    sellingPrice: 3400,
    customer: "Vijay Sales",
  },
  {
    id: 13,
    itemName: "Snow",
    dateAdded: "20-11-21",
    sellingPrice: 3400,
    customer: "Vijay Sales",
  },
  {
    id: 14,
    itemName: "Snow",
    dateAdded: "20-11-21",
    sellingPrice: 3400,
    customer: "Vijay Sales",
  },
];

export default function ResellTable() {
  return (
    <div className="fe-resell-table">
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
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
