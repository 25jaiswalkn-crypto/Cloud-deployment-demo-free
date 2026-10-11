const express = require("express");
const os = require("os");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    message: "Cloud deployment demo is running",
    hostname: os.hostname(),
    instanceId: os.hostname(),
    version: process.env.APP_VERSION || "1.0.0"
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    hostname: os.hostname()
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
