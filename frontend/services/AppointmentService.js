const initialAppointmentData = {
    type: 'New Consultation',
    doctor: {
        id: 20,
        name: "Dr. Harish Gupta",
        specialty: "Cardiologist",
        address: "AIIMS, Rishikesh",
        phone: "555-0120",
        imageUrl: "https://placehold.co/100x100/ECFDF5/10B981?text=HG",
        lat: 30.0869,
        lng: 78.2676,
        email: "harish.gupta@sevayu.ai"
    },
    date: '2025-09-05',
    timeSlot: '10:00 AM',
    patientInfo: {
        name: 'Priya Sharma',
        age: '28',
        gender: 'Female',
        address: '123 Health St, Dehradun',
        phone: '555-9876',
        email: 'priya.sharma@email.com',
        notes: 'Please arrive 15 minutes early and bring any previous medical records or reports related to your condition.',
    },
    status: "Confirmed", // Status is kept for UI consistency
};

const getAppointments = () => {
    return initialAppointmentData;
};

export default getAppointments;