import React from "react";
import "./App.css";
import { Button, Navbar, Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="bg-gray-900">
      <div className="container mx-auto">
        <Navbar fluid={true} rounded={true} className="bg-inherit">
          <Navbar.Brand href="https://flowbite.com/">
            <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9"
                 alt="Flowbite Logo" />
            <span
              className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">QTerminals</span>
          </Navbar.Brand>
          <div className="flex md:order-2">
            <Button>Get started</Button>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Navbar.Link href="/navbars" active={true}>Home</Navbar.Link>
            <Navbar.Link href="/navbars">About</Navbar.Link>
            <Navbar.Link href="/navbars">Services</Navbar.Link>
            <Navbar.Link href="/navbars">Pricing</Navbar.Link>
            <Navbar.Link href="/navbars">Contact</Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div className="flex justify-start container mx-auto h-screen">
        <div className="w-fit">
          <Sidebar aria-label="Default sidebar example">
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                <Link to="/dashboard">
                  <Sidebar.Item as={"div"} icon={HiChartPie}>
                    Dashboard
                  </Sidebar.Item>
                </Link>
                <Link to="/layout">
                  <Sidebar.Item as={"div"} icon={HiViewBoards} label="Pro" labelColor="alternative">
                    Kanban
                  </Sidebar.Item>
                </Link>
                <Sidebar.Item as="div" icon={HiInbox} label="3">
                  Inbox
                </Sidebar.Item>
                <Link to="/users">
                  <Sidebar.Item as="div" icon={HiUser}>
                    Users
                  </Sidebar.Item>
                </Link>
                <Sidebar.Item as="div" icon={HiShoppingBag}>
                  Products
                </Sidebar.Item>
                <Sidebar.Item as="div" icon={HiArrowSmRight}>
                  Sign In
                </Sidebar.Item>
                <Sidebar.Item as="div" icon={HiTable}>
                  Sign Up
                </Sidebar.Item>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </Sidebar>
        </div>
        <div className="w-full h-full overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;