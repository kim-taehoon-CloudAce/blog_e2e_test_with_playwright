import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "firebaseApp";
import { toast } from "react-toastify";

export default function SiginupForm() {
  const [error, setError] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const auth = getAuth(app);
      await createUserWithEmailAndPassword(auth, email, password);

      toast.success("successfully signed up");
      navigate("/");
    } catch (error: any) {
      toast.error(error?.message);
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
      } else if (passwordConfirm?.length > 0 && value !== passwordConfirm) {
        setError("passwords don't match");
      } else {
        setError("");
      }
    }

    if (name === "password_confirm") {
      setPasswordConfirm(value);
      if (value?.length < 8) {
        setError("password must be at least 8 characters");
      } else if (value !== password) {
        setError("passwords don't match");
      } else {
        setError("");
      }
    }
  };
  return (
    //<form className="form form--lg" action="/post" method="post">
    <form className="form form--lg" onSubmit={onSubmit}>
      <h1 className="form__title">Sign Up</h1>
      <div className="form__block">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          required
          onChange={onChange}
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
        />
      </div>
      <div className="form__block">
        <label htmlFor="password_confirm">Password Confirm</label>
        <input
          type="password"
          name="password_confirm"
          id="password_confirm"
          required
          onChange={onChange}
        />
      </div>
      {error && error.length > 0 && (
        <div className="form__block">
          <span className="form__error">{error}</span>
        </div>
      )}
      <div className="form__block">
        if you have an account, please{" "}
        <Link to="/login" className="form__link">
          Login
        </Link>
      </div>
      <div className="form__block">
        <input
          type="submit"
          value="Sign Up"
          className="form__btn--submit"
          disabled={error?.length > 0}
        />
      </div>
    </form>
  );
}
