<script>
  import ProductCard from './ProductCard.svelte';

  export let productList, deleteProduct, editProduct, isBuy;
</script>

<main>
  {#each productList as product}
    <ProductCard {product} {editProduct} {deleteProduct} {isBuy}/>
  {/each}
</main>

<style>
  main {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2vw;
  }
</style>
