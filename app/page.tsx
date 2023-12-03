import { sql } from '@vercel/postgres';
import { Text } from '@tremor/react';

import { libre_caslon_text } from './fonts';
import Link from 'next/link';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export default async function IndexPage({
  searchParams
}: {
  searchParams: { q: string };
}) {
  // const search = searchParams.q ?? '';
  // const result = await sql`
  //   SELECT id, name, username, email 
  //   FROM users 
  //   WHERE name ILIKE ${'%' + search + '%'};
  // `;
  // const users = result.rows as User[];
  const title = "24 jours de Nativité"
  const subtitle = "Ton calendrier de l'Avent à la manière d'un jeu de piste"


  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <div className="flex gap-x-2 items-end justify-start flex-wrap py-2 max-w-lg mb-4">
        <h1 className="text-action text-5xl">{title}</h1>
        <p className={`${libre_caslon_text.className} text-primary text-sm md:text-lg`}>{subtitle}</p>
      </div>

      <Text className='mb-4'>
        Comme un
        <span className={`${libre_caslon_text.className} text-primary px-1`}>détective</span>
        tu devras rassembler
        <span className={`${libre_caslon_text.className} text-primary  px-1`}>les indices</span>
        qui te permettront d&apos;en apprendre davantage sur
        <span className={`${libre_caslon_text.className} text-primary  px-1`}>{"l’histoire"}</span>
        de ce petit
        <span className={`${libre_caslon_text.className} text-primary  px-1`}>bébé</span>
        né supposément un 25 décembre et qui sera à l&apos;origine d&apos;une des grandes religions monothéistes, soit
        <span className={`${libre_caslon_text.className} text-primary  px-1`}>le christianisme.</span>
      </Text>
      <Text>
        Depuis plus de 2000 ans,
        <span className={`${libre_caslon_text.className} text-primary  px-1`}>des artistes</span>
        de toutes disciplines sont
        <span className={`${libre_caslon_text.className} text-primary  px-1`}>inspirés</span>
        par l&apos;histoire de la
        <span className={`${libre_caslon_text.className} text-primary  px-1`}>naissance de Jésus.</span>
      </Text>
      <Text className='text-action font-bold my-4 text-lg tremor-title'>
        Es-tu prêt à les découvrir ?
      </Text>

      <div className='flex justify-center'>
        <Link href='/register' className="py-3 px-6 rounded-lg text-white bg-primary  transition ease-in-out delay-150 hover:text-lg hover:text-primary hover:bg-primarylighter duration-300">
          Oui!

        </Link>




      </div>
    </main>
  );
}
