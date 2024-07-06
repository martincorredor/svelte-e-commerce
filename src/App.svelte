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
  import { onDestroy } from 'svelte';

  let product = {
    name: '',
    description: '',
    imageUrl: '',
    valor: null,
  };

  let productList = [];

  const handleSubmit = async () => {
    await addDoc(collection(db, 'products'), product);
    console.log(`se guardó el producto`);
  };

  const unsub = onSnapshot(
    collection(db, 'products'),
    (querySnapshot) => {
      productList = querySnapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      console.log(productList);
    },
    (err) => console.log(err)
  );

  onDestroy(unsub);
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

    {#each productList as product}
      <div>
        <h5>{product.name}</h5>
        <!-- <img src={product.imageUrl} alt="Imagen del producto" > -->
        <p>{product.description}</p>
        <p>Valor: {product.valor}</p>

        <button>Eliminar</button>
        <button>Editar</button>
      </div>
    {/each}
  </form>
</main>

<style></style>
