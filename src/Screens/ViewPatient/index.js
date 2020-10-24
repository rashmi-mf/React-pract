import React, { useEffect } from "react";
import { useSelector } from 'react-redux'
import Header from '../../Components/Header'
import PatientListComponent from '../../Components/PatientListComponent';

/**
* @author Rashmi
* @function ViewPatient
**/


export default function ViewPatient() {

    const patient = useSelector((state) => state.patient.patient)
    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState(patient);

    const handleSearch = event => {
        setSearchTerm(event.target.value);
    };

    // UseEffect method of react hooks life cycle
    useEffect(() => {
        const patientResult = Object.values(patient);
        const results = patientResult.filter(data =>
            data.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
    }, [searchTerm, patient]);

    return (
        <React.Fragment>
            <Header />
            {
                (patient.length !== 0) ?
                    <div className="container text-center">
                        <h2 className="text-center text-black-50 pt-5">List of Patients</h2>
                        <input type="search" className="border mt-5 p-2 w-75" placeholder="Search" value={searchTerm} onChange={handleSearch} />
                        <PatientListComponent data={searchResults} />
                    </div>
                    : (
                        <h2 className="text-center text-muted pt-4">
                            No patient available
                    </h2>
                    )
            }
        </React.Fragment>
    );
}