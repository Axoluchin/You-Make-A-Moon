import { useState, useEffect } from "react";
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
            maxHeight-128,
            {
              text: moonText,
              alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER
            },
            maxWidth,
            maxHeight
          )
          .getBase64Async(Jimp.MIME_JPEG)
          .then((result) => setImage64(result));
    });
  };

  return (
    <div className="App">
      <h1>You Make A Moon</h1>
      <input onChange={(event) => setMoonText(event.target.value)} />
      <button onClick={createImage}>Crear Imagen</button>
      <p>{moonText}</p>
      {image64 && <img src={image64} alt="La chida" height={400} />}
    </div>
  );
}
