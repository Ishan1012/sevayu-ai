'use client';

import AppointmentDetailsPage from '@/components/AppointmentDetailsPage'
import Header from '@/components/Header'
import { useSearchParams } from 'next/navigation';
import React, { Suspense } from 'react'

function AppointmentDetailsContent() {
  const searchParams = useSearchParams();
  const appointmentId = searchParams.get("id");

  return (
    <div>
      <Header />
      <AppointmentDetailsPage appointmentId={appointmentId} />
    </div>
  );
}

export default function AppointmentDetails() {
  return (
    <Suspense fallback={<div>Loading appointment details...</div>}>
      <AppointmentDetailsContent />
    </Suspense>
  );
}