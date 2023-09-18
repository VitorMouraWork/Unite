import '@styles/globals.css';

export const metadata = {
    title: "Unite",
    description: "Discover like-minded people to work with"
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
        <body>
            {children}
        </body>
    </html>
  )
}

export default RootLayout
