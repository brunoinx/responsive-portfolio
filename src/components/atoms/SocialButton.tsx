interface Props {
  icon: string;
}

export function SocialButton({ icon: Icon }: Props) {
  return (
    <button className="border border-zinc-400 rounded-full p-2.5 bg-zinc-700 hover:opacity-60">
      <a href="#">
        <img src={Icon} alt="" />
      </a>
    </button>
  );
}
