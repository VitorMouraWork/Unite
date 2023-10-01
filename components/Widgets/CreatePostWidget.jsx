"use client";

import '@styles/globals.css';

const CreatePostWidget = () => {

    //código aqui
    // código para criar um componente PostWidget na página (fazer uma postagem)

    return (
        <div class="flex rounded-xl dark:border-neutral-800 flex items-center ease-out duration-200 w-4/5 py-2">
            <input placeholder="Diga o que está pensando..." className="w-full rounded-full p-2 px-6 border border-neutral-200 text-neutral-600 bg-white dark:bg-neutral-800"/>
            <button className="text-white bg-unite-orange rounded-full p-2 px-4 mx-2">Post</button>
        </div>
    )

};

export default CreatePostWidget;