<script lang="ts">
import type { ProcFlag } from "./types";

export let flags: ProcFlag[];
let classList: string = "";
export { classList as class };

let hasFlag: Record<ProcFlag, boolean> = {
  aoe: flags.includes("aoe"),
  attack_speed: flags.includes("attack_speed"),
  crit: flags.includes("crit"),
  multi_hit: flags.includes("multi_hit"),
  pierce: flags.includes("pierce"),
};

let commonStyles = "rounded-full w-2 h-2";
let inactiveStyles = "bg-gray opacity-50";
</script>

<ul class={`grid grid-rows-5 items-center h-full ${classList}`}>
  <li
    class={`${commonStyles} ${!hasFlag.aoe && inactiveStyles}`}
    class:bg-yellow={hasFlag.aoe}
  />
  <li
    class={`${commonStyles} ${!hasFlag.attack_speed && inactiveStyles}`}
    class:bg-orange={hasFlag.attack_speed}
  />
  <li
    class={`${commonStyles} ${!hasFlag.crit && inactiveStyles}`}
    class:bg-red={hasFlag.crit}
  />
  <li
    class={`${commonStyles} ${!hasFlag.multi_hit && inactiveStyles}`}
    class:bg-green={hasFlag.multi_hit}
  />
  <li
    class={`${commonStyles} ${!hasFlag.pierce && inactiveStyles}`}
    class:bg-blue={hasFlag.pierce}
  />
</ul>
