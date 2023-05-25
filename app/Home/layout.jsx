import '@styles/globals.css';
import Provider from '@components/Provider';

export const metadata = {
    title: "Unite",
    description: "Home"
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
        <body>
            <Provider>
                <div className="HomePage">
                </div>

                <main className="app">
                    {children}
                </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout