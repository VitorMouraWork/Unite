const sdk = require('node-appwrite');

const client = new sdk.client();
export const users = new sdk.users(client);

client
    .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT)
    .setProject(process.env.NEXT_PUBLIC_PROJECT)
    .setKey(process.env.NEXT_PUBLIC_APPWRITE_KEY);