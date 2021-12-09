import { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Col,
  Button,
} from "reactstrap";

const EditItem = ({
  updateModalOpen,
  setUpdateModalOpen,
  editedDetails,
  changeData,
}) => {
  const [editValues, setEditValues] = useState(editedDetails);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const saveData = (event, id) => {
    event.preventDefault();
    setUpdateModalOpen(!updateModalOpen);
    changeData(editValues);
  };

  return (
    <Modal isOpen>
      <ModalHeader
        toggle={() => {
          setUpdateModalOpen(!updateModalOpen);
        }}
      >
        Modal title
      </ModalHeader>
      <ModalBody>
        <Form onSubmit={saveData}>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="item">Item Name</Label>
                <Input
                  id="item"
                  name="itemName"
                  placeholder="Enter Item Name"
                  type="text"
                  value={editValues.itemName}
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
                  value={editValues.quantity}
                  type="number"
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <Button>Save</Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default EditItem;
