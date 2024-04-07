import React from 'react'
import { Navigate } from 'react-router-dom';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
const Header = () => {
  return (
    <div>
      <Navbar className="bg-transparent w-12/12">
      <NavbarBrand>
        <p className="font-bold text-2xl text-inherit">Search Space</p>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem className="visible lg:flex" color="primary">
          <Link href="user">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary"  variant="flat" href="/user">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
    </div>
  )
}

export default Header