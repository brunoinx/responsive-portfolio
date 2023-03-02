export function CardNewsLetter() {
  return (
    <div className="absolute -top-20 w-full bg-white rounded-3xl gap-8 py-20 px-32 flex items-center justify-between">
      <h3 className="w-1/2 font-centraBold text-3xl text-center">
        Subscribe to our Newsletter & Never miss latest updates
      </h3>

      <div className="w-full max-w-[600px] rounded-xl border-4 border-violet-700 flex items-center">
        <input
          type="email"
          placeholder="Endereço de email"
          className="w-full text-[#121212] text-lg p-4 mr-2 bg-transparent font-centraMedium border-0"
        />

        <button
          type="submit"
          className="bg-gradient-to-r from-fuchsia-750 to-indigo-750 rounded-lg text-white font-centraMedium text-xl py-5 px-16 my-1 mr-1 hover:opacity-80"
        >
          Enviar
        </button>
      </div>
    </div>
  );
}
