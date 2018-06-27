<template>
  <div id="notfound">
      <img class="notfound__bg" src="/images/proto.type-logo.svg" alt="">
      <navbar-logo></navbar-logo>
      <div class="notfound__content">
        <h1>404</h1>
        <p>This page could not be found</p>
      </div>
  </div>
</template>
<script>
  import navbarLogo from './partials/navbar-logo';

export default {
  components: {
    'navbar-logo': navbarLogo
  }
}
</script>
