import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import './contato.css';

export default class Contato extends React.Component {
  render() {
    return (
      <ListGroup className='ListGroup'>
        <h2 className='titulo'>  Contato </h2>
        <ListGroupItem className='listItem' tag="a" href="#">Linkedin </ListGroupItem>
        <ListGroupItem className='listItem' tag="a" href="#">Facebook</ListGroupItem>
        <ListGroupItem className='listItem' tag="a" href="#">Github</ListGroupItem>
        <ListGroupItem className='listItem' > ffsolutec@gmail.com</ListGroupItem>
        <ListGroupItem className='listItem' > (21) 99999-1286</ListGroupItem>
        <p></p>
      </ListGroup>
    );
  }
}