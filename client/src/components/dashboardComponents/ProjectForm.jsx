import { React, useEffect, useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const ProjectForm = () => {
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [teamMembers, setTeamMembers] = useState([]);
  const [errMsg, setErrMsg] = useState("");

  const errRef = useRef();

  const handleProjectSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "/auth",
        JSON.stringify({ projectName, projectDescription, teamMembers }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      setProjectName("");
      setProjectDescription("");
      setTeamMembers([]);
      //navigate(fromLocation, { replace: true });
    } catch (error) {
      if (!error?.response) {
        setErrMsg("No Server Response");
      } else if (error.response?.status === 400) {
        setErrMsg("Missing Project Name or Project Description");
      } else if (error.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Submission Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      <Card>
        <section>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>

          <Form onSubmit={handleProjectSubmit}>
            <Form.Group className="mb-3" controlId="formProjectName">
              <Form.Label>Project Name: </Form.Label>
              <Form.Control
                type="text"
                id="projectName"
                placeholder="Enter Project Name:"
                value={projectName}
                onChange={(e) => {
                  setProjectName(e.target.value);
                }}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formProjectDescription">
              <Form.Label>Project Description: </Form.Label>
              <Form.Control
                type="text"
                id="projectDescription"
                placeholder="Enter Project Description:"
                value={projectDescription}
                onChange={(e) => {
                  setProjectDescription(e.target.value);
                }}
                required
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formTeamMembers">
              <Form.Label>Select Team Members: </Form.Label>
              <Form.Control
                as="select"
                multiple
                value={teamMembers}
                id="teamMembers"
                onChange={(e) => {
                  const clickedValue = e.target.value;
                  const updatedTeamMembers = teamMembers.includes(clickedValue)
                    ? teamMembers.filter((value) => value !== clickedValue)
                    : [...teamMembers, clickedValue];

                  console.log("Updated team members:", updatedTeamMembers);
                  setTeamMembers(updatedTeamMembers);
                }}
              >
                <option value="field1">Field 1</option>
                <option value="field2">Field 2</option>
                <option value="field3">Field 3</option>
              </Form.Control>
            </Form.Group>

            <Button variant="primary" type="submit">
              Create Project
            </Button>
          </Form>
        </section>
      </Card>
    </>
  );
};

export default ProjectForm;
