<template>
  <div>
    <br />
    <header id="header">
      <nav class="navbar navbar-inverse" role="banner">
        <div class="container">
          <div class="navbar-header">
            <router-link to="/"
              ><img
                src="../assets/images/logo-small.png"
                alt="logo"
                width="100%"
            /></router-link>
          </div>
        </div>
        <!--/.container-->
      </nav>
      <!--/nav-->
    </header>
    <!--/header-->
    <hr />
  </div>
</template>
<script>
export default {
  name: "Header"
};
</script>
<style scoped></style>
