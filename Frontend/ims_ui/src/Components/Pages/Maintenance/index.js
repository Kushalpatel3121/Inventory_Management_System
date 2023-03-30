import "./maintenance.css";
import Layout from "../../Layout/index";
import MaintenanceTable from "../../Utils/MaintenanceTable/MaintenanceTable";
import SearchBar from "../../Utils/Search/index";
import MaintenanceCard from "./Cards/MaintenanceCard/index";
import AgencyCard from "./Cards/AgencyCard/index";
import PieChart from '../../Utils/Charts/MaintenancePieChart/index';

const toRender = (
  <div className="fe-maintenance">
    <div className="fe-maintenance-cards-search">
      <MaintenanceCard />
      <AgencyCard />
      <div className="fe-maintenance-search">
        <SearchBar search="Items" />
      </div>
    </div>
    <div className="fe-maintenance-table-chart">
      <div className="fe-maintenance-table-data">
        <MaintenanceTable className="fe-maintenance-table-main"/>
      </div>
      <div>
        <PieChart />
      </div>
    </div>
  </div>
);

const Index = () => {
  return <Layout render={toRender} />;
};

export default Index;
