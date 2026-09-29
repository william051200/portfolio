export interface CompanyRole {
  title: string;
  period: string;
}

export interface Company {
  name: string;
  /** Whether this is the current role. */
  current?: boolean;
  /** Your role/title at the company. */
  role: string;
  /** Time period, e.g. "2022 — Present". */
  period: string;
  /** Optional short note about the partnership/work done. */
  summary?: string;
  /** Role progression when more than one position was held. */
  roles?: CompanyRole[];
  /** Evidence of scope, ownership, and delivery. */
  highlights?: string[];
  /** Optional logo image placed in /public. */
  logo?: string;
  /** Optional company website. */
  url?: string;
}
