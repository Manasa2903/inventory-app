import { useState } from "react";
import ElectronicItem from "./ElectronicItem";
import { Button, ListGroup } from "reactstrap";
import AddElectronic from "./AddElectronic";

const Electronics = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [id, setId] = useState(4);
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
      <ListGroup>
        {electronicsList.map((eachItem) => (
          <ElectronicItem
            key={eachItem.id}
            itemDetails={eachItem}
            deleteItem={deleteElectronics}
          />
        ))}
      </ListGroup>
    </>
  );
};

export default Electronics;
