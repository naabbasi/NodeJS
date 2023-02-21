import React from "react";
import "./App.css";
import { Navbar, Button, Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import { Outlet } from "react-router-dom";

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
                <Sidebar.Item
                  href="/dashboard"
                  icon={HiChartPie}
                >
                  Dashboard
                </Sidebar.Item>
                <Sidebar.Item
                  href="/layout"
                  icon={HiViewBoards}
                  label="Pro"
                  labelColor="alternative"
                >
                  Kanban
                </Sidebar.Item>
                <Sidebar.Item
                  href="#/test"
                  icon={HiInbox}
                  label="3"
                >
                  Inbox
                </Sidebar.Item>
                <Sidebar.Item
                  href="/users"
                  icon={HiUser}
                >
                  Users
                </Sidebar.Item>
                <Sidebar.Item
                  href="#"
                  icon={HiShoppingBag}
                >
                  Products
                </Sidebar.Item>
                <Sidebar.Item
                  href="#"
                  icon={HiArrowSmRight}
                >
                  Sign In
                </Sidebar.Item>
                <Sidebar.Item
                  href="#"
                  icon={HiTable}
                >
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