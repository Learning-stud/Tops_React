import { SanityClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
 



export const client = SanityClient({
 projectId: process.env.REACT_APP_SANITY_PROJECT_ID, 
 dataset: 'production',
 apiVersion: '2021-08-31',
 useCdn: true,
 token: process.env.REACT_APP_SANITY_TOKEN
});


const buider = imageUrlBuilder(client);
export const urlFor = (source) => buider.image(source);

