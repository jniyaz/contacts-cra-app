import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { login } from "../../contexts/actions/auth/login";
import { GlobalContext } from '../../contexts/Provider';

export default () => {
    const [form, setForm] = useState({});
    const history = useHistory();

    const { authDispatch, authState: { auth: { loading, error, data } } } = useContext(GlobalContext);

    const onChange = (e, { name, value }) => {
        setForm({ ...form, [name]: value });
    };

    const loginFormValid =
        !form.email?.length ||
        !form.password?.length;

    const onSubmit = () => {
        login(form)(authDispatch);
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            history.push('/');
        }
    }, [data]);

    return { form, onChange, loading, loginFormValid, onSubmit, error };
}