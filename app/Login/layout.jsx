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

                <main className="app h-full">
                    {children}
                </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout
