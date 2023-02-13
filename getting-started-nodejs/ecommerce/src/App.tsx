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
        axios.get(`http://localhost:8000/api/user`)
            .then(response => {
                console.log(response.data);
            }).catch(function (error) {
            // handle error
            console.log(error);
        });
        console.log('i fire once');
    }, []);

    return (

        <div className="surface-0 text-center">
            <div>
                <SideNav></SideNav>
            </div>
            <div className="mb-3 font-bold text-2xl">
                <span className="text-900">One Product, </span>
                <span className="text-purple-500">Many Solutions</span>
            </div>
            <div className="card flex justify-content-center">
                <Sidebar visible={visible} onHide={() => setVisible(false)}>
                    <h2>Sidebar</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </Sidebar>
                <Button icon="pi pi-arrow-right" onClick={() => setVisible(true)} />
            </div>
        </div>

    )
}

export default App