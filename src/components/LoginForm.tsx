import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { login, setToken } from "../services/auth-service";

const schema = z.object({
  username: z.string().email().max(255),
  password: z.string().min(6, { message: "Enter a valid password" }).max(255),
});

type LoginFormData = z.infer<typeof schema>;

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm<LoginFormData>({ resolver: zodResolver(schema) });

  const doSubmit = (data: LoginFormData) => {
    login(data.username, data.password)
      .then((res) => {
        setToken(res.data.token);
        window.location.href = "/";
      })
      .catch((ex) => console.log(ex));
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          doSubmit(data);
          reset();
        })}
      >
        <h2>Login</h2>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Username
          </label>
          <input
            {...register("username")}
            id="email"
            type="text"
            className="x-input form-control"
          />
          {errors.username && (
            <small className="text-danger">{errors.username.message}</small>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            {...register("password")}
            id="password"
            type="password"
            className="x-input form-control"
          />
          {errors.password && (
            <small className="text-danger">{errors.password.message}</small>
          )}
        </div>
        <button
          disabled={isSubmitting || !isValid}
          className="btn x-btn"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
