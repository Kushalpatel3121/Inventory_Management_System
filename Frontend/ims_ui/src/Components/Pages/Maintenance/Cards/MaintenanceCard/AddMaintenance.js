import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import SearchBar from '../../../../Utils/Search/index';
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
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import React from "react";

const AddItem = () => {
  const [open, setOpen] = React.useState(false);
  const [status, setStatus] = React.useState("");
  const [agency, setAgency] = React.useState("");
//   const [value, setValue] = React.useState(dayjs("2014-08-18T21:11:54"));
  const [dateadd, setDateAdd] = React.useState("");
  const [daterec, setDateRec] = React.useState("");


  const handleChangeDateAdd = (newValue) => {
    setDateAdd(newValue);
  };

  const handleChangeDateRec = (newValue) => {
    setDateRec(newValue);
  };

  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
  };

  const handleChangeAgency = (event) => {
    setAgency(event.target.value);
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
        <AddCircleRoundedIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add to Maintenance</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            Add Item
          </DialogContentText> */}
          <SearchBar search="Items"/>
          <TextField
            autoFocus
            required
            margin="dense"
            id="ItemId"
            label="Item Id"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            required
            id="ItemName"
            label="Item Name"
            type="text"
            fullWidth
            variant="standard"
            sx={{mb:3}}
          />
          <InputLabel id="maintenance-status">Status</InputLabel>
          <Select
            labelId="maintenance-status"
            required
            id="maintenance-status"
            value={status}
            onChange={handleChangeStatus}
            label="Status"
            fullWidth
            variant="standard"
            sx={{mb:3}}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Delivered">Delivered</MenuItem>
          </Select>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label="Date Added"
              required
              inputFormat="MM/DD/YYYY"
              value={dateadd}
              onChange={handleChangeDateAdd}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>

          <TextField
            autoFocus
            required
            margin="dense"
            id="ItemCost"
            label="Cost"
            type="text"
            fullWidth
            variant="standard"
            sx={{mb:3}}
          />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label="Date Recieved"
              required
              inputFormat="MM/DD/YYYY"
              value={daterec}
              onChange={handleChangeDateRec}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>


          <InputLabel id="maintenance-agency" sx={{mt:3}}>Agency</InputLabel>
          <Select
            labelId="maintenance-agency"
            required
            id="maintenance-agency"
            value={agency}
            onChange={handleChangeAgency}
            label="Agency"
            fullWidth
            variant="standard"
            sx={{mb:3}}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Croma">Croma</MenuItem>
            <MenuItem value="Vijay Sales">Vijay Sales</MenuItem>
          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddItem;
