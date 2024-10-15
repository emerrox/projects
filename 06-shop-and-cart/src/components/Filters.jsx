import useFilters from '../hooks/useFilters.js'
export default function Filters() {
    const {filters,setFilters} = useFilters()

    function handleChangeCategory(e){
        setFilters(prevState => ({
            ...prevState,
            category: e.target.value
          }))  
    }

    function handleChangeMinPrice(e){
        setFilters(prevState => ({
            ...prevState,
            minPrice: e.target.value
          }))     
    }

    return(
        <div className="filters" >
        <div className="price">
          <span>min price</span>
          <input type="range" name="price" id="price" min='0' max='1000' onChange={(e)=>handleChangeMinPrice(e)} />
          <span>{filters.minPrice}€</span>
        </div>

        <div className="category">
          <span>Category</span>
          <select name="category" id="category" value={filters.category} onChange={(e)=>handleChangeCategory(e)}>
            <option value="all" >All</option>
            <option value="groceries">groceries</option>
            <option value="fragrances">fragrances</option>
          </select>
        </div>
      </div>
    )
}