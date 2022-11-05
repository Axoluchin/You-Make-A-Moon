import Link from "next/link";
import { Navbar, Text, Switch, useTheme, Button } from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Header = () => {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();
  return (
    <Navbar isBordered>
      <Navbar.Brand>
        <Text h3 style={{ marginBottom: 0 }}>
          You Make A Moon
        </Text>
      </Navbar.Brand>
      <Navbar.Content enableCursorHighlight>
        <Navbar.Item>
          <Link href="/">
            <Text>Make a Moon</Text>
          </Link>
        </Navbar.Item>
        <Navbar.Item>
          <Link href="/">
            <Text>Dashboard</Text>
          </Link>
        </Navbar.Item>
      </Navbar.Content>
      <Navbar.Content>
        <Switch
          checked={isDark}
          onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
          iconOn={<MdDarkMode />}
          iconOff={<MdLightMode />}
        />
        <Navbar.Item>
          <Button auto light size="sm">
            Iniciar Sesión
          </Button>
        </Navbar.Item>
        <Navbar.Item>
          <Button auto flat>
            Registrarse
          </Button>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
};

export default Header;
