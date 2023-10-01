import '@styles/globals.css';
import Provider from '@components/Provider';

export const metadata = {
    title: "Profile",
    description: "Unite"
}

const ProfileLayout = ({ children }) => {
  return (
    <html lang="en">
        <body>
            <Provider>
                <div className="app dark:bg-neutral-900 ease-out duration-200 h-full w-full">
                    {children}
                </div>
            </Provider>
        </body>
    </html>
  )
}

export default ProfileLayout