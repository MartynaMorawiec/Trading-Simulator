import signin from "../../assets/coins.jpg";
import "./signup.scss";
import { Button } from "@mantine/core";
import Logo from "../../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import { Checkbox } from "@mantine/core";

const SignUp = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/", { replace: true });
  };

  const clickSignIn = () => {
    navigate("/SignIn", { replace: true });
  };

  return (
    <div className="signin">
      <img src={signin} className="signin__img" />

      <div className="signin__box">
        <div className="signin__top" onClick={clickHandler}>
          <img src={Logo} className="signin__logo" />
          <div className="signin__text">CryptoPlanet</div>
        </div>

        <form className="signin__form">
          <header className="signin__header">Create anaccount</header>
          <input type="email" placeholder="Enter email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm password" />
          <div className="signin__forgot">Forgot Password?</div>
          <div className="signin__check">
            <Checkbox
              color="indigo"
              label="I agree to the terms and conditions"
              sx={{ ["& .mantine-Checkbox-label"]: { color: "white" } }}
            />
          </div>

          <div className="signin__button">
            <Button color="indigo" radius="md" size="xl" w="50%">
              Sign In
            </Button>
          </div>
          <p className="signin__redirect">
            Already have an account? <span onClick={clickSignIn}>Sign in</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
