import { analytics, CONSENT_KEY } from '@/data/analytics';

export type Escolha = 'aceito' | 'recusado';
type Registro = { escolha: Escolha; em: string };

export function lerConsentimento(): Registro | null {
  try {
    const bruto = localStorage.getItem(CONSENT_KEY);
    if (!bruto) return null;
    const dado = JSON.parse(bruto) as Registro;
    return dado.escolha === 'aceito' || dado.escolha === 'recusado' ? dado : null;
  } catch {
    return null;
  }
}

export function salvarConsentimento(escolha: Escolha): void {
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify({ escolha, em: new Date().toISOString() }));
  } catch {
    /* navegação privada ou storage bloqueado: segue sem salvar */
  }
}

let contentsquareCarregado = false;

/** Injeta a tag do Contentsquare. Só deve ser chamada após o aceite. */
export function carregarContentsquare(): void {
  const id = analytics.contentsquare.tagId;
  if (!id || contentsquareCarregado) return;
  contentsquareCarregado = true;
  const s = document.createElement('script');
  s.src = `https://t.contentsquare.net/uxa/${id}.js`;
  s.defer = true;
  document.head.appendChild(s);
}
