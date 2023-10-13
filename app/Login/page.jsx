'use client';

import Register from '@components/Register';
import { ThemeProvider } from 'next-themes';

const LoginPage = () => {

  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      <div className=' w-full h-full items-center align-items-center justify-center'>
        <Register/>
      </div>
    </ThemeProvider>
  )
}

export default LoginPage
