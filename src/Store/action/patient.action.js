export const addPatient = (patient) => ({
    type: "patient/AddNewPatient",
    payload: patient
})

export const sortPatient = (sortedPatient) => ({
    type: "patient/sortPatient",
    payload: sortedPatient
})

export const deletePatient = (index) => ({
    type: "patient/deletePatient",
    payload: index
})