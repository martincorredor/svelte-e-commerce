<script>
    export let product, productList, deleteProduct, editProduct;
</script>
<div>
  La lista
  {#each productList as product}
    <div>
      <h5>{product.name}</h5>
      <!-- <img src={product.imageUrl} alt="Imagen del producto" > -->
      <p>{product.description}</p>
      <p>Valor: {product.valor}</p>

      <button on:click={deleteProduct(product.id)}>Eliminar</button>
      <button on:click={editProduct(product)}>Editar</button>
    </div>
  {/each}
</div>
