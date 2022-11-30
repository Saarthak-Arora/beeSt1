import React from 'react'
import Card from 'react-bootstrap/Card';
import './clog.css'


const Clog = (props) => {
  return (
    <>
    <Card className='card'>
      <Card.Header>{props.title}</Card.Header>
      <Card.Body >
        <blockquote className="blockquote mb-0">
          <p>
            {props.content}
          </p>
          <footer className="blockquote-footer">
            Author - <cite title="Source Title">{props.author}</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  </>
  );
}

export default Clog