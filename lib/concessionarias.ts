export interface Concessionaria {
  nome: string;
  estado: string;
}

export const CONCESSIONARIAS: Concessionaria[] = [
  { nome: "Equatorial Alagoas", estado: "AL" },
  { nome: "CEA Equatorial Energia", estado: "AP" },
  { nome: "Amazonas Energia", estado: "AM" },
  { nome: "Coelba (Neoenergia)", estado: "BA" },
  { nome: "Enel Ceara", estado: "CE" },
  { nome: "Neoenergia Brasilia", estado: "DF" },
  { nome: "EDP Espirito Santo", estado: "ES" },
  { nome: "Enel Goias", estado: "GO" },
  { nome: "Equatorial Goias", estado: "GO" },
  { nome: "Equatorial Maranhao", estado: "MA" },
  { nome: "Energisa Mato Grosso", estado: "MT" },
  { nome: "Energisa Mato Grosso do Sul", estado: "MS" },
  { nome: "CEMIG", estado: "MG" },
  { nome: "CEMIG-D", estado: "MG" },
  { nome: "Energisa Minas Gerais", estado: "MG" },
  { nome: "DME Distribuicao", estado: "MG" },
  { nome: "Equatorial Para", estado: "PA" },
  { nome: "Energisa Paraiba", estado: "PB" },
  { nome: "Copel Distribuicao", estado: "PR" },
  { nome: "Cocel", estado: "PR" },
  { nome: "Forcel", estado: "PR" },
  { nome: "Neoenergia Pernambuco (Celpe)", estado: "PE" },
  { nome: "Equatorial Piaui", estado: "PI" },
  { nome: "Enel Rio", estado: "RJ" },
  { nome: "Light", estado: "RJ" },
  { nome: "Energisa Nova Friburgo", estado: "RJ" },
  { nome: "Neoenergia Cosern", estado: "RN" },
  { nome: "CEEE Equatorial", estado: "RS" },
  { nome: "RGE Sul", estado: "RS" },
  { nome: "Energisa Rondonia", estado: "RO" },
  { nome: "Roraima Energia", estado: "RR" },
  { nome: "Celesc Distribuicao", estado: "SC" },
  { nome: "Enel Sao Paulo", estado: "SP" },
  { nome: "CPFL Paulista", estado: "SP" },
  { nome: "CPFL Piratininga", estado: "SP" },
  { nome: "CPFL Santa Cruz", estado: "SP" },
  { nome: "EDP Sao Paulo", estado: "SP" },
  { nome: "Elektro (Neoenergia)", estado: "SP" },
  { nome: "Energisa Sul-Sudeste", estado: "SP" },
  { nome: "Energisa Sergipe", estado: "SE" },
  { nome: "Energisa Tocantins", estado: "TO" },
];

export const ESTADOS = Array.from(new Set(CONCESSIONARIAS.map((c) => c.estado))).sort();

export function getConcessionariasByEstado(estado: string): Concessionaria[] {
  return CONCESSIONARIAS.filter((c) => c.estado === estado);
}
