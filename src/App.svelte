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

  import LandingPage from './components/LandingPage.svelte';
  import Nav from './components/Nav.svelte';
  import BuyProducts from './components/BuyProducts.svelte';
  import SellProducts from './components/SellProducts.svelte';

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
  let mode = 'sell';

  const handleStart = () => {
    isStarted = true;
  };

  const handleMode = (currentMode) => {
    mode = currentMode;
  };

  const unsubscribe = onSnapshot(
    collection(db, 'products'),
    (querySnapshot) => {
      productList = querySnapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
    },
    (err) => console.log(err)
  );

  const handleAlert = (service) => {
    alert(`Se ha ${service} tu producto correctamente`)
  }

  const deleteProduct = async (id) => {
    try {
      await deleteDoc(doc(db, 'products', id));
      handleAlert('eliminado')
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

  const addProduct = async () => {
    try {
      await addDoc(collection(db, 'products'), product);
      handleAlert('agregado')
    } catch (error) {
      console.error(error);
    }
  };

  const updateProduct = async () => {
    try {
      await updateDoc(doc(db, 'products', currentId), product);
      handleAlert('actualizado')
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
        addProduct();
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
</script>

<main>
  {#if !isStarted}
    <LandingPage {handleStart} />
  {:else}
    <Nav {handleMode} />
    <div class="content">
      {#if mode === 'buy'}
        <BuyProducts {productList} {editProduct} {deleteProduct} />
      {:else}
        <SellProducts {product} {productList} {editProduct} {deleteProduct} {handleSubmit}/>
      {/if}
    </div>
  {/if}
</main>

<style>
  .content {
    position: relative;
    top: 15vh;
    padding: 2vw;
  }
</style>
