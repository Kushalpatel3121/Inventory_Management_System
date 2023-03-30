import { useState } from "react";
import './search.css';
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

const Index = ({ setSearchQuery,search }) => {
  return (
    <div className="fe-utils-search">
      <form>
        <TextField
        // fullWidth
          id="search-bar"
          className="search-textfield"
          onInput={(e) => {
            setSearchQuery(e.target.value);
          }}
          label={search}
          variant="outlined"
          size="small"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        >
        </TextField>
        {/* <IconButton type="submit" aria-label="search">
          <SearchIcon style={{ fill: "blue" }} />
        </IconButton> */}
      </form>
    </div>
  );
};

export default Index;
