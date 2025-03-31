import React, { useState } from "react";
import { GoogleGenAI } from "@google/genai";

function MedicalDiagnosis() {
  const [symptoms, setSymptoms] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const ai = new GoogleGenAI({ apiKey: "AIzaSyA4UZx1t9euCiKNM2lrIvRr2NiczFChwIs" });

  const diagnose = async () => {
    setLoading(true);
    setResult(null);
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: `A patient has these symptoms: ${symptoms}. What could be the possible diagnosis?`,
      });
      
      setResult({ diagnosis: response.text });
    } catch (error) {
      console.error("Error fetching diagnosis:", error);
      setResult({ error: "Unable to fetch diagnosis. Please try again." });
    }
    setLoading(false);
  };

  return (
    <div style={{backgroundColor:"black",color:"white",marginLeft:"35vw",textAlign:"center",padding:"100px",width:"500px"}}>
      <div>
        <h2>Medical Diagnosis</h2>
        <input
          type="text"
          style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "4px", marginBottom: "16px" }}
          placeholder="Enter symptoms (e.g., fever, headache)"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
        />
        <button
          className="w-full bg-blue-500 text-white p-2 rounded"
          onClick={diagnose}
          disabled={loading}
        >
          {loading ? "Analyzing..." : "Get Diagnosis"}
        </button>
        {result && (
          <div>
            <h3 className="font-semibold">Diagnosis Result:</h3>
            <p>{result.error || result.diagnosis}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MedicalDiagnosis;