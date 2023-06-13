import { useEffect, useState } from "react";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const NavProfile = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSignOut = async () => {
    setLoading(true);
    await signOut({ redirect: false, callbackUrl: "/" });
    setLoading(false);
    await router.push("/");
  };

  // useEffect(() => {
  //   // if (!session && !loading) {
  //   //   router.push("/");
  //   // }
  // }, [session, router, loading]);

  if (!session) {
    return null; // or render a loading indicator
  }

  return (
    <div className="flex bg-white dark:bg-neutral-800 rounded-full cursor-pointer ease-out duration-200">
      <div className="flex">
        <Image
          src={session.user?.image || "/assets/images/logo.svg"}
          alt="Profile"
          width={35}
          height={35}
          className="rounded-full m-1"
        />
        <div className="flex flex-col">
          <p className="ease-out duration-200 hover:text-unite-orange text-neutral-600 dark:text-neutral-400">
            {session.user?.name || "Nickname"}
          </p>
          <p className="text-xs text-neutral-400 dark:text-neutral-600 leading-3">
            @{session.user?.name || "Username"}
          </p>
        </div>
      </div>

      {session.user && (
        <button onClick={handleSignOut} href="/">
          <Image
            src="/assets/icons/logout.svg"
            alt="Profile"
            width={20}
            height={20}
            className="ml-4"
          />
        </button>
      )}
    </div>
  );
};

export default NavProfile;
