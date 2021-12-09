import { useState } from "react";
import ElectronicItem from "./ElectronicItem";
import { Button, Container, Row, ListGroup } from "reactstrap";
import AddElectronic from "./AddElectronic";
import EditItem from "./EditItem";

const Electronics = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [id, setId] = useState(4);
  const [updateItemData, setUpdateItemData] = useState(null);
  const [electronicsList, setElectronicsList] = useState([
    {
      id: 1,
      itemName: "Mac Book",
      quantity: 20,
    },
    {
      id: 2,
      itemName: "One Plus",
      quantity: 17,
    },
    {
      id: 3,
      itemName: "Hp Laptop",
      quantity: 74,
    },
  ]);

  const deleteElectronics = (id) => {
    const filteredData = electronicsList.filter(
      (eachItem) => eachItem.id !== id
    );
    setElectronicsList(filteredData);
  };

  const updateItem = (id) => {
    const updateItemDetails = electronicsList.filter(
      (eachItem) => eachItem.id === id
    );
    setUpdateItemData(...updateItemDetails);
    setUpdateModalOpen(!updateModalOpen);
    console.log(...updateItemDetails);
  };

  const changeData = (editValues) => {
    const editedList = electronicsList.map((eachItem) => {
      if (eachItem.id === editValues.id) {
        eachItem.itemName = editValues.itemName;
        eachItem.quantity = editValues.quantity;
      }
      return eachItem;
    });
    console.log(editedList);
    setElectronicsList(editedList);
  };

  return (
    <>
      <h1>Inventory App</h1>
      <div>
        <Button
          color="danger"
          onClick={() => {
            setModalOpen(!modalOpen);
          }}
        >
          Click Me
        </Button>
      </div>
      {modalOpen && (
        <AddElectronic
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          electronicsList={electronicsList}
          setElectronicsList={setElectronicsList}
          id={id}
          setId={setId}
        />
      )}
      {updateModalOpen && (
        <EditItem
          updateModalOpen={updateModalOpen}
          setUpdateModalOpen={setUpdateModalOpen}
          editedDetails={updateItemData}
          changeData={changeData}
        />
      )}
      <ListGroup>
        <Container>
          <Row>
            {electronicsList.map((eachItem) => (
              <ElectronicItem
                key={eachItem.id}
                itemDetails={eachItem}
                deleteItem={deleteElectronics}
                updateItem={updateItem}
              />
            ))}
          </Row>
        </Container>
      </ListGroup>
    </>
  );
};

export default Electronics;
