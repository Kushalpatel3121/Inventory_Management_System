import "./scrap.css";
import Layout from "../../Layout/index";
import ScrapTable from "../../Utils/ScrapTable/ScrapTable";
import SearchBar from "../../Utils/Search/index";
import PieChart from "../../Utils/Charts/ScrapPieChart/index";
// import DiffChart1 from '../../Utils/Charts/ScrapDiffPieChart/index';
import ScrapCard from './Cards/ScrapCard/index';

const toRender = (
  <div className="fe-scrap">
    <div className="fe-scrap-search-table-add">
      <div className="fe-scrap-search-add">
        <SearchBar type='Items'/>
        <ScrapCard />
      </div>
      <div className="fe-scrap-table-data">
      <ScrapTable type="full" className="fe-scrap-table-main"/>
      </div>
    </div>
    <div className="fe-scrap-chart">
      <PieChart />
    </div>
  </div>
);
 
const Index = () => {
  return (
    <div>
      <Layout render={toRender} />
    </div>
  );
};

export default Index;
