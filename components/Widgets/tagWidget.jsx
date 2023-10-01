"use client";

import '@styles/globals.css';

const tagWidget = () => {

    return (
        <div class="flex bg-white dark:bg-neutral-800 rounded-xl flex-col items-center ease-out duration-200 py-2">
            <div class="flex flex-col cursor-pointer">
                <a class="ease-out duration-200 text-neutral-600 hover:text-unite-orange flex">Tags</a>
                <a class="ease-out duration-200 text-neutral-600 hover:text-unite-orange flex"><img src="/assets/icons/Messages.svg" className='mr-2'></img>Mensagens</a>
                <a class="ease-out duration-200 text-neutral-600 hover:text-unite-orange flex"><img src="/assets/icons/Bookmarks.svg" className='mr-3 ml-1'></img>Salvos</a>
            </div>
        </div>
    )

};

export default tagWidget;