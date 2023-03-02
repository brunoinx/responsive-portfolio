import { InputHTMLAttributes } from 'react';

export function Input({ ...rest }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className="w-full bg-white/10 border border-zinc-400/80 text-white font-centraMedium text-lg rounded-xl mb-1 py-4 px-6 placeholder:font-centraRegular focus:bg-white focus:text-zinc-900"
      {...rest}
    />
  );
}
