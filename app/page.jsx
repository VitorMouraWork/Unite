'use client';

import Register from '@components/LandingPage';
import { ThemeProvider } from 'next-themes';

const LandingPage = () => {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      <LandingPage/>
    </ThemeProvider>
  )
}

export default LandingPage
