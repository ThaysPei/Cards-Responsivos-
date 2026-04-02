//aqui defino os meus auxiliares pra completar o domínio
//os cards terão modos completos, compactos e destaque

export type CardVariant = 'default' | 'featured' | 'compact';
 
export type CardBadge = {
  label: string;
  color?: 'blue' | 'green' | 'orange' | 'purple' | 'red';
};
 


// aqui defino o contrato do meu card
export interface CardProps {
  id: string | number;
  title: string;
  description?: string;
  imageUrl?: string;
  imageAlt?: string;
  badge?: CardBadge;
  variant?: CardVariant;
  author?: {
    name: string;
    avatarUrl?: string;
  };
  date?: string;
  href?: string;
  onClick?: () => void;
}