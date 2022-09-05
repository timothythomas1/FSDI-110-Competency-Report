import './ProductInCart.css'
import React from 'react'

const ProductInCart = (props) => {
    // const [products, setProduct] = useState([]);
    const getTotal = () => {
        let total = props.data.price * props.data.quantity
        return total.toLocaleString(undefined, { maximumFractionDigits: 2 })
    }

    return (
        <div className="prod-in-cart">
            <img src={"images/" + props.data.image} alt={props.data.title} width={150} />
            <label><strong>(x{props.data.quantity})    </strong></label>
            <h6>{props.data.title}    </h6>
            <label>${getTotal()}    </label>

            <button id=''
                className="btn btn-danger"
                type="submit"
                width={20}>
                <i class="fa-solid fa-trash-can"></i>
            </button>


        </div>
    )
}

export default ProductInCart