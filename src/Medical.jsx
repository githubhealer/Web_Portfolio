import React, { useState } from "react";
import { GoogleGenAI } from "@google/genai";

function MedicalDiagnosis() {
  const [symptoms, setSymptoms] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const ai = new GoogleGenAI({
    apiKey: "AIzaSyA4UZx1t9euCiKNM2lrIvRr2NiczFChwIs",
  });

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
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
        position:"absolute",
        top:"0vh",
        left:"35vw"
      }}
    >
      <div
        style={{
          backgroundColor: "#1e1e1e",
          color: "white",
          padding: "40px",
          borderRadius: "12px",
          width: "100%",
          maxWidth: "500px",
          boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
        }}
      >
        <h2 style={{ fontSize: "28px", marginBottom: "24px", textAlign: "center" }}>
          Medical Diagnosis
        </h2>
        <input
          type="text"
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            marginBottom: "16px",
            fontSize: "16px",
          }}
          placeholder="Enter symptoms (e.g., fever, headache)"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
        />
        <button
          onClick={diagnose}
          disabled={loading}
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "6px",
            fontSize: "16px",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
        >
          {loading ? "Analyzing..." : "Get Diagnosis"}
        </button>

        {result && (
          <div style={{ marginTop: "20px" }}>
            <h3 style={{ fontSize: "18px", marginBottom: "8px" }}>Diagnosis Result:</h3>
            <p
              style={{
                backgroundColor: "#f0f0f0",
                color: "#333",
                padding: "12px",
                borderRadius: "8px",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              {result.error || result.diagnosis}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MedicalDiagnosis;
