export default function BusinessModelSection() {
  return (
    <section id="modelo-de-negocio" className="section bg-gray-50">
      <div className="container-tight">
        <div className="mb-16 max-w-3xl mx-auto text-center">
          <h2 className="section-title">Modelo de Negócio</h2>
          <p className="section-subtitle">
            Estratégia de monetização multi-canal com foco no valor entregue aos usuários
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">Estratégia freemium</h3>
            <p className="text-gray-700 mb-8">
              Nossa abordagem combina acesso gratuito a funcionalidades essenciais 
              com planos premium que oferecem recursos avançados, gerando múltiplas 
              fontes de receita.
            </p>

            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 3a1 1 0 000 2h5.586l-2.293 2.293a1 1 0 101.414 1.414L12 6.414V12a1 1 0 102 0V6.414l2.293 2.293a1 1 0 001.414-1.414L15.414 5H21a1 1 0 100-2h-6.586l2.293-2.293a1 1 0 00-1.414-1.414L13 1.586V-4a1 1 0 10-2 0v5.586L8.707.293a1 1 0 00-1.414 1.414L9.586 3H4z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold">RoadTrip Basic (Gratuito)</h4>
                </div>
                <ul className="space-y-2 text-gray-700 ml-14">
                  <li>• Planejamento básico de roteiros</li>
                  <li>• Acesso a pontos de interesse essenciais</li>
                  <li>• Funcionalidades de navegação básicas</li>
                  <li>• Anúncios de parceiros relevantes</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold">RoadTrip Pro (R$19,90/mês)</h4>
                </div>
                <ul className="space-y-2 text-gray-700 ml-14">
                  <li>• Planejamento avançado com múltiplos roteiros</li>
                  <li>• Recomendações personalizadas</li>
                  <li>• Navegação offline completa</li>
                  <li>• Sincronização com calendário</li>
                  <li>• Sem anúncios</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold">RoadTrip Premium (R$39,90/mês)</h4>
                </div>
                <ul className="space-y-2 text-gray-700 ml-14">
                  <li>• Todas as funções Pro</li>
                  <li>• Assistente de viagem com IA</li>
                  <li>• Descontos exclusivos em parceiros</li>
                  <li>• Suporte prioritário 24/7</li>
                  <li>• Acesso antecipado a novos recursos</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">Fontes de receita adicionais</h3>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8">
                <div className="space-y-5">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Comissões de parceiros</h4>
                    <p className="text-gray-700">Receita por reservas de hospedagem, restaurantes e atrações feitas através do aplicativo</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Publicidade contextual</h4>
                    <p className="text-gray-700">Anúncios relevantes de estabelecimentos locais no trajeto da viagem (apenas para usuários gratuitos)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">API para empresas</h4>
                    <p className="text-gray-700">Serviços B2B para integração com sistemas de gestão de hotéis, restaurantes e atrações</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Analytics para destinos</h4>
                    <p className="text-gray-700">Dados agregados e anonimizados sobre fluxo turístico para secretarias de turismo</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-6">Projeção de receita (5 anos)</h3>
              <div className="relative h-80">
                <div className="absolute bottom-0 left-0 w-full h-full flex items-end justify-between">
                  <div className="w-1/5 px-1">
                    <div className="bg-white/20 backdrop-blur-sm h-[15%] relative rounded-t-md">
                      <div className="absolute -top-10 left-0 right-0 text-center">
                        <div className="text-xl font-bold">R$1.2M</div>
                        <div className="text-xs text-blue-200">Ano 1</div>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/5 px-1">
                    <div className="bg-white/20 backdrop-blur-sm h-[30%] relative rounded-t-md">
                      <div className="absolute -top-10 left-0 right-0 text-center">
                        <div className="text-xl font-bold">R$3.8M</div>
                        <div className="text-xs text-blue-200">Ano 2</div>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/5 px-1">
                    <div className="bg-white/20 backdrop-blur-sm h-[50%] relative rounded-t-md">
                      <div className="absolute -top-10 left-0 right-0 text-center">
                        <div className="text-xl font-bold">R$8.5M</div>
                        <div className="text-xs text-blue-200">Ano 3</div>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/5 px-1">
                    <div className="bg-white/20 backdrop-blur-sm h-[75%] relative rounded-t-md">
                      <div className="absolute -top-10 left-0 right-0 text-center">
                        <div className="text-xl font-bold">R$17.2M</div>
                        <div className="text-xs text-blue-200">Ano 4</div>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/5 px-1">
                    <div className="bg-white/20 backdrop-blur-sm h-full relative rounded-t-md">
                      <div className="absolute -top-10 left-0 right-0 text-center">
                        <div className="text-xl font-bold">R$32.6M</div>
                        <div className="text-xs text-blue-200">Ano 5</div>
                      </div>
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