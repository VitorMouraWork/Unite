'use client';

import { ThemeProvider } from 'next-themes';

const LandingPage = () => {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      <div>
        <h1>Landing Page</h1>
      </div>
    </ThemeProvider>
  )
}

export default LandingPage
