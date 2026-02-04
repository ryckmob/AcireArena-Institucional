export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <header className="flex items-center justify-between px-10 py-6">
        <h1 className="text-2xl font-semibold tracking-wide">
          Acire <span className="text-amber-500">Arena</span>
        </h1>
        <nav className="space-x-8 text-sm text-neutral-300">
          <a href="#" className="hover:text-white">
            Eventos
          </a>
          <a href="#" className="hover:text-white">
            Como funciona
          </a>
          <a href="#" className="hover:text-white">
            Entrar
          </a>
        </nav>
      </header>

      <section className="flex flex-col items-center justify-center text-center px-6 py-32">
        <h2 className="text-5xl font-bold max-w-3xl leading-tight">
          O Acire Auto é um sistema completo para gerenciamento de locação de veículos.
        </h2>

        <p className="mt-6 max-w-xl text-neutral-400 text-lg">
          Pensado e desenvolvido para facilitar o dia a dia de empresas de aluguel de carros e utilitários.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="px-8 py-3 rounded-xl bg-amber-500 text-neutral-900 font-medium hover:bg-amber-400 transition">
            Fazer Download
          </button>
          <button className="px-8 py-3 rounded-xl border border-neutral-700 hover:border-neutral-500 transition">
            Ver eventos
          </button>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 pb-32">
        <div className="rounded-2xl bg-neutral-900 p-8">
          <h3 className="text-xl font-semibold">Taxas justas</h3>
          <p className="mt-3 text-neutral-400">
            Você fica com o lucro. A Acire Arena opera com uma das menores taxas
            do mercado.
          </p>
        </div>

        <div className="rounded-2xl bg-neutral-900 p-8">
          <h3 className="text-xl font-semibold">Gestão simples</h3>
          <p className="mt-3 text-neutral-400">
            Crie, edite e acompanhe seus eventos em tempo real, sem burocracia.
          </p>
        </div>

        <div className="rounded-2xl bg-neutral-900 p-8">
          <h3 className="text-xl font-semibold">Ingressos digitais</h3>
          <p className="mt-3 text-neutral-400">
            Check in rápido com QR Code e menos dor de cabeça na portaria.
          </p>
        </div>
      </section>

      <footer className="border-t border-neutral-800 py-6 text-center text-neutral-500 text-sm">
        © {new Date().getFullYear()} Acire Arena. Todos os direitos reservados.
      </footer>
    </main>
  );
}
