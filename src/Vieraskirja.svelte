<script>
  // @ts-nocheck
  import viestit from './viestiStore';
  import { slide } from 'svelte/transition';
  import Painike from './Painike.svelte';
  import { onDestroy } from 'svelte';

  const pvm = new Date();

  export let viestitVal;
  let uusiViesti = { nimi: '', viesti: '', pvm: pvm.toLocaleDateString() };

  const unsub = viestit.subscribe((value) => (viestitVal = value));

  const jataViesti = () => {
    viestit.update((viestit) => [...viestit, uusiViesti]);
  };

  let x = false; // onko nimi validi
  let button = false; // onko 'jätä viesti' disabled

  $: nimiwarning = () => {
    if (x === false && (nimi === '') | (nimi === ' ')) {
      x = true;
    } else {
      x = false;
    }
  };

  $: isDisabled = () => {
    if (nimi !== '' && nimi !== ' ') {
      button = true;
    } else {
      button = false;
    }
    return button === false;
  };

  onDestroy(() => {
    if (unsub) {
      unsub();
    }
  });
</script>

<div id="vieraskirja-kontti" transition:slide={{ duration: 500 }}>
  <h1>Vieraskirja</h1>
  <form>
    <label for="nimi">Nimi: </label><br />
    <input
      type="text"
      id="nimi"
      bind:value={uusiViesti.nimi}
      on:blur={nimiwarning}
    /><br />
    {#if x}
      <p style="color:red;">Nimi ei voi olla tyhjä</p>
    {/if}
    <label for="viesti">Viesti: </label> <br />
    <input
      type="text"
      id="viesti"
      maxlength="50"
      bind:value={uusiViesti.viesti}
    /><br />
    <Painike type="submit" on:click={jataViesti} disabled={isDisabled}
      >Jätä viesti</Painike
    >
  </form>
  <hr />
  <div class="viestit">
    {#each viestitVal as viesti}
      <p>{viesti.nimi} jätti viestin {viesti.pvm}</p>
      <p>"{viesti.viesti}"</p>
      <hr />
    {/each}
  </div>
</div>

<style>
  #vieraskirja-kontti {
    text-align: center;
  }
</style>
