'use client';
import AccountSettingsPage from '@/components/AccountSettingsPage'
import Header from '@/components/Header'
import { useSearchParams } from 'next/navigation';
import React, { Suspense } from 'react'

function Settings() {
  const searchParams = useSearchParams();
  const userid = searchParams.get("id");
  const isDoctor = searchParams.get("doctor") || false;
  return (
    <Suspense fallback={<div>Loading appointment details...</div>}>
      <Header />
      <AccountSettingsPage userid={userid} isDoctor={isDoctor} />
    </Suspense>
  )
}

export default Settings
