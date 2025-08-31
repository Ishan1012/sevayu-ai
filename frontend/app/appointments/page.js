'use client';
import AppointmentDetailsPage from '@/components/AppointmentDetailsPage'
import Header from '@/components/Header'
import { useSearchParams } from 'next/navigation';
import React, { Suspense } from 'react'

function AppointmentDetails() {
  const searchParams = useSearchParams();
  const appointmentId = searchParams.get("id")
  return (
    <Suspense fallback={<div>Loading appointment details...</div>}>
      <Header />
      <AppointmentDetailsPage appointmentId={appointmentId} />
    </Suspense>
  )
}

export default AppointmentDetails
