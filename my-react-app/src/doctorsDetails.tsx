import { Link } from "react-router-dom";
import { useState } from "react";
import { doctorPatients } from "./routeParams";

const DoctorDetails = () => {
  const [doctorId, setDoctorId] = useState("");
  const [patientId, setPatientId] = useState("");
  // const [error, setError] = useState("");

  const validate = () => {
    if (!doctorId || !patientId) {
      return "Doctor ID and Patient ID are required";
    }

    if (isNaN(Number(doctorId)) || isNaN(Number(patientId))) {
      return "IDs must be numeric";
    }

    const exists = doctorPatients.some(
      (dp) => dp.doctorId === doctorId && dp.patientId === patientId
    );

    if (!exists) {
      return "❌ This doctor–patient record does not exist";
    }

    return "";
  };

  const validationError = validate();

  return (
    <div>
      <h1>Doctor Details</h1>

      <input
        type="text"
        placeholder="Doctor ID"
        value={doctorId}
        onChange={(e) => setDoctorId(e.target.value)}
      />

      <input
        type="text"
        placeholder="Patient ID"
        value={patientId}
        onChange={(e) => setPatientId(e.target.value)}
      />

      {validationError && (
        <p style={{ color: "red" }}>{validationError}</p>
      )}

      {!validationError && (
        <Link to={`/doctors/${doctorId}/patients/${patientId}`}>
          View Doctor {doctorId} – Patient {patientId}
        </Link>
      )}
    </div>
  );
};

export default DoctorDetails;
