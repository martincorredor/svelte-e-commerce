<script>
  import CustomForm from './CustomForm.svelte';
  import ListOfProducts from './ListOfProducts.svelte';

  export let productList, product, editProduct, deleteProduct, handleSubmit;
</script>

<div>
  <div class="title-section">
    <h1>Vende tus productos</h1>
    <span class="important-note"
      >(NOTA IMPORTANTE: Si no eres evaluador, porfavor no elimines productos
      existentes, si quieres agregar nuevos y modificarlos eres bienvenido)</span
    >
  </div>
  <div class="content">
    <div class="form-container">
      <h3>Agrega tu producto nuevo</h3>
      <CustomForm {handleSubmit} {product} />
    </div>
    <div class="list-container">
      <h3>Productos actuales</h3>
      <ListOfProducts
        {product}
        {productList}
        {editProduct}
        {deleteProduct}
        isBuy={false}
      />
    </div>
  </div>
</div>

<style>
  .title-section {
    margin-bottom: 3vh;
  }

  .important-note {
    color: yellow;
    text-decoration: underline;
  }

  .content {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 5vw;
  }

  .form-container {
    width: 30%;
  }
  .list-container {
    width: 60%;
  }

  @media screen and (max-width: 1024px) {
    .content {
      flex-direction: column;
      max-width: 100%;
    }

    .form-container{
      width: 50%;
    }
    .list-container {
      width: 100%;
    }
  }
  @media screen and (max-width: 480px){
    .content {
      flex-direction: column;
      max-width: 100%;
    }
    .form-container{
      width: 75%;
    }
    .list-container {
      width: 100%;
    }
  }
</style>
