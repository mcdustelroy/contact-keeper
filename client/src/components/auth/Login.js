import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import AlertContext from "../../context/alert/alertContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const alertContext = useContext(AlertContext);
	const authContext = useContext(AuthContext);
	const navigate = useNavigate();

	const { setAlert } = alertContext;
	const { login, error, clearErrors, isAuthenticated } = authContext;

	useEffect(() => {
		if (isAuthenticated) {
			navigate("/");
		}

		if (error === "Invalid Credentials") {
			setAlert(error, "danger");
			clearErrors();
		}
		// eslint-disable-next-line
	}, [error, isAuthenticated, navigate]);

	const [user, setUser] = useState({
		email: "",
		password: "",
	});
	const { email, password } = user;

	const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		if (email === "" || password === "") {
			setAlert("Please fill in all fields");
		} else {
			login({
				email,
				password,
			});
		}
	};

	return (
		<div className="form-container">
			<h1>
				Account <span className="text-primary">Login</span>
			</h1>
			<form onSubmit={onSubmit}>
				<div className="form-group">
					<label htmlFor="email">Email Adress</label>
					<input type="email" name="email" value={email} onChange={onChange} />
				</div>
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						value={password}
						onChange={onChange}
					/>
				</div>
				<input type="submit" value="Login" className="btn btn-primary btn-block" />
			</form>
			{/* <Counter /> */}
		</div>
	);
};

export default Login;

class Counter extends React.Component {
    state = {
        count : 1,
    }

	formatCount() {
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
    }

    render() {
        return (
        <div>
            <span>{this.formatCount()}</span>
        </div>
        );
    }
}

