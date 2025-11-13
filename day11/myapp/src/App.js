// a js func which returns jsx is called component 
import './App.css';

const Header = () => {
  return (<div id="header">
    <img alt="logo" src="https://www.bing.com/images/search?view=detailV2&ccid=HJp%2b59P4&id=76B283096BBD8AF8E9A976375337571471C506EB&thid=OIP.HJp-59P47ePkYj9ibdaZKAHaD4&mediaurl=https%3a%2f%2fm.media-amazon.com%2fimages%2fG%2f56%2fsocial_share%2famazon_logo._CB579561563_.png&exph=315&expw=600&q=amazon&FORM=IRPRST&ck=4ABA36C24564F9C2CC3C39BEC5DA5494&selectedIndex=31&itb=0"/>
    <h2>Amazon</h2>
    <ul>
      <li>Home</li>
      <li>Cart</li>
      <li>About</li>
    </ul>
  </div>)
}
const Search = () => {
    return(
        <div id="search">
            <input type="text" />
            <button>Search</button>
        </div>
    )
}

const Product =()=>{
    return (<div id ="product">
        <h3>Small Space Solutions</h3>
        <img alt="Small Space Solutions" src="https://m.media-amazon.com/images/I/51oCB8lqGDL._AC_UL320_.jpg" />
    </div>)
}
const Body = () => {
  return (<div id="body">
    <Search />
    <div className="product-container"><Product /></div>
  </div>)
}
const Footer = () => {
  return (<div id="footer" style={{ backgroundColor: "lightgray"  }}>Copyright,2025,ABES CS_C</div>)
}


const App = () => {
  return (<>
  <><Header /></>
  <><Body /></>
  <><Footer /></>
  </>)
}
export default App;
