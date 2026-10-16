import type { IconName } from '@/components/ui/icons';

export type Servico = {
  titulo: string;
  descricao: string;
  icone: IconName;
  itens?: string[];
};

/** Especialidade da casa — aparece em destaque. */
export const especialidade: Servico = {
  titulo: 'Suspensão em geral',
  descricao:
    'É a nossa especialidade. Diagnóstico e troca completa para o carro voltar a rodar firme, macio e seguro.',
  icone: 'suspensao',
  itens: ['Amortecedores', 'Molas', 'Pivôs', 'Coxins', 'Batedores', 'Buchas da sapata'],
};

export const servicos: Servico[] = [
  {
    titulo: 'Troca de baterias',
    descricao: 'Teste e troca na hora, para o carro não te deixar na mão.',
    icone: 'bateria',
  },
  {
    titulo: 'Embreagem e freios',
    descricao: 'Revisão e troca de embreagem, pastilhas e fluido de freio.',
    icone: 'freio',
  },
  {
    titulo: 'Faróis e elétrica em geral',
    descricao: 'Regulagem de faróis e reparos na parte elétrica do carro.',
    icone: 'farol',
  },
  {
    titulo: 'Arrefecimento e escapamentos',
    descricao: 'Cuidado com o sistema de arrefecimento e troca de escapamento.',
    icone: 'arrefecimento',
  },
  {
    titulo: 'Loja de peças e acessórios',
    descricao:
      'Peças certificadas, com garantia de fábrica, para carros de passeio e frotas de empresas.',
    icone: 'pecas',
  },
];
