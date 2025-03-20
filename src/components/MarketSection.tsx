export default function MarketSection() {
  return (
    <section id="mercado" className="section bg-white">
      <div className="container-tight">
        <div className="mb-16 max-w-3xl mx-auto text-center">
          <h2 className="section-title">Mercado em crescimento</h2>
          <p className="section-subtitle">
            O mercado de viagens rodoviárias no Brasil representa uma oportunidade 
            massiva e ainda inexplorada por soluções tecnológicas eficientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-blue-50 rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">O mercado em números</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl md:text-4xl font-extrabold text-blue-600 mb-2">78%</div>
                <p className="text-gray-700">dos brasileiros preferem viajar de carro para distâncias de até 500km</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl md:text-4xl font-extrabold text-blue-600 mb-2">R$30B</div>
                <p className="text-gray-700">movimentados anualmente em turismo rodoviário no Brasil</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl md:text-4xl font-extrabold text-blue-600 mb-2">52M</div>
                <p className="text-gray-700">de viagens rodoviárias realizadas por ano no Brasil</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl md:text-4xl font-extrabold text-blue-600 mb-2">22%</div>
                <p className="text-gray-700">crescimento anual do turismo rodoviário pós-pandemia</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6">Um mercado fragmentado</h3>
            <p className="text-gray-700 mb-8">
              Apesar do tamanho significativo, o mercado de viagens rodoviárias ainda é extremamente fragmentado. 
              Os viajantes atualmente precisam usar múltiplos aplicativos para resolver diferentes partes do 
              problema, criando uma experiência frustrante e ineficiente.
            </p>
            <div className="bg-gray-100 p-6 rounded-xl border border-gray-200">
              <h4 className="font-semibold text-lg mb-4">Concorrência atual</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-24 text-sm font-medium text-gray-500">Mapas</div>
                  <div className="flex-1 ml-2">
                    <div className="flex space-x-2">
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-xs">GM</div>
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-xs">WZ</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-24 text-sm font-medium text-gray-500">Hospedagem</div>
                  <div className="flex-1 ml-2">
                    <div className="flex space-x-2">
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-xs">AB</div>
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-xs">BK</div>
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-xs">HS</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-24 text-sm font-medium text-gray-500">Restaurantes</div>
                  <div className="flex-1 ml-2">
                    <div className="flex space-x-2">
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-xs">TA</div>
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-xs">IF</div>
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-xs">YP</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-24 text-sm font-medium text-gray-500">Solução completa</div>
                  <div className="flex-1 ml-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">RT</div>
                      <span className="text-blue-500 font-medium">Apenas RoadTrip</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Nossa vantagem competitiva</h3>
              <p className="text-blue-100 mb-8">
                O RoadTrip é o único aplicativo que proporciona uma experiência completa para planejamento 
                e execução de viagens rodoviárias, resolvendo todos os problemas em uma única plataforma.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Experiência integrada</h4>
                  <p className="text-blue-200">Único app que centraliza todas as etapas de planejamento e execução da viagem.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Foco em viajantes de carro</h4>
                  <p className="text-blue-200">Soluções específicas para os desafios únicos de viagens rodoviárias.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Personalização avançada</h4>
                  <p className="text-blue-200">Algoritmos proprietários que aprendem as preferências individuais dos usuários.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Foco no mercado brasileiro</h4>
                  <p className="text-blue-200">Informações detalhadas sobre estradas e atrações específicas do Brasil.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h4 className="font-semibold text-lg mb-4 text-center">Tamanho do mercado acessível</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Mercado Total (TAM)</span>
                      <span>R$ 30B</span>
                    </div>
                    <div className="w-full bg-blue-200/30 rounded-full h-2">
                      <div className="bg-blue-200 h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Mercado Acessível (SAM)</span>
                      <span>R$ 12B</span>
                    </div>
                    <div className="w-full bg-blue-200/30 rounded-full h-2">
                      <div className="bg-blue-200 h-2 rounded-full w-[40%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Mercado Inicial (SOM)</span>
                      <span>R$ 850M</span>
                    </div>
                    <div className="w-full bg-blue-200/30 rounded-full h-2">
                      <div className="bg-blue-200 h-2 rounded-full w-[7%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 