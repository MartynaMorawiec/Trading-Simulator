import signin from "../../assets/coins.jpg";
import "./signin.scss";
import { Button } from "@mantine/core";
import Logo from "../../assets/Logo.png";

const SignIn = () => {
  return (
    <div className="signin">
      <img src={signin} className="signin__img" />

      <div className="signin__box">
        <div className="signin__top">
          <img src={Logo} className="signin__logo" />
          <div className="signin__text">CryptoPlanet</div>
        </div>

        <form className="signin__form">
          <header className="signin__header">Sign In Dynamic</header>
          <input type="email" placeholder="Your email" />
          <input type="password" placeholder="Password" />
          <div className="signin__forgot">Forgot Password?</div>
          <div className="signin__button">
            <Button color="indigo" radius="md" size="xl" w="50%">
              Sign In
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
