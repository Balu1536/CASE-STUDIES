"use strict";
var Role;
(function (Role) {
    Role[Role["Doctor"] = 0] = "Doctor";
    Role[Role["Nurse"] = 1] = "Nurse";
    Role[Role["Admin"] = 2] = "Admin";
})(Role || (Role = {}));
let staffMember = [
    { id: 101, name: "Abhishek", role: Role.Doctor },
    { id: 201, name: "priyadarshan", role: Role.Doctor },
    { id: 301, name: "BALU", role: Role.Admin },
    {
        id: 401, name: "Anu", role: Role.Nurse
    }
];
console.log("Staff Members:\n", staffMember);
// let patientIds: number[] = [101, 102, 103];
// let patientNames: Array<string> = ["Alice", "Bob", "Carol"];
// console.log("Patient IDs:", patientIds);
// console.log("Patient Names:", patientNames);
// let vitalSigns: [number, number] = [120, 80];
// console.log("Vital Signs (Systolic, Diastolic):", vitalSigns);
// enum PatientStatus {
//   Admitted,
//   Discharged,
//   UnderObservation
// }
// let status: PatientStatus = PatientStatus.Admitted;
