import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    // Add your login logic here
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        {/* Email Field */}
        <div>
          <label>Email:</label>
          <input
            type="email"
            {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })}
            style={{ width: "100%", padding: "10px", marginTop: "5px" }}
          />
          {errors.email && <p style={{ color: "red", fontSize: "12px" }}>{errors.email.message}</p>}
        </div>

        {/* Password Field */}
        <div>
          <label>Password:</label>
          <input
            type="password"
            {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
            style={{ width: "100%", padding: "10px", marginTop: "5px" }}
          />
          {errors.password && <p style={{ color: "red", fontSize: "12px" }}>{errors.password.message}</p>}
        </div>

        {/* Submit Button */}
        <button type="submit" style={{ padding: "10px", backgroundColor: "#31B665", color: "white", border: "none", cursor: "pointer" }}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
