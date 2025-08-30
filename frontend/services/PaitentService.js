import getAppointments, { getRecords } from "./AppointmentService";

const patient = [
    {
        id: '1',
        name: "Priya Sharma",
        email: "priya.sharma@sevayu.ai",
        age: 28,
        gender: "Female",
        phone: "+91 98765 43210",
        address: "Mumbai, Maharashtra",
        profile: "https://placehold.co/150x150/ECFDF5/10B981?text=PS",
        upcomingAppointments: getAppointments('1'),
        medicalRecords: getRecords('1'),
        notifications: {
            appointmentReminders: true,
            healthTips: true,
            promotionalUpdates: false,
        }
    },
    {
        id: '2',
        name: "Rohan Mehta",
        email: "rohan.mehta@sevayu.ai",
        age: 34,
        gender: "Male",
        phone: "+91 99887 76655",
        address: "Delhi, Delhi",
        profile: "https://placehold.co/150x150/ECFDF5/10B981?text=RM",
        upcomingAppointments: getAppointments('2'),
        medicalRecords: getRecords('2'),
        notifications: {
            appointmentReminders: true,
            healthTips: true,
            promotionalUpdates: true,
        }
    },
    {
        id: '3',
        name: "Anjali Singh",
        email: "anjali.singh@sevayu.ai",
        age: 45,
        gender: "Female",
        phone: "+91 91234 56789",
        address: "Bengaluru, Karnataka",
        profile: "https://placehold.co/150x150/ECFDF5/10B981?text=AS",
        upcomingAppointments: getAppointments('3'),
        medicalRecords: getRecords('3'),
        notifications: {
            appointmentReminders: true,
            healthTips: false,
            promotionalUpdates: false,
        }
    },
    {
        id: '4',
        name: "Vikram Kumar",
        email: "vikram.kumar@sevayu.ai",
        age: 52,
        gender: "Male",
        phone: "+91 98765 12345",
        address: "Chennai, Tamil Nadu",
        profile: "https://placehold.co/150x150/ECFDF5/10B981?text=VK",
        upcomingAppointments: getAppointments('4'),
        medicalRecords: getRecords('4'),
        notifications: {
            appointmentReminders: true,
            healthTips: true,
            promotionalUpdates: false,
        }
    },
    {
        id: '5',
        name: "Sneha Reddy",
        email: "sneha.reddy@sevayu.ai",
        age: 22,
        gender: "Female",
        phone: "+91 95555 88888",
        address: "Hyderabad, Telangana",
        profile: "https://placehold.co/150x150/ECFDF5/10B981?text=SR",
        upcomingAppointments: getAppointments('5'),
        medicalRecords: getRecords('5'),
        notifications: {
            appointmentReminders: true,
            healthTips: true,
            promotionalUpdates: false,
        }
    },
    {
        id: '6',
        name: "Arjun Desai",
        email: "arjun.desai@sevayu.ai",
        age: 39,
        gender: "Male",
        phone: "+91 94444 77777",
        address: "Pune, Maharashtra",
        profile: "https://placehold.co/150x150/ECFDF5/10B981?text=AD",
        upcomingAppointments: getAppointments('6'),
        medicalRecords: getRecords('6'),
        notifications: {
            appointmentReminders: true,
            healthTips: true,
            promotionalUpdates: true,
        }
    },
    {
        id: '7',
        name: "Kavita Nair",
        email: "kavita.nair@sevayu.ai",
        age: 60,
        gender: "Female",
        phone: "+91 93333 66666",
        address: "Kolkata, West Bengal",
        profile: "https://placehold.co/150x150/ECFDF5/10B981?text=KN",
        upcomingAppointments: getAppointments('7'),
        medicalRecords: getRecords('7'),
        notifications: {
            appointmentReminders: true,
            healthTips: true,
            promotionalUpdates: false,
        }
    },
    {
        id: '8',
        name: "Sameer Joshi",
        email: "sameer.joshi@sevayu.ai",
        age: 31,
        gender: "Male",
        phone: "+91 92222 55555",
        address: "Jaipur, Rajasthan",
        profile: "https://placehold.co/150x150/ECFDF5/10B981?text=SJ",
        upcomingAppointments: getAppointments('8'),
        medicalRecords: getRecords('8'),
        notifications: {
            appointmentReminders: false,
            healthTips: false,
            promotionalUpdates: false,
        }
    },
    {
        id: '9',
        name: "Meera Iyer",
        email: "meera.iyer@sevayu.ai",
        age: 25,
        gender: "Female",
        phone: "+91 91111 44444",
        address: "Ahmedabad, Gujarat",
        profile: "https://placehold.co/150x150/ECFDF5/10B981?text=MI",
        upcomingAppointments: getAppointments('9'),
        medicalRecords: getRecords('9'),
        notifications: {
            appointmentReminders: true,
            healthTips: true,
            promotionalUpdates: false,
        }
    },
    {
        id: '10',
        name: "Rajesh Patil",
        email: "rajesh.patil@sevayu.ai",
        age: 48,
        gender: "Male",
        phone: "+91 90000 33333",
        address: "Lucknow, Uttar Pradesh",
        profile: "https://placehold.co/150x150/ECFDF5/10B981?text=RP",
        upcomingAppointments: getAppointments('10'),
        medicalRecords: getRecords('10'),
        notifications: {
            appointmentReminders: true,
            healthTips: true,
            promotionalUpdates: true,
        }
    },
];

export const getPatient = (patientId) => {
    return patient.find(item => item.id === patientId);
};