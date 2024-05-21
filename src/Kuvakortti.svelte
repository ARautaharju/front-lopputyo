<script>
  const getKuvat = async () => {
    const response = await fetch(`https://picsum.photos/v2/list?page=7`);
    if (!response.ok) {
      throw new Error('cannot fetch the data');
    }
    return await response.json();
  };
  let kuvatFetch = getKuvat();
</script>

{#await kuvatFetch}
  <div>Loading....</div>
{:then responseData}
  {#each responseData as kuva}
    <div class="kuva">
      <img src={kuva.download_url} width="300" height="200" alt="valokuva" />
      <p>tekijä: {kuva.author}</p>
    </div>
  {/each}
{:catch error}
  <div class="error">
    {error.message}
  </div>
{/await}

<style>
  img {
    filter: blur(2px);
  }
  img:hover {
    filter: blur(0);
  }
</style>
