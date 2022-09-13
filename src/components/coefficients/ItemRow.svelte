<script lang="ts">
import type { Item } from "./types";
import { numberFmt } from "$lib/format";
import ProcFlagDisplay from "./ProcFlagDisplay.svelte";

import "$styles/img-border.css";

export let item: Item;

// TODO Replace w/ actual image URL
let iconUrl = `https://via.placeholder.com/128?text=${item.icon}`;

let flags = item.flags || [];

let proc =
  typeof item.proc === "string"
    ? item.proc.replaceAll("*", "×")
    : numberFmt.proc.format(item.proc);
</script>

<li
  class="
    relative flex items-center h-16
    mb-3 last:mb-0
    font-game text-lg
    border-solid border-2 border-faded-yellow
    bg-faded-orange
  "
>
  <div class="img-border" />
  <img
    src={iconUrl}
    alt={`${item.name} skill icon`}
    class="h-full w-auto object-fill"
  />
  <ProcFlagDisplay {flags} class="ml-2" />
  <span class="mx-2">{item.name}</span>
  <span class="flex-shrink-0 ml-auto mr-3">{proc}</span>
</li>
