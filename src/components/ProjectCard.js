import React from 'react';
// import { Card, Button } from 'react-bootstrap';
import { Card, CardContent, Button, Typography, CardActions } from '@material-ui/core'
import { cardStyle } from '../styles/theme'

const ProjectCard = (props) => {

  const classes = cardStyle();
  return (
    // <Card className="text-center">
    //   <Card.Header>{props.title}</Card.Header>
    //   <Card.Body>
    //     <Card.Text><em>{props.description}</em></Card.Text>
    //     <Button variant="primary" href={props.repository} target="_blank">GitHub</Button>
    //   </Card.Body>
    //   {props.link && (
    //     <Card.Footer>
    //       <Button style={{ width: "50%"}} variant="secondary" href={props.link} target="_blank">Demo</Button>
    //     </Card.Footer>
    //   )}
    // </Card>
    <Card className={classes.root} color="primary">
      <CardContent>
        <Typography className={classes.title} color="secondary">
          {props.title}
        </Typography>
        <Typography className={classes.body} color="primary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
      <Button variant="contained" color="secondary">
          Github
        </Button>
        {props.link && (
          <Button variant="contained" color="secondary">
            Demo
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
 
export default ProjectCard;