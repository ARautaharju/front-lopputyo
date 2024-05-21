<script>
  // @ts-nocheck

  import { fade } from 'svelte/transition';

  import Painike from './Painike.svelte';
  import Kuvakortti from './Kuvakortti.svelte';
  import Vieraskirja from './Vieraskirja.svelte';

  export let name;

  // true = intro, false = galleria
  $: x = true;

  // true = vieraskirja on auki
  let naytaVieraskirja = false;

  //siirrytään gallerianäkymään
  $: galleriasivulle = () => {
    if (x === true) {
      x = false;
    }
  };

  //takaisin intronäkymään
  $: introsivulle = () => {
    if (x === false) {
      x = true;
    }
  };
</script>

<main>
  {#if x === true}
    <div class="intro">
      <h1>{name}</h1>
      <h2>
        Tämä on malli verkkosivulle, joka voisi toimia verkkogalleriana tai
        portfoliona
      </h2>
    </div>
    <Painike on:click={galleriasivulle}>Eteenpäin</Painike>
  {:else}
    <div class="galleria" transition:fade>
      <Painike on:click={introsivulle}>Takaisin</Painike>
      {#if naytaVieraskirja === false}
        <Painike on:click={() => (naytaVieraskirja = true)}>Vieraskirja</Painike
        >
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
  {/if}
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
