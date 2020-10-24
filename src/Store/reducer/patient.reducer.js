import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    patient: []
};

const patient = createSlice({
    name: "patient",
    initialState,
    reducers: {
        AddNewPatient(state, { payload }) {
            state.patient = [...state.patient, payload].flat()
        },
        sortPatient(state, { payload }) {
            state.patient = payload
        },
        deletePatient(state, { payload }) {
            state.patient = [...state.patient.slice(0, payload), ...state.patient.slice(payload + 1)]
        }
    }
})

export const {
    AddNewPatient,
} = patient.actions;

export default patient.reducer;
