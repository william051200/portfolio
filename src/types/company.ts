export interface Company {
  name: string;
  /** Your role/title at the company. */
  role: string;
  /** Time period, e.g. "2022 — Present". */
  period: string;
  /** Optional short note about the partnership/work done. */
  summary?: string;
  /** Optional logo image placed in /public. */
  logo?: string;
  /** Optional company website. */
  url?: string;
}
