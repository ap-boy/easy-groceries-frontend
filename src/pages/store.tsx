import {Col, Row} from 'react-bootstrap';
import tempItems from '../temp/tempitems.json';
import StoreItem from '../components/StoreItem';
import { useEffect, useState } from "react";
import axios from "axios";

export function Store() {

  const [storeItems, setStoreItems] = useState([]);
 
  useEffect(() => {
    axios.get("https://localhost:7260/StoreItem").then((response) => {
      setStoreItems((data) => {
        return response.data;
      });
    });
  }, []);

    return (
        <>
        <h1>Store</h1>
        <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((storeitem: any) => {
          return (
          <Col key={storeitem.id}>
            <StoreItem key={storeitem.id} data={storeitem}/>
          </Col>
          );
        })}
      </Row>
    </>
    );
}