const initialAppointmentData = [
  {
    id: '1',
    patientId: '123',
    type: 'New Consultation',
    doctorid: 7,
    date: '2025-09-05',
    timeSlot: '10:00 AM',
    patientInfo: {
      name: 'Priya Sharma',
      age: '28',
      gender: 'Female',
      address: '123 Health St, Dehradun',
      phone: '555-9876',
      email: 'priya.sharma@email.com',
    },
    status: "Confirmed",
  },
  {
    id: '2',
    patientId: '123',
    type: 'Follow-up Visit',
    doctorid: 1,
    date: '2025-09-06',
    timeSlot: '11:30 AM',
    patientInfo: {
      name: 'Rohan Mehta',
      age: '34',
      gender: 'Male',
      address: '45 Wellness Ave, Delhi',
      phone: '555-4567',
      email: 'rohan.mehta@email.com',
    },
    status: "Completed",
    diagnosis: "Minor Ankle Sprain",
    reportUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  },
  {
    id: '3',
    patientId: '123',
    type: 'Annual Check-up',
    doctorid: 2,
    date: '2025-09-07',
    timeSlot: '02:00 PM',
    patientInfo: {
      name: 'Aditi Verma',
      age: '41',
      gender: 'Female',
      address: '78 Care St, Mumbai',
      phone: '555-3210',
      email: 'aditi.verma@email.com',
    },
    status: "Cancelled",
  },
  {
    id: '4',
    patientId: '123',
    type: 'Follow-up Visit',
    doctorid: 7,
    date: '2025-09-08',
    timeSlot: '09:00 AM',
    patientInfo: {
      name: 'Karan Singh',
      age: '50',
      gender: 'Male',
      address: '56 Relief Rd, Chandigarh',
      phone: '555-7771',
      email: 'karan.singh@email.com',
    },
    status: "Confirmed",
  },
  {
    id: '5',
    patientId: '123',
    type: 'Annual Check-up',
    doctorid: 3,
    date: '2025-09-09',
    timeSlot: '04:30 PM',
    patientInfo: {
      name: 'Sneha Kapoor',
      age: '22',
      gender: 'Female',
      address: '23 Youth Ln, Bangalore',
      phone: '555-2468',
      email: 'sneha.kapoor@email.com',
    },
    status: "Confirmed",
  },
];

const getAppointments = (patientid) => {
  return initialAppointmentData.filter(item => item.status !== 'Completed' && item.patientId === patientid);
};

export const getAppointmentsById = (id) => {
  return initialAppointmentData.find(item => item.id === id);
};

export const getDoctorAppointments = (id) => {
  return initialAppointmentData.filter(item => item.status !== 'Completed' && item.doctorid === id);
}

export const getRecords = (patientid) => {
  return initialAppointmentData.filter(item => item.status === 'Completed' && item.patientId === patientid);
}

export const getDoctorRecords = (id) => {
  return initialAppointmentData.filter(item => item.status === 'Completed' && item.doctorid === id);
}

export default getAppointments;