import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  return res.send("hi it's home");
});

app.post("/hi", (req, res) => {
  const name = req.body.name;
  const phone = req.body.phone;
  res.status.send(`<h1>${name}, ${phone}</h1>`);
  res.statusCode.send(`<h1>${name}, ${phone}</h1>`);
});

app.listen(PORT, () => {
  console.log(`✅ Server is Listening on http://localhost:${PORT}`);
});
