<script>
  export let handleStart;
</script>

<div class="landing-page">
  <div class="landing-page-content">
    <h1>Bienvenidos</h1>
    <h3>Puedes vender o comprar tus productos favoritos</h3>
    <img src="" alt="" />
    <button on:click={handleStart} class="start-button">Empecemos</button>
  </div>
</div>

<style>
  .landing-page {
    background-image: url('https://images.unsplash.com/photo-1634973357973-f2ed2657db3c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100vw;
    color: #000;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
  }
  .landing-page-content {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 60%;
    margin-right: 3vw;
    padding: 1vh;
  }
  h1 {
    font-size: 4em;
  }

  .start-button {
    width: 20vw;
    height: 8vh;
    border: none;
    border-radius: 20px;
    background-color: #3498db;
    font-weight: 600;
    color: white;
    cursor: pointer;
    transition: all 0.33s;
  }
  .start-button:hover {
    scale: 1.02;
    box-shadow:
      0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
  button:focus {
    background-color: #2874A6;
  }

  @media screen and (max-width: 1024px){
    .landing-page {
      align-items: flex-start;
      padding-left: 8vw;
    }
  }
</style>
