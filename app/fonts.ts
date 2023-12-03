import { Libre_Franklin } from 'next/font/google';
import { Libre_Caslon_Text } from 'next/font/google';
 
export const libre_franklin = Libre_Franklin({ subsets: ['latin'], weight: ['100', '400', '700'] });

export const libre_caslon_text = Libre_Caslon_Text({ subsets: ['latin'], weight: ['400', '700'], style: 'italic' });
