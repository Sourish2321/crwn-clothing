import { useContext } from "react"
import { ProductsContext } from "../../contexts/products.context"
const Shop = () => {
    const {products} = useContext(ProductsContext)
    return(
        <div>
            {products.map(({id, name, price}) => (
                <div key={id}>
                    <h2>{name}</h2>
                    <p>{price}</p>    
                 </div>
            ))}
        </div>
    )
}

export default Shop