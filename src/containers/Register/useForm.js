import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { register } from "../../contexts/actions/auth/register";
import { GlobalContext } from '../../contexts/Provider';

export default () => {
    const [form, setForm] = useState({});
    const [fieldErrors, setFieldErrors] = useState({});
    const history = useHistory();
    
    const { authDispatch, authState: { auth: { loading, error, data } } } = useContext(GlobalContext);

    useEffect(() => {
        if (error) {
            for (const item in error) {
                setFieldErrors({...fieldErrors, [item]:error[item][0]});
            }
        }
    }, [error]);

    // useEffect(() => {
    //     if (data) {
    //         history.push('/auth/login');
    //     }
    // }, [data])

    const onChange = (e, { name, value }) => {
        setForm({ ...form, [name]: value });
    };

    // console.log(form);
    const registerFormValid =
        // !form.username?.length ||
        // !form.firstName?.length ||
        !form.name?.length ||
        !form.email?.length ||
        !form.password?.length ||
        !form.password_confirmation?.length;

    const onSubmit = () => {
        setFieldErrors({});
        register(form)(authDispatch);
    }

    return { form, onChange, loading, registerFormValid, onSubmit, fieldErrors };
}