<script>
  export let handleSubmit, product;
</script>

<main>
  <form id="form" on:submit|preventDefault={handleSubmit} class="custom-form">
    <div class="form-group">
      <label for="name">Nombre</label>
      <input
        bind:value={product.name}
        type="text"
        placeholder="Escribe el nombre del producto"
        required
      />
    </div>
    <div class="form-group">
      <label for="imageUrl">Imagen del producto (opcional)</label>
      <input
        bind:value={product.imageUrl}
        type="text"
        placeholder="Escribe la url de la imagen"
      />
    </div>
    <div class="form-group">
      <label for="name">Valor</label>
      <input
        bind:value={product.valor}
        type="number"
        placeholder="Escribe el valor del producto"
        required
      />
    </div>
    <div class="form-group">
      <label for="description">Descripción</label>
      <textarea
        bind:value={product.description}
        id="description"
        rows="3"
        placeholder="Escriba una descripción"
        required
      />
    </div>
    <button class="save-button">Save</button>
  </form>
</main>

<style>
  .custom-form {
    display: flex;
    flex-direction: column;
    padding: 5vh;
    width: 100%;
    border-radius: 15px;
    box-shadow:
      0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
  .form-group {
    display: flex;
    flex-direction: column;
    gap: 3px;
    margin-bottom: 20px;
  }
  label {
    font-weight: 700;
  }

  button {
    padding: 8px 16px;
    border: none;
    cursor: pointer;
    font-weight: 600;
    width: 80%;
    margin: auto;
    border-radius: 10px;
    background-color: #58d68d;
    color: #fff;
    transition: all 0.33s;
    box-shadow:
      0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }

  button:hover {
    scale: 1.03;
    opacity: 1;
  }
</style>
