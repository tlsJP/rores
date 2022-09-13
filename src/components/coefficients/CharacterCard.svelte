<script lang="ts">
import type { Character } from "./types";
import "$styles/img-border.css";

export let character: Character;

// TODO Replace w/ actual image URL
let portraitUrl = `https://via.placeholder.com/128?text=${character.portrait}`;
let isExpanded = false;

function toggleExpanded() {
  isExpanded = !isExpanded;
}
</script>

<div
  class="
    mb-3 last:mb-0
    font-game text-lg
    border-solid border-2 border-faded-yellow
    bg-faded-orange
  "
  class:h-16={!isExpanded}
>
  <div
    on:click={toggleExpanded}
    class="relative flex items-center h-16 gap-4 cursor-pointer"
  >
    <div class="img-border" />
    <img
      src={portraitUrl}
      alt={`${character.name}'s portrait`}
      class="h-full w-auto object-fill"
    />
    <h2>{character.name}</h2>
  </div>
  {#if isExpanded}
    <ul class="-mt-1 border-solid border-t-2 border-faded-yellow p-2 pr-3">
      <slot name="abilities" />
    </ul>
  {/if}
</div>
