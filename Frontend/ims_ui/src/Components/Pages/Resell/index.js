import './resell.css';
import Layout from '../../Layout/index';
import ResellTable from '../../Utils/ResellTable/ResellTable';
import SearchBar from '../../Utils/Search/index';
import ResellCard from './Cards/ResellCard/index';
import PieChart from '../../Utils/Charts/ResellPieChart/index';

const toRender = (
  <div className="fe-resell">
    <div className='fe-resell-search-table-card'>
      <div className='fe-resell-search-card'>
         <SearchBar search="Items"/> 
         <ResellCard />
      </div>
      <div className='fe-resell-table-data'>
        <ResellTable className='fe-resell-table-main'/>
      </div>
    </div>
    <div className='fe-resell-chart'>
      <PieChart />
    </div>
  </div>
);

const Index = () => {
  return (
    <div>
        <Layout render={toRender}/>
    </div>
  )
}

export default Index;