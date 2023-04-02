import { Flex, Button } from "@mantine/core";
import Logo from "../../assets/Logo.png";
import "./navigation.scss";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <Flex justify="space-between" align="center" direction="row" wrap="wrap">
        <Flex
          gap="md"
          justify="flex-end"
          align="center"
          direction="row"
          wrap="wrap"
        >
          <img src={Logo} className="navigation__logo" />
          <div>CryptoPlanet</div>
        </Flex>

        <Flex
          gap="lg"
          justify="center"
          align="center"
          direction="row"
          wrap="wrap"
        >
          <div>Market</div>
          <div>Watchlist</div>
          <div>Portfolio</div>
          <div>Learn</div>
        </Flex>
        <Flex
          gap="lg"
          justify="flex-end"
          align="center"
          direction="row"
          wrap="wrap"
        >
          <Link to="SignIn">
            <Button variant="subtle" color="indigo" radius="md" size="lg">
              Sign in
            </Button>
          </Link>
          <Link to="Register">
            <Button color="indigo" radius="md" size="lg">
              Register
            </Button>
          </Link>
        </Flex>
      </Flex>
    </div>
  );
};

export default Navigation;
