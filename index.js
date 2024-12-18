import express from "express";
import cors from "cors";

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

const users = {
  user1: { name: "John Doe", age: 30 },
  user2: { name: "Jane Smith", age: 25 },
  user3: { name: "Alice Johnson", age: 35 },
};

app.get("/", async (req, res) => {
  res.status(200).json({ message: "This is home route 🏠" });
});

app.get("/api", async (req, res) => {
  res.status(200).json({ message: "This is the api route 🙂" });
});

app.get("/api/user", async (req, res) => {
  res.status(200).json({
    message: "User data returned 👤",
    data: users,
  });
});

app.get("/hello", (_, res) => {
  res.send("say hello");
});

app.listen(PORT ?? 8000, () => {
  console.log(`Server running on port ${PORT}`);
});
