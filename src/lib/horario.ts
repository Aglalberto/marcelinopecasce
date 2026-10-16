import { horario } from '@/data/empresa';

export type StatusLoja = {
  aberto: boolean;
  /** Frase curta para exibir, ex.: "Aberto agora, até as 17h". */
  mensagem: string;
};

const DIAS = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];

/** Retorna dia da semana (0–6) e minutos desde 00:00 no fuso de Fortaleza. */
export function agoraEmFortaleza(data: Date = new Date()): { dia: number; minutos: number } {
  const partes = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Fortaleza',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(data);
  const get = (t: string) => partes.find((p) => p.type === t)?.value ?? '';
  const dia = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'));
  return { dia, minutos: Number(get('hour')) * 60 + Number(get('minute')) };
}

const paraMinutos = (hhmm: string) => {
  const [h, m] = hhmm.split(':').map(Number);
  return h * 60 + m;
};

const formatarHora = (hhmm: string) => {
  const [h, m] = hhmm.split(':');
  return m === '00' ? `${Number(h)}h` : `${Number(h)}h${m}`;
};

/** Calcula se a loja está aberta. Função pura — recebe a data para facilitar testes. */
export function statusLoja(data: Date = new Date()): StatusLoja {
  const { dia, minutos } = agoraEmFortaleza(data);
  const turno = horario[dia];

  if (turno && minutos >= paraMinutos(turno.abre) && minutos < paraMinutos(turno.fecha)) {
    return { aberto: true, mensagem: `Aberto agora, até as ${formatarHora(turno.fecha)}` };
  }

  // Ainda vai abrir hoje?
  if (turno && minutos < paraMinutos(turno.abre)) {
    return {
      aberto: false,
      mensagem: `Fechado agora. Abrimos hoje às ${formatarHora(turno.abre)}`,
    };
  }

  // Próximo dia com expediente
  for (let i = 1; i <= 7; i++) {
    const proximo = (dia + i) % 7;
    const t = horario[proximo];
    if (t) {
      const quando = i === 1 ? 'amanhã' : DIAS[proximo];
      return {
        aberto: false,
        mensagem: `Fechado agora. Abrimos ${quando} às ${formatarHora(t.abre)}`,
      };
    }
  }
  return { aberto: false, mensagem: 'Fechado agora' };
}
