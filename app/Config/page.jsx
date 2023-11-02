'use client';

import MainNav from '@components/Widgets/MainNav';
import SubNav from '@components/Widgets/SubNav';
import NavProfile from '@components/Widgets/NavProfile';
import { Client, Account } from "appwrite";
import { useState } from 'react';

const Config = () => {

  const client = new Client();
  const account = new Account(client);
  
  client
      .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
      .setProject('6527f8f1124d9905ddda') // Your project ID
  ;
  

  const UpdateNickname = () => {
    console.log(updateNickname)
    account.updateName(updateNickname);
  };  

  const UpdatePassword = () => {
    console.log(updatePassword)
    account.updatePassword(updatePassword);
  };  

  const UpdateEmail = () => {
    console.log(updateEmail)
    account.updateEmail(updateEmail);
  };

  const deleteAccount = () => {
    //código de deletar conta aqui 
    //é nesta página aqui que o "D" do "CRUD" (vulgo delete) (deletar em inglês) acontece.
  };

  const [updateNickname, setUpdateNickname] = useState("");
  const [updatePassword, setUpdatePassword] = useState("");
  const [updateEmail, setUpdateEmail] = useState("");

  const handleUpdateNickname = (e) => {
    setUpdateNickname(e.target.value);
  };

  const handleUpdatePassword = (e) => {
    setUpdatePassword(e.target.value);
  };

  const handleUpdateEmail = (e) => {
    setUpdateEmail(e.target.value);
  };

  return (
    <div className="flex space-x-2 place-content-center w-full">
      <div className='flex flex-col space-y-2 justify-items-center'>
        <MainNav></MainNav>
        <SubNav></SubNav>
        <NavProfile/>
      </div>
      <div className='p-3 flex bg-white dark:bg-neutral-800 rounded-xl w-5/12 flex-col ease-out duration-200 px-5 py-2'>
        <h1 className='text-xl mb-5  self-center text-neutral-400'>Configurações</h1>
          <hr className='border-neutral-200 dark:border-neutral-700 my-2'/>
        <a href="#" className="text-neutral-600 hover:text-neutral-400 text-x ease-out duration-100" onClick={UpdateNickname}> Mudar Nome </a>
        <div className="mb-2">
          <input
            placeholder="Alterar apelido"
            required
            value={updateNickname}
            onChange={handleUpdateNickname}
            className="bg-white rounded-md p-2 px-6 border border-neutral-200 text-neutral-600"
          />
        </div>
        <hr className='border-neutral-200 dark:border-neutral-700 my-2'/>
        <a href="#" className="text-neutral-600 hover:text-neutral-400 text-x ease-out duration-100" onClick={UpdatePassword}> Trocar minha senha </a>
        <div className="mb-2">
          <input
            placeholder="Alterar Senha"
            required
            value={updatePassword}
            onChange={handleUpdatePassword}
            className="bg-white rounded-md p-2 px-6 border border-neutral-200 text-neutral-600"
          />
        </div>
          <hr className='border-neutral-200 dark:border-neutral-700 my-2'/>
          <a href="#" className="text-neutral-600 hover:text-neutral-400 text-x ease-out duration-100" onClick={UpdateEmail}> Trocar de Email </a>
          <div className="mb-2">
          <input
            placeholder="Alterar Email"
            required
            value={updateEmail}
            onChange={handleUpdateEmail}
            className="bg-white rounded-md p-2 px-6 border border-neutral-200 text-neutral-600"
          />
        </div>
          <hr className='border-neutral-200 dark:border-neutral-700 my-2'/>
        <a href="#" className=" text-red-600 dark:text-red-800 hover:text-red-500 text-x ease-out duration-100" onClick={deleteAccount}> Deletar Conta </a>
          <hr className='border-neutral-200 dark:border-neutral-700 my-2'/>
      </div>
    </div>

  )
}

export default Config
