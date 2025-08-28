"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { 
  Search, 
  MapPin, 
  Stethoscope, 
  Phone, 
  Calendar, 
  Loader2 
} from "lucide-react";
import { useRouter } from "next/navigation";

// Dynamically import DoctorMap (client-only, no SSR)
const DoctorMap = dynamic(() => import("./DoctorMap"), { ssr: false });

// Sample doctors
const allDoctors = [
  {
    id: 1,
    name: "Dr. Evelyn Reed",
    specialty: "Cardiologist",
    address: "AIIMS, New Delhi",
    phone: "555-0101",
    imageUrl: "https://placehold.co/100x100/ECFDF5/10B981?text=ER",
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
    lat: 12.9165,
    lng: 79.1325
  }
];

const FindSpecialistPage = () => {
  const [specialtyQuery, setSpecialtyQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [filteredDoctors, setFilteredDoctors] = useState(allDoctors);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = () => {
    setIsLoading(true);
    setTimeout(() => {
      const results = allDoctors.filter((doctor) => {
        const specialtyMatch = specialtyQuery
          ? doctor.specialty.toLowerCase().includes(specialtyQuery.toLowerCase())
          : true;
        const locationMatch = locationQuery
          ? doctor.address.toLowerCase().includes(locationQuery.toLowerCase())
          : true;
        return specialtyMatch && locationMatch;
      });
      setFilteredDoctors(results);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased mt-10">
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Search */}
          <div className="bg-white rounded-2xl shadow-xl p-6 mb-12">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="relative">
                <Stethoscope className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input 
                  type="text" 
                  value={specialtyQuery}
                  onChange={(e) => setSpecialtyQuery(e.target.value)}
                  placeholder="Specialty (e.g., Cardiologist)" 
                  className="w-full py-3 pl-10 pr-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input 
                  type="text" 
                  value={locationQuery}
                  onChange={(e) => setLocationQuery(e.target.value)}
                  placeholder="Location (e.g., Wellness City)" 
                  className="w-full py-3 pl-10 pr-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
              </div>
              <button 
                onClick={handleSearch} 
                className="w-full bg-emerald-600 text-white font-semibold rounded-lg cursor-pointer hover:bg-emerald-700 flex items-center justify-center"
              >
                <Search className="mr-2" />
                Search
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Doctor List */}
            <div>
              {isLoading ? (
                <div className="flex justify-center items-center h-64">
                  <Loader2 className="w-12 h-12 text-emerald-500 animate-spin" />
                </div>
              ) : filteredDoctors.length > 0 ? (
                <div className="space-y-6">
                  {filteredDoctors.map((doctor) => (
                    <DoctorCard key={doctor.id} doctor={doctor} />
                  ))}
                </div>
              ) : (
                <div className="text-center bg-white p-10 rounded-2xl shadow-lg">
                  <h3 className="text-2xl font-bold text-slate-800">No Specialists Found</h3>
                  <p className="text-slate-600 mt-2">Try adjusting your search criteria.</p>
                </div>
              )}
            </div>

            {/* Map View */}
            <div className="hidden lg:block bg-slate-200 rounded-2xl shadow-lg sticky top-18 h-[600px] overflow-hidden">
              <DoctorMap doctors={filteredDoctors} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const DoctorCard = ({ doctor }) => {
  const router = useRouter();
  const openAppointmentPage = () => {
    router.push("/appointment");
  };
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 flex items-start space-x-6 hover:shadow-xl transition">
      <img 
        src={doctor.imageUrl} 
        alt={`Dr. ${doctor.name}`} 
        className="w-24 h-24 rounded-full object-cover border-4 border-emerald-100" 
      />
      <div className="flex-1">
        <h3 className="text-2xl font-bold text-slate-900">{doctor.name}</h3>
        <p className="text-emerald-600 font-semibold">{doctor.specialty}</p>
        <div className="mt-3 text-slate-600 space-y-2">
          <p className="flex items-center"><MapPin size={16} className="mr-2" /> {doctor.address}</p>
          <p className="flex items-center"><Phone size={16} className="mr-2" /> {doctor.phone}</p>
        </div>
        <button 
          onClick={openAppointmentPage} 
          className="mt-4 inline-flex items-center px-6 py-2 bg-emerald-100 text-emerald-800 cursor-pointer rounded-full hover:bg-emerald-200"
        >
          <Calendar size={16} className="mr-2" /> Book Appointment
        </button>
      </div>
    </div>
  );
};

export default FindSpecialistPage;
