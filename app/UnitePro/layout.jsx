import '@styles/globals.css';
import Provider from '@components/Provider';

export const metadata = {
    title: "Unite Premium",
    description: "Unite"
}

const UniteProLayout = ({ children }) => {
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

export default UniteProLayout