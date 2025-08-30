const initialAppointmentData = [
  {
    id: '1',
    patientId: '1',
    type: 'New Consultation',
    doctorid: 7,
    date: '2025-09-05',
    timeSlot: '10:00 AM',
    patientInfo: {
      name: 'Priya Sharma',
      age: '28',
      gender: 'Female',
      address: '123 Health St, Mumbai',
      phone: '555-1111',
      email: 'priya.sharma@email.com',
    },
    status: "Confirmed",
  },
  {
    id: '2',
    patientId: '1',
    type: 'Follow-up Visit',
    doctorid: 1,
    date: '2025-08-20',
    timeSlot: '11:30 AM',
    patientInfo: {
      name: 'Rohan Mehta',
      age: '34',
      gender: 'Male',
      address: '45 Wellness Ave, Delhi',
      phone: '555-2222',
      email: 'rohan.mehta@email.com',
    },
    status: "Completed",
    diagnosis: "Minor Ankle Sprain",
    reportUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  },
  {
    id: '3',
    patientId: '3',
    type: 'Annual Check-up',
    doctorid: 2,
    date: '2025-09-07',
    timeSlot: '02:00 PM',
    patientInfo: {
      name: 'Anjali Singh',
      age: '45',
      gender: 'Female',
      address: '78 Care St, Bengaluru',
      phone: '555-3333',
      email: 'anjali.singh@email.com',
    },
    status: "Cancelled",
  },
  {
    id: '4',
    patientId: '4',
    type: 'Follow-up Visit',
    doctorid: 7,
    date: '2025-09-08',
    timeSlot: '09:00 AM',
    patientInfo: {
      name: 'Vikram Kumar',
      age: '52',
      gender: 'Male',
      address: '56 Relief Rd, Chennai',
      phone: '555-4444',
      email: 'vikram.kumar@email.com',
    },
    status: "Confirmed",
  },
  {
    id: '5',
    patientId: '5',
    type: 'Annual Check-up',
    doctorid: 3,
    date: '2025-09-09',
    timeSlot: '04:30 PM',
    patientInfo: {
      name: 'Sneha Reddy',
      age: '22',
      gender: 'Female',
      address: '23 Youth Ln, Hyderabad',
      phone: '555-5555',
      email: 'sneha.reddy@email.com',
    },
    status: "Confirmed",
  },
  {
    id: '6',
    patientId: '6',
    type: 'New Consultation',
    doctorid: 10,
    date: '2025-09-10',
    timeSlot: '09:00 AM',
    patientInfo: {
      name: 'Arjun Desai',
      age: '39',
      gender: 'Male',
      address: '89 Cure Blvd, Pune',
      phone: '555-6666',
      email: 'arjun.desai@email.com',
    },
    status: "Confirmed",
  },
  {
    id: '7',
    patientId: '7',
    type: 'Psychiatry Session',
    doctorid: 11,
    date: '2025-08-22',
    timeSlot: '02:30 PM',
    patientInfo: {
      name: 'Kavita Nair',
      age: '60',
      gender: 'Female',
      address: '101 Life Ct, Kolkata',
      phone: '555-7777',
      email: 'kavita.nair@email.com',
    },
    status: "Completed",
    diagnosis: "General Anxiety",
    reportUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  },
  {
    id: '8',
    patientId: '8',
    type: 'Eye Exam',
    doctorid: 15,
    date: '2025-09-12',
    timeSlot: '11:30 AM',
    patientInfo: {
      name: 'Sameer Joshi',
      age: '31',
      gender: 'Male',
      address: '202 Hope Ave, Jaipur',
      phone: '555-8888',
      email: 'sameer.joshi@email.com',
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