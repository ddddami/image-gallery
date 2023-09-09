import { MouseEvent } from "react";

const LoginForm = () => {
  const handleLogin = (event: MouseEvent) => {
    event.preventDefault();
    console.log("Login clicked!");
    // Call server
  };

  return (
    <div>
      <form>
        <h2>Login</h2>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Username
          </label>
          <input id="email" type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input id="password" type="password" className="form-control" />
        </div>
        <button className="btn btn-primary" type="submit" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
