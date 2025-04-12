// controllers/intentSummaryController.js
const axios = require("axios");

exports.getSummaryWithBarChartController = async (req, res) => {
  const { flowId, flowAliasId, input } = req.body;

  // Basic validation
  if (!flowId || !flowAliasId || input === undefined) {
    return res.status(400).json({ error: "Missing required fields in payload" });
  }

  const sanitizedInput = typeof input === "string" ? input.trim() : "";

  // Optionally reject if input is empty after trimming
  if (sanitizedInput === "") {
    return res.status(400).json({ error: "Input cannot be an empty string" });
  }

  try {
    const externalApiUrl = 'https://dev.aurascc.net/web-bff/invoke/'
	const response = await axios.post(
		externalApiUrl,
		{ flowId, flowAliasId, input },
		{
		  headers: {
			"Content-Type": "application/json",
			Authorization: req.header("Authorization"), // Pass authorization from the client
		  },
		}
	  );
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error invoking Tany dashboard BFF:", error.message);
    res.status(500).json({ error: "Failed to fetch intent summary" });
  }
};
