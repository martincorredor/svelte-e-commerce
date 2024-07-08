<script>
  import ListOfProducts from './ListOfProducts.svelte';

  export let productList, editProduct, deleteProduct;
</script>

<div>
  <h1>Compra tus productos favoritos</h1>
  <ListOfProducts {productList} {editProduct} {deleteProduct} isBuy={true} />
</div>
