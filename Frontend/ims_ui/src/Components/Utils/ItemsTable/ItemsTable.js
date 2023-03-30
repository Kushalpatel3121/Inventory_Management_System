import './ItemsTable.css';
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 80,headerClassName: 'super-app-theme--header' },
  {
    field: "name",
    headerName: "Name",
    width: 170,
    editable: false,
    headerClassName: 'super-app-theme--header',
  },
  {
    field: "price",
    headerName: "Price",
    type:'number',
    headerAlign: 'start',
    width: 110,
    editable: false,
    headerClassName: 'super-app-theme--header',
  },
  {
    field: "quantity",
    headerName: "Quantity",
    width: 100,
    editable: false,
    headerClassName: 'super-app-theme--header',
  },
  {
    field: "category",
    headerName: "Category",
    type: "string",
    width: 140,
    editable: false,
    headerClassName: 'super-app-theme--header',
  },
  {
    field: "dateAdded",
    headerName: "Date Registered",
    // description: "This column has a value getter and is not sortable.",
    type:'date',
    sortable: true,
    editable: false,
    width: 170,
    headerClassName: 'super-app-theme--header',
  },
  {
    field: "locationId",
    headerName: "Location",
    editable: false,
    // description: "This column has a value getter and is not sortable.",
    // type:"date",
    // sortable: false,
    width: 140,
    headerClassName: 'super-app-theme--header',
  },
  {
    field: "vendor",
    headerName: "Vendor",
    editable: false,
    // description: "This column has a value getter and is not sortable.",
    // type:"date",
    sortable: false,
    width: 170,
    headerClassName: 'super-app-theme--header',
  }
];

const rows = [
  { id: 1, name: "Snow", price: 45, quantity:12, category: 35, dateAdded: "11-12-2001", locationId:"werf21345", vendor: "Vijay Sales" },
  { id: 2, name: "Snow", price: 45, quantity:12, category: 35, dateAdded: "11-12-2001", locationId:"werf21345", vendor: "Vijay Sales" },
  { id: 3, name: "Snow", price: 45, quantity:12, category: 35, dateAdded: "11-12-2001", locationId:"werf21345", vendor: "Vijay Sales" },
  { id: 4, name: "Snow", price: 45, quantity:12, category: 35, dateAdded: "11-12-2001", locationId:"werf21345", vendor: "Vijay Sales" },
  { id: 5, name: "Snow", price: 45, quantity:12, category: 35, dateAdded: "11-12-2001", locationId:"werf21345", vendor: "Vijay Sales" },
  { id: 6, name: "Snow", price: 45, quantity:12, category: 35, dateAdded: "11-12-2001", locationId:"werf21345", vendor: "Vijay Sales" },
  { id: 7, name: "Snow", price: 45, quantity:12, category: 35, dateAdded: "11-12-2001", locationId:"werf21345", vendor: "Vijay Sales" },
  { id: 8, name: "Snow", price: 45, quantity:12, category: 35, dateAdded: "11-12-2001", locationId:"werf21345", vendor: "Vijay Sales" },
  { id: 9, name: "Snow", price: 45, quantity:12, category: 35, dateAdded: "11-12-2001", locationId:"werf21345", vendor: "Vijay Sales" },
  { id: 10, name: "Snow", price: 45, quantity:12,category: 35, dateAdded: "11-12-2001", locationId:"werf21345", vendor: "Vijay Sales" },

//   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
//   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
//   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
//   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
//   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
//   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
//   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const Index = (props) => {
  var data;
  switch(props.type){
    case 'full':
      data = rows;
      break;
    case 'recent':
      data = [
        { id: 1, name: "Snow", price: 45, quantity:12, category: 35, dateAdded: "11-12-2001", locationId:"werf21345", vendor: "Vijay Sales" },
        { id: 2, name: "Snow", price: 45, quantity:12, category: 35, dateAdded: "11-12-2001", locationId:"werf21345", vendor: "Vijay Sales" },
        { id: 3, name: "Snow", price: 45, quantity:12, category: 35, dateAdded: "11-12-2001", locationId:"werf21345", vendor: "Vijay Sales" },
        { id: 4, name: "Snow", price: 45, quantity:12, category: 35, dateAdded: "11-12-2001", locationId:"werf21345", vendor: "Vijay Sales" },
        { id: 5, name: "Snow", price: 45, quantity:12, category: 35, dateAdded: "11-12-2001", locationId:"werf21345", vendor: "Vijay Sales" }
      ]
  };

  return (
    <div className="fe-items-table">
      <Box sx={{ height:400, width: "100%"}}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          // ,
          // autoHeight
          // checkboxSelection
          disableSelectionOnClick
          sx={{
            border:2,
            borderColor:'#673AB7',
            borderRadius:1 ,
            '& .MuiDataGrid-cell:hover': {
              color: 'black',
              // backgroundColor:'primary.light',
            },
            '& .MuiDataGrid-cell': {
              color:'white',
              // backgroundColor:'primary.light',
            },
            '& .super-app-theme--header':{
              backgroundColor:'#673AB7',
              color:'white',
              fontWeight:'bold'
            }
          }}
          experimentalFeatures={{ newEditingApi: true }}
          // density="comfortable"
        />
      </Box>
    </div>
  );
};

export default Index;
