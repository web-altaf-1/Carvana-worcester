import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import './Inventory.css';
import { Link } from "react-router-dom";

const Inventory = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    


  return (
    <div className="manage-inventories">
      <h1>Manage Inventories</h1>

      <div className="table">
        <Table responsive>
          <thead>
            <tr>
              <th>Car</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody className="align-middle">
            {products.map((car) => (
              <tr key={car._id}>
                <td>
                  <img src={car.img} height="50px" alt="" />
                </td>
                <td>{car.name}</td>
                <td>{car.price}</td>
                <td>{car.quantity}</td>
                <td>
                  <button
                    // onClick={() => removeItem(car._id)}
                    className="remove"
                  >
                    
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className="add-item">
        <Link to={"/addInventoryItem"} className="link">
          {" "}
          Add New Item +{" "}
        </Link>
      </div>
    </div>
  );
};

export default Inventory;














// import React, { useEffect, useState } from 'react';

// const Inventory = () => {
//     const [products, setProducts] = useState([]);
//     useEffect(() => {
//         fetch('http://localhost:5000/items')
//             .then(res => res.json())
//             .then(data => setProducts(data))
//     }, []);

//     return (
//         <div>
//             <div className="car-heading">
//                 <h1 className='text-center mt-5 mb-5'>Inventory Items </h1>
//             </div>
//             <div className="car-items mb-5">
//                 <table>
//                     <tr>
//                         <th>Car</th>
//                         <th>Name</th>
//                         <th>Price</th>
//                         <th>Quantity</th>
//                         <th>Action</th>
//                     </tr>
//                     <tr>
//                         {
//                             products.map(product => <td>{product.name}</td>)
//                         }
                        
//                     </tr>
//                     <tr>
//                         <td>Centro comercial Moctezuma</td>
//                         <td>Francisco Chang</td>
//                         <td>Mexico</td>
//                     </tr>
//                     <tr>
//                         <td>Ernst Handel</td>
//                         <td>Roland Mendel</td>
//                         <td>Austria</td>
//                     </tr>
//                     <tr>
//                         <td>Island Trading</td>
//                         <td>Helen Bennett</td>
//                         <td>UK</td>
//                     </tr>
//                     <tr>
//                         <td>Laughing Bacchus Winecellars</td>
//                         <td>Yoshi Tannamuri</td>
//                         <td>Canada</td>
//                     </tr>
//                     <tr>
//                         <td>Magazzini Alimentari Riuniti</td>
//                         <td>Giovanni Rovelli</td>
//                         <td>Italy</td>
//                     </tr>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default Inventory;