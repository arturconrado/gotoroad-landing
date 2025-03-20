export default function ProblemSection() {
  return (
    <section id="problema" className="section bg-white">
      <div className="container-tight">
        <div className="mb-10 max-w-3xl mx-auto text-center">
          <span className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold mb-3">
            PROBLEMA SOCIAL E ECONÔMICO
          </span>
          <h2 className="section-title">R$3.5 bilhões desperdiçados anualmente</h2>
          <p className="section-subtitle">
            O setor de turismo rodoviário no Brasil enfrenta um problema crítico de fragmentação 
            e ineficiência que afeta a economia, o meio ambiente e a qualidade de vida.
          </p>
        </div>

        <div className="bg-red-50 p-6 rounded-2xl mb-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-red-600 mb-2">82%</div>
              <p className="text-sm text-gray-700">dos viajantes relatam alto nível de estresse</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-red-600 mb-2">67%</div>
              <p className="text-sm text-gray-700">das viagens sofrem desvios não planejados</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-red-600 mb-2">78%</div>
              <p className="text-sm text-gray-700">dos brasileiros preferem viajar de carro</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-red-600 mb-2">5-7</div>
              <p className="text-sm text-gray-700">apps usados para planejar uma viagem</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-gradient-to-br from-red-700 to-red-800 text-white p-6 rounded-xl shadow-md">
            <div className="w-12 h-12 rounded-full bg-red-600/30 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Impacto Econômico</h3>
            <p className="text-white/90 text-sm leading-relaxed">
              O Brasil perde <strong>R$3.5 bilhões anualmente</strong> em gastos ineficientes em viagens rodoviárias, 
              incluindo combustível, tempo e oportunidades de turismo.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-600 to-orange-700 text-white p-6 rounded-xl shadow-md">
            <div className="w-12 h-12 rounded-full bg-orange-500/30 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Impacto Ambiental</h3>
            <p className="text-white/90 text-sm leading-relaxed">
              Rotas ineficientes e paradas desnecessárias geram um <strong>aumento de 23% nas emissões de CO2</strong> 
              e consumo excessivo de combustível em viagens rodoviárias.
            </p>
          </div>

          <div className="bg-gradient-to-br from-yellow-600 to-yellow-700 text-white p-6 rounded-xl shadow-md">
            <div className="w-12 h-12 rounded-full bg-yellow-500/30 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Impacto Social</h3>
            <p className="text-white/90 text-sm leading-relaxed">
              O estresse do planejamento impede que <strong>42% das famílias brasileiras</strong> realizem 
              viagens que poderiam fortalecer vínculos familiares e apoiar economias locais.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Mercado sem solução adequada</h3>
              <p className="text-gray-700 mb-4">
                Atualmente, não existe uma solução integrada para o turismo rodoviário no Brasil. 
                Os viajantes precisam utilizar múltiplas plataformas desconectadas:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
                <div className="bg-white p-2 rounded border border-gray-200 text-center text-sm">Google Maps</div>
                <div className="bg-white p-2 rounded border border-gray-200 text-center text-sm">Booking.com</div>
                <div className="bg-white p-2 rounded border border-gray-200 text-center text-sm">iFood/TripAdvisor</div>
                <div className="bg-white p-2 rounded border border-gray-200 text-center text-sm">Previsão do tempo</div>
                <div className="bg-white p-2 rounded border border-gray-200 text-center text-sm">Waze/99</div>
                <div className="bg-white p-2 rounded border border-gray-200 text-center text-sm">AccuWeather</div>
              </div>
              <p className="text-gray-700 text-sm">
                <strong>Resultado:</strong> Viagens estressantes, gastos excessivos e experiências muito abaixo do potencial.
              </p>
            </div>
            <div className="md:w-1/3">
              <div className="bg-blue-600 text-white p-5 rounded-xl shadow-md">
                <div className="text-4xl font-bold mb-2">135<span className="text-2xl">milhões</span></div>
                <p className="text-sm text-blue-100">de viagens rodoviárias realizadas anualmente no Brasil para turismo e lazer</p>
                <div className="mt-3 text-xs bg-blue-700/50 p-2 rounded">
                  <strong>Oportunidade:</strong> Mercado inexplorado de R$42 bilhões anuais
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 