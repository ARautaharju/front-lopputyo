import Galleria from './reitit/Galleria.svelte';
import EiLoydy from './reitit/EiLoydy.svelte';
import Intro from './reitit/Intro.svelte';

export default {
  '/': Intro,
  '/galleria': Galleria,
  '*': EiLoydy,
};
