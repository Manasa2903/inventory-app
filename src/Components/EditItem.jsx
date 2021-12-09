import { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Toast,
  ToastHeader,
  ToastBody,
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

  const saveData = (event) => {
    event.preventDefault();
    setUpdateModalOpen(!updateModalOpen);
    changeData(editValues);
  };

  return (
    <div className="updateModal">
      <Toast
        toggle={() => {
          setUpdateModalOpen(!updateModalOpen);
        }}
      >
        <ToastHeader
          toggle={() => {
            setUpdateModalOpen(!updateModalOpen);
          }}
        >
          Update Data
        </ToastHeader>
        <ToastBody>
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
            <Button color="success">Save</Button>
          </Form>
        </ToastBody>
      </Toast>
    </div>
  );
};

export default EditItem;
