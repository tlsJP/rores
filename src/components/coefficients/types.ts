export interface Character {
  name: string;
  portrait: string;
  abilities: Ability[];
}

export interface Ability {
  name: string;
  icon: string;
  proc: number | string;
  flags?: ProcFlag[];
}

export interface Item {
  name: string;
  icon: string;
  proc: number | string;
  flags?: ProcFlag[];
}

export type ProcFlag = "aoe" | "attack_speed" | "crit" | "multi_hit" | "pierce";
