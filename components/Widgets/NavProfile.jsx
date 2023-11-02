import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Client, Account } from "appwrite";

const NavProfile = () => {
  const router = useRouter();

  const client = new Client();
  const account = new Account(client);

  client
      .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
      .setProject('6527f8f1124d9905ddda') // Your project ID
  ;

  const handleSignOut = async () => {
    const response = account.deleteSessions();
    response.then(function (response) {
      console.log(response)
      router.push("/Login");
    }, function (error) {
      console.log(error);
    });
  };


//set user
const [username, setUsername] = useState(null);
const [nickname, setNickname] = useState(null);


const promise = account.get();

promise.then(function (response) {
  console.log(response);
  setUsername(response.$id)
  setNickname(response.name)
}, function (error) {
  console.log(error)
})


  return (
    <div className="flex bg-white dark:bg-neutral-800 rounded-full cursor-pointer ease-out duration-200">
       <div className="flex">
         <Image
           src="/assets/images/logo.svg"
           alt="Profile"
           width={35}
           height={35}
           className="rounded-full m-1"
         />
          <div className="flex flex-col">
           <p className="ease-out duration-200 hover:text-unite-orange text-neutral-600 dark:text-neutral-400">
             {nickname || "Nickname"}
           </p>
           <p className="text-xs text-neutral-400 dark:text-neutral-600 leading-3">
             @{username || "Username"}
           </p>
         </div> 
       </div>

        <button onClick={handleSignOut} href="/">
          <Image
            src="/assets/icons/logout.svg"
            alt="Profile"
            width={20}
            height={20}
            className="ml-4"
          />
        </button>

    </div>
  );
};

export default NavProfile;
