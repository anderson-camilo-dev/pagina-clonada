export default function SingUp() {
  return (
    <div className="min-h-screen flex pt-30 pb-60 justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">
        {/* Título */}
        <h1 className="text-2xl font-semibold text-gray-800 text-center mb-2">
          Criar conta
        </h1>
        <p className="text-sm text-gray-500 text-center mb-6">
          Preencha os dados para se registrar
        </p>

        {/* Form */}
        <form className="space-y-4">
          {/* Nome */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nome
            </label>
            <input
              type="text"
              placeholder="Digite seu nome"
              className="w-full h-[42px] px-4 rounded-full bg-gray-100 border border-gray-300
              text-gray-800 placeholder-gray-500
              focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Digite seu email"
              className="w-full h-[42px] px-4 rounded-full bg-gray-100 border border-gray-300
              text-gray-800 placeholder-gray-500
              focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
            />
          </div>

          {/* Senha */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Senha
            </label>
            <input
              type="password"
              placeholder="Crie uma senha"
              className="w-full h-[42px] px-4 rounded-full bg-gray-100 border border-gray-300
              text-gray-800 placeholder-gray-500
              focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
            />
          </div>

          {/* Confirmar Senha */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirmar senha
            </label>
            <input
              type="password"
              placeholder="Confirme sua senha"
              className="w-full h-[42px] px-4 rounded-full bg-gray-100 border border-gray-300
              text-gray-800 placeholder-gray-500
              focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
            />
          </div>

          {/* Botão */}
          <button
            type="submit"
            className="w-full h-[42px] rounded-full bg-blue-500 text-white font-medium
            hover:bg-blue-600 transition shadow-sm"
          >
            Criar conta
          </button>
        </form>

        {/* Link login */}
        <p className="text-sm text-gray-600 text-center mt-6">
          Já tem uma conta?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Entrar
          </a>
        </p>
      </div>
    </div>
  );
}
