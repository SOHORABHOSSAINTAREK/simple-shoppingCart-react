
import '../App.css';

function Header(props) {
    return (
        <div className='flex shopping-cart'>
            <div className='text-size' onClick={() => props.handleShow(false)}>Shopping Cart App</div>
            <div className='text-size' onClick={() => props.handleShow(true)}>Cart
                <sup>{props.count}</sup>
            </div>
        </div>
    );
}

export default Header;
