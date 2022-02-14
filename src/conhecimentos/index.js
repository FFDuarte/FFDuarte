import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import './index.css'

export default class Skills extends React.Component {
  render() {
    return (
      <div >
        <div className='divStyle'>
          <div className='divConteudo'>
            <h3 className='title'>Conhecimentos </h3>
            <p>Be sure to <strong>not use the standard <code>.btn</code> classes here</strong>.</p>
            <ListGroup className='listGroup'>
              <ListGroupItem  action>Cras justo odio</ListGroupItem>
              <ListGroupItem  action>Dapibus ac facilisis in</ListGroupItem>
              <ListGroupItem  action>Morbi leo risus</ListGroupItem>
              <ListGroupItem  action>Porta ac consectetur ac</ListGroupItem>
              <ListGroupItem  action>Vestibulum at eros</ListGroupItem>
            </ListGroup>
          </div>
          <div className='divConteudo'>
          <h3 className='title'>Anchors </h3>
            <p>Be sure to <strong>not use the standard <code>.btn</code> classes here</strong>.</p>
            <ListGroup className='listGroup'>
              <ListGroupItem  action>Cras justo odio</ListGroupItem>
              <ListGroupItem  action>Dapibus ac facilisis in</ListGroupItem>
              <ListGroupItem  action>Morbi leo risus</ListGroupItem>
              <ListGroupItem  action>Porta ac consectetur ac</ListGroupItem>
              <ListGroupItem  action>Vestibulum at eros</ListGroupItem>
            </ListGroup>
          </div>
          <div className='divConteudo'>
          <h3 className='title'>Anchors </h3>
            <p>Be sure to <strong>not use the standard <code>.btn</code> classes here</strong>.</p>
            <ListGroup className='listGroup'>
              <ListGroupItem  action>Cras justo odio</ListGroupItem>
              <ListGroupItem  action>Dapibus ac facilisis in</ListGroupItem>
              <ListGroupItem  action>Morbi leo risus</ListGroupItem>
              <ListGroupItem  action>Porta ac consectetur ac</ListGroupItem>
              <ListGroupItem  action>Vestibulum at eros</ListGroupItem>
            </ListGroup>
          </div>
        </div>
      </div>
    );
  }
}