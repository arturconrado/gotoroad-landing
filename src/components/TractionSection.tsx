export default function TractionSection() {
  return (
    <section id="tracao" className="section bg-white">
      <div className="container-tight">
        <div className="mb-16 max-w-3xl mx-auto text-center">
          <h2 className="section-title">Nossa Tração</h2>
          <p className="section-subtitle">
            Métricas iniciais validam nosso potencial de crescimento
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">Métricas iniciais</h3>
            <p className="text-gray-700 mb-8">
              Nosso MVP já demonstra resultados promissores, com engajamento crescente 
              e feedback positivo dos usuários iniciais.
            </p>

            <div className="bg-white rounded-xl shadow-md mb-8">
              <div className="grid grid-cols-2 divide-x divide-y divide-gray-100">
                <div className="p-6">
                  <div className="text-3xl md:text-4xl font-extrabold text-blue-600 mb-2">1.200+</div>
                  <p className="text-gray-700">Usuários cadastrados</p>
                </div>
                <div className="p-6">
                  <div className="text-3xl md:text-4xl font-extrabold text-blue-600 mb-2">68%</div>
                  <p className="text-gray-700">Taxa de retenção</p>
                </div>
                <div className="p-6">
                  <div className="text-3xl md:text-4xl font-extrabold text-blue-600 mb-2">4.8/5</div>
                  <p className="text-gray-700">Rating médio</p>
                </div>
                <div className="p-6">
                  <div className="text-3xl md:text-4xl font-extrabold text-blue-600 mb-2">23%</div>
                  <p className="text-gray-700">Conversão para pro</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h4 className="text-xl font-semibold mb-4">Feedback dos usuários</h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <span className="text-blue-700 font-medium">MA</span>
                    </div>
                    <div>
                      <p className="font-medium">Marcelo A.</p>
                      <div className="flex text-yellow-400">
                        <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700">"Finalmente um app que entende as necessidades de quem viaja de carro no Brasil. Planejei minha viagem para a Serra Gaúcha com facilidade!"</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <span className="text-blue-700 font-medium">RF</span>
                    </div>
                    <div>
                      <p className="font-medium">Roberto F.</p>
                      <div className="flex text-yellow-400">
                        <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700">"A função de descobrir pontos de interesse no caminho tornou nossa viagem muito mais divertida. Encontramos lugares que nem imaginávamos!"</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Aquisição de usuários</h3>
            <div className="bg-white rounded-xl p-6 shadow-md mb-8">
              <h4 className="text-xl font-semibold mb-4">Crescimento orgânico</h4>
              <div className="relative h-64 mb-6">
                <div className="absolute inset-0 flex items-end">
                  <div className="flex-1 mx-1">
                    <div className="bg-blue-100 h-[20%] rounded-t"></div>
                  </div>
                  <div className="flex-1 mx-1">
                    <div className="bg-blue-200 h-[35%] rounded-t"></div>
                  </div>
                  <div className="flex-1 mx-1">
                    <div className="bg-blue-300 h-[45%] rounded-t"></div>
                  </div>
                  <div className="flex-1 mx-1">
                    <div className="bg-blue-400 h-[60%] rounded-t"></div>
                  </div>
                  <div className="flex-1 mx-1">
                    <div className="bg-blue-500 h-[80%] rounded-t"></div>
                  </div>
                  <div className="flex-1 mx-1">
                    <div className="bg-blue-600 h-full rounded-t"></div>
                  </div>
                </div>
                <div className="absolute bottom-[-25px] left-0 right-0 flex justify-between text-xs text-gray-500">
                  <div>Jan</div>
                  <div>Fev</div>
                  <div>Mar</div>
                  <div>Abr</div>
                  <div>Mai</div>
                  <div>Jun</div>
                </div>
              </div>
              <p className="text-gray-700 text-sm mt-8">Crescimento de usuários mês a mês (primeiro semestre 2023)</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h4 className="text-xl font-semibold mb-4">Canais de aquisição</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">Marketing de conteúdo</span>
                    <span className="font-medium">42%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '42%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">Indicações</span>
                    <span className="font-medium">28%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '28%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">Redes sociais</span>
                    <span className="font-medium">18%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '18%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">Parcerias</span>
                    <span className="font-medium">12%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '12%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-200 mb-1">CAC atual</p>
                  <p className="text-2xl font-bold">R$ 22,50</p>
                </div>
                <div>
                  <p className="text-blue-200 mb-1">LTV estimado</p>
                  <p className="text-2xl font-bold">R$ 480,00</p>
                </div>
                <div>
                  <p className="text-blue-200 mb-1">Razão LTV:CAC</p>
                  <p className="text-2xl font-bold">21:1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 