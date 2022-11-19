import { Button, Card } from 'react-bootstrap';
import { CartDispatchContext, addToCart } from "../contexts/cart";
import { useState, useContext } from "react";

const StoreItem = ({ data }) => {

  const [isAdded, setIsAdded] = useState(false);
  const dispatch = useContext(CartDispatchContext);
  const { name, price, id, description } = data;

  const handleAddToCart = () => {
    const product = { ...data, quantity: 1 };
    addToCart(dispatch, product);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 3500);
  };

  return (
    <>
    <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>£:{price}</Card.Text>
            <Card.Text>{description}</Card.Text>
            <Button 
              variant="primary" 
              onClick={handleAddToCart}> 
              {!isAdded ? "ADD TO CART" : "ADDED"}
            </Button>
        </Card.Body>
    </Card>
</>
  );
}
export default StoreItem;