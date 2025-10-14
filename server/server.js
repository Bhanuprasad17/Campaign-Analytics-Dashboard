import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Create Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// 🧠 Check connection
(async () => {
  try {
    const { data, error } = await supabase.from("campaigns").select("*").limit(1);
    if (error) throw error;
    console.log("✅ Connected to Supabase successfully!");
  } catch (error) {
    console.error("❌ Supabase connection failed:", error.message);
  }
})();

// Root route
app.get("/", (req, res) => {
  res.send("🚀 Supabase-connected Express API is running!");
});

// 📊 Fetch all campaigns
app.get("/campaigns", async (req, res) => {
  try {
    const { data, error } = await supabase.from("campaigns").select("*").order("id", { ascending: true });

    if (error) throw error;
    res.json(data);
  } catch (error) {
    console.error("❌ Error fetching campaigns:", error.message);
    res.status(500).json({ error: "Failed to fetch campaigns" });
  }
});


// 📝 Add a new campaign
app.post("/campaigns", async (req, res) => {
  const {Name, Status, Clicks, Cost, Impressions } = req.body;

  // Basic validation
//   if (!Name || !Status) {
//     return res.status(400).json({ error: "Campaign name and status are required." });
//   }

  try {
    const { data, error } = await supabase
      .from("campaigns")
      .insert([{ Name, Status, Clicks, Cost, Impressions }])
      .select(); // Return the inserted row

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    res.status(201).json(data[0]); // Send back the inserted campaign
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// 🖥️ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
