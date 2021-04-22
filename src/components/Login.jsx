import React, { useState } from 'react'
import {} from '../configuration/app'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

const SendMessage = Yup.object().shape({    
    name: Yup.string()
        .min(2, 'Name should have at least 2 symbols')
        .max(20, 'Name must not exceed more than 20 symbols')
        .required('Required to fill'),

    email: Yup.string()
            .email('Please enter a valid email address')
            .required('Required to fill'),
        
    password: Yup.string()
            .required('Required to fill')
})

async function loginUser(credentials) {
    return fetch('http://localhost:5001/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}

function Log({ setToken }) {
    const[email, setEmail] = useState()
    const[password, setPassword] = useState()

    const handleSubmits = async e => {
        e.preventDefault()

        const token = await loginUser({
            email, password
        })

        setToken(token)
    }

    return (
        <Formik
            initialValues={{
                name : '',
                password: '',
            }}

            validationSchema={ SendMessage }

            onSubmit = {(values, { setSubmitting }) => {(
                setTimeout(() => {
                    console.log('Putted: ', values)
                }, 500))
            }}
        >
            {
                ({ values, touched, errors, isValid,
                    handleBlur, isSubmitting,
                    handleChange, handleSubmit }) => (
                        <Form autoComplete="off"
                            onSubmit={ handleSubmits }>

                            <label htmlFor="email">Email</label>
                            <Field
                                id="email"
                                name="email"
                                type="email"
                                onBlur={ handleBlur }
                                value={ values.email }
                                placeholder="Your email"
                                onChange={ handleChange }
                                className={errors.email && touched.email && "error"}
                            />
                            {
                                errors.email && touched.email && (
                                    <div className="input-feedback">
                                        {errors.email}
                                    </div>
                                )
                            }
                            
                            <label htmlFor="password">Password</label>
                            <Field
                                id="password"
                                type="password"
                                name="password"
                                value={ values.password }
                                onBlur={ handleBlur }
                                placeholder="Your passowrd"
                                onChange={ handleChange }
                                className={errors.password && touched.password && "error"}
                            />
                            {
                                errors.name && touched.name && (
                                    <div className="input-feedback">
                                        {errors.password}
                                    </div>
                                )
                            }


                            <button type="submit" className="button foreground center medium-space-top">Send message</button>
                        </Form>
                )
            }
        </Formik>
    )
}

export default Log