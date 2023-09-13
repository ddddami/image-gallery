import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <div className="container row m-auto gap-4">
      <div className="col-sm-auto col-md-4 col-lg-3 col-xl-3 rounded-3 p-4 bg-subtle">
        <h1>Welcome, friend 👋</h1>
        <p>
          You can access your image gallery here and also add more images to
          your collection🤭
        </p>
      </div>
      <div className="col">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
