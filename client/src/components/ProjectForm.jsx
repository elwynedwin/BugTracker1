import { React, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const ProjectForm = () => {
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [teamMembers, setTeamMembers] = useState([]);

  return (
    <>
      <section>
        <Form>
          <Form.Group className="mb-3" controlId="formProjectName">
            <Form.Label>Project Name: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Project Name:"
              value={projectName}
              onChange={(e) => {
                setProjectName(e.target.value);
              }}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formProject Description">
            <Form.Label>Project Description: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Project Description:"
              value={projectDescription}
              onChange={(e) => {
                setProjectDescription(e.target.value);
              }}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Create Project
          </Button>
        </Form>
      </section>
    </>
  );
};

export default ProjectForm;

{
  /* <>
        <div>
          <h2>Create a New Project</h2>
          <form>
            
            <div>
              <label htmlFor="projectName">Project Name:</label>
              <input
                type="text"
                id="projectName"
                value={projectName}
                onChange={(e) => {
                  setProjectDescription(e.target.value);
                }}
                required
              />
            </div>
            <div>
              <label htmlFor="projectDescription">Project Description:</label>
              <textarea
                id="projectDescription"
                value={projectDescription}
                onChange={(e) => {
                  setProjectDescription(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="team">
                Team Members (comma-separated User IDs):
              </label>
              <input
                type="text"
                id="team"
                value={team.join(", ")}
                onChange={(e) => {
                  setTeam(e.target.value);
                }}
                required
              />
            </div>
            <button type="submit">Create Project</button>
          </form>
        </div>
      </> */
}
