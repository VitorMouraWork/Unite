"use client";

import '@styles/globals.css';
import { Databases, Client } from 'appwrite';
import { useState } from 'react';

const CreatePostWidget = () => {

    const [post, setPost] = useState("");

    const createPost = async () => {
        const client = new Client();
        const databases = new Databases(client);

        client
            .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
            .setProject('6527f8f1124d9905ddda') // Your project ID
        ;
        const response = databases.createDocument(
            process.env.NEXT_PUBLIC_DATABASE,
            process.env.NEXT_PUBLIC_POSTS_COLLECTION,
            "uniqueID",
            {
                text: post,
            }
        )
    }

    return (
        <div class="flex rounded-xl dark:border-neutral-800 flex items-center ease-out duration-200 w-4/5 py-2 sticky z-3 mb-3">
            <input 
                placeholder="Diga o que está pensando..." 
                className="w-full rounded-full p-2 px-6 border border-neutral-200 text-neutral-600 bg-white dark:border-neutral-700 dark:bg-neutral-800"
                value={post}
                onChange={(e) => setPost(e.target.value)}
            />
            <button className="text-white bg-unite-orange rounded-full p-2 px-4 ml-2" onClick={createPost}>Post</button>
        </div>
    )

};

export default CreatePostWidget;