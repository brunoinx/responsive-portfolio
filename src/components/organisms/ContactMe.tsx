import ContactImg from '../../assets/img/contact-img.svg';
import { Input } from '../atoms/Input';

export function ContactMe() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-fuchsia-750 to-indigo-750 pt-[60px] pb-[200px]"
    >
      <div className="w-full max-w-[1296px] m-auto mt-10 flex items-center justify-between">
        <img
          src={ContactImg}
          alt="Homem flutuando em volta de vários papéis e acessórios de trabalho"
          className="h-[440px]"
        />

        <form className="w-[50%]">
          <h2 className="text-white text-5xl font-centraBold mb-8 capitalize">
            Entre em contato
          </h2>

          <div className="grid grid-rows-2 grid-cols-2 gap-3 mb-4">
            <Input type="text" placeholder="Primeiro nome" />
            <Input type="text" placeholder="Segundo nome" />
            <Input type="text" placeholder="Endereço de email" />
            <Input type="text" placeholder="Telefone" />
          </div>

          <p className="first-letter:capitalize">
            <textarea
              placeholder="Digite aqui sua mensagem"
              rows={7}
              className="block w-full bg-white/10 border border-zinc-400/80 text-white font-centraMedium text-lg rounded-xl placeholder:font-centraRegular focus:bg-white focus:text-zinc-900 py-5 px-[26px]"
            ></textarea>
          </p>

          <div className="w-full mt-8 flex justify-center">
            <button
              type="submit"
              className="w-[50%] bg-white px-4 py-[18px] rounded-lg hover:opacity-80 transition-opacity duration-200"
            >
              <span className="text-[22px] font-centraBold bg-gradient-to-r from-purple-800 to-pink-800 bg-clip-text text-transparent">
                Enviar
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
