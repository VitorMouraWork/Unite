"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Form = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

    return (
        <div className="flex flex-between flex-column bg-white">
            <Image 
                src="/assets/icons/Unite.svg"
                alt="Unite"
                width={100}
                height={30}
            />
            {session?.user ? (
                //aqui estaria um código pra redirecionar diretamente pro home da unite, só que eu n sei fazer isso
                //e ainda não tem a página home pronta.
                <button type='button' onClick={signOut}>
                    Sign Out
                </button>
                //esse botão é placeholder, não precisa de fazer css dele
            ) : (
                <>
                    {providers &&
                        Object.values(providers).map((provider) => (

                            <div id="register">
                                <button
                                    type="button"
                                    key={provider.name}
                                    onClick={() => signIn(provider.id)}
                                    className='login_google'
                                >
                                    Fazer login com Google
                                </button>
                            </div>
                        ))}
                </>
            )}
        </div>
    )
};

export default Form;
