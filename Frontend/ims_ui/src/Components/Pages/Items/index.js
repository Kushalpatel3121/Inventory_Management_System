// import "../../../Styles/home.css";
import "./items.css";
import ItemsTable from "../../Utils/ItemsTable/ItemsTable";
// import SideBar from "../../Layout/Header/index";
// import Header from "../../Layout/SideBar/index";
import ItemsCard from "./Cards/ItemsCard/index";
import CategoryCard from './Cards/CategoryCard/index';
import LocationCard from './Cards/LocationCard/index';
import VendorCard from './Cards/VendorCard/index';
import Layout from "../../Layout/index";
import SearchBar from "../../Utils/Search/index";

const toRender = (
  <div className="fe-items">
    <div className="fe-items-cards">
      <ItemsCard />
      <CategoryCard />
      <LocationCard />
      <VendorCard /> 
    </div>
    <div className="fe-items-table-search">
      <div className="fe-items-table-data">
        <ItemsTable className='fe-items-table-main' type='full'/>
      </div>
      <div className="fe-items-search-data">
        <SearchBar className="fe-items-search" search="Items"/>
      </div>
    </div>
  </div>
);

const Index = () => {
  return (
    <div>
      <Layout render={toRender} />
    </div>
    // <div className="fe-home">
    //   <div className="fe-home-left">
    //     <SideBar />
    //   </div>
    //   <div className="fe-home-right">
    //     <div className="fe-home-header-wrapper">
    //       <Header />
    //     </div>
    //     <div className="fe-home-content">
    //       .
    //       <div className="fe-home-content-pages">
    //         Hello World
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Index;
