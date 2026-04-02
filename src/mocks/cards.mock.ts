
//os cards por hora estão mockados, mas logo construirei uma api para ele, para
//tornar o projeto mais profissional


//os mocks recebem os dados de acordo com a proposta da interface CardProps

import { CardProps } from '../types/card.types';
 
export const mockCards: CardProps[] = [
  {
    id: 1,
    title: 'Design Systems na Prática',
    description:
      'Como construir componentes reutilizáveis que escalam em times grandes sem virar caos.',
    imageUrl: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&auto=format&fit=crop',
    imageAlt: 'Tela com componentes de design system organizados',
    badge: { label: 'Design', color: 'purple' },
    author: { name: 'Thays Peixoto' },
    date: '28 mar 2026',
    variant: 'featured',
  },
  {
    id: 2,
    title: 'TypeScript Além do Básico',
    description:
      'Generics, utility types e como usar tipagem estática a seu favor no dia a dia.',
    imageUrl: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&auto=format&fit=crop',
    imageAlt: 'Código TypeScript num editor moderno',
    badge: { label: 'Dev', color: 'blue' },
    author: { name: 'Thays Peixoto' },
    date: '15 mar 2026',
    variant: 'default',
  },
  {
    id: 3,
    title: 'Acessibilidade não é opcional',
    description:
      'ARIA, foco por teclado e contraste: o mínimo que todo front-end precisa entregar.',
    imageUrl: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&auto=format&fit=crop',
    imageAlt: 'Pessoa usando leitor de tela no computador',
    badge: { label: 'A11y', color: 'green' },
    author: { name: 'Thays Peixoto' },
    date: '02 mar 2026',
    variant: 'default',
  },
  {
    id: 4,
    title: 'NestJS: Arquitetura em Camadas',
    description: 'Controllers, services e repositories — como separar responsabilidades de verdade.',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop',
    imageAlt: 'Diagrama de arquitetura de software',
    badge: { label: 'Backend', color: 'orange' },
    author: { name: 'Thays Peixoto' },
    date: '18 fev 2026',
    variant: 'compact',
  },
  {
    id: 5,
    title: 'React Hooks que você subestima',
    description: 'useCallback, useMemo e useRef — quando usar, quando evitar e por quê importa.',
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&auto=format&fit=crop',
    imageAlt: 'Código React com hooks colorido',
    badge: { label: 'React', color: 'blue' },
    author: { name: 'Thays Peixoto' },
    date: '05 fev 2026',
    variant: 'compact',
  },
  {
    id: 6,
    title: 'HCD na Engenharia de Software',
    description:
      'Aplicar Design Centrado no Ser Humano não é só responsabilidade de designers.',
    imageUrl: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&auto=format&fit=crop',
    imageAlt: 'Post-its coloridos num quadro de ideação de produto',
    badge: { label: 'UX', color: 'purple' },
    author: { name: 'Thays Peixoto' },
    date: '20 jan 2026',
    variant: 'default',
  },
];