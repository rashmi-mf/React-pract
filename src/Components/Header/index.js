import React from 'react'
import { useHistory } from 'react-router-dom';
export default function Header(props) {
    
    let history = useHistory();

    const navigateFun = (slug) => {
        history.push({
            pathname: '/'+slug,
        })
    }

    const logOutUser = () => {
        localStorage.removeItem("user");
        history.push({
            pathname: '/',
        })
    }

    return (
        <div>
            {/* Header Navigation Section */}
            <header className="header mb-5 pb-4">
                <nav className="bg-info fixed-top navbar navbar-expand-lg">
                    <span className="navbar-brand Sitelogo font-weight-bold text-light" onClick={() => navigateFun("dashboard")}>DoctorPortal</span>
                    <button type="button" name="toggler_btn" id="toggler_btn" className="navbar-toggler navbar-light" data-toggle="collapse" data-target="#header-nav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="header-nav">
                        <ul className="navbar-nav">
                            <li className="nav-item my-auto pr-3 btn"><span onClick={() => navigateFun("add-patient")} className="nav-link text-white text-uppercase">Add Patient</span></li>
                            <li className="nav-item my-auto pr-3 btn"><span onClick={() => navigateFun("view-patient-list")} className="nav-link text-white text-uppercase">View Patient</span></li>
                            <li className="nav-item my-auto pr-3 btn"><span onClick={() => logOutUser()} className="nav-link text-white text-uppercase">Logout</span></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    )
}