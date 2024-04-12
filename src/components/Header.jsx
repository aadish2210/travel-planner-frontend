import React from 'react'
import { Navigate } from 'react-router-dom';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import Welcome from './Welcome';
const Header = () => {
  return (
    <div >
      <Navbar className="bg-transparent w-12/12">
      <NavbarBrand>
        <p className="font-bold text-2xl text-inherit">Search Space</p>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem className="visible lg:flex" color="primary">
        <Button as={Link} color="success"  variant="ghost" href="/user">
            Log In
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="success"  variant="ghost" href="/user">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
    </div>
  )
}

export default Header