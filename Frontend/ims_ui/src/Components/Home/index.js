import "../../Styles/home.css";
import './homeCmp.css';
import ItemsTable from '../Utils/ItemsTable/ItemsTable';
import MaintenanceTable from '../Utils/MaintenanceTable/MaintenanceTable';
import Widget from "../Utils/Widget/index";
// import SideBar from "../Layout/SideBar/index";
// import Header from "../Layout/Header/index";
import Layout from '../Layout/index';
import PieChart1 from '../Utils/Charts/HomeItemsDistribution/index';
import PieChart2 from '../Utils/Charts/HomeFinanceSummary/index';

const toRender =(
  <div className="fe-home-main"> 
    <div className="fe-home-widget">
      <Widget type='items'/>
      <Widget type='maintenance'/>
      <Widget type='scrap resell'/>
      <Widget type='cost summary'/>
    </div>
    <div className="fe-home-recent-title">
      <h3>Recent Item Details :</h3>
    </div>
    <div className="fe-home-table-chart">
      <div className="fe-home-table">
        <ItemsTable type='recent'/>
      </div>
      <div className="fe-home-chart">
        <PieChart1 /> 
      </div>
    </div>
    <div className="fe-home-recent-title">
      <h3>Recent Maintenance Details :</h3>
    </div>
    <div className="fe-home-table-chart">
      <div className="fe-home-table">
        <MaintenanceTable type='recent'/>
      </div>
      <div className="fe-home-chart">
        <PieChart2 />
      </div>
    </div>
  </div>
);

const index = () => {
  return (
    <Layout render={toRender} />
    // <div className="fe-home">
    //   <div className="fe-home-left">
    //     <SideBar />
    //   </div>
    //   <div className="fe-home-right">
    //     <div className="fe-home-header-wrapper">
    //       <Header />
    //     </div>
    //     {/* <div className="fe-home-content">
    //       .
    //       <div className="fe-home-content-pages">
    //         Hello
    //       </div>
    //     </div> */}
    //   </div>
    // </div>
  );
};

export default index;
