import type { IconName } from '@/components/ui/icons';

export type Diferencial = { titulo: string; descricao: string; icone: IconName };

/** Faixa rápida logo abaixo do hero. */
export const conveniencias: Diferencial[] = [
  {
    titulo: 'Estacionamento grátis',
    descricao: 'Vaga para você na hora do atendimento.',
    icone: 'estacionamento',
  },
  {
    titulo: 'Wi-Fi liberado',
    descricao: 'Internet para os clientes enquanto esperam.',
    icone: 'wifi',
  },
  {
    titulo: 'Sala de espera',
    descricao: 'Ambiente confortável enquanto cuidamos do carro.',
    icone: 'sofa',
  },
  {
    titulo: 'Entrega de peças',
    descricao: 'Levamos até você, dependendo da região.',
    icone: 'entrega',
  },
];

/** Seção "Estrutura e conforto". */
export const compromissos: Diferencial[] = [
  {
    titulo: 'Orçamento transparente',
    descricao:
      'Você sabe o que vai ser feito e por quê, antes de começar. Sem surpresa na hora de pagar.',
    icone: 'orcamento',
  },
  {
    titulo: 'Mão de obra qualificada',
    descricao: 'Equipe treinada para fazer o diagnóstico certo e o reparo bem feito.',
    icone: 'chave',
  },
  {
    titulo: 'Oficina limpa e organizada',
    descricao: 'Um ambiente seguro e arrumado, para você e para quem trabalha aqui.',
    icone: 'brilho',
  },
  {
    titulo: 'Pessoas físicas e frotas',
    descricao: 'Atendemos o carro da família e também os veículos da sua empresa.',
    icone: 'frota',
  },
];

/** Seção "Responsabilidade ambiental". */
export const ambiental: Diferencial[] = [
  {
    titulo: 'Licença ambiental',
    descricao: 'Operamos em conformidade com as normas e a legislação ambiental vigentes.',
    icone: 'licenca',
  },
  {
    titulo: 'Descarte correto',
    descricao: 'Óleo, fluidos e peças usadas vão para a destinação certa.',
    icone: 'reciclagem',
  },
  {
    titulo: 'Ambiente limpo',
    descricao: 'Um lugar limpo e seguro para clientes, equipe e para o planeta.',
    icone: 'folha',
  },
];
