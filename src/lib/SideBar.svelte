<script>
  import { content, sidebar } from "../stores.js";
  import "remixicon/fonts/remixicon.css";
</script>

<nav style="transform: translateX({$sidebar==0 ? '-10vw' : '0'});">
  <a href="#" class="type ri-search-line" on:click={() => content.set(0)} style="background-color: {$content==0 ? 'lightgray' : 'transparent'};">书籍检索</a>
  <a href="#" class="type ri-book-open-line" on:click={() => content.set(1)} style="background-color: {$content==1 ? 'lightgray' : 'transparent'};">书籍推荐</a>
  <a href="#" class="type ri-news-line" on:click={() => content.set(2)} style="background-color: {$content==2 ? 'lightgray' : 'transparent'};">爆炸新闻</a>
  <a href="#" class="close ri-arrow-left-s-line" on:click={() => sidebar.set(1-$sidebar)} style="transform: rotateZ({$sidebar==0 ? '540deg' : '0'})"></a>
</nav>

<style>
  nav{
    position: fixed;
    padding: 10px;
    height: calc(100vh - 30px);
    width: 10vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    transform: translateX(0);
    transition: 0.8s;
  }
  a{
    color: initial;
    text-decoration: none;
    font-size: 24px;
  }
  a.type{
    transition: 0.5s;
    border-radius: 12px;
    padding: 4px;
    width: 80%;
  }
  a.close{
    position: absolute;
    right: 0;
    transition: 1s ease;
  }
</style>