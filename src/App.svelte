<script>
  import SideBar from "./lib/SideBar.svelte";
  import Search from "./lib/Searcher.svelte";
  import Recommend from "./lib/Recommend.svelte";
  import News from "./lib/News.svelte";
</script>

<main>
  <img src="/logo.png" id="logo" alt="同嘏书屋">
  <Search />
  <Recommend />
  <News />
  <SideBar />
</main>

<style>
  img#logo{
    width: 50px; height: 50px;
    position: fixed;
  }
</style>
