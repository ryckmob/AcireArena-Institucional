"use client";

async function baixarExe() {
  const url = "https://github.com/ryckmob/Acire-Auto-Completo/raw/refs/heads/main/locacao-veiculos-frontend/build/bin/locacao-veiculos-frontend.exe";

  const resposta = await fetch(url);
  const blob = await resposta.blob();

  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = "locacao-veiculos-frontend.exe";
  link.click();
}

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <header className="flex items-center justify-between px-10 py-6">
        <h1 className="text-2xl font-semibold tracking-wide">
          Acire <span className="text-amber-500">Arena</span>
        </h1>
        <nav className="space-x-8 text-sm text-neutral-300">
          <a href="#" className="hover:text-white">Eventos</a>
          <a href="#" className="hover:text-white">Como funciona</a>
          <a href="#" className="hover:text-white">Entrar</a>
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
          <button 
          onClick={baixarExe} 
          className="flex items-center gap-2 px-8 py-3 rounded-xl bg-amber-500 text-neutral-900 font-medium hover:bg-amber-400 transition"
        >
          ⬇️ Baixar Sistema Acire Auto
        </button>
        
        <a 
          href="https://wa.me/86994059642" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-8 py-3 rounded-xl border border-neutral-700 hover:border-neutral-500 transition"
        >
          💬 Whatsapp
        </a>

        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 pb-32">
      <div className="rounded-2xl bg-neutral-900 p-8">
        <h3 className="text-xl font-semibold">Veículos</h3>
        <p className="mt-3 text-neutral-400">
          Controle todos os veículos cadastrados, acompanhando disponibilidade e manutenção.
        </p>
      </div>
    
      <div className="rounded-2xl bg-neutral-900 p-8">
        <h3 className="text-xl font-semibold">Clientes</h3>
        <p className="mt-3 text-neutral-400">
          Gerencie clientes mantendo histórico de locações e informações de contato sempre à mão.
        </p>
      </div>
    
      <div className="rounded-2xl bg-neutral-900 p-8">
        <h3 className="text-xl font-semibold">Locações</h3>
        <p className="mt-3 text-neutral-400">
          Registre locações ativas e passadas com controle de prazos e pagamentos.
        </p>
      </div>
    
      <div className="rounded-2xl bg-neutral-900 p-8">
        <h3 className="text-xl font-semibold">Relatórios</h3>
        <p className="mt-3 text-neutral-400">
          Gere relatórios de receita mensal e desempenho da frota de forma rápida e prática.
        </p>
      </div>
    </section>

      <section className="bg-amber-200 py-32 flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-4xl text-black max-w-2xl leading-snug">
          Simples, rápido e confiável
        </h2>
        <p className="mt-4 text-lg font-milena text-black max-w-xl">
          Gerencie sua frota e locações com facilidade, sem complicação.
        </p>
      </section>



      <footer className="border-t border-neutral-800 py-6 text-center text-neutral-500 text-sm">
        © {new Date().getFullYear()} Acire Arena. Todos os direitos reservados.
      </footer>
    </main>
  );
}
