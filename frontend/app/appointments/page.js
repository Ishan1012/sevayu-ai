'use client';
import AppointmentDetailsPage from '@/components/AppointmentDetailsPage'
import Header from '@/components/Header'
import { useSearchParams } from 'next/navigation';
import React from 'react'

function AppointmentDetails() {
  const searchParams = useSearchParams();
  const appointmentId = searchParams.get("id")
  return (
    <div>
      <Header />
      <AppointmentDetailsPage appointmentId={appointmentId} />
    </div>
  )
}

export default AppointmentDetails
