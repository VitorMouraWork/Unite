'use client';

import Register from '@components/Register';
import { ThemeProvider } from 'next-themes';

const LoginPage = () => {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      <Register/>
    </ThemeProvider>
  )
}

export default LoginPage