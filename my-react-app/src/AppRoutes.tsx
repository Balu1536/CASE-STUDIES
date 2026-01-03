import { Routes, Route } from "react-router-dom";
import Doctordetails from "./doctorsDetails";
import PatientDetails from "./patientDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Doctordetails/>} />
      <Route
        path="/doctors/:doctorId/patients/:patientId"
        element={<PatientDetails />}
      />
    </Routes>
  );
};

export default AppRoutes;
