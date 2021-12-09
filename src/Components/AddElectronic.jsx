import {
  Modal,
  ModalBody,
  ModalHeader,
  Button,
  Col,
  Label,
  Input,
  Form,
  FormGroup,
  Row,
} from "reactstrap";

import { useState } from "react";

const AddElectronic = ({
  modalOpen,
  setModalOpen,
  electronicsList,
  setElectronicsList,
  id,
  setId,
}) => {
  const [inputVal, setInputVal] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    const newItem = { ...inputVal, [name]: value, id: id };
    //console.log(newItem);
    setInputVal(newItem);
    //console.log(id);
  };

  const addNewItem = (event) => {
    event.preventDefault();
    setId(id + 1);
    setElectronicsList([...electronicsList, inputVal]);
    setModalOpen(!modalOpen);
    //console.log(id);
  };
  return (
    <Modal isOpen>
      <ModalHeader
        toggle={() => {
          setModalOpen(!modalOpen);
        }}
      >
        Add Electronic Items
      </ModalHeader>
      <ModalBody>
        <Form onSubmit={addNewItem}>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="item">Item Name</Label>
                <Input
                  id="item"
                  name="itemName"
                  placeholder="Enter Item Name"
                  type="text"
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="quantity">Quantity</Label>
                <Input
                  id="quantity"
                  name="quantity"
                  placeholder="Enter quantity"
                  min="1"
                  type="number"
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <Button disabled={!(inputVal["itemName"] && inputVal["quantity"])}>
            Add
          </Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default AddElectronic;
