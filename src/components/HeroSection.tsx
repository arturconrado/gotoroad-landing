'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-700 to-blue-900 text-white pt-16 pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
      <div className="container-tight relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="inline-block px-3 py-1 bg-blue-500/40 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
              🚗 SOLUÇÃO PARA 82% DOS VIAJANTES BRASILEIROS
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
              Uma revolução nas <span className="text-yellow-300">viagens rodoviárias</span>
            </h1>
            <p className="text-xl mb-6 text-white/90 max-w-xl font-medium">
              R$3.5 bilhões são desperdiçados anualmente em viagens ineficientes. 
              O RoadTrip é a primeira plataforma que unifica todas as ferramentas de 
              planejamento e execução de viagens de carro - <span className="text-yellow-300 font-bold">e nosso MVP já está validado pelo mercado</span>.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-blue-800/50 backdrop-blur-sm p-3 rounded-lg border border-blue-600/40 flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-2xl font-bold">+</span>
                </div>
                <div>
                  <div className="text-2xl font-bold">1.200</div>
                  <div className="text-xs text-blue-200">Usuários Beta</div>
                </div>
              </div>
              <div className="bg-blue-800/50 backdrop-blur-sm p-3 rounded-lg border border-blue-600/40 flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-2xl font-bold">+</span>
                </div>
                <div>
                  <div className="text-2xl font-bold">78%</div>
                  <div className="text-xs text-blue-200">Preferem Carro vs Avião</div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="#problema" className="btn bg-yellow-500 text-blue-900 hover:bg-yellow-400 font-bold">
                Conheça o Problema
              </a>
              <a href="#investimento" className="btn bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20">
                Oportunidade de Investimento →
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-400/30 backdrop-blur-[50px] rounded-full animate-pulse"></div>
              <div className="absolute inset-0 bg-blue-500 rounded-3xl transform rotate-3 translate-x-3 translate-y-3"></div>
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="/app-mockup.jpg" 
                  alt="RoadTrip App" 
                  className="w-full"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center mr-2">
                        <span className="text-white font-bold text-xs">RT</span>
                      </div>
                      <h3 className="font-bold">Conectando pessoas e lugares</h3>
                    </div>
                    <p className="text-sm text-white/80">Elimine o estresse das viagens com nossa plataforma integrada</p>
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