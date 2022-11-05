import { Grid, Text, useTheme } from "@nextui-org/react";

const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer
      style={{
        backgroundColor:
          theme?.colors.backgroundContrast.value || "transparent",
        padding: "3rem",
        marginTop: "3rem",
      }}
    >
      <Grid.Container justify="space-between" alignItems="center">
        <Grid>
          <Text h4>You Make A Moon</Text>
        </Grid>
        <Grid>
          <Text h5>Axoluchin - 2022</Text>
        </Grid>
        <Grid>
          <Text h4>La Odisea De Los Memes</Text>
        </Grid>
      </Grid.Container>
    </footer>
  );
};

export default Footer;
