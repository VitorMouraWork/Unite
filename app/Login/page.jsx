'use client';

import Register from '@components/Register';
import { ThemeProvider } from 'next-themes';

const LoginPage = () => {

  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      <div className=' w-full h-full justify-end p-96 flex flex-end'>
        <Register/>
      </div>
    </ThemeProvider>
  )
}

export default LoginPage
