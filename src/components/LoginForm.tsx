import {
  GoogleAuthProvider,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { app } from "firebaseApp";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ReactComponent as GoogleLogin } from "assets/web_light_sq_ctn.svg";

export default function LoginForm() {
  const [error, setError] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const auth = getAuth(app);
      await signInWithEmailAndPassword(auth, email, password);

      toast.success("successfully signed up");
      navigate("/");
    } catch (error: any) {
      toast.error(error?.code);
    }
  };
  const onGoogleSignIn = async () => {
    try {
      const auth = getAuth(app);
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      console.log(result.user);

      toast.success("Successfully signed in with Google");
      navigate("/");
    } catch (error: any) {
      toast.error(error?.code);
      console.log(error?.code);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    console.log(name, value);
    if (name === "email") {
      setEmail(value);
      const validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (!value.match(validRegex)) {
        setError("invalid email");
      } else {
        setError("");
      }
    }
    if (name === "password") {
      setPassword(value);
      if (value.length < 8) {
        setError("password must be at least 8 characters");
      } else {
        setError("");
      }
    }
  };

  return (
    <form className="form form--lg" onSubmit={onSubmit}>
      <h1 className="form__title">Login</h1>
      <div className="form__block">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          onChange={onChange}
          value={email}
        />
      </div>
      <div className="form__block">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          required
          onChange={onChange}
          value={password}
        />
      </div>
      {error && error.length > 0 && (
        <div className="form__block">
          <span className="form__error">{error}</span>
        </div>
      )}
      <div className="form__block">
        if you don't have an account, please{" "}
        <Link to="/signup" className="form__link">
          sign up
        </Link>
      </div>
      <div className="form__block">
        <input type="submit" value="Login" className="form__btn--submit" />
      </div>
      <div className="form__block">
        <GoogleLogin
          className="form__svgBtn--google"
          onClick={onGoogleSignIn}
        />
      </div>
    </form>
  );
}
