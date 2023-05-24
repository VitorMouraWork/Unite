import '@styles/globals.css';
import Provider from '@components/Provider';

export const metadata = {
    title: "Unite",
    description: "Discover like-minded people to work with"
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
        <body>
            <Provider>
                <div className="main">
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