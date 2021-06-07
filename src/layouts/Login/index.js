import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Message, Segment } from 'semantic-ui-react'

const LoginUI = ({ form: { onChange, form, loginFormValid, onSubmit, loading, error } }) => {
    return (
        <Form>
            {error && <Message content={error} negative />}
            <Form.Field>
                <Form.Input
                    required
                    value={form.email || ""}
                    onChange={onChange}
                    name="email"
                    placeholder="Email"
                    label="Email"
                    type="email"
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
                />
            </Form.Field>

            <Button onClick={onSubmit} fluid loading={loading} disabled={loginFormValid} type='submit'>Submit</Button>

            <Segment>Need an account <Link to="/auth/register">Register</Link></Segment>
        </Form>
        
    )
}

export default LoginUI
