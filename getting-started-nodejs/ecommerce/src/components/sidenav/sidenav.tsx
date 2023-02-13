import './sidenav.css';
import {Button} from "primereact/button";

export const SideNav = () => {
    const toggle = () => {
        let arrow = document.querySelectorAll(".arrow");
        for (let i = 0; i < arrow.length; i++) {
            arrow[i].addEventListener("click", (e) => {
                let arrowParent = e?.target?.parentElement?.parentElement; //selecting main parent of arrow
                arrowParent.classList.toggle("showMenu");
            });
        }

        let sidebar = document.querySelector(".sidebar");
        let sidebarBtn = document.querySelector(".pi-bars");
        sidebarBtn?.addEventListener("click", () => {
            sidebar?.classList.toggle("close");
        });
    }
    return (
        <>
            <div className="sidebar close">
                <div className="logo-details">
                    <i className='pi pi-home'></i>
                    <span className="logo_name">CodingLab</span>
                </div>
                <ul className="nav-links">
                    <li>
                        <a href="#">
                            <i className='bx bx-grid-alt'></i>
                            <span className="link_name">Dashboard</span>
                        </a>
                        <ul className="sub-menu blank">
                            <li><a className="link_name" href="#">Category</a></li>
                        </ul>
                    </li>
                    <li>
                        <div className="iocn-link">
                            <a href="#">
                                <i className='bx bx-collection'></i>
                                <span className="link_name">Category</span>
                            </a>
                            <i className='pi pi-chevron-down arrow'></i>
                        </div>
                        <ul className="sub-menu">
                            <li><a className="link_name" href="#">Category</a></li>
                            <li><a href="#">HTML & CSS</a></li>
                            <li><a href="#">JavaScript</a></li>
                            <li><a href="#">PHP & MySQL</a></li>
                        </ul>
                    </li>
                    <li>
                        <div className="iocn-link">
                            <a href="#">
                                <i className='bx bx-book-alt'></i>
                                <span className="link_name">Posts</span>
                            </a>
                            <i className='bx bxs-chevron-down arrow'></i>
                        </div>
                        <ul className="sub-menu">
                            <li><a className="link_name" href="#">Posts</a></li>
                            <li><a href="#">Web Design</a></li>
                            <li><a href="#">Login Form</a></li>
                            <li><a href="#">Card Design</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-pie-chart-alt-2'></i>
                            <span className="link_name">Analytics</span>
                        </a>
                        <ul className="sub-menu blank">
                            <li><a className="link_name" href="#">Analytics</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-line-chart'></i>
                            <span className="link_name">Chart</span>
                        </a>
                        <ul className="sub-menu blank">
                            <li><a className="link_name" href="#">Chart</a></li>
                        </ul>
                    </li>
                    <li>
                        <div className="iocn-link">
                            <a href="#">
                                <i className='bx bx-plug'></i>
                                <span className="link_name">Plugins</span>
                            </a>
                            <i className='bx bxs-chevron-down arrow'></i>
                        </div>
                        <ul className="sub-menu">
                            <li><a className="link_name" href="#">Plugins</a></li>
                            <li><a href="#">UI Face</a></li>
                            <li><a href="#">Pigments</a></li>
                            <li><a href="#">Box Icons</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-compass'></i>
                            <span className="link_name">Explore</span>
                        </a>
                        <ul className="sub-menu blank">
                            <li><a className="link_name" href="#">Explore</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-history'></i>
                            <span className="link_name">History</span>
                        </a>
                        <ul className="sub-menu blank">
                            <li><a className="link_name" href="#">History</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-cog'></i>
                            <span className="link_name">Setting</span>
                        </a>
                        <ul className="sub-menu blank">
                            <li><a className="link_name" href="#">Setting</a></li>
                        </ul>
                    </li>
                    <li>
                        <div className="profile-details">
                            <div className="profile-content">
                            </div>
                            <div className="name-job">
                                <div className="profile_name">Prem Shahi</div>
                                <div className="job">Web Desginer</div>
                            </div>
                            <i className='bx bx-log-out'></i>
                        </div>
                    </li>
                </ul>
            </div>
            <section className="home-section">
                <div className="home-content">
                    <i className='pi pi-bars'></i>
                    <span className="text">Drop Down Sidebar</span>
                    <Button onClick={() => toggle()}></Button>
                </div>
            </section>
        </>
    );
}