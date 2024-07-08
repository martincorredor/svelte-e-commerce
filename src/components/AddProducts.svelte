<script>
  import CustomForm from './CustomForm.svelte';
  import ListOfProducts from './ListOfProducts.svelte';

  export let productList, product, editProduct, deleteProduct, handleSubmit;
</script>

<div>
  <h1>Vende tus productos</h1>
  <CustomForm {handleSubmit} {product} />
  <ListOfProducts {product} {productList} {editProduct} {deleteProduct} />
</div>

<style></style>
