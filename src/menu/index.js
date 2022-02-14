
import { Navbar, NavbarBrand , NavbarToggler, Nav, Collapse, NavItem, NavLink, NavbarText  } from 'reactstrap'; 
import './menu.css';

export default function Menu(){
    return(
        <div>
            <Navbar color="light" expand="md" light  className='navbar'>
                <NavbarBrand href="/">
                    reactstrap
                </NavbarBrand>
                <NavbarToggler onClick={function noRefCheck(){}} />
                <Collapse navbar>
                <Nav className="me-auto" navbar >
                    <NavItem>
                    <NavLink href="/components/">
                        Sobre
                    </NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink href="https://github.com/reactstrap/reactstrap">
                        GitHub
                    </NavLink>
                    </NavItem>
                </Nav>
                <NavbarText>
                    Simple Text
                </NavbarText>
                </Collapse>
            </Navbar>
        </div>
    )
}