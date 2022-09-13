<script lang="ts" context="module">
const entries = [
  {
    caption: "Area of effect",
    color: "bg-yellow",
  },
  {
    caption: "Affected by attack speed",
    color: "bg-orange",
  },
  {
    caption: "Crit",
    color: "bg-red",
  },
  {
    caption: "Multiple projectiles",
    color: "bg-green",
  },
  {
    caption: "Piercing",
    color: "bg-blue",
  },
];

const collapsedStyles = `
  w-10 h-10 
  rounded-full
  text-2xl text-center leading-9
  cursor-pointer
`;

const expandedStyles = `
  p-3
  rounded
  text-lg
`;
</script>

<script lang="ts">
let isExpanded = false;

function toggleExpanded() {
  isExpanded = !isExpanded;
}
</script>

<div
  on:click={toggleExpanded}
  class={`
    fixed bottom-3 right-3 z-20
    border-solid border-2 border-gray
    bg-paleblue
    font-game
    ${!isExpanded && collapsedStyles}
    ${isExpanded && expandedStyles}
  `}
>
  {#if !isExpanded}
    ?
  {:else}
    <ul>
      {#each entries as entry}
        <li>
          <div
            class={`
            inline-block 
            w-3 h-3 
            rounded-full 
            ${entry.color}
            `}
          />
          <span>- {entry.caption}</span>
        </li>
      {/each}
    </ul>
  {/if}
</div>

<style>
</style>
