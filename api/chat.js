export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  try {
    const { message } = req.body || {};

    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Message is required (string)" });
    }

    const reply = "You said: " + message;

    return res.status(200).json({ success: true, reply });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
}
