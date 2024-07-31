import React, { useState } from "react";

const PortfolioForm = () => {
  const [portfolioData, setPortfolioData] = useState([]);
  const [formData, setFormData] = useState({
    dematAccountInstitution: "",
    dematAccountNumber: "",
    dematAccountName: "",
    portfolioName: "",
    portfolioInceptionDate: "",
    portfolioSettlementPeriod: "T+2",
    benchmark: "",
    advisorName: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setPortfolioData((prevPortfolioData) => [
      ...prevPortfolioData,
      { ...formData, id: Date.now() },
    ]);
    setFormData({
      dematAccountInstitution: "",
      dematAccountNumber: "",
      dematAccountName: "",
      portfolioName: "",
      portfolioInceptionDate: "",
      portfolioSettlementPeriod: "T+2",
      benchmark: "",
      advisorName: "",
    });
  };

  const handleEdit = (id) => {
    const editData = portfolioData.find((item) => item.id === id);
    setFormData(editData);
  };

  const handleDelete = (id) => {
    if (
      window.confirm(
        "Are you sure you want to delete this portfolio information?"
      )
    ) {
      setPortfolioData((prevPortfolioData) =>
        prevPortfolioData.filter((item) => item.id !== id)
      );
    }
  };

  return (
    <div>
      <h2>Portfolio Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="dematAccountInstitution">
            Demat Account Institution:
          </label>
          <select
            name="dematAccountInstitution"
            id="dematAccountInstitution"
            value={formData.dematAccountInstitution}
            onChange={handleChange}
          >
            <option value="">--Select Demat Account Institution--</option>
            {/* Add options for different institutions */}
          </select>
        </div>
        <div>
          <label htmlFor="dematAccountNumber">
            Demat Account Number:
          </label>
          <input
            type="text"
            name="dematAccountNumber"
            id="dematAccountNumber"
            value={formData.dematAccountNumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="dematAccountName">Demat Account Name:</label>
          <input
            type="text"
            name="dematAccountName"
            id="dematAccountName"
            value={formData.dematAccountName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="portfolioName">Portfolio Name:</label>
          <input
            type="text"
            name="portfolioName"
            id="portfolioName"
            value={formData.portfolioName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="portfolioInceptionDate">
            Portfolio Inception Date:
          </label>
          <input
            type="date"
            name="portfolioInceptionDate"
            id="portfolioInceptionDate"
            value={formData.portfolioInceptionDate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="portfolioSettlementPeriod">
            Portfolio Settlement Period:
          </label>
          <select
            name="portfolioSettlementPeriod"
            id="portfolioSettlementPeriod"
            value={formData.portfolioSettlementPeriod}
            onChange={handleChange}
          >
            <option value="T+2">T+2</option>
            {/* Add other settlement period options if needed */}
          </select>
        </div>
        <div>
          <label htmlFor="benchmark">Benchmark:</label>
          <select
            name="benchmark"
            id="benchmark"
            value={formData.benchmark}
            onChange={handleChange}
          >
            <option value="">--Select Benchmark--</option>
            {/* Add options for different benchmarks */}
          </select>
        </div>
        <div>
          <label htmlFor="advisorName">Advisor Name:</label>
          <input
            type="text"
            name="advisorName"
            id="advisorName"
            value={formData.advisorName}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      <h2>Portfolio Information</h2>
      <table>
        <thead>
          <tr>
            <th>Demat Account Institution</th>
            <th>Demat Account Number</th>
            <th>Demat Account Name</th>
            <th>Portfolio Name</th>
            <th>Portfolio Inception Date</th>
            <th>Portfolio Settlement Period</th>
            <th>Benchmark</th>
            <th>Advisor Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {portfolioData.map((item) => (
            <tr key={item.id}>
              <td>{item.dematAccountInstitution}</td>
              <td>{item.dematAccountNumber}</td>
              <td>{item.dematAccountName}</td>
              <td>{item.portfolioName}</td>
              <td>{item.portfolioInceptionDate}</td>
              <td>{item.portfolioSettlementPeriod}</td>
              <td>{item.benchmark}</td>
              <td>{item.advisorName}</td>
              <td>
                <button onClick={() => handleEdit(item.id)}>Edit</button>
                <button onClick={() => handleDelete(item.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PortfolioForm;