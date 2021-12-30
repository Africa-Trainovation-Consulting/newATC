import { useState, useEffect } from 'react'



const useForm = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({})

    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
            /* [e.target.name]: e.target.value */
        })
    }
    return { handleChange, values }
};
export default useForm;