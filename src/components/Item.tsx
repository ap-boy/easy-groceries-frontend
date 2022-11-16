
import { Button, Card } from 'react-bootstrap';

type ItemProps = {
  id: number;
  name: string;
  price: number;
};

export function Item({ id, name, price }: ItemProps) {

  return (
    <>
    <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>£:{price}</Card.Text>
            <Button variant="primary">Add to Cart</Button>
        </Card.Body>
    </Card>
</>
  );
}
