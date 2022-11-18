import React, {useEffect, useState} from 'react';
import {useFormik} from 'formik';
import {validateFormData} from "../utils/validateFormData";

const RegistrationForm = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            password: '',
            newsletter: false,
            email: ''
        },

        onSubmit: (values) => {
            console.log(values)
            const formIsValid = validateFormData(values)


            if (formIsValid) {
                const requestData = {}


                setSubmitMsg(submitSuccessMsg)
                if (values.newsletter) {
                    requestData.name = values.name
                    requestData.password = values.password
                    requestData.email = values.email
                } else {
                    requestData.name = values.name
                    requestData.password = values.password
                }

                console.log(requestData)

                fetch('http:dummy.url.com', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(requestData)
                })
                    .then(()=> {
                        console.log('Form sent successfully')
                    })
                    .catch((e)=> {
                        console.log(e)
                    })

            } else {
                setSubmitMsg(submitFailMsg)
            }
            setShowMsg(true)
        },
    });

    const submitSuccessMsg = 'pomyślna rejestracja'
    const submitFailMsg = 'błąd walidacji'

    const [showMsg, setShowMsg] = useState(false)
    const [submitMsg, setSubmitMsg] = useState('test')

    useEffect(() => {
        setShowMsg(false)
    }, [formik.values])

    return (
        <form
            onSubmit={formik.handleSubmit}
            data-testid ='form'
        >
            <label htmlFor="name">Name </label>
            <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
                data-testid ='nameInput'
            />
            <hr/>
            <label htmlFor="name">Password </label>
            <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                data-testid ='passwordInput'
            />
            <hr/>
            <label htmlFor="name">Newsletter </label>
            <input
                id="newsletter"
                name="newsletter"
                type="checkbox"
                onChange={formik.handleChange}
                checked={formik.values.newsletter}
                data-testid ='newsletterInput'
            />
            <hr/>
            {formik.values.newsletter &&
                <>
                    <label htmlFor="name">Email </label>
                    <input
                        id="email"
                        name="email"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        data-testid ='emailInput'
                    />
                    <hr/>
                </>

            }

            <button type="submit" data-testid ='submitBtn'>Submit</button>
            {showMsg && <p data-testid ='submitMsg'>{submitMsg}</p>}
        </form>
    );
};

export default RegistrationForm