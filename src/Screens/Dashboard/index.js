import React from 'react';
import Header from '../../Components/Header'
import doctorImg from '../../Assets/Images/doctorImg.png'
/**
* @author Rashmi
* @function Header
**/

const Dashboard = (props) => {
    return (
        <React.Fragment>
            <Header />
            <div className="text-center">
                <img src={doctorImg} className="w-25" alt="doctor" />
                <h1 className="text-center text-muted p-5">Welcome to Doctor Portal</h1>
            </div>
        </React.Fragment>
    )

}

export default Dashboard