<script>
  export let handleMode;
</script>

<nav>
  <span on:click={handleMode}>Vende</span>
  <span on:click={handleMode}>Compra</span>
</nav>

<style>
  nav {
    position: fixed;
    width: 100vw;
    height: 15vh;
    top: 0;
    background-color: #17202a;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10vw;
  }
  span {
    font-weight: 600;
    font-size: 1em;
    cursor: pointer;
    transition: all 0.33s;
  }
  span:hover {
    font-size: 1.2em;
  }
</style>
