import { AddToCartIcon } from "./Icons";
import { products } from "../mocks/products.json"
import useFilters from "../hooks/useFilters.js";
import useCart from "../hooks/useCart.js";

export default function Products() {
    
  const {filterProducts} =  useFilters()
  const {addToCart} = useCart()

  return(
      <ul className="prods-list">
      {filterProducts(products).map(prod=>(
          <li key={prod.id} className="prods">
            <img src={prod.thumbnail} alt={prod.description}  />
            <p>{prod.title} - {prod.price} €</p>
            <span className='description'>{prod.description}</span>
            <span onClick={()=> addToCart(prod)}>
              <AddToCartIcon />
            </span> 
          </li>))}
      </ul>
  )
}