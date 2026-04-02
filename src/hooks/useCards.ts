
import { useState, useEffect } from 'react';
import { CardProps, CardVariant } from '../types/card.types';
import { mockCards } from '../mocks/cards.mock';
 
interface UseCardsOptions {
  filterVariant?: CardVariant;
  simulateLoading?: boolean;
  loadingDelay?: number;
}
 
interface UseCardsReturn {
  cards: CardProps[];
  isLoading: boolean;
  error: string | null;
}
 
/**
 * Hook responsável por fornecer os dados dos cards.
 * Aqui ficaria a chamada real à API — hoje usa dados mockados.
 * Separar a lógica do componente facilita testes e futuras migrações.
 */
export function useCards({
  filterVariant,
  simulateLoading = true,
  loadingDelay = 1500,
}: UseCardsOptions = {}): UseCardsReturn {
  const [cards, setCards] = useState<CardProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
 
  useEffect(() => {
    setIsLoading(true);
    setError(null);
 
    // Simula latência de uma API real
    const timer = setTimeout(() => {
      try {
        const filtered = filterVariant
          ? mockCards.filter((card) => card.variant === filterVariant)
          : mockCards;
 
        setCards(filtered);
      } catch {
        setError('Não foi possível carregar os cards. Tente novamente.');
      } finally {
        setIsLoading(false);
      }
    }, simulateLoading ? loadingDelay : 0);
 
    return () => clearTimeout(timer);
  }, [filterVariant, simulateLoading, loadingDelay]);
 
  return { cards, isLoading, error };
}