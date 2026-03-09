import { useForm } from 'react-hook-form';
import axios from 'axios';


interface loginUserInfo {
    email: string;
    password: string;
}

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm<loginUserInfo>();;

    const loginUser = async (formValues: loginUserInfo) => {
  try {
    const { data } = await axios.post(
      "http://localhost:4000/login",
      {
        email: formValues.email,
        password: formValues.password
      }
    );

    alert("Login successful");

    console.log("Access Token:", data.accessToken);
    console.log("User:", data.user);

    // Optional: store token
    localStorage.setItem("token", data.accessToken);

  } catch (error) {
    alert("Invalid email or password");
    console.error("Login error:", error);
  }
};

    return(
        <div className="container py-3">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8 col-md-5">
                    <div className="card shadow-lg border-0">
                        <div className="card-body p-4">
                            <h1 className="card-title h4 fw-bold text-center mb-3">Login Form</h1>

                            <form onSubmit={handleSubmit(loginUser)}>
                                <div className="mb-2">
                                    <label htmlFor="email" className="form-label">Email address<span className='text-danger'>*</span></label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Email Address"
                                        {...register('email', { 
                                            required: { value: true, message: 'Email is required' }, 
                                            pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/, message: 'Incorrect email format'} 
                                        })}
                                    />
                                    {errors.email?.message && <p className="text-danger small mb-0">{String(errors.email.message)}</p>}
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="password" className="form-label">Password<span className='text-danger'>*</span></label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="Password"
                                        {...register('password', { 
                                            required: { value: true, message: 'Password is required' },
                                            pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, message: 'Use 8+ chars with uppercase, lowercase, digit and special character (!@#$%^&*)' }
                                        })}
                                    />
                                    {errors.password?.type === 'pattern' ? (
                                        <div>
                                            <p className="form-text small mb-0 mt-1 text-danger">Password must have:</p>
                                            <ul className="form-text small list-unstyled mb-0 ps-3 text-danger">
                                                <li>Minimum 8 characters</li>
                                                <li>At least 1 uppercase letter</li>
                                                <li>At least 1 lowercase letter</li>
                                                <li>At least 1 digit</li>
                                                <li>At least 1 special character (e.g. !@#$%^&*)</li>
                                            </ul>
                                        </div>
                                    ) : (
                                        <>
                                            {errors.password?.message && <p className="text-danger small mb-0 mt-1">{String(errors.password.message)}</p>}
                                        </>
                                    )}
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-success btn-md" >
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login; 