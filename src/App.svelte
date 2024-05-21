<script>
  // @ts-nocheck
  import Router from 'svelte-spa-router';
  import routes from './routes';

  export let name;
</script>

<header>
  <h1>{name}</h1>
  <ul>
    <li><a href="#/">Introsivu</a></li>
    <li><a href="#/galleria">Galleria</a></li>
  </ul>
</header>
<Router {routes} />
<footer><p>Aino Rautaharju 2024</p></footer>
