const QRCode = require("qrcode");

QRCode.toFile(
  "qr-plato4.png",
  "https://plato-nutricion.vercel.app/?plato=4",
  {
    width: 300,
  },
  (err) => {
    if (err) throw err;
    console.log("QR generado!");
  }
);
