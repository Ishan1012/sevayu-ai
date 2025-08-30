import getAppointments, { getRecords } from "./AppointmentService";


const patient = [
    {
        id: '123',
        name: "Priya Sharma",
        email: "priya.sharma@sevayu.ai",
        age: 28,
        gender: "Female",
        phone: "+91 98765 43210",
        address: "Mumbai, Maharashtra",
        profile: "https://placehold.co/150x150/ECFDF5/10B981?text=PS",
        upcomingAppointments: getAppointments('123'),
        medicalRecords: getRecords('123'),
        notifications: {
            appointmentReminders: true,
            healthTips: true,
            promotionalUpdates: false,
        }
    },
    {
        id: '456',
        name: "Priya Sharma",
        email: "priya.sharma@sevayu.ai",
        age: 28,
        gender: "Female",
        phone: "+91 98765 43210",
        address: "Mumbai, Maharashtra",
        profile: "https://placehold.co/150x150/ECFDF5/10B981?text=PS",
        upcomingAppointments: getAppointments('456'),
        medicalRecords: getRecords('456'),
        notifications: {
            appointmentReminders: true,
            healthTips: true,
            promotionalUpdates: false,
        }
    },
];

export const getPatient = (patientId) => {
    return patient.find(item => item.id === patientId);
};