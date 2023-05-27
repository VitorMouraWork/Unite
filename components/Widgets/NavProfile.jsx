import { useEffect, useState } from "react";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';

const NavProfile = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false); // Added loading state

  const handleSignOut = async () => {
    setLoading(true); // Set loading state to true
    await signOut({ redirect: false, callbackUrl: "/" }); // Calls the signOut function from NextAuth
    setLoading(false); // Set loading state to false
    await router.push("/"); // Redirects to the home page after sign-out
  };

  useEffect( async () => {
    // You can add any additional logic here to handle the sign-out process
    // For example, clearing local storage, resetting app state, etc.
    if (!session && !loading) {
//      await router.push("/"); // Redirects to the home page if there is no active session and not in a loading state
    }
  }, [session, router, loading]);

  return (
    <div className="flex bg-white dark:bg-neutral-800 rounded-full cursor-pointer ease-out duration-200">
      <div className="flex">
        {session?.user ? (
          <Image
            src={session.user.image}
            alt="Profile"
            width={35}
            height={35}
            className="rounded-full m-1"
          />
        ) : (
          <Image
            src="/assets/images/logo.svg"
            alt="Profile"
            width={35}
            height={35}
            className="rounded-full m-1"
          />
        )}
        {session?.user ? (
          <div className="flex flex-col">
            <p className="ease-out duration-200 hover:text-unite-orange text-neutral-600 dark:text-neutral-400">
              {session.user.name}
            </p>
            <p className="text-xs text-neutral-400 dark:text-neutral-600 leading-3">
              @{session.user.name}
            </p>
          </div>
        ) : (
          <div className="flex flex-col">
            <p className="ease-out duration-200 hover:text-unite-orange text-neutral-600 dark:text-neutral-400">
              Nickname
            </p>
            <p className="text-xs text-neutral-400 dark:text-neutral-600 leading-3">
              @Username
            </p>
          </div>
        )}
      </div>

      {session?.user && <button onClick={handleSignOut} href="/">
        <Image
            src="/assets/icons/logout.svg"
            alt="Profile"
            width={20}
            height={20}
            className="ml-4"
          />
      </button>}
    </div>
  );
};

export default NavProfile;
