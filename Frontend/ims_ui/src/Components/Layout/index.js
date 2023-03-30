import '../../Styles/home.css';
import Header from './Header/index';
import SideBar from './SideBar/index';
const Index = (props) => {
  return (
    <div className="fe-home"> 
      <div className="fe-home-left">
        <SideBar />
      </div> 
      <div className="fe-home-right">
        <div className="fe-home-header-wrapper">
          <Header />
        </div>
        <div className="fe-home-content">
          {/* {props.render} */}
          <div className="fe-home-content-pages">
            {props.render}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index