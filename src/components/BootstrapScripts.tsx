'use client'

import { useEffect } from 'react'
import Script from 'next/script'

export default function BootstrapScripts() {
  useEffect(() => {
    // Any custom JavaScript that needs to run after Bootstrap loads
    if (typeof window !== 'undefined') {
      // Bootstrap is now loaded
      console.log('Bootstrap loaded')
    }
  }, [])

  return (
    <>
      <Script src="/js/jquery-3.4.1.min.js" strategy="beforeInteractive" />
      <Script src="/js/bootstrap.js" strategy="afterInteractive" />
    </>
  )
}
