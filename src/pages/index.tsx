import { useState, useEffect, useCallback } from "react";
import { Container, Input, Button, Grid, Loading } from "@nextui-org/react";
import Jimp from "jimp/es";
import { Font } from "@jimp/plugin-print";

export default function Home() {
  const [moonText, setMoonText] = useState("");
  const [moonFont, setMoonFont] = useState<Font>();
  const [loading, setLoading] = useState(false);
  const [image64, setImage64] = useState<string | null>(null);

  useEffect(() => {
    Jimp.loadFont("./moonGetHeavy/moonGetHeavy32.fnt")
      .then((font) => setMoonFont(font))
      .catch((err: Error) => alert(err.name));
  }, []);

  const createImage = useCallback(async () => {
    if (!moonFont) {
      alert("Error: font not load, please reload page");
      return;
    }
    setLoading(true);
    Jimp.read("./Plantilla.jpg")
      .then((photo) => {
        const maxHeight = photo.getHeight();
        const maxWidth = photo.getWidth();
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
      })
      .catch((err: Error) => alert(err.name))
      .finally(() => setLoading(false));
  }, [moonFont, moonText]);

  return (
    <Container>
      <Container sm>
        <a
          href={image64 || "Plantilla.jpg"}
          download={image64 ? `${moonText}.jpg` : "Plantilla.jpg"}
        >
          <img
            src={image64 || "Plantilla.jpg"}
            alt="La chida"
            style={{
              display: "block",
              margin: "16px auto",
              aspectRatio: "16/9",
            }}
          />
        </a>

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
          <Grid xs={12} sm={3} justify="center">
            <Button
              auto
              ghost
              onPress={createImage}
              disabled={loading}
              css={{ px: "$13" }}
            >
              {loading ? (
                <Loading color="currentColor" size="sm" />
              ) : (
                "Make A Moon!"
              )}
            </Button>
          </Grid>
        </Grid.Container>
      </Container>
    </Container>
  );
}
