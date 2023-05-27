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
                <div className="main dark:bg-neutral-900">
                </div>

                <main className="app h-full dark:bg-neutral-900">
                    {children}
                </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout