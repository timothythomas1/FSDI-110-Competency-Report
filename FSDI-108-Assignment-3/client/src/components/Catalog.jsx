import React from 'react'
import './Catalog.css'
import Product from '../components/Product'
import { useEffect, useState } from 'react'
import DataService from '../services/DataServices'

const Catalog = () => {
  const [products, setProduct] = useState([]);
  const [categories, setCategories] = useState([]);

  const loadData = async () => {
    // This function loads a DataService class
    let service = new DataService(); // instance of the class
    let prods = await service.getCatalog();
    setProduct(prods)

    //⭐️⭐️This function creates a new array of categories filtering out the repeats
    let uniques = [];
    for (let i = 0; i < prods.length; i++) {
      let prod = prods[i];
      // if the category does NOT exist in the uniques array, add it
      if (!uniques.includes(prod.category)) {
        uniques.push(prod.category);
      }
    }
    setCategories(uniques);
    //⭐️⭐️
  };

  useEffect(() => {
    loadData();
  }, []); //Bracket is a dependency. When dependencies change, the function fires. With no dependencies, it means excecute the function when component loads.

  return (
    <div className="catalog">
      <div className="catalog-btns">
        {
          categories.map((cat) => <button key={cat} type="button" className="btn btn-secondary btn-sm">{cat}</button>)
        }
      </div>

      <div className="product-list">
        {
          products.map((prod) =>
            <Product key={prod._id} data={prod} />)
        }
      </div>
    </div>
  )
}

export default Catalog;