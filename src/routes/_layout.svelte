<script>
  import Header from "../components/Header.svelte";

  import Carousel from "../components/Carousel.svelte";

  import Footer from "../components/Footer.svelte";

  export let segment;
</script>

<style>

</style>

<Header {segment} />
<Carousel />
<main id="main">
  <slot />
</main>

<Footer />
