'use client';

import AccountSettingsPage from '@/components/AccountSettingsPage'
import Header from '@/components/Header'
import { useSearchParams } from 'next/navigation';
import React, { Suspense } from 'react'

function SettingsContent() {
  const searchParams = useSearchParams();
  const userid = searchParams.get("id");
  const isDoctor = searchParams.get("doctor") || false;

  return (
    <div>
      <Header />
      <AccountSettingsPage userid={userid} isDoctor={isDoctor} />
    </div>
  );
}

export default function Settings() {
  return (
    <Suspense fallback={<div>Loading account settings...</div>}>
      <SettingsContent />
    </Suspense>
  );
}