"use client";

import '@styles/globals.css';
import { Databases, Client, ID, Account } from 'appwrite';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CreateVaga = ({ handleCloseCreateVaga }) => {

    const handleOnCloseClick = () => {
        // Chama a função para fechar o componente CreateVaga definida na página Vagas
        handleCloseCreateVaga();
    };

    return (
        <div className='w-full h-full backdrop-blur-sm bg-black/30 z-10 absolute mt-[-2.5rem]'>
            <div class="flex bg-white dark:bg-neutral-800 rounded-2xl flex-col items-center justify-self-right w-1/3 ease-out duration-200 p-6">
                <div class="flex flex-between space-x-52">
                    <h1 className='ml-52'>
                        criar vaga
                    </h1>
                    <button onClick={handleOnCloseClick}>
                        <Image
                        src="/assets/icons/close.svg"
                        alt="close"
                        width={15}
                        height={15}
                        className='self-end'
                    />    
                    </button>
                    
                </div>
                <div class="flex flex-col w-11/12">
                <h1 className='mt-4'>cargo</h1>
                <input 
                    placeholder="adicione o cargo para qual você está contratando" 
                    className="w-full rounded-full p-2 px-6 border border-neutral-200 text-neutral-600 bg-white dark:border-neutral-700 dark:bg-neutral-800"
                />
                <h1 className='mt-4'>empresa</h1>
                <input 
                    className="w-full rounded-full p-2 px-6 border border-neutral-200 text-neutral-600 bg-white dark:border-neutral-700 dark:bg-neutral-800"
                />
                <h1 className='mt-4'>tipo de local de trabalho</h1>
                <input 
                    className="w-full rounded-full p-2 px-6 border border-neutral-200 text-neutral-600 bg-white dark:border-neutral-700 dark:bg-neutral-800"
                />
                <h1 className='mt-4'>localidade da vaga</h1>
                <input 
                    placeholder="Belo Horizonte, Minas Gerais, Brasil" 
                    className="w-full rounded-full p-2 px-6 border border-neutral-200 text-neutral-600 bg-white dark:border-neutral-700 dark:bg-neutral-800"
                />
                <h1 className='mt-4'>tipo de vaga</h1>
                <input 
                    className="w-full rounded-full p-2 px-6 border border-neutral-200 text-neutral-600 bg-white dark:border-neutral-700 dark:bg-neutral-800"
                />  
                <h1 className='mt-4'>Detalhes</h1>
                <input 
                    className="w-full rounded-full p-2 px-6 border border-neutral-200 text-neutral-600 bg-white dark:border-neutral-700 dark:bg-neutral-800"
                />  
                <button className="text-white bg-unite-orange rounded-full p-2 px-4 mt-8 w-20 self-end">Criar</button>
                </div>
                
                

            </div>
        </div>
        
    )

};

export default CreateVaga;