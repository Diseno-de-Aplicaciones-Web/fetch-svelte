<script>
  import { obterDatos } from "./lib/fetchs.mjs";

  // let promesaDatos = obterDatos()

  let datos

  function manexadorClick(params) {
    obterDatos()
    .then(
      datosRecibidos => datos = datosRecibidos
    )
  }

  manexadorClick()

</script>

<h1>Epa</h1>
<p>{datos?.datos}</p>
<button on:click={manexadorClick}>Obter datos</button>

<!--
{#await promesaDatos}
	<p>...pedindo datos</p>
{:then datosRecibidos}
	<p>{datosRecibidos.datos}</p>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
-->