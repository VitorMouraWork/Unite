import '@styles/globals.css';
import Provider from '@components/Provider';

export const metadata = {
    title: "Login",
    description: "Log in or Create an account to join the movement."
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
        <body>
            <Provider>
                <div className="main dark:bg-neutral-900">
                </div>
                    {children}
                    <div className='bgUnite'></div>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout
