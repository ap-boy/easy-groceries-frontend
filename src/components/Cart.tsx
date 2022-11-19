import { useContext } from "react";
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import {
  CartStateContext,
  CartDispatchContext,
  removeFromCart  
} from "../contexts/cart";

const Cart = () => {
  const { items } = useContext(CartStateContext);
  const dispatch = useContext(CartDispatchContext);

  const handleRemove = (storeItemId) => {
    return removeFromCart(dispatch, storeItemId);
  };

    return (
      <div >
        <h1>Cart</h1>
        <ul className="cart-items">
          {items.map((storeItem) => {
            return (
              <Card style={{ width: '18rem' }}>              
                  <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{storeItem.name}</Card.Title>                    
                        <Card.Text>{storeItem.description}</Card.Text>
                        <Card.Text>£: {storeItem.price}</Card.Text>
                        <Card.Text>Qty: {storeItem.quantity}</Card.Text>
                        <Card.Text>Amount: {storeItem.quantity * storeItem.price}</Card.Text>
                        <Button 
                          variant="primary" 
                          onClick={() => handleRemove(storeItem.id)}> 
                          x
                        </Button>
                    </Card.Body>
                  </Card>
              </Card>
            );
          })}
        </ul>
        <div className="action-block">
        <Link to="/checkout" className="btn btn-primary">
          <span className="button">
              <h1>Proceed to Checkout</h1>
          </span>
        </Link>
        </div>
      </div>
    );
};

export default Cart;
