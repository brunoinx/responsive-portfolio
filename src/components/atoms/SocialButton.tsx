import clsx from 'clsx';

interface Props {
  icon: string;
  size?: 'sm' | 'lg';
}

export function SocialButton({ icon: Icon, size = 'sm' }: Props) {
  return (
    <button
      className={clsx(
        'border border-zinc-400 rounded-full bg-zinc-700 hover:opacity-60',
        {
          'p-2.5': size === 'sm',
          'p-[18px]': size === 'lg',
        },
      )}
    >
      <a href="#">
        <img
          src={Icon}
          alt="Redes sociais"
          className={clsx({ 'scale-125': size === 'lg' })}
        />
      </a>
    </button>
  );
}
