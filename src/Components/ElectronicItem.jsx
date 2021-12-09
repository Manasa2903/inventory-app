import { ListGroupItem, Button, Col } from "reactstrap";
const ElectronicItem = ({ itemDetails, deleteItem, updateItem }) => {
  const { itemName, quantity, id } = itemDetails;
  //const [updateItem, setUpdateItem] = useState(false);

  return (
    <Col sm="6" md="4">
      <ListGroupItem>
        <h1>{itemName}</h1>
        <p>Quantity : {quantity}</p>
        <p>{id}</p>
        <Button
          className="btn btn-danger"
          onClick={() => {
            deleteItem(id);
          }}
        >
          Delete
        </Button>
        <Button
          className="btn btn-warning"
          onClick={(event) => {
            updateItem(id);
          }}
        >
          Update
        </Button>
      </ListGroupItem>
    </Col>
  );
};

export default ElectronicItem;
