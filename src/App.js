import './App.css';
import ProductList from './components/ProductList';

function App() {
  return (
    <div style={{display:"flex", flexDirection:'column', alignItems:'center', justifyContent:"center"}}>
     <div>
      <h2 style={{textAlign: "center"}}>PLP</h2>
     </div>
     <div 
     style={{
      width:"630px",
      border:"1px solid black",
      margin: "auto",
      marginTop: "30px",
      
     }}
     >
<ProductList/>
     </div>
    </div>
  );
}

export default App;
