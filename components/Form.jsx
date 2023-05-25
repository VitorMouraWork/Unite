"use client";

import '@styles/globals.css';

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useRouter } from 'next/navigation';

const Form = () => {

    const router = useRouter();
    
    const { data: session } = useSession();
    const [providers, setProviders] = useState(null);  
  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

    return (
        <div className="flex flex-between flex-col bg-white p-8 items-center rounded-3xl drop-shadow-lg space-y-4">
            <Image 
                src="/assets/icons/Unite.svg"
                alt="Unite"
                width={100}
                height={30}
            />
            {session?.user ? (
                router.push('/Home')
                //aqui estaria um código pra redirecionar diretamente pro home da unite, só que eu n sei fazer isso
                //e ainda não tem a página home pronta.
                // <button type='button' onClick={signOut}>
                //     Sign Out
                // </button>
                //esse botão é placeholder, ele não estará no resultado final.
            ) : (
                <>
                    {providers &&
                        Object.values(providers).map((provider) => (

                            <div className="login flex flex-between flex-col spaace-y-4">
                                <button
                                    type="button"
                                    key={provider.name}
                                    onClick={() => signIn(provider.id)}
                                    className='flex bg-white items-center justify-center rounded-full p-2 px-6 flex-inline border border-neutral-600 text-neutral-600'
                                >
                                    <Image
                                        src="/assets/icons/Google.svg"
                                        alt="Google"
                                        width={20}
                                        height={20}
                                        className='mr-4'
                                    />
                                    Fazer login com Google
                                </button>
                                <p className="mt-4 text-sm text-neutral-600">Email</p>
                                <input placeholder="Email" className="bg-white rounded-md p-2 px-6 border border-neutral-200 text-neutral-600"/>
                                <p className="text-sm text-neutral-600">Senha</p>
                                <input placeholder="Password" className="bg-white rounded-md p-2 px-6 border border-neutral-200 text-neutral-600"/>
                                <a href="" className='text-xs text-unite-orange'>esqueceu sua senha?</a>
                                <button className="text-white bg-unite-orange mt-6 rounded-full p-1 mb-12">Login</button>
                                <p className="text-xs text-neutral-600 self-center">não possui uma conta? <a href="" className="text-unite-orange">inscreva-se</a></p>
                            </div>
                        )
                    )}
                </>
            )}
        </div>
    )
};

export default Form;
