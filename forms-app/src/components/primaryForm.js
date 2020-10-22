import React from 'react';

import useForm from '../customHooks/useForm';
import validateForm from '../utils/validateForm';

const PrimaryForm = () => {
    const { handleChange, handleSubmit, errors } = useForm(validateForm);
    console.log(errors);
    return (
        <div class="container">
            <div class="row justify-content-center">
                <div className="col"></div>
                <div class="card">
                    <h2 class="card-title text-center">Sign-up to <a href="http://github.com/luismigolondo/">luismigolondo</a></h2>
                    <div class="card-body py-md-4">
                        <form onSubmit={handleSubmit}>
                            <div class="form-group">
                                <label htmlFor="username">Username</label>
                                <input
                                    name="username"
                                    type="text"
                                    class="form-control"
                                    id="username"
                                    placeholder="Enter username"
                                    onChange={handleChange} />
                                {errors.username && <p class="text-danger">Error: {errors.username}</p>}
                            </div>
                            <div class="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    name="email"
                                    type="email"
                                    class="form-control"
                                    id="email"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter email"
                                    onChange={handleChange} />
                                {errors.email && <p class="text-danger">Error: {errors.email}</p>}
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div class="form-group">
                                <label htmlFor="pwd">Password</label>
                                <input
                                    name="password"
                                    type="password"
                                    class="form-control"
                                    id="pwd"
                                    placeholder="Password"
                                    onChange={handleChange} />
                                {errors.password && <p class="text-danger">Error: {errors.password}</p>}
                            </div>
                            <div class="form-group">
                                <label htmlFor="cpwd">Confirm Password</label>
                                <input
                                    name="confirmPassword"
                                    type="password"
                                    class="form-control"
                                    id="cpwd"
                                    placeholder="Confirm Password"
                                    onChange={handleChange} />
                                {errors.confirmPassword && <p class="text-danger">Error: {errors.confirmPassword}</p>}
                            </div>
                            <div class="form-check">
                                <input
                                    name="agree"
                                    type="checkbox"
                                    class="form-check-input"
                                    id="confirm"
                                    onChange={handleChange} />
                                {errors.agree && <p class="text-danger">Error: {errors.agree}</p>}
                                <label class="form-check-label" htmlFor="confirm">I agree with the Terms & Conditions Policy</label>
                            </div>
                            <button type="submit" class="btn btn-primary">Sign Up</button>
                        </form>
                    </div>
                </div>
                <div className="col"></div>
            </div>
        </div>
    )
}

export default PrimaryForm;