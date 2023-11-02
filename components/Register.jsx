import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { Client, Account } from "appwrite";

const Register = () => {
  const router = useRouter();

 // Novos estados para controle de exibição
 const [isSignUp, setIsSignUp] = useState(false);
 const [createEmail, setCreateEmail] = useState("");
 const [createName, setCreateName] = useState("");
 const [createNickname, setCreateNickname] = useState("");
 const [createPassword, setCreatePassword] = useState("");
 const [confirmPassword, setConfirmPassword] = useState("");
 const [errorMessage, setErrorMessage] = useState("");


 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");

const client = new Client();
const account = new Account(client);

client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('6527f8f1124d9905ddda') // Your project ID
;

 useEffect(() => {
  const promise = account.get();

  promise.then(function (response) {
    console.log(response);
    router.push("/Home")
  }, function (error) {
    console.log(error); //falha
    setErrorMessage(error.message);
  });
}, []);

 const handleSignIn = () => {
  const response = account.createEmailSession(email,password)

  response.then(function (response) {
    console.log(response); //success
    router.push("/Home");
  }, function (error) {
    console.log(error); //failure
    setErrorMessage(error.message); //mensagem de erro de login aqui
  })
};

const handleGoogleSignIn = () => {
  router.push("/Home")
  account.createOAuth2Session('google');
}

 // Função para alternar entre login e inscrição
 const toggleSignUp = () => {
   setIsSignUp(!isSignUp);
 };

 // Função para manipular o envio do formulário de inscrição
 const handleSignUp = () => {
  const promise = account.create(createName, createEmail, createPassword, createNickname);

  promise.then(function (response) {
      console.log(response); // Success
      console.log(createName)
      console.log(createEmail)
      console.log(createPassword)
      router.push('/Home');
  }, function (error) {
      console.log(error); // Failure
      setErrorMessage(error.message);
  });
};


 return (
  <div className="registerBox flex flex-between flex-col bg-white p-8 w-max justify-self-right items-center rounded-3xl drop-shadow-lg space-y-4">
    <Image 
      src="/assets/icons/Unite.svg"
      alt="Unite"
      width={100}
      height={30}
    />
        {!isSignUp ? ( // Verifique se não é inscrição
          <div className="login flex flex-between flex-col spaace-y-4" key="login">
            <button
              type="button"
              onClick={() => handleGoogleSignIn()}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              
            <p className="text-sm mt-4 text-neutral-600">Senha</p>
              <input
                placeholder="Password"
                className="bg-white rounded-md p-2 px-6 border border-neutral-200 text-neutral-600"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {errorMessage && <p className="text-xs text-rose-600 w-64">{errorMessage}</p>}

              <a href="" className="text-xs text-unite-orange">esqueceu sua senha?</a>
              
              <button className="text-white bg-unite-orange mt-6 rounded-full p-1 mb-12" onClick={handleSignIn}>Login</button>

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
              value={createEmail}
              onChange={(e) => setCreateEmail(e.target.value)}
              className="bg-white rounded-md p-2 px-6 border border-neutral-200 text-neutral-600"
            />

            <p className="mt-4 text-sm text-neutral-600">Nome</p>
            <input
              placeholder="Nome"
              required
              value={createName}
              onChange={(e) => {
                setCreateName(e.target.value);
                setCreateNickname(e.target.value);
              }}
              className="bg-white rounded-md p-2 px-6 border border-neutral-200 text-neutral-600"
            />

            <p className="text-sm text-neutral-600">Senha</p>
            <input
              type="password"
              placeholder="Senha"
              required
              value={createPassword}
              onChange={(e) => setCreatePassword(e.target.value)}
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
            
            {errorMessage && <p className="text-xs text-rose-600 w-64">{errorMessage}</p>}

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
  </div>
);
};

export default Register;