<script>
  // @ts-nocheck

  import { fade } from 'svelte/transition';

  import Painike from '../Painike.svelte';
  import Kuvakortti from '../Kuvakortti.svelte';
  import Vieraskirja from '../Vieraskirja.svelte';

  export let name;

  // true = vieraskirja on auki
  let naytaVieraskirja = false;
</script>

<main>
  <div class="galleria" transition:fade>
    {#if naytaVieraskirja === false}
      <Painike on:click={() => (naytaVieraskirja = true)}>Vieraskirja</Painike>
    {/if}
    {#if naytaVieraskirja}
      <Vieraskirja {naytaVieraskirja} />
      <Painike on:click={() => (naytaVieraskirja = false)}
        >Sulje vieraskirja</Painike
      >
    {/if}
    <h2>{name}</h2>
    <div class="kuvat">
      <Kuvakortti />
    </div>
  </div>
</main>

<style>
  main {
    margin: auto;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  }
  .kuvat {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto auto auto;
    column-gap: 2em;
    row-gap: 3em;
  }
</style>
