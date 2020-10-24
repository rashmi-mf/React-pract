import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { sortPatient, deletePatient } from '../../Store/action/patient.action';
import Pagination from "react-js-pagination";
import { CSVLink } from "react-csv";

export default function PatientListComponent(props) {

    const dispatch = useDispatch();

    let [dataSorted, setDataSorted] = useState(false)

    let patient = useSelector((state) => state.patient);

    let data = (props.data) ? props.data : patient; // Condtion to add the live search in the list view

    const patientData = Object.values(data);

    // Definations for pagination
    const patientPerPage = 7;
    const [activePage, setCurrentPage] = useState(1);
    const indexOfLastPatient = activePage * patientPerPage;
    const indexOfFirstPatient = indexOfLastPatient - patientPerPage;

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const headers = [
        { label: "Name", key: "name" },
        { label: "Email", key: "email" },
        { label: "Age", key: "age" },
        { label: "Gender", key: "gender" }
    ];

    const sortByTitle = (prop) => {
        if (data) {
            let results = data.sort((a, b) => {
                let x = a[prop].toLowerCase(), y = b[prop].toLowerCase()
                return (x < y) ? -1 : ((x > y) ? 1 : 0)
            })
            dispatch(sortPatient(results));
            setDataSorted(true);
        }
    };

    const onDelete = (key) => {
        if (window.confirm("Are you sure you want to delete this customer?"))
            dispatch(deletePatient(key));
    };

    return (
        <React.Fragment>
            <div>
                {(data !== '') &&
                    <div className="container" style={{ paddingTop: "30px" }}>
                        <div className="container-fluid">
                            <CSVLink data={patientData} headers={headers}>
                                Download me
                            </CSVLink>
                            <div className="table-responsive pt-4">
                                {data.length !== 0 && (
                                    <div className="card">
                                        <table className="table table-striped">
                                            <thead>
                                                <tr className="text-center">
                                                    <th scope="col">Name  <i className="fa fa-sort ml-3" disabled={dataSorted} onClick={() => sortByTitle('name')} ></i></th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Age</th>
                                                    <th scope="col">Gender</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {(data.length !== 0) && patientData
                                                    .slice(indexOfFirstPatient, indexOfLastPatient)
                                                    .map((datas, key) => {
                                                        return (
                                                            <tr className="text-center" key={key}>
                                                                <td>{datas.name}</td>
                                                                <td>{datas.email}</td>
                                                                <td>{datas.age}</td>
                                                                <td>{datas.gender}</td>
                                                                <td>
                                                                    <i
                                                                        className="fa fa-trash trash"
                                                                        onClick={() => onDelete(key)}
                                                                    ></i>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                        <div className="text-center float-right">
                                            <Pagination
                                                activePage={activePage}
                                                totalItemsCount={patientData.length}
                                                pageRangeDisplayed={5}
                                                onChange={handlePageChange}
                                                itemClass="page-item"
                                                linkClass="page-link"
                                                firstPageText="Previous"
                                                lastPageText="Next"
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                }
            </div>
        </React.Fragment>
    )
}
