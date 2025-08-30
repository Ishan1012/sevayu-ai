const allDoctors = [
  {
    id: 1,
    name: "Dr. Evelyn Reed",
    specialty: "Cardiologist",
    address: "AIIMS, New Delhi",
    phone: "555-0101",
    imageUrl: "https://placehold.co/100x100/ECFDF5/10B981?text=ER",
    timeSlots: ["09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM"],
    lat: 28.5672,
    lng: 77.2100,
    email: "evelyn.reed@sevayu.ai",
    password: "$2b$10$E9.E6.7oZ.9iZ/fHa.805uL2.B1.5n3.5n3.5n3.5n"
  },
  {
    id: 2,
    name: "Dr. Marcus Thorne",
    specialty: "Neurologist",
    address: "Fortis Hospital, Gurugram",
    phone: "555-0102",
    imageUrl: "https://placehold.co/100x100/ECFDF5/10B981?text=MT",
    timeSlots: ["09:30 AM", "11:30 AM", "01:30 PM", "03:30 PM", "04:30 PM"],
    lat: 28.4595,
    lng: 77.0266,
    email: "marcus.thorne@sevayu.ai",
    password: "$2b$10$fG.9h.8oZ.9iZ/fHa.805uL2.B1.5n3.5n3.5n3.5n"
  },
  {
    id: 3,
    name: "Dr. Lena Petrova",
    specialty: "Dermatologist",
    address: "Apollo Hospital, Chennai",
    phone: "555-0103",
    imageUrl: "https://placehold.co/100x100/ECFDF5/10B981?text=LP",
    timeSlots: ["10:00 AM", "12:00 PM", "01:00 PM", "03:00 PM", "04:00 PM"],
    lat: 13.0827,
    lng: 80.2707,
    email: "lena.petrova@sevayu.ai",
    password: "$2b$10$kL.0j.9oZ.9iZ/fHa.805uL2.B1.5n3.5n3.5n3.5n"
  },
  {
    id: 4,
    name: "Dr. Kenji Tanaka",
    specialty: "Neurologist", // Changed from Orthopedist
    address: "Nanavati Hospital, Mumbai",
    phone: "555-0104",
    imageUrl: "https://placehold.co/100x100/ECFDF5/10B981?text=KT",
    timeSlots: ["09:00 AM", "11:00 AM", "02:00 PM", "04:00 PM"],
    lat: 19.0760,
    lng: 72.8777,
    email: "kenji.tanaka@sevayu.ai",
    password: "$2b$10$mN.1k.0oZ.9iZ/fHa.805uL2.B1.5n3.5n3.5n3.5n"
  },
  {
    id: 5,
    name: "Dr. Anita Sharma",
    specialty: "Cardiologist",
    address: "CMC Hospital, Vellore",
    phone: "555-0105",
    imageUrl: "https://placehold.co/100x100/ECFDF5/10B981?text=AS",
    timeSlots: ["10:30 AM", "12:30 PM", "02:30 PM", "04:30 PM"],
    lat: 12.9165,
    lng: 79.1325,
    email: "anita.sharma@sevayu.ai",
    password: "$2b$10$oP.2l.1oZ.9iZ/fHa.805uL2.B1.5n3.5n3.5n3.5n"
  },
  {
    id: 6,
    name: "Dr. Rajiv Menon",
    specialty: "Pediatrician",
    address: "Manipal Hospital, Bengaluru",
    phone: "555-0106",
    imageUrl: "https://placehold.co/100x100/ECFDF5/10B981?text=RM",
    timeSlots: ["09:00 AM", "10:30 AM", "12:00 PM", "02:00 PM", "04:00 PM"],
    lat: 12.9716,
    lng: 77.5946,
    email: "rajiv.menon@sevayu.ai",
    password: "$2b$10$qR.3m.2oZ.9iZ/fHa.805uL2.B1.5n3.5n3.5n3.5n"
  },
  {
    id: 7,
    name: "Dr. Fatima Khan",
    specialty: "Gynecologist",
    address: "Max Hospital, Delhi",
    phone: "555-0107",
    imageUrl: "https://placehold.co/100x100/ECFDF5/10B981?text=FK",
    timeSlots: ["10:00 AM", "11:00 AM", "01:00 PM", "03:00 PM", "04:30 PM"],
    lat: 28.7041,
    lng: 77.1025,
    email: "fatima.khan@sevayu.ai",
    password: "$2b$10$sT.4n.3oZ.9iZ/fHa.805uL2.B1.5n3.5n3.5n3.5n"
  },
  {
    id: 8,
    name: "Dr. Vikram Patel",
    specialty: "Oncologist",
    address: "Tata Memorial Hospital, Mumbai",
    phone: "555-0108",
    imageUrl: "https://placehold.co/100x100/ECFDF5/10B981?text=VP",
    timeSlots: ["09:30 AM", "10:30 AM", "12:30 PM", "02:00 PM", "04:30 PM"],
    lat: 19.0896,
    lng: 72.8656,
    email: "vikram.patel@sevayu.ai",
    password: "$2b$10$uV.5o.4oZ.9iZ/fHa.805uL2.B1.5n3.5n3.5n3.5n"
  },
  {
    id: 9,
    name: "Dr. Neha Reddy",
    specialty: "Endocrinologist",
    address: "Yashoda Hospital, Hyderabad",
    phone: "555-0109",
    imageUrl: "https://placehold.co/100x100/ECFDF5/10B981?text=NR",
    timeSlots: ["09:00 AM", "11:00 AM", "01:00 PM", "03:00 PM", "04:00 PM"],
    lat: 17.3850,
    lng: 78.4867,
    email: "neha.reddy@sevayu.ai",
    password: "$2b$10$wX.6p.5oZ.9iZ/fHa.805uL2.B1.5n3.5n3.5n3.5n"
  },
  {
    id: 10,
    name: "Dr. Suresh Iyer",
    specialty: "Dermatologist", // Changed from Nephrologist
    address: "Apollo Hospital, Chennai",
    phone: "555-0110",
    imageUrl: "https://placehold.co/100x100/ECFDF5/10B981?text=SI",
    timeSlots: ["09:00 AM", "09:30 AM", "11:00 AM", "02:00 PM", "04:00 PM"],
    lat: 13.0827,
    lng: 80.2707,
    email: "suresh.iyer@sevayu.ai",
    password: "$2b$10$yZ.7q.6oZ.9iZ/fHa.805uL2.B1.5n3.5n3.5n3.5n"
  },
  {
    id: 11,
    name: "Dr. Priya Nair",
    specialty: "Psychiatrist",
    address: "NIMHANS, Bengaluru",
    phone: "555-0111",
    imageUrl: "https://placehold.co/100x100/ECFDF5/10B981?text=PN",
    timeSlots: ["09:00 AM", "10:00 AM", "12:00 PM", "02:30 PM", "04:30 PM"],
    lat: 12.9436,
    lng: 77.5963,
    email: "priya.nair@sevayu.ai",
    password: "$2b$10$Ab.8r.7oZ.9iZ/fHa.805uL2.B1.5n3.5n3.5n3.5n"
  },
  {
    id: 12,
    name: "Dr. Rohit Kapoor",
    specialty: "Urologist",
    address: "Medanta Hospital, Gurugram",
    phone: "555-0112",
    imageUrl: "https://placehold.co/100x100/ECFDF5/10B981?text=RK",
    timeSlots: ["09:30 AM", "11:30 AM", "01:30 PM", "03:30 PM", "04:30 PM"],
    lat: 28.4595,
    lng: 77.0266,
    email: "rohit.kapoor@sevayu.ai",
    password: "$2b$10$Cd.9s.8oZ.9iZ/fHa.805uL2.B1.5n3.5n3.5n3.5n"
  },
  {
    id: 13,
    name: "Dr. Kavita Joshi",
    specialty: "Rheumatologist",
    address: "Ruby Hall Clinic, Pune",
    phone: "555-0113",
    imageUrl: "https://placehold.co/100x100/ECFDF5/10B981?text=KJ",
    timeSlots: ["09:00 AM", "10:00 AM", "12:00 PM", "02:00 PM", "04:00 PM"],
    lat: 18.5204,
    lng: 73.8567,
    email: "kavita.joshi@sevayu.ai",
    password: "$2b$10$Ef.0t.9oZ.9iZ/fHa.805uL2.B1.5n3.5n3.5n3.5n"
  },
  {
    id: 14,
    name: "Dr. Deepak Malhotra",
    specialty: "Pulmonologist",
    address: "PGIMER, Chandigarh",
    phone: "555-0114",
    imageUrl: "https://placehold.co/100x100/ECFDF5/10B981?text=DM",
    timeSlots: ["09:00 AM", "11:00 AM", "01:00 PM", "03:00 PM", "04:00 PM"],
    lat: 30.7333,
    lng: 76.7794,
    email: "deepak.malhotra@sevayu.ai",
    password: "$2b$10$Gh.1u.0oZ.9iZ/fHa.805uL2.B1.5n3.5n3.5n3.5n"
  },
  {
    id: 15,
    name: "Dr. Sneha Verma",
    specialty: "Ophthalmologist",
    address: "LV Prasad Eye Institute, Hyderabad",
    phone: "555-0115",
    imageUrl: "https://placehold.co/100x100/ECFDF5/10B981?text=SV",
    timeSlots: ["09:00 AM", "09:30 AM", "11:30 AM", "02:30 PM", "04:00 PM"],
    lat: 17.4120,
    lng: 78.4483,
    email: "sneha.verma@sevayu.ai",
    password: "$2b$10$Ij.2v.1oZ.9iZ/fHa.805uL2.B1.5n3.5n3.5n3.5n"
  },
  {
    id: 16,
    name: "Dr. Arjun Desai",
    specialty: "Gastroenterologist",
    address: "Sir Ganga Ram Hospital, New Delhi",
    phone: "555-0116",
    imageUrl: "https://placehold.co/100x100/ECFDF5/10B981?text=AD",
    timeSlots: ["09:00 AM", "10:30 AM", "12:30 PM", "02:30 PM", "04:30 PM"],
    lat: 28.6289,
    lng: 77.1890,
    email: "arjun.desai@sevayu.ai",
    password: "$2b$10$Kl.3w.2oZ.9iZ/fHa.805uL2.B1.5n3.5n3.5n3.5n"
  },
  {
    id: 17,
    name: "Dr. Meera Pillai",
    specialty: "ENT Specialist",
    address: "Amrita Hospital, Kochi",
    phone: "555-0117",
    imageUrl: "https://placehold.co/100x100/ECFDF5/10B981?text=MP",
    timeSlots: ["09:00 AM", "11:00 AM", "01:00 PM", "03:00 PM", "04:00 PM"],
    lat: 9.9312,
    lng: 76.2673,
    email: "meera.pillai@sevayu.ai",
    password: "$2b$10$Mn.4x.3oZ.9iZ/fHa.805uL2.B1.5n3.5n3.5n3.5n"
  },
  {
    id: 18,
    name: "Dr. Sameer Qureshi",
    specialty: "Pediatrician",
    address: "King George's Medical University, Lucknow",
    phone: "555-0118",
    imageUrl: "https://placehold.co/100x100/ECFDF5/10B981?text=SQ",
    timeSlots: ["09:00 AM", "10:30 AM", "12:30 PM", "02:30 PM", "04:30 PM"],
    lat: 26.8467,
    lng: 80.9462,
    email: "sameer.qureshi@sevayu.ai",
    password: "$2b$10$Op.5y.4oZ.9iZ/fHa.805uL2.B1.5n3.5n3.5n3.5n"
  },
  {
    id: 19,
    name: "Dr. Aditi Rao",
    specialty: "Pathologist",
    address: "SMS Hospital, Jaipur",
    phone: "555-0119",
    imageUrl: "https://placehold.co/100x100/ECFDF5/10B981?text=AR",
    timeSlots: ["09:00 AM", "10:30 AM", "12:00 PM", "02:00 PM", "04:30 PM"],
    lat: 26.9124,
    lng: 75.7873,
    email: "aditi.rao@sevayu.ai",
    password: "$2b$10$Qr.6z.5oZ.9iZ/fHa.805uL2.B1.5n3.5n3.5n3.5n"
  },
  {
    id: 20,
    name: "Dr. Harish Gupta",
    specialty: "Cardiologist", // Changed from Hematologist
    address: "AIIMS, Rishikesh",
    phone: "555-0120",
    imageUrl: "https://placehold.co/100x100/ECFDF5/10B981?text=HG",
    timeSlots: ["09:00 AM", "11:00 AM", "01:00 PM", "03:00 PM", "04:00 PM"],
    lat: 30.0869,
    lng: 78.2676,
    email: "harish.gupta@sevayu.ai",
    password: "$2b$10$St.7A.6oZ.9iZ/fHa.805uL2.B1.5n3.5n3.5n3.5n"
  }
];

const getDoctors = () => {
  return allDoctors;
}

export const getDoctor = (id) => {
  id=Number(id);
  return allDoctors.find(item => item.id === id);
}

export default getDoctors;