// This is a custome hooks for managing data in application from one place

import { useState } from "react";

export function useFormFields(initialState) {
    const [fields, setValues] = useState(initialState);
    return [
        fields,
        function (event) {
            if(event.target !== undefined) {
                setValues({
                    ...fields,
                    [event.target.id]: event.target.value
                });    
            } else if (event === "reset") {
                // For resetting back data to initial
                setValues(initialState);  
            }   
        }
    ];
}