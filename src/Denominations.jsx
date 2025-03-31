import React, { useState } from "react";


const DenominationsCalculator = () => {
  const [inputs, setInputs] = useState({
    2000: "",
    500: "",
    200: "",
    100: "",
    50: "",
    10: "",
    5: "",
    total: ""
  });
  const [result, setResult] = useState({ message: "", color: "black" });
  
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  
  const calculate = () => {
    const sum =
    2000 * (Number(inputs[2000]) || 0) +
    500 * (Number(inputs[500]) || 0) +
    200 * (Number(inputs[200]) || 0) +
    100 * (Number(inputs[100]) || 0) +
    50 * (Number(inputs[50]) || 0) +
    10 * (Number(inputs[10]) || 0) +
    5 * (Number(inputs[5]) || 0);
    
    if (sum === Number(inputs.total)) {
      setResult({ message: "CORRECT!!!", color: "green" });
    } else {
      setResult({ message: `INCORRECT... The answer is ₹${sum}`, color: "red" });
    }
  };
  
  return (
    <div style={{marginLeft:"35vw",textAlign:"center"}}>
      <h1>Denominations Calculator</h1>
      <table border="2" cellPadding="10" style={{marginBottom:"50px"}}>
        <thead>
          <tr>
            <th>Denominations</th>
            <th>Pieces</th>
          </tr>
        </thead>
        <tbody>
          {[2000, 500, 200, 100, 50, 10, 5].map((value) => (
            <tr key={value}>
              <td>{value}x</td>
              <td>
                <input
                  type="number"
                  name={value}
                  value={inputs[value]}
                  onChange={handleChange}
                  placeholder="NUMBER"
                  />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <input
        type="number"
        name="total"
        value={inputs.total}
        onChange={handleChange}
        placeholder="GIVE TOTAL"
        />
      <button type="button" onClick={calculate}>SUBMIT</button>
      <h1 style={{ color: result.color }}>{result.message}</h1>
    </div>
  );
};

export default DenominationsCalculator;
