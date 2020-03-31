import React from 'react';

const ProjectCard = (props) => {
  return (
    <Card className="text-center">
      <Card.Header>{props.title}</Card.Header>
      <Card.Body>{props.description}</Card.Body>
    </Card>
  );
}
 
export default ProjectCard;