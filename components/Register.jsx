// import { useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { signIn, signOut, useSession, getProviders } from "next-auth/react";
// import { useRouter } from 'next/navigation';

// const Register = () => {
//   const router = useRouter();
//   const { data: session } = useSession();
//   const [providers, setProviders] = useState(null);

//   useEffect(() => {
//     const fetchProviders = async () => {
//       const res = await getProviders();
//       setProviders(res);
//     };
//     fetchProviders();
//   }, []);

//   const handleSignIn = (providerId) => {
//     signIn(providerId);
//   };

//   return (
//     <div className="flex flex-between flex-col bg-white p-8 items-center rounded-3xl drop-shadow-lg space-y-4">
//       <Image 
//         src="/assets/icons/Unite.svg"
//         alt="Unite"
//         width={100}
//         height={30}
//       />
//       {session?.user ? (
//         router.push('/Home')
//       ) : (
//         <>
//           {providers && Object.values(providers).map((provider) => (
//             <div className="login flex flex-between flex-col spaace-y-4" key={provider.name}>
//               <button
//                 type="button"
//                 onClick={() => handleSignIn(provider.id)}
//                 className="flex bg-white items-center justify-center rounded-full p-2 px-6 flex-inline border border-neutral-600 text-neutral-600"
//               >
//                 <Image
//                   src="/assets/icons/Google.svg"
//                   alt="Google"
//                   width={20}
//                   height={20}
//                   className="mr-4"
//                 />
//                 Fazer login com Google
//               </button>
//               <p className="mt-4 text-sm text-neutral-600">Email</p>
//               <input
//                 placeholder="Email"
//                 required
//                 className="bg-white rounded-md p-2 px-6 border border-neutral-200 text-neutral-600"
//               />

//               <p className="text-sm text-neutral-600">Senha</p>
//               <input
//                 placeholder="Password"
//                 className="bg-white rounded-md p-2 px-6 border border-neutral-200 text-neutral-600"
//               />

//               <a href="" className="text-xs text-unite-orange">esqueceu sua senha?</a>
//               <button className="text-white bg-unite-orange mt-6 rounded-full p-1 mb-12">Login</button>
//               <p className="text-xs text-neutral-600 self-center">não possui uma conta? <a href="" className="text-unite-orange">inscreva-se</a></p>
//             </div>
//           ))}
//         </>
//       )}
//     </div>
//   );
// };

// export default Register;

// !!!!!!!!!!!!!!!!!!!!!!!!!AVISO!!!!!!!!!!!!!!!!!!!!!!

//  o código gigante comentado alí em cima é a primeira versão, onde da pra fazer login pelo google.
//  o código abaixo não permite fazer login pelo google, mas permite trocar a página entre LOGIN e REGISTRAR.
//  eu tentei de tudo pra fazer os dois funcionarem ao mesmo tempo, mas não consegui.
//  vocês podem fazer o registro por login e senha aqui, e depois ver se dá pra voltar com o login por google.

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useRouter } from 'next/navigation';

const Register = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);

 // Novos estados para controle de exibição
 const [isSignUp, setIsSignUp] = useState(false);
 const [email, setEmail] = useState("");
 const [name, setName] = useState("");
 const [password, setPassword] = useState("");
 const [confirmPassword, setConfirmPassword] = useState("");

 useEffect(() => {
   const fetchProviders = async () => {
     const res = await getProviders();
     setProviders(res);
   };
   fetchProviders();
 }, []);

 const handleSignIn = (providerId) => {
   signIn(providerId);
 };

 // Função para alternar entre login e inscrição
 const toggleSignUp = () => {
   setIsSignUp(!isSignUp);
 };

 // Função para manipular o envio do formulário de inscrição
 const handleSignUp = () => {
   // Realize a lógica de criação de conta aqui, por exemplo, uma chamada à API
   // após validar os campos e confirmar senha
   // Depois, redirecione o usuário para a página de login
   // router.push('/Login');
 };
 return (
  <div className="registerBox flex flex-between flex-col bg-white p-8 w-max justify-self-right items-center rounded-3xl drop-shadow-lg space-y-4">
    <Image 
      src="/assets/icons/Unite.svg"
      alt="Unite"
      width={100}
      height={30}
    />
    {session?.user ? (
      router.push('/Home')
    ) : (
      <>
        {providers && !isSignUp ? ( // Verifique se não é inscrição
          <div className="login flex flex-between flex-col spaace-y-4" key="login">
            <button
              type="button"
              onClick={() => handleSignIn(provider.id)}
              className="flex bg-white items-center justify-center rounded-full p-2 px-6 flex-inline border border-neutral-600 text-neutral-600"
            >
              <Image
                src="/assets/icons/Google.svg"
                alt="Google"
                width={20}
                height={20}
                className="mr-4"
              />
              Fazer login com Google
            </button>

            
            <p className="mt-4 text-sm text-neutral-600">Email</p>
              <input
                placeholder="Email"
                required
                className="bg-white rounded-md p-2 px-6 border border-neutral-200 text-neutral-600"
              />
              
            <p className="text-sm mt-4 text-neutral-600">Senha</p>
              <input
                placeholder="Password"
                className="bg-white rounded-md p-2 px-6 border border-neutral-200 text-neutral-600"
              />

              <a href="" className="text-xs text-unite-orange">esqueceu sua senha?</a>

              <button className="text-white bg-unite-orange mt-6 rounded-full p-1 mb-12">Login</button>

            <p className="text-xs text-neutral-600 self-center">
              Não possui uma conta?{" "}
              <a href="#" className="text-unite-orange" onClick={toggleSignUp}>
                Inscreva-se
              </a>
            </p>
          </div>
        ) : (
          <div className="signup flex flex-between flex-col spaace-y-4" key="signup">
            {/* Formulário de inscrição */}
            <p className="mt-4 text-sm text-neutral-600">Email</p>
            <input
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white rounded-md p-2 px-6 border border-neutral-200 text-neutral-600"
            />

            <p className="mt-4 text-sm text-neutral-600">Nome</p>
            <input
              placeholder="Nome"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-white rounded-md p-2 px-6 border border-neutral-200 text-neutral-600"
            />

            <p className="text-sm text-neutral-600">Senha</p>
            <input
              type="password"
              placeholder="Senha"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-white rounded-md p-2 px-6 border border-neutral-200 text-neutral-600"
            />

            <p className="text-sm text-neutral-600">Confirmar Senha</p>
            <input
              type="password"
              placeholder="Confirmar Senha"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="bg-white rounded-md p-2 px-6 border border-neutral-200 text-neutral-600"
            />

            <button
              onClick={handleSignUp}
              className="text-white bg-unite-orange mt-6 rounded-full p-1 mb-12"
            >
              Registrar
            </button>
            <p className="text-xs text-neutral-600 self-center">
              Já possui uma conta?{" "}
              <a href="#" className="text-unite-orange" onClick={toggleSignUp}>
                Voltar ao Login
              </a>
            </p>
          </div>
        )}
      </>
    )}
  </div>
);
};

export default Register;

// {providers && Object.values(providers).map((provider) => (