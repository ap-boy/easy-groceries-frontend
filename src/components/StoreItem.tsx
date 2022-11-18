
import { Button, Card } from 'react-bootstrap';

type StoreItemProps = {
  id: number,
  name: string,
  price: number,  
  description: string
};

export function StoreItem({ id, name, price, description }: StoreItemProps) {
  return (
    <>
    <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>£:{price}</Card.Text>
            <Card.Text>{description}</Card.Text>
            <Button variant="primary">Add to Cart</Button>
        </Card.Body>
    </Card>
</>
  );
}
