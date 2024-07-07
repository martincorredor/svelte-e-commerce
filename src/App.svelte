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
  import CustomForm from './components/CustomForm.svelte';
  import Home from './components/Home.svelte';

  let product = {
    name: '',
    description: '',
    imageUrl: '',
    valor: null,
  };
  let productList = [];
  let editStatus = false;
  let currentId = '';
  let isStarted = false;

  const handleStart = () => {
    isStarted = true
  }

  const unsubscribe = onSnapshot(
    collection(db, 'products'),
    (querySnapshot) => {
      productList = querySnapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      console.log(productList);
    },
    (err) => console.log(err)
  );

  const deleteProduct = async (id) => {
    try {
      // TODO confirm alert pending
      await deleteDoc(doc(db, 'products', id));
    } catch (error) {
      console.error(error);
    }
  };

  const editProduct = (currentProduct) => {
    product.name = currentProduct.name;
    product.description = currentProduct.description;
    product.valor = currentProduct.valor;
    product.imageUrl = currentProduct.imageUrl;
    currentId = currentProduct.id;

    editStatus = true;
  };

  const addTask = async () => {
    try {
      await addDoc(collection(db, 'products'), product);
      console.log('Task saved');
    } catch (error) {
      console.error(error);
    }
  };

  const updateProduct = async () => {
    try {
      await updateDoc(doc(db, 'products', currentId), product);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async () => {
    try {
      if (editStatus) {
        console.log('updating');
        updateProduct();
      } else {
        addTask();
      }
    } catch (error) {
      console.error(error);
    }
    // Values ​​to format the form
    product = {
      name: '',
      description: '',
      imageUrl: '',
      valor: null,
    };
    editStatus = false;
    currentId = '';
  };

  onDestroy(unsubscribe);

  export let name;
  const changeName = (nuevo) => {
    name = nuevo;
  };
</script>

<main>
  {#if !isStarted}
    <Home {handleStart} />
  {:else}
    <CustomForm {handleSubmit} {product} />
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
  {/if}
</main>

<style></style>
