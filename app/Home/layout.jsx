import '@styles/globals.css';
import Provider from '@components/Provider';

export const metadata = {
    title: "Unite",
    description: "Home"
}

const HomeLayout = ({ children }) => {
  return (
    <html lang="en">
        <body>
            <Provider>
                <div className="HomePage dark:bg-neutral-900">
                    
                </div>

                <div className="app dark:bg-neutral-900 ease-out duration-200">
                    {children}
                </div>
            </Provider>
        </body>
    </html>
  )
}

export default HomeLayout