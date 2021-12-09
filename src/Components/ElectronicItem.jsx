import { ListGroupItem, Button, Col } from "reactstrap";
const ElectronicItem = ({
  itemDetails,
  deleteItem,
  updateItem,
  updateModalOpen,
}) => {
  const { itemName, quantity, id, color } = itemDetails;
  //const [updateItem, setUpdateItem] = useState(false);

  return (
    <Col xs="12" sm="6" md="4" lg="3">
      <ListGroupItem className="cards">
        <h1 className="item-heading">{itemName}</h1>
        <p className="quantity">Quantity : {quantity}</p>
        <h6 className="color">
          Color:{" "}
          <p
            style={{
              backgroundColor: color,
              borderRadius: "10px",
              width: "30px",
              height: "25px",
            }}
            className="color-badge"
          ></p>
          {color}
        </h6>
        <Button
          color="danger"
          className="control-buttons"
          disabled={updateModalOpen}
          onClick={() => {
            deleteItem(id);
          }}
        >
          Delete
        </Button>
        <Button
          color="warning"
          onClick={() => {
            updateItem(id);
          }}
          className="control-buttons"
          disabled={updateModalOpen}
        >
          Update
        </Button>
      </ListGroupItem>
    </Col>
  );
};

export default ElectronicItem;
