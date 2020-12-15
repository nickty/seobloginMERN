import React, { useState } from 'react';
import Link from 'next/link'
import Router from 'next/router'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import { APP_NAME } from '../config';
import {signout, isAuth} from '../actions/auth'

const Header = () => {

    const [ isOpen, setIsOpen ] = useState(false)

    const toggle =()=>{
        setIsOpen(!isOpen)
    }

    return (
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Nickty Hrad coded</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                
                <NavItem>
                    <Link href="/signin">
                        <NavLink>Signin</NavLink>
                    </Link>
                </NavItem>

                <NavItem>
                    <Link href="/signup">
                        <NavLink>Signup</NavLink>
                    </Link>
                  
                </NavItem>

                {isAuth() && (
                   <NavItem>
                      <Link href="/signout">
                          <NavLink onClick={()=>signout(() => Router.replace('/signin'))}>Signout</NavLink>
                      </Link>
                    
                  </NavItem>
                )}

                <NavItem>
                    <Link href="/signup">
                        <NavLink>Signup</NavLink>
                    </Link>
                  
                </NavItem>
                
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Options
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      Option 1
                    </DropdownItem>
                    <DropdownItem>
                      Option 2
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      Reset
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
              <NavbarText>Simple Text</NavbarText>
            </Collapse>
          </Navbar>
        </div>
      ); 
}

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;