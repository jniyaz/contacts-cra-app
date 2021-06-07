import React from 'react'
import { Button, Form } from 'semantic-ui-react'

const RegisterUI = ({ form: { onChange, form, registerFormValid, onSubmit, loading, fieldErrors } }) => {
    return (
        <Form>
            {/* {JSON.stringify(fieldErrors, null, 2)} */}
            {/* <Form.Field>
                <Form.Input
                    value={form.username || ""}
                    onChange={onChange}
                    name="username"
                    placeholder="Username"
                    label="Username"
                />
            </Form.Field>
            <Form.Field>
                <Form.Input
                    value={form.firstName || ""}
                    onChange={onChange}
                    name="firstName"
                    placeholder="First Name"
                    label="First Name"
                />
            </Form.Field> */}
            <Form.Field>
                <Form.Input
                    required
                    value={form.name || ""}
                    onChange={onChange}
                    name="name"
                    placeholder="Full Name"
                    label="Full Name"
                    error={ fieldErrors.name && {
                        content : fieldErrors.name,
                        poiniting: "below"
                    }}
                />
            </Form.Field>
            <Form.Field>
                <Form.Input
                    required
                    value={form.email || ""}
                    onChange={onChange}
                    name="email"
                    placeholder="Email"
                    label="Email"
                    type="email"
                    error={
                        fieldErrors.email && {
                            content : fieldErrors.email,
                            poiniting: "below"
                        }
                    }
                />
            </Form.Field>
            <Form.Field>
                <Form.Input
                    required
                    value={form.password || ""}
                    onChange={onChange}
                    name="password"
                    placeholder="Password"
                    label="Password"
                    type="password"
                    error={
                        fieldErrors.password && {
                            content : fieldErrors.password,
                            poiniting: "below"
                        }
                    }
                />
            </Form.Field>
            <Form.Field>
                <Form.Input
                    required
                    value={form.password_confirmation || ""}
                    onChange={onChange}
                    name="password_confirmation"
                    placeholder="Confirm Password"
                    label="Confirm Password"
                    type="password"
                    error={
                        fieldErrors.password && {
                            content : fieldErrors.password,
                            poiniting: "below"
                        }
                    }
                />
            </Form.Field>

            <Button onClick={onSubmit} fluid loading={loading} disabled={registerFormValid} type='submit'>Submit</Button>
        </Form>
    )
}

export default RegisterUI
