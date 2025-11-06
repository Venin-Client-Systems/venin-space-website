'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function ExciseMatePage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to static HTML page for now
    // TODO: Convert to proper React component
    window.location.href = '/excisemate.html'
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p>Loading ExciseMate...</p>
    </div>
  )
}
