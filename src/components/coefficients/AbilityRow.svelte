<script lang="ts">
import type { Ability, ProcFlag } from "./types";
import { numberFmt } from "$lib/format";
import ProcFlagDisplay from "./ProcFlagDisplay.svelte";
export let ability: Ability;

// TODO Replace w/ actual image URL
let iconUrl = `https://via.placeholder.com/128?text=${ability.icon}`;
let flags = ability.flags || [];

let proc =
  typeof ability.proc === "string"
    ? ability.proc.replaceAll("*", "×")
    : numberFmt.proc.format(ability.proc);
</script>

<li class="flex items-center h-14 mb-3 last:mb-0">
  <img
    src={iconUrl}
    alt={`${ability.name} skill icon`}
    class="h-full w-auto object-fill"
  />
  <ProcFlagDisplay {flags} class="ml-1" />
  <span class="mx-2">{ability.name}</span>
  <span class="flex-shrink-0 ml-auto whitespace-pre text-end leading-4"
    >{proc}</span
  >
</li>
