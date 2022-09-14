import React from "react";
import {  Link } from "react-router-dom";

class User extends React.Component {
   
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
    
    componentDidMount() {
        fetch(
" https://assessment.api.vweb.app/users ")
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
            <h1> Fetch User data from an api in react </h1>
                   
            <Link to="/product" > <button>Go to Product Page</button></Link> 
            <Link to="/order"><button>Go to Order Page</button></Link> 
              
                   <table>
                <thead>
                  <tr>
                    <th>User Name</th>
                    <th>Full Name</th>
                  </tr>
                </thead>
             
             { items.map((item) => ( 
              <tbody>
   <tr>
                <td>{item.user_id}</td>
                    <td>{item.name}</td>
                </tr>
                </tbody>)
                  
                )   
            }
               </table>
            
        </div>
        
    );

   
}
}
   
export default User;