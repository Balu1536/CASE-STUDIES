
import { useParams } from 'react-router-dom';


const PatientDetails = () => {
  const { doctorId, patientId } = useParams();

  // Validation
  if (!doctorId || !patientId) {
    return <h2>❌ Error: Missing doctor or patient ID</h2>;
  }

  const doctorIdNum = Number(doctorId);
  const patientIdNum = Number(patientId);

  if (isNaN(doctorIdNum) || isNaN(patientIdNum)) {
    return <h2>❌ Error: IDs must be numeric</h2>;
  }

  return (
    <div>
      <h1>Doctor–Patient Details</h1>
      <p><strong>Doctor ID:</strong> {doctorIdNum}</p>
      <p><strong>Patient ID:</strong> {patientIdNum}</p>
    </div>
  );
};

export default PatientDetails;