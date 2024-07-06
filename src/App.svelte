<script>
  import {
    onSnapshot,
    collection,
    addDoc,
    deleteDoc,
    doc,
    updateDoc,
  } from 'firebase/firestore';
  import { db } from './firebase';

  let product = {
    name: '',
    description: '',
    imageUrl: '',
    valor: null,
  };

  const handleSubmit = async () => {
    await addDoc(collection(db, 'products'), product);
    console.log(`se guardó el producto: ${product}`);
  };
</script>

<main>
  <form on:submit|preventDefault={handleSubmit}>
    <label for="name">Nombre</label>
    <input
      bind:value={product.name}
      type="text"
      placeholder="Escribe el nombre del producto"
    />
    <label for="imageUrl">Imagen del producto (opcional)</label>
    <input
      bind:value={product.imageUrl}
      type="text"
      placeholder="Escribe la url de la imagen"
    />
    <label for="name">Valor</label>
    <input
      bind:value={product.valor}
      type="number"
      placeholder="Escribe el valor del producto"
    />
    <label for="description">Descripción</label>
    <textarea
      bind:value={product.description}
      id="description"
      rows="3"
      placeholder="Escriba una descripción"
    />
    <button>Save</button>
  </form>
</main>

<style></style>
