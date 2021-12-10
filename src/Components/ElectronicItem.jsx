import { ListGroupItem, Button, Col, Badge } from "reactstrap";

const ElectronicItem = ({
  itemDetails,
  deleteItem,
  updateItem,
  updateModalOpen,
}) => {
  const { itemName, quantity, id, color, imageUrl } = itemDetails;
  //const [updateItem, setUpdateItem] = useState(false);

  const notFoundImage = "https://cdn.browshot.com/static/images/not-found.png";
  let displayColor;
  let text;

  if (quantity > 100) {
    displayColor = "success";
    text = "In Stock";
  } else if (quantity < 30) {
    displayColor = "danger";
    text = "Limited Stock";
  } else {
    displayColor = "warning";
    text = "Best Seller";
  }

  return (
    <Col xs="12" sm="6" md="4" lg="3">
      <ListGroupItem className="cards">
        <img
          src={imageUrl ? imageUrl : notFoundImage}
          alt={itemName}
          className="electronic-image"
        />
        <h1 className="item-heading">{itemName}</h1>
        <p className="quantity">
          Quantity : <span className={displayColor}>{quantity}</span>
          <Badge color={displayColor}>{text}</Badge>
        </p>
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
