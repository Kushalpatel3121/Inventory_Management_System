import "./card.css";
import AddResellButton from './AddResell';
import UpdateResellButton from './UpdateResell';
// import DeleteCategoryButton from './DeleteCategory';
import IconButton from "@mui/material/IconButton";
// import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";

const Index = () => {
  return (
    <div className="fe-resell-card">
      <div className="fe-resell-card-new">
        <Stack direction="row" alignItems="center" spacing={10.5}>
          <p>Add Item to Resell</p>
          <IconButton>
            <AddResellButton />
          </IconButton>
        </Stack>
      </div>
      <div className="fe-resell-card-update">
        <Stack direction="row" alignItems="center" spacing={7}>
          <p>Update Item in resell</p>
          <IconButton>
            <UpdateResellButton />
          </IconButton>
        </Stack>
      </div>
    </div>
  );
};

export default Index;