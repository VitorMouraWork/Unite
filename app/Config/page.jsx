'use client';

import MainNav from '@components/Widgets/MainNav';
import SubNav from '@components/Widgets/SubNav';
import NavProfile from '@components/Widgets/NavProfile';
import { Client, Account } from "appwrite";

const Config = () => {

  const client = new Client();
  const account = new Account(client);
  
  client
      .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
      .setProject('6527f8f1124d9905ddda') // Your project ID
  ;
  

  const UpdateDisplayName = () => {
    //código de mudar o nome do usuário aqui 
    //é nesta página aqui que o "U" do "CRUD" (vulgo Update) (Atualizar em inglês) acontece.
  };  

  const UpdateName = () => {
    //código de atualizar o @ do usuário aqui (cheque se não existe outro @ igual)
    //é nesta página aqui que o "U" do "CRUD" (vulgo Update) (Atualizar em inglês) acontece.
  };  

  const UpdatePassword = () => {
      //código de atualizar senha aqui 
      //é nesta página aqui que o "U" do "CRUD" (vulgo Update) (Atualizar em inglês) acontece.
  };  

  const UpdateEmail = () => {
    //código de deletar conta aqui 
    //é nesta página aqui que o "D" do "CRUD" (vulgo delete) (deletar em inglês) acontece.
  };

  const deleteAccount = () => {
    //código de deletar conta aqui 
    //é nesta página aqui que o "D" do "CRUD" (vulgo delete) (deletar em inglês) acontece.
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
        <a href="#" className="text-neutral-600 hover:text-neutral-400 text-x ease-out duration-100" onClick={UpdateDisplayName}> Mudar Nome </a>
          <hr className='border-neutral-200 dark:border-neutral-700 my-2'/>
        <a href="#" className="text-neutral-600 hover:text-neutral-400 text-x ease-out duration-100" onClick={UpdateName}> Trocar o @ da conta </a>
          <hr className='border-neutral-200 dark:border-neutral-700 my-2'/>
        <a href="#" className="text-neutral-600 hover:text-neutral-400 text-x ease-out duration-100" onClick={UpdatePassword}> Trocar minha senha </a>
          <hr className='border-neutral-200 dark:border-neutral-700 my-2'/>
          <a href="#" className="text-neutral-600 hover:text-neutral-400 text-x ease-out duration-100" onClick={UpdateEmail}> Trocar de Email </a>
          <hr className='border-neutral-200 dark:border-neutral-700 my-2'/>
        <a href="#" className=" text-red-600 dark:text-red-800 hover:text-red-500 text-x ease-out duration-100" onClick={deleteAccount}> Deletar Conta </a>
          <hr className='border-neutral-200 dark:border-neutral-700 my-2'/>
      </div>
    </div>

  )
}

export default Config
