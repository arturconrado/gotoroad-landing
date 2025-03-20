import React from 'react';

export default function InvestmentSection() {
  return (
    <section id="investimento" className="section bg-gray-50">
      <div className="container-tight">
        <div className="mb-16 max-w-3xl mx-auto text-center">
          <div className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-semibold mb-6">
            OPORTUNIDADE DE INVESTIMENTO
          </div>
          <h2 className="section-title">Por que investir no RoadTrip agora?</h2>
          <p className="section-subtitle">
            O RoadTrip está em fase de finalização de desenvolvimento e buscando capital seed para lançar o produto no mercado.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          <div className="bg-slate-50 rounded-xl p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-blue-500 mb-2">120+</div>
            <div className="text-slate-600 font-medium">Usuários Beta</div>
          </div>
          
          <div className="bg-slate-50 rounded-xl p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-blue-500 mb-2">45%</div>
            <div className="text-slate-600 font-medium">Economia de tempo</div>
          </div>
          
          <div className="bg-slate-50 rounded-xl p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-blue-500 mb-2">85%</div>
            <div className="text-slate-600 font-medium">Satisfação beta</div>
          </div>
          
          <div className="bg-slate-50 rounded-xl p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-blue-500 mb-2">R$30B</div>
            <div className="text-slate-600 font-medium">Mercado-alvo</div>
          </div>
        </div>
        
        <div className="bg-slate-50 rounded-xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Busca de investimento seed</h3>
              <p className="text-slate-600 mb-6">
                Estamos buscando R$ 1.2M para finalizar o desenvolvimento do produto, 
                realizar ações de marketing iniciais e expandir nossa equipe para preparar o lançamento no mercado brasileiro.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-600">MVP validado com 120+ usuários beta</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-600">Time com experiência no setor de viagens</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-600">Modelo de negócio validado</span>
                </li>
              </ul>
              <div className="flex justify-start">
                <a href="#contato" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                  Solicitar deck de investimento
                </a>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-inner">
              <h4 className="text-xl font-semibold text-slate-900 mb-4">Distribuição do investimento</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-slate-700">Desenvolvimento (45%)</span>
                    <span className="text-sm font-medium text-slate-700">45%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '45%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-slate-700">Marketing (30%)</span>
                    <span className="text-sm font-medium text-slate-700">30%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '30%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-slate-700">Operacional (15%)</span>
                    <span className="text-sm font-medium text-slate-700">15%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '15%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-slate-700">Jurídico (10%)</span>
                    <span className="text-sm font-medium text-slate-700">10%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '10%'}}></div>
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