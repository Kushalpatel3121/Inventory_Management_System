import SearchBar from '../../../../Utils/Search/index';
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import dayjs from "dayjs";
// import Stack from "@mui/material/Stack";
// import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";


import React from "react";
import { Category } from "@mui/icons-material";

const AddItem = () => {
  const [open, setOpen] = React.useState(false);
  const [category, setCategory] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [vendor, setVendor] = React.useState("");
//   const [value, setValue] = React.useState(dayjs("2014-08-18T21:11:54"));
  const [value, setValue] = React.useState("");

  const handleChangeDate = (newValue) => {
    setValue(newValue);
  };

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleChangeLocation = (event) => {
    setLocation(event.target.value);
  };

  const handleChangeVendor = (event) => {
    setVendor(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton onClick={handleClickOpen}>
        <DeleteForeverRoundedIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Delete Item</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            Add Item
          </DialogContentText> */}
          <SearchBar search="Items"/> 
          <TextField
            autoFocus
            margin="dense"
            id="ItemName"
            label="Item Name"
            type="text"
            fullWidth
            variant="standard"
            disabled
          />
          <TextField
            margin="dense"
            id="ItemPrice"
            label="Item Price"
            type="number"
            variant="standard"
            sx={{mb:3,mr:4}}
            disabled
          />
          <TextField
            margin="dense"
            id="ItemQty"
            label="Quantity"
            type='number'
            variant="standard"
            sx={{mb:3}}
            disabled
          />
          <InputLabel id="item-category">Category</InputLabel>
          <Select
            labelId="item-category"
            id="item-category"
            value={category}
            onChange={handleChangeCategory}
            label="Category"
            fullWidth
            variant="standard"
            sx={{mb:3}}
            disabled
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              disabled
              label="Date"
              inputFormat="MM/DD/YYYY"
              value={value}
              onChange={handleChangeDate}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <InputLabel id="item-location" sx={{mt:3}}>Location</InputLabel>
          <Select
            labelId="item-location"
            id="item-location"
            value={location}
            onChange={handleChangeLocation}
            label="Location"
            fullWidth
            variant="standard"
            sx={{mb:3}}
            disabled
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <InputLabel id="item-vendor">Vendor</InputLabel>
          <Select
            labelId="item-vendor"
            disabled
            id="item-vendor"
            value={vendor}
            onChange={handleChangeVendor}
            label="Vendor"
            fullWidth
            variant="standard"
            sx={{mb:3}}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Delete</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddItem;
