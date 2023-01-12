import React from 'react'
import { Link, useLocation } from 'react-router-dom'


const SimNavbar = () => {
    let location = useLocation();

    let style = {
        width: "600px"
    }

    // style={{width: "600px"}}
    return (
        <>
            <div class="row no-gutters me-5" >
                <div class="col-md-4 bg-dark sidebar">
                    <div class="sidebar-sticky">
                        <ul class="nav flex-column">
                            <li class="nav-item" style={style}>
                                <a class="nav-link active" href="#">
                                    <i class="fas fa-home"></i>
                                    Home
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <i class="fas fa-folder"></i>
                                    Files
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <i class="fas fa-cog"></i>
                                    Settings
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>



            {/* <div class="container-fluid">
                <div class="row">
                    <div class="col-md-2 bg-dark sidebar">
                        <div class="sidebar-sticky">
                            <ul class="nav flex-column">
                                <li class="nav-item">
                                    <a class="nav-link active" href="#">
                                        <span data-feather="home"></span>
                                        Dashboard
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        <span data-feather="file"></span>
                                        Orders
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        <span data-feather="shopping-cart"></span>
                                        Products
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        <span data-feather="users"></span>
                                        Customers
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        <span data-feather="bar-chart-2"></span>
                                        Reports
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        <span data-feather="layers"></span>
                                        Integrations
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">

                    </main> 
                </div>
            </div> */}






            {/* <header>

                <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
                    <div class="position-sticky">
                        <div class="list-group list-group-flush mx-3 mt-4">
                            <a
                                href="#"
                                class="list-group-item list-group-item-action py-2 ripple"
                                aria-current="true"
                            >
                                <i class="fas fa-tachometer-alt fa-fw me-3"></i><span>Main dashboard</span>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action py-2 ripple">
                            <i class="fas fa-chart-area fa-fw me-3"></i><span>Website traffic</span>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action py-2 ripple"
                            ><i class="fas fa-lock fa-fw me-3"></i><span>Password</span></a>
                            <a href="#" class="list-group-item list-group-item-action py-2 ripple"
                            ><i class="fas fa-chart-line fa-fw me-3"></i><span>Analytics</span></a>
                            <a href="#" class="list-group-item list-group-item-action py-2 ripple">
                                <i class="fas fa-chart-pie fa-fw me-3"></i><span>SEO</span></a>
                            <a href="#" class="list-group-item list-group-item-action py-2 ripple"
                            ><i class="fas fa-chart-bar fa-fw me-3"></i><span>Orders</span></a>
                            <a href="#" class="list-group-item list-group-item-action py-2 ripple"
                            ><i class="fas fa-globe fa-fw me-3"></i><span>International</span></a>
                            <a href="#" class="list-group-item list-group-item-action py-2 ripple"
                            ><i class="fas fa-building fa-fw me-3"></i><span>Partners</span></a>
                            <a href="#" class="list-group-item list-group-item-action py-2 ripple"
                            ><i class="fas fa-calendar fa-fw me-3"></i><span>Calendar</span></a>
                            <a href="#" class="list-group-item list-group-item-action py-2 ripple"
                            ><i class="fas fa-users fa-fw me-3"></i><span>Users</span></a>
                            <a href="#" class="list-group-item list-group-item-action py-2 ripple"
                            ><i class="fas fa-money-bill fa-fw me-3"></i><span>Sales</span></a>
                        </div>
                    </div>
                </nav>

            </header> */}

        </>
    )
}

export default SimNavbar