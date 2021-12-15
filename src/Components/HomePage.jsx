import { useState, useEffect } from "react";
import ElectronicItem from "./ElectronicItem";
import { Button, Container, Row, ListGroup, Input } from "reactstrap";
import AddElectronic from "./AddElectronic";
import EditItem from "./EditItem";

const HomePage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [updateItemData, setUpdateItemData] = useState(null);
  const [searchVal, setSearchVal] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [filterValue, setFilterValue] = useState("All");
  const [electronicsList, setElectronicsList] = useState([
    {
      id: 1,
      itemName: "Mac Pro",
      quantity: 20,
      color: "#b1a9a9",
      imageUrl: "https://m.media-amazon.com/images/I/71an9eiBxpL._SL1500_.jpg",
    },
    {
      id: 2,
      itemName: "One Plus",
      quantity: 150,
      color: "#080808",
      imageUrl:
        "https://www.reliancedigital.in/medias/OnePlus-Nord-CE-Smartphone-491996837-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w3OTk4NXxpbWFnZS9qcGVnfGltYWdlcy9oYWQvaDBlLzk1Njg3NzkwMTAwNzguanBnfDY0NmIwZTg4YmVjMGZiYjVlYWZhYjA5NGVlZGY5Yjc3YWFkOTM2YzY1MDBmNTlkZDE3MmViZWFhODA5YzNmZmI",
    },
    {
      id: 3,
      itemName: "Hp Laptop",
      quantity: 74,
      color: "#b1aaaa",
      imageUrl:
        "https://5.imimg.com/data5/JM/PC/MY-26541044/hp-pavilion-x360-14m-ba013dx-500x500.jpg",
    },
    {
      id: 4,
      itemName: "iPhone 13",
      quantity: 200,
      color: "#faddd7",
      imageUrl: "https://m.media-amazon.com/images/I/61l9ppRIiqL._SL1500_.jpg",
    },
  ]);

  const [id, setId] = useState(electronicsList.length + 1);

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
    setElectronicsList((prevState) => {
      const editedList = prevState.map((eachItem) => {
        if (eachItem.id === editValues.id) {
          eachItem = editValues;
        }
        return eachItem;
      });
      return editedList;
    });
  };

  useEffect(() => {
    if (searchVal !== "") {
      const filteredValues = electronicsList.filter((eachItem) =>
        eachItem.itemName.toLowerCase().includes(searchVal.toLowerCase())
      );
      setFilteredList(filteredValues);
    } else {
      const filteredItems = electronicsList.filter((eachItem) => {
        if (filterValue === "All") {
          return eachItem;
        } else if (filterValue === "Limited Stock") {
          return eachItem.quantity < 30;
        } else if (filterValue === "In Stock") {
          return eachItem.quantity > 100;
        } else {
          return eachItem.quantity >= 30 && eachItem.quantity <= 100;
        }
      });
      setFilteredList(filteredItems);
    }
  }, [searchVal, filterValue, electronicsList]);

  return (
    <>
      <h1 className="main-heading">Inventory App</h1>
      <div className="text-center button">
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
          <div className="filter-search-container">
            <div className="filter-container">
              <Input
                id="exampleSelect"
                name="select"
                type="select"
                value={filterValue}
                onChange={(event) => setFilterValue(event.target.value)}
              >
                <option>All</option>
                <option>Limited Stock</option>
                <option>In Stock</option>
                <option>Best Seller</option>
              </Input>
            </div>
            <div className="search-input">
              <Input
                placeholder="Search all items..."
                className="w-100"
                type="search"
                onChange={(event) => {
                  setSearchVal(event.target.value);
                }}
              />
            </div>
          </div>
          <Row>
            {filteredList.length > 0 ? (
              filteredList.map((eachItem) => (
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

export default HomePage;
