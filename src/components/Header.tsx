import Link from "next/link";
import { Navbar, Text, Switch, useTheme } from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Header = () => {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();
  return (
    <Navbar
    isBordered
    >
      <Navbar.Brand>
        <Text h3 style={{ marginBottom: 0 }}>
          You Make A Moon
        </Text>
      </Navbar.Brand>
      <Navbar.Content>
        <Link href="/">
          <Text>Make a Moon</Text>
        </Link>
        <Navbar.Link isDisabled>Dashboard</Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        <Switch
          checked={isDark}
          onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
          iconOn={<MdDarkMode/>}
          iconOff={<MdLightMode/>}
        />
        <Navbar.Link isDisabled>Inicar Sesión</Navbar.Link>
        <Navbar.Link isDisabled>Registrarse</Navbar.Link>
      </Navbar.Content>
    </Navbar>
  );
};

export default Header;
