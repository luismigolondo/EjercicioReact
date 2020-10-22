import React, { useState } from 'react';

const useForm = (validateForm) => {

    const [errors, setErrors] = useState({})
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        agree: false
    })

    const handleChange = (evnt) => {
        let val = evnt.target.name === "agree" ? evnt.target.checked : evnt.target.value;
        setValues({
            ...values, 
            [evnt.target.name]: val
        })
    }

    const handleSubmit = (evnt) => {
        evnt.preventDefault();
        setErrors(validateForm(values));
        console.log(values);
    }

    return {handleChange, handleSubmit, errors};
}

export default useForm;