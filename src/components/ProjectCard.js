import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProjectCard = (props) => {
  return (
    <Card className="text-center">
      <Card.Header>{props.title}</Card.Header>
      <Card.Body>
        <Card.Text>{props.description}</Card.Text>
        <Button variant="primary" href={props.repository} target="_blank">GitHub</Button>
      </Card.Body>
      {props.link && (
        <Card.Footer>
          <Button style={{ width: "50%"}} variant="secondary" href={props.link} target="_blank">Demo</Button>
        </Card.Footer>
      )}
    </Card>
  );
}
 
export default ProjectCard;