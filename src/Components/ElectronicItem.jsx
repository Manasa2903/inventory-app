import { ListGroupItem, Button } from "reactstrap";
const ElectronicItem = ({ itemDetails, deleteItem }) => {
  const { itemName, quantity, id } = itemDetails;
  return (
    <ListGroupItem>
      <h1>{itemName}</h1>
      <p>{quantity}</p>
      <p>{id}</p>
      <Button
        onClick={() => {
          deleteItem(id);
        }}
      >
        Delete
      </Button>
    </ListGroupItem>
  );
};

export default ElectronicItem;
