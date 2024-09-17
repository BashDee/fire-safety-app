import React, { useState } from 'react';
import certificateService from '../services/certificateService';

const FireSafetyForm = () => {
  const [buildingName, setBuildingName] = useState('');
  const [location, setLocation] = useState('');
  const [fireSafetyMeasures, setFireSafetyMeasures] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await certificateService.applyCertificate({
        userId: 1, // Example user ID, replace with dynamic user ID
        buildingName,
        location,
        fireSafetyMeasures,
      });
      alert('Certificate application submitted successfully!');
    } catch (err) {
      alert('Failed to apply for certificate');
    }
  };

  return (
    <div>
      <h1>Apply for Fire Safety Certificate</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={buildingName} 
          onChange={(e) => setBuildingName(e.target.value)} 
          placeholder="Building Name" 
          required 
        />
        <input 
          type="text" 
          value={location} 
          onChange={(e) => setLocation(e.target.value)} 
          placeholder="Location" 
          required 
        />
        <textarea
          value={fireSafetyMeasures}
          onChange={(e) => setFireSafetyMeasures(e.target.value)}
          placeholder="Fire Safety Measures"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FireSafetyForm;
