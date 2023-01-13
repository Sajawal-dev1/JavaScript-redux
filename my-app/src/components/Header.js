import {useSelector} from 'react-redux'

const Header =()=>{
    const result = useSelector((state)=>state.cartData);
    console.log("data in header", result);
    return(
        <div >
            <div className="cart-div">
                <span>{result.length}</span>
                <button> CART</button>
            </div>
        </div>
    )
}

export default Header;