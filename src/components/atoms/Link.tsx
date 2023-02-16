interface Props {
  title: string;
  url: string;
}

export function Link({ title, url }: Props) {
  return (
    <a
      href={url}
      className="text-lg leading-tight capitalize hover:text-zinc-300"
    >
      {title}
    </a>
  );
}
