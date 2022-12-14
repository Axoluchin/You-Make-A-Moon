import Link from "next/link";
import { Navbar, Text, Switch, useTheme, Button } from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import { MdDarkMode, MdLightMode } from "react-icons/md";

import { useLoginModal, useSingUpModal } from "../hooks/Store";

const Header = () => {
  const { setTheme } = useNextTheme();
  const { isDark, theme } = useTheme();
  const openLoginModal = useLoginModal((state) => state.openModal);
  const openSingUpModal = useSingUpModal((state) => state.openModal);

  return (
    <Navbar
      variant="sticky"
      style={{
        width: "100%",
        borderBottomStyle: "solid",
        borderColor: theme?.colors.backgroundContrast.value,
        borderWidth: 1,
      }}
    >
      <Navbar.Brand>
        <img
          src="./icon-192x192.png"
          height="50px"
          width="50px"
          style={{ marginRight: "8px" }}
          alt="Moon Icon"
        />
        <Text h3 style={{ marginBottom: 0 }}>
          You Make A Moon
        </Text>
      </Navbar.Brand>
      <Navbar.Content enableCursorHighlight>
        {/* <Navbar.Item>
          <Link href="/">
            <Text>Make a Moon</Text>
          </Link>
        </Navbar.Item>
        <Navbar.Item>
          <Link href="/">
            <Text>Dashboard</Text>
          </Link>
        </Navbar.Item> */}
      </Navbar.Content>
      <Navbar.Content>
        <Switch
          checked={isDark}
          onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
          iconOn={<MdDarkMode />}
          iconOff={<MdLightMode />}
        />
        {/* <Navbar.Item>
          <Button auto light onClick={openLoginModal}>
            Iniciar Sesión
          </Button>
        </Navbar.Item>
        <Navbar.Item>
          <Button auto flat onClick={openSingUpModal}>
            Registrarse
          </Button>
        </Navbar.Item> */}
      </Navbar.Content>
    </Navbar>
  );
};

export default Header;
