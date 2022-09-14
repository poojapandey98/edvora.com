import React from "react";
import {  Link } from "react-router-dom";
class Product extends React.Component {
   
    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
    
    componentDidMount() {
        fetch(
" https://assessment.api.vweb.app/products ")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                  });
                })
        }
        render() {
            const { DataisLoaded, items } = this.state;
            if (!DataisLoaded) return <div>
                <h1> Pleses wait some time.... </h1> </div> ;
       
       return (
        <div className = "App">
            <h1> Fetch Product data List </h1>
               
            <Link to="/" > <button>Go to User Page</button></Link> 
            <Link to="/order"><button>Go to Order Page</button></Link> 
            
                   <table>
                <thead>
                  <tr>
                    <th>Product Id</th>
                    <th>Name</th>
                    <th>Stock</th>
                    <th>Selling Price</th>
                  </tr>
                </thead>
             
             { items.map((item) => ( 
              <tbody>
   <tr>
                <td>{item.product_id}</td>
                    <td>{item.name}</td>
                    <td>{item.stock}</td>
                    <td>{item.selling_price}</td>
                </tr>
                </tbody>)
                  
                )   
            }
               </table>

        </div>
    );
}
}
   
export default Product;