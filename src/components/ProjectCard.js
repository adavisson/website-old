import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProjectCard = (props) => {
  return (
    <Card className="text-center">
      <Card.Header>{props.title}</Card.Header>
      <Card.Body>
        <Card.Text>{props.description}</Card.Text>
        <Button variant="primary" href={props.link} target="_blank">GitHub</Button>
      </Card.Body>
    </Card>
  );
}
 
export default ProjectCard;