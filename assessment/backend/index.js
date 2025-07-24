require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const cors = require("cors");

const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/user");

const app = express();
app.use(express.json());
app.use(cors());
connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 5999;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
