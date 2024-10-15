import { useContext } from "react"
import { FiltersContext } from "../context/filters";

export default function useFilters () {
    const{filters,setFilters} = useContext(FiltersContext)

    function filterProducts(products) {
        return products.filter(prod=>{
            return (
                prod.price >= filters.minPrice &&
                (
                    filters.category == 'all'
                    || prod.category == filters.category
                )
            )
        })
    }
    return {filterProducts, filters, setFilters}
}