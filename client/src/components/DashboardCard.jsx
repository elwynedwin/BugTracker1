import { React, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const DashboardCard = () => {


  // const [projectName, setProjectName] = useState("");
  // const [projectDescription, setProjectDescription] = useState("");
  // const [team, setTeam] = useState([]);

  // const addProject = () => {};
  // const deleteProject = () => {};

  return (
    <>
      <Card className="dashboard-card">
        <Card.Body>
          <Row>
            <Col sm={8}>
              <Card.Title>My Projects</Card.Title>
            </Col>
            <Col sm={4} className="text-center">
              <Button variant="primary" className="add-project-button">
                Add New Project
              </Button>
            </Col>
          </Row>

          <Card.Text>Text</Card.Text>
          <ListGroup variant="flush">
            {/* <ListGroup.Item>My Projects</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan={2}>Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </ListGroup>
        </Card.Body>
      </Card>
    </>
  );
};

export default DashboardCard;
