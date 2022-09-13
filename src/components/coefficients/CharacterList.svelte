<script lang="ts">
import type { Character } from "./types";
import AbilityRow from "./AbilityRow.svelte";
import CharacterCard from "./CharacterCard.svelte";

export let characters: Character[];
</script>

{#each characters as character (character.name)}
  <CharacterCard {character}>
    <svelte:fragment slot="abilities">
      {#each character.abilities as ability (ability.name)}
        <AbilityRow {ability} />
      {/each}
    </svelte:fragment>
  </CharacterCard>
{/each}
