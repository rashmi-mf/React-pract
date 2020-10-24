import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import Header from '../../Components/Header'
import { useFormFields } from "../../libs/hooksLib";
import { addPatient } from '../../Store/action/patient.action';

/**
* @author Rashmi
* @function AddPatient
**/


export default function AddPatient() {

    const dispatch = useDispatch();
    const [added, setAdded] = useState(false);
    const [fields, handleFieldChange] = useFormFields({
        name: "",
        email: "",
        age: "",
        gender: "Male"
    });

    // Form Submit function
    const handleSubmit = (event) => {
        event.preventDefault(); //To prevent default behaviour
        dispatch(addPatient(fields));
        setAdded(true);
    }

    const goBack = () => {
        setAdded(false);
        handleFieldChange('reset')
    }

    return (
        <React.Fragment>
            <Header />
            {
                (added) ?
                    <div className="pt-4 text-center">
                        <h4 className="text-muted text-center">Patient Added Successfully!</h4>
                        <p className="text-primary" onClick={goBack}>Click here to add more</p>
                    </div>
                    :
                    <div className="container">
                        <h3 className="text-muted text-center pt-4">Add Patient</h3>
                        <div className="row">
                            <form onSubmit={handleSubmit} className="col-md-6 col-sm-12 mx-auto my-auto p-5">
                                <div className="form-group">
                                    <input type="text" autoFocus className="form-control" required placeholder="Enter Patient Name" value={fields.name} id="name" onChange={handleFieldChange} />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" required placeholder="Enter Patient Email" value={fields.email} id="email" onChange={handleFieldChange} />
                                </div>
                                <div className="form-group">
                                    <input type="Number" className="form-control" required placeholder="Enter Patient Age" value={fields.age} id="age" onChange={handleFieldChange} />
                                </div>
                                <div className="form-group" required>
                                    <label>Gender: </label>
                                    <div className="radio">
                                        <label><input type="radio" className="mr-3" value="Male" name="gender" id="gender" checked={fields.gender === "Male"} onChange={handleFieldChange} />Male</label>
                                    </div>
                                    <div className="radio">
                                        <label><input type="radio" className="mr-3" value="Female" name="gender" id="gender" checked={fields.gender === "Female"} onChange={handleFieldChange} />Female</label>
                                    </div>
                                    <div className="radio">
                                        <label><input type="radio" className="mr-3" value="other" name="gender" id="gender" checked={fields.gender === "other"} onChange={handleFieldChange} />Prefer Not to Say</label>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-info w-100">Add Patient</button>
                            </form>
                        </div>
                    </div>
            }
        </React.Fragment>
    );
}