import React, {useState, useEffect} from 'react'
import { Field, Form, Formik } from 'formik'
import {} from '../configuration/app'
import * as Yup from 'yup'

const SendMessage = Yup.object().shape({
    name: Yup.string()
            .min(2, 'Name should have at least 2 symbols')
            .max(20, 'Name must not exceed more than 20 symbols')
            .required('Required to fill'),
            
    surname: Yup.string()
            .min(2, 'Name should have at least 2 symbols')
            .max(20, 'Name must not exceed more than 20 symbols')
            .required('Required to fill'),

    email: Yup.string()
            .email('Please enter a valid email address')
            .required('Required to fill'),

    phone: Yup.number()
            .min(8, 'Phone number has at least 8 digits')
            .required('Required to fill')
            .positive()
            .integer(),

    txt: Yup.string()
            .min(10, 'Field should have at least 10 symbols')
            .required('Required to fill')
})

function Registration() {
    return (
        <Formik
            initialValues={{
                name : '',
                surname: '',
                phone: '',
                email: '',
                desc: '',
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
                            method="POST" action="https://localhost:5001/auth/register"
                            onSubmit={ handleSubmit }>

                            <label htmlFor="name">First Name</label>
                            <Field
                                id="name"
                                name="name"
                                value={ values.name }
                                onBlur={ handleBlur }
                                placeholder="Your first name"
                                onChange={ handleChange }
                                className={errors.name && touched.name && "error"}
                            />
                            {
                                errors.name && touched.name && (
                                    <div className="input-feedback">
                                        {errors.name}
                                    </div>
                                )
                            }

                            <label htmlFor="name">Last Name</label>
                            <Field
                                id="surname"
                                name="surname"
                                value={ values.surname }
                                onBlur={ handleBlur }
                                placeholder="Your last name"
                                onChange={ handleChange }
                                className={errors.surname  && touched.surname && "error"}
                            />
                            {
                                errors.surname && touched.surname && (
                                    <div className="input-feedback">
                                        {errors.surname}
                                    </div>
                                )
                            }

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

                            <label htmlFor="name">Phone</label>
                            <Field
                                id="phone"
                                name="phone"
                                value={ values.phone }
                                onBlur={ handleBlur }
                                placeholder="Your last name"
                                onChange={ handleChange }
                                placeholder="+380 XX XXX XX XX"
                                className={errors.phone  && touched.phone && "error"}
                            />
                            {
                                errors.phone && touched.phone && (
                                    <div className="input-feedback">
                                        {errors.phone}
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

export default Registration