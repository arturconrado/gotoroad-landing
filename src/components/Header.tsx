'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container-tight flex justify-between items-center py-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center">
              <span className="text-white font-bold">RT</span>
            </div>
            <span className="text-xl font-bold text-gray-900">RoadTrip</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="#problema" className="text-gray-600 hover:text-primary-600 font-medium">Problema</Link>
          <Link href="#solucao" className="text-gray-600 hover:text-primary-600 font-medium">Solução</Link>
          <Link href="#mercado" className="text-gray-600 hover:text-primary-600 font-medium">Mercado</Link>
          <Link href="#modelo-de-negocio" className="text-gray-600 hover:text-primary-600 font-medium">Modelo</Link>
          <Link href="#mvp" className="text-gray-600 hover:text-primary-600 font-medium">MVP</Link>
          <Link href="#tracao" className="text-gray-600 hover:text-primary-600 font-medium">Tração</Link>
          <Link href="#equipe" className="text-gray-600 hover:text-primary-600 font-medium">Equipe</Link>
          <Link href="#investimento" className="text-gray-600 hover:text-primary-600 font-medium">Investimento</Link>
        </nav>

        <div className="hidden md:block">
          <Link href="#contato" className="btn-primary">Investir agora</Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-600" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white py-4 shadow-inner">
          <div className="container-tight space-y-3">
            <Link 
              href="#problema" 
              className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded"
              onClick={() => setIsOpen(false)}
            >
              Problema
            </Link>
            <Link 
              href="#solucao" 
              className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded"
              onClick={() => setIsOpen(false)}
            >
              Solução
            </Link>
            <Link 
              href="#mercado" 
              className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded"
              onClick={() => setIsOpen(false)}
            >
              Mercado
            </Link>
            <Link 
              href="#modelo-de-negocio" 
              className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded"
              onClick={() => setIsOpen(false)}
            >
              Modelo de Negócio
            </Link>
            <Link 
              href="#mvp" 
              className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded"
              onClick={() => setIsOpen(false)}
            >
              MVP
            </Link>
            <Link 
              href="#tracao" 
              className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded"
              onClick={() => setIsOpen(false)}
            >
              Tração
            </Link>
            <Link 
              href="#equipe" 
              className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded"
              onClick={() => setIsOpen(false)}
            >
              Equipe
            </Link>
            <Link 
              href="#investimento" 
              className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded"
              onClick={() => setIsOpen(false)}
            >
              Investimento
            </Link>
            <Link 
              href="#contato" 
              className="block px-4 py-2 bg-primary-600 text-white rounded"
              onClick={() => setIsOpen(false)}
            >
              Investir agora
            </Link>
          </div>
        </div>
      )}
    </header>
  );
} 