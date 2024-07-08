<script>
  export let product, deleteProduct, editProduct, isBuy;

  const handleAlert = () => {
    alert('Aún no tenemos lista la tienda, espéralo pronto')
  }
</script>

<div class="card">
  <img src={product.imageUrl} alt="Imagen del producto" />
  <div class="card-content">
    <h3>{product.name}</h3>
    <p class="description">{product.description}</p>
    <p class="price">Valor: {product.valor}</p>
  </div>
  {#if !isBuy}
    <div class="card-buttons">
      <button class="delete-btn" on:click={deleteProduct(product.id)}
        >Eliminar</button
      >
      <button class="edit-btn" on:click={editProduct(product)}>Editar</button>
    </div>
  {:else}
    <button class="buy-btn" on:click={handleAlert}>Comprar</button>
  {/if}
</div>

<style>
  .card {
    max-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 20px;
    background-color: #17202a;
    opacity: 0.7;
    box-shadow:
      0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
    padding: 10px;
    transition: all 0.33s;
    font-size: 0.8em;
    text-transform: capitalize;
  }

  .card:hover {
    scale: 1.03;
    opacity: 1;
  }

  img {
    width: 100%;
    height: 30vh;
    object-fit: cover;
    border-radius: 20px;
  }

  .card-content {
    flex: 1;
    padding: 0px 16px;
    display: flex;
    flex-direction: column;
  }

  .description {
    margin: 0 0 8px;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  .price {
    margin: 16px 0;
    font-weight: bold;
  }

  .card-buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 70%;
  }

  button {
    padding: 8px 16px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.33s;
  }

  button:hover {
    scale: 1.1;
  }

  .delete-btn {
    background-color: #dc3545;
    color: #fff;
  }

  .edit-btn {
    background-color: #007bff;
    color: #fff;
  }

  .buy-btn {
    background-color: #58d68d;
    color: #fff;
  }
</style>
