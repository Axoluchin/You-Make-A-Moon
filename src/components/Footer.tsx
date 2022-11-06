import { Grid, Text, useTheme, Row, Link, Spacer } from "@nextui-org/react";
import { IoLogoGithub, IoLogoFacebook, IoLogoTwitter } from "react-icons/io5";

const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer
      style={{
        backgroundColor:
          theme?.colors.backgroundContrast.value || "transparent",
        padding: "1rem",
        marginTop: "3rem",
      }}
    >
      <Grid.Container justify="space-between" alignItems="flex-start" gap={3}>
        <Grid>
          <Row align="center">
            <img
              src="./icon-192x192.png"
              height="35px"
              width="35px"
              style={{ marginRight: "8px" }}
              alt="Moon Icon"
            />
            <Text h4 style={{ marginBottom: 0 }}>
              You Make A Moon <Text small>0.1.0</Text>
            </Text>
            
          </Row>
        </Grid>
        <Grid>
          <Link href="https://github.com/Axoluchin" target="_blank">
            <Text h4>Axoluchin - 2022</Text>
          </Link>
          <Link
            href="https://github.com/Axoluchin/You-Make-A-Moon"
            isExternal
            target="_blank"
            color="text"
          >
            <IoLogoGithub />
            <Spacer x={0.5} />
            <Text>Repositorio del proyecto</Text>
          </Link>
        </Grid>
        <Grid>
          <Text h4>La Odisea De Los Memes</Text>
          <Link
            href="https://twitter.com/LaOdiseaDLMemes"
            isExternal
            target="_blank"
            color="text"
          >
            <IoLogoTwitter />
            <Spacer x={0.5} />
            <Text>Twitter</Text>
          </Link>
          <Link
            href="https://www.facebook.com/LaOdiseaDeLosMemes1/"
            isExternal
            target="_blank"
            color="text"
          >
            <IoLogoFacebook />
            <Spacer x={0.5} />
            <Text>Facebook</Text>
          </Link>
        </Grid>
      </Grid.Container>
    </footer>
  );
};

export default Footer;
