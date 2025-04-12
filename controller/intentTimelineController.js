const axios = require("axios");

exports.getIntentTimeline = async (req, res) => {
  const { storeCode, granularity, whom, startDate, endDate } = req.query;
  const authHeader = req.header("Authorization");

  if (!storeCode || !granularity || !startDate || !endDate) {
    return res.status(400).json({ message: "Missing required query parameters" });
  }

  try {
    const response = await axios.get(
      "https://dev.aurascc.net/web-bff/customer-enquiries/intent-timeline",
      {
        params: { storeCode, granularity, startDate, endDate },
        headers: {
          "Content-Type": "application/json",
          Authorization: authHeader,
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error("Intent GeoDistribution Error:", error.message);
    if (error.response) {
      res.status(error.response.status).json(error.response.data);
    } else {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
};
