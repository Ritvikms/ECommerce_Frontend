
import { useEffect, useState } from 'react'
import { Product } from './app/model/product';


function App() {
//Initialize a state variable to store products data.
  const [products,setProducts] = useState<Product[]>([]);

// //Fetch data from the API when the component is mounted.
//   useEffect(() =>{
//     const fetchData = async () =>{
//       try{
//         const response = await fetch('http://localhost:8081/api/products');// Send a GET request to the API.
//         if(!response.ok){
//           throw new Error('Failed to fetch the data');// Handle HTTP errors.
//         }
//         const data =await response.json(); // Parse the JSON response.
//         setProducts(data.content) // Update the state with the fetched products.
//       }catch(error){
//         console.error('Error Fetching data', error);// Log any errors during the fetch process.
//       }
//     };
//     fetchData();
//   },[]); // The empty dependency array ensures this effect runs only once after the component mounts.
  
useEffect(() => {

  fetch('http://localhost:8081/api/products')
  .then(response => response.json())
  .then(data => setProducts(data.content));
  

},[]);

  return (
    <div>
      <h1>Sports Center</h1>
      {products.map(product=>(// Loop through the products array and display each product.
        <div key={product.id}>{/* Use a unique key for each product for efficient rendering. */}
          <p>Name: {product.name}</p>
          <p>Description: {product.description}</p>
          <p>price: ${product.price}</p>
          <p>brand: ${product.productBrand}</p>
          <p>Type: ${product.productType}</p>
          </div>
      ))}
      
    </div>
  )
}

export default App
