import { useState, useEffect } from "react";
import {
  Container,
  Input,
  Button,
  Text,
  Grid
} from "@nextui-org/react";
import Jimp from "jimp/es";
import { Font } from "@jimp/plugin-print";

export default function Home() {
  const [moonText, setMoonText] = useState("");
  const [image64, setImage64] = useState<string | null>(null);
  const [moonFont, setMoonFont] = useState<Font>();

  useEffect(() => {
    Jimp.loadFont("./moonGetHeavy/moonGetHeavy32.fnt").then((font) =>
      setMoonFont(font)
    );
  }, []);

  const createImage = () => {
    Jimp.read("./Plantilla.jpg").then((photo) => {
      const maxHeight = photo.getHeight();
      const maxWidth = photo.getWidth();
      moonFont &&
        photo
          .print(
            moonFont,
            0,
            maxHeight - 128,
            {
              text: moonText,
              alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
            },
            maxWidth,
            maxHeight
          )
          .getBase64Async(Jimp.MIME_JPEG)
          .then((result) => setImage64(result));
    });
  };

  return (
    <Container>
      <Container sm>
        <img
          src={image64 || "Plantilla.jpg"}
          alt="La chida"
          style={{
            display: "block",
            margin: "16px auto",
            aspectRatio: "16/9",
          }}
        />
        <Grid.Container gap={2} wrap="wrap" justify="space-between">
          <Grid xs={12} sm={9}>
            <Input
              fullWidth
              clearable
              bordered
              placeholder="Ingresa el texto de tu luna"
              aria-label="Ingresa el texto de tu luna"
              onChange={(event) => setMoonText(event.target.value)}
            />
          </Grid>
          <Grid xs={12} sm={3} justify='center'>
            <Button onPress={createImage}>Make A Moon!</Button>
          </Grid>
        </Grid.Container>
      </Container>
    </Container>
  );
}
