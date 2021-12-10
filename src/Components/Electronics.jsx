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
      itemName: "Mac Book Pro",
      quantity: 20,
      color: "#b1a9a9",
      imageUrl: "https://m.media-amazon.com/images/I/71an9eiBxpL._SL1500_.jpg",
    },
    {
      id: 2,
      itemName: "One Plus",
      quantity: 17,
      color: "#080808",
      imageUrl:
        "https://www.gizmochina.com/wp-content/uploads/2020/03/OnePlus-8-1.jpg",
    },
    {
      id: 3,
      itemName: "Hp Laptop",
      quantity: 74,
      color: "#b1aaaa",
      imageUrl:
        "https://5.imimg.com/data5/HI/LO/MY-24587489/hp-laptop-500x500.jpg",
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
    window.scroll(0, 0);
    //console.log(...updateItemDetails);
  };

  const changeData = (editValues) => {
    const editedList = electronicsList.map((eachItem) => {
      if (eachItem.id === editValues.id) {
        eachItem = editValues;
      }
      return eachItem;
    });
    console.log(editedList);
    setElectronicsList(editedList);
  };

  return (
    <>
      <h1 className="main-heading">Inventory App</h1>
      <div className="button">
        <Button
          color="primary"
          onClick={() => {
            setModalOpen(!modalOpen);
          }}
        >
          Add New Items
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
          setUpdateItemData={setUpdateItemData}
        />
      )}
      <ListGroup>
        <Container>
          <Row>
            {electronicsList.length > 0 ? (
              electronicsList.map((eachItem) => (
                <ElectronicItem
                  key={eachItem.id}
                  itemDetails={eachItem}
                  deleteItem={deleteElectronics}
                  updateItem={updateItem}
                  updateModalOpen={updateModalOpen}
                />
              ))
            ) : (
              <p className="text-danger text-center">No Items to display</p>
            )}
          </Row>
        </Container>
      </ListGroup>
    </>
  );
};

export default Electronics;
