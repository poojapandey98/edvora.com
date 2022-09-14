import React from "react";
import {  Link } from "react-router-dom";

class Order extends React.Component {
   
    
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
    
    componentDidMount() {
        fetch(
" https://assessment.api.vweb.app/orders ")
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
            <Link to="/product"><button>Go to Product Page</button></Link> 
              
                   <table>
                <thead>
                  <tr>
                    <th>Order Id</th>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>User id</th>
                    <th>Order id</th>
                  </tr>
                </thead>
             
             { items.map((item) => ( 
              <tbody>
   <tr>
                <td>{item.order_id}</td>
                    <td>{item.product_id}</td>
                    <td>{item.quantity}</td>
                    <td>{item.user_id}</td>
                    <td>{item.order_date}</td>
                </tr>
                </tbody>)
                  
                )   
            }
               </table>
        </div>
    );
}
}
   
export default Order;