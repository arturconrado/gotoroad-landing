import Image from 'next/image';

const MvpSection = () => {
  return (
    <section id="mvp" className="section bg-blue-50">
      <div className="container-tight">
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-3">
            MVP VALIDADO
          </span>
          <h2 className="section-title">Pronto para crescer</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Nosso MVP já funciona e foi validado com usuários reais, demonstrando alto potencial de crescimento.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden border-4 border-white">
              <div className="bg-blue-600 text-white py-2 px-4 font-medium text-center text-sm">
                RoadTrip MVP v1.0
              </div>
              <div className="p-3 bg-white">
                <div className="mb-3 space-y-2">
                  <div className="h-10 bg-blue-50 rounded-lg flex items-center px-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <div className="text-sm">Belo Horizonte, MG</div>
                  </div>
                  <div className="h-10 bg-blue-50 rounded-lg flex items-center px-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                    <div className="text-sm">Ouro Preto, MG</div>
                  </div>
                </div>
                <div className="h-44 bg-gray-100 rounded-lg mb-3 flex items-center justify-center overflow-hidden relative">
                  <img src="/map-preview.jpg" alt="Mapa interativo" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-blue-900/10">
                    <div className="text-blue-600 bg-white/80 px-3 py-1 rounded-lg font-medium text-sm backdrop-blur-sm">Mapa interativo</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-blue-50 rounded-lg p-2">
                    <div className="text-xs text-gray-500">Distância</div>
                    <div className="font-semibold">95 km</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-2">
                    <div className="text-xs text-gray-500">Tempo</div>
                    <div className="font-semibold">1h 40min</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
                <h3 className="text-lg font-bold mb-3 text-blue-700">Funcionalidades desenvolvidas</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Planejamento de rotas básico</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Interface de usuário intuitiva</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Busca de pontos de interesse</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Cálculo de rotas otimizadas</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Perfis de usuário básicos</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
                <h3 className="text-lg font-bold mb-3 text-blue-700">Próximos desenvolvimentos</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Sistema de reservas integrado</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Modo offline avançado</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Planejamento colaborativo</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">IA para recomendações</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Integração com redes sociais</span>
                  </li>
                </ul>
              </div>
              
              <div className="md:col-span-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl p-5 shadow-md">
                <h3 className="text-lg font-bold mb-3">Métricas de validação</h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold">1.200+</div>
                    <div className="text-blue-100 text-sm">Usuários beta</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">4.8/5</div>
                    <div className="text-blue-100 text-sm">Avaliação média</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">68%</div>
                    <div className="text-blue-100 text-sm">Taxa de retenção</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="md:col-span-1 flex flex-col justify-center">
              <h3 className="text-xl font-bold mb-3">Feedback dos usuários</h3>
              <p className="text-gray-700 text-sm">Os usuários iniciais relatam satisfação com a facilidade de uso e o valor que o aplicativo já proporciona.</p>
            </div>
            
            <div className="md:col-span-2">
              <div className="flex overflow-x-auto space-x-4 pb-2">
                <div className="flex-none w-64 bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm italic">"Encontrei lugares incríveis que não estavam nos guias tradicionais."</p>
                  <div className="mt-2 text-xs font-medium text-gray-500">Rafael S.</div>
                </div>
                
                <div className="flex-none w-64 bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm italic">"Interface muito intuitiva. A sugestão de paradas é genial, mesmo sendo básica."</p>
                  <div className="mt-2 text-xs font-medium text-gray-500">Marina L.</div>
                </div>
                
                <div className="flex-none w-64 bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(4)].map((_, i) => (
                        <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                      <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm italic">"Excelente para viagens curtas. Ansioso pelas reservas e planejamento em grupo."</p>
                  <div className="mt-2 text-xs font-medium text-gray-500">Carlos M.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MvpSection; 