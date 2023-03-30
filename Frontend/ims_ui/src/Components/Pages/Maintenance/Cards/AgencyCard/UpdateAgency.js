import SearchBar from '../../../../Utils/Search/index';
import UpgradeRoundedIcon from "@mui/icons-material/UpgradeRounded";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
// import DialogContentText from "@mui/material/DialogContentText";
// import MenuItem from "@mui/material/MenuItem";
// import InputLabel from "@mui/material/InputLabel";
// import Select from "@mui/material/Select";
// import dayjs from "dayjs";
// import Stack from "@mui/material/Stack";
// import TextField from "@mui/material/TextField";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";


import React from "react";
import { Category } from "@mui/icons-material";

const UpdateAgency = () => {
  const [open, setOpen] = React.useState(false);
//   const [category, setCategory] = React.useState("");
//   const [location, setLocation] = React.useState("");
//   const [vendor, setVendor] = React.useState("");
//   const [value, setValue] = React.useState(dayjs("2014-08-18T21:11:54"));
//   const [value, setValue] = React.useState("");

//   const handleChangeDate = (newValue) => {
//     setValue(newValue);
//   };

//   const handleChangeCategory = (event) => {
//     setCategory(event.target.value);
//   };

//   const handleChangeLocation = (event) => {
//     setLocation(event.target.value);
//   };

//   const handleChangeVendor = (event) => {
//     setVendor(event.target.value);
//   };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton onClick={handleClickOpen}>
        <UpgradeRoundedIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update Agency Details</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            Add Item
          </DialogContentText> */}
          <SearchBar search="Vendor"/>
          <TextField
            autoFocus
            required
            margin="dense"
            id="AgencyName"
            label="Agency Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            required
            id="AgencyMobile"
            label="Agency Mobile"
            type="tel"
            fullWidth
            variant="standard"
            sx={{mb:3}}
          />
          <TextField
            margin="dense"
            required
            id="AgencyEmail"
            label="Agency Email"
            type="email"
            fullWidth
            variant="standard"
            sx={{mb:3}}
          />
          <TextField
            margin="dense"
            required 
            id="AgencyAddress"
            label="Agency Address"
            type="text"
            multiline
            fullWidth
            rows={5}
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UpdateAgency;
