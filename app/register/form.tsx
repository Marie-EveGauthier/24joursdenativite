'use client';

import { FormEvent } from 'react';

export default function Form() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await fetch(`/api/auth/register`, {
      method: 'POST',
      body: JSON.stringify({
        name: formData.get('name'),
        password: formData.get('magic'),
      }),
    });
    console.log({ response });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 mx-auto max-w-md mt-10"
    >
      <input
        name="nom"
        className="border border-black text-black"
        type="text"
      />
      <input
        name="magic"
        className="border border-black  text-black"
        type="password"
      />
      <button type="submit">Register</button>
    </form>
  );
}
