interface Props {
  title: string;
  href: string;
}

export function Link({ title, href }: Props) {
  return (
    <a
      href={href}
      className="text-lg leading-tight capitalize hover:text-zinc-300"
    >
      {title}
    </a>
  );
}
