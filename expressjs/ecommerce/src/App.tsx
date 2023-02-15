import {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import AppMenuBar from './components/menubar';
import {Button} from "primereact/button";
import {Sidebar} from "primereact/sidebar";
import {SideNav} from "./components/sidenav/sidenav";


function App() {
    const [count, setCount] = useState(0);
    const [visible, setVisible] = useState(false);

    useEffect(() => {

    }, []);

    return (

        <div className="surface-0 text-center">
            <div>
                <SideNav></SideNav>
            </div>
        </div>

    )
}

export default App