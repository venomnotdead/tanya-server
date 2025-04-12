const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const intentSummaryRoutes = require("./routes/intentSummary");
const intentTimelineRoutes = require("./routes/intentTimeline");
const intentGeoDistributionRoutes = require("./routes/intentGeoDistribution");
const platformOsDistribution = require("./routes/platformOsDistribution");
const pushNotificationStats = require("./routes/pushNotificationStats");
const fetchingLogo= require("./routes/logo.js");
const authRoutes = require("./routes/auth.js");
const summaryWithBarChart = require("./routes/summaryWithBarChart");


const PORT = process.env.PORT || 5000;

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

// Health check route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is running" });
});

// Mount your BFF proxy routes under this namespace
app.use("/api/customer-enquiries", intentSummaryRoutes);
app.use("/api/customer-enquiries", intentTimelineRoutes);
app.use("/api/customer-enquiries", intentGeoDistributionRoutes);
app.use("/api/customer-enquiries", platformOsDistribution);
app.use("/api/customer-enquiries", pushNotificationStats);
app.use("/api", fetchingLogo );
app.use("/api", authRoutes);
app.use("/api", summaryWithBarChart);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
