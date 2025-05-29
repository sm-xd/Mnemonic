import { app } from "./app";
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
  console.log("Response sent");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});