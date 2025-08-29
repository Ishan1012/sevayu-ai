const allDoctors = [
  {
    id: 1,
    name: "Dr. Evelyn Reed",
    specialty: "Cardiologist",
    address: "AIIMS, New Delhi",
    phone: "555-0101",
    imageUrl: "https://placehold.co/100x100/ECFDF5/10B981?text=ER",
    timeSlots: ["10:00 AM", "10:30 AM", "01:00 PM", "02:30 PM", "04:00 PM"],
    lat: 28.5672,
    lng: 77.2100
  },
  {
    id: 2,
    name: "Dr. Marcus Thorne",
    specialty: "Neurologist",
    address: "Fortis Hospital, Gurugram",
    phone: "555-0102",
    imageUrl: "https://placehold.co/100x100/ECFDF5/10B981?text=MT",
    timeSlots: ["09:00 AM", "10:30 AM", "01:00 PM", "02:30 PM", "04:00 PM"],
    lat: 28.4595,
    lng: 77.0266
  },
  {
    id: 3,
    name: "Dr. Lena Petrova",
    specialty: "Dermatologist",
    address: "Apollo Hospital, Chennai",
    phone: "555-0103",
    imageUrl: "https://placehold.co/100x100/ECFDF5/10B981?text=LP",
    timeSlots: ["09:00 AM", "10:30 AM", "01:00 PM", "02:30 PM", "04:00 PM"],
    lat: 13.0827,
    lng: 80.2707
  },
  {
    id: 4,
    name: "Dr. Kenji Tanaka",
    specialty: "Orthopedist",
    address: "Nanavati Hospital, Mumbai",
    phone: "555-0104",
    imageUrl: "https://placehold.co/100x100/ECFDF5/10B981?text=KT",
    timeSlots: ["09:00 AM", "10:30 AM", "01:00 PM", "02:30 PM", "04:00 PM"],
    lat: 19.0760,
    lng: 72.8777
  },
  {
    id: 5,
    name: "Dr. Anita Sharma",
    specialty: "Cardiologist",
    address: "CMC Hospital, Vellore",
    phone: "555-0105",
    imageUrl: "https://placehold.co/100x100/ECFDF5/10B981?text=AS",
    timeSlots: ["09:00 AM", "10:30 AM", "01:00 PM", "02:30 PM", "04:00 PM"],
    lat: 12.9165,
    lng: 79.1325
  }
];

const getDoctors = () => {
    return allDoctors;
}

export default getDoctors;