import React from 'react';
import { Card } from 'react-bootstrap';

const ProjectCard = (props) => {
  return (
    <Card className="text-center">
      <Card.Header>{props.title}</Card.Header>
      <Card.Body>{props.description}</Card.Body>
    </Card>
  );
}
 
export default ProjectCard;