import { MouseEvent } from "react";

const RegisterForm = () => {
  const handleLogin = (event: MouseEvent) => {
    event.preventDefault();
    console.log("Login clicked!");
    // Call server
  };

  return (
    <div>
      <form>
        <h2 className="mb-2">Register</h2>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Name
          </label>
          <input id="text" type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Username
          </label>
          <input id="email" type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="password1">
            Password
          </label>
          <input id="password1" type="password" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="password2">
            Re-type Password
          </label>
          <input id="password2" type="password" className="form-control" />
        </div>
        <button className="btn btn-primary" type="submit" onClick={handleLogin}>
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
