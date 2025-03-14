<script>
  import { content, sidebar } from "../stores.js";
  import "remixicon/fonts/remixicon.css";
</script>

<div style="display: {$content==0 ? "block" : "none"}; left: {$sidebar==0 ? "0" : "15vw"};" id="searcher">
  <h1>书籍检索</h1>
  <form action="/s" method="GET">
    <input name="keyword" type="text" placeholder="请输入关键词......">
    <button type="submit" class="ri-search-line"></button>
  </form>
  <table id="res">
    <thead>
      <tr class="headings">
        <th>序号</th><th>书名</th><th>作者</th><th>出版社</th>
        <th>检索号</th><th>ISBN</th><th>本月借还</th><th>Star</th>
      </tr>
    </thead>
    <tbody>
      <tr class="data">
        <td>1</td><td><a href="/detail/9787536692930">三体1·地球往事</a></td><td>刘慈欣</td><td>重庆出版社</td>
        <td>???</td><td>9787536692930</td><td>218</td><td>1.76k</td>
      </tr>
      <tr class="data">
        <td>2</td><td><a href="/detail/9787536693968">三体2·黑暗森林</a></td><td>刘慈欣</td><td>重庆出版社</td>
        <td>???</td><td>9787536693968</td><td>523</td><td>2.35k</td>
      </tr>
      <tr class="data">
        <td>3</td><td><a href="/detail/9787229030933">三体3·死神永生</a></td><td>刘慈欣</td><td>重庆出版社</td>
        <td>???</td><td>9787229030933</td><td>324</td><td>1.16k</td>
      </tr>
    </tbody>
  </table>
</div>

<style>
  div#searcher{
    position: absolute;
    right: 0;
    transition: 0.5s;
    height: calc(100vh - 30px);
  }
  h1{
    font-family: monospace;
    text-align: center;
    font-size: 36px;
    margin: 50px;
  }
  form{
    text-align: center;
  }
  input{
    transition: 0.5s;
    outline: lightblue double 0;
    border: lightblue solid 2px;
    width: 420px;
    height: 60px;
    font-size: 20px;
    border-radius: 5px;
    margin-right: 20px;
    margin-bottom: 20px;
  }
  input:focus{
    outline: lightblue double 5px;
    border: none;
  }
  button[type="submit"]{
    display: inline-block;
    width: 60px;
    height: 40px;
    border: 1px solid black;
    border-radius: 20px;
    background-color: lightblue;
    color: blue;
    font-size: larger;
    cursor: pointer;
  }
  table{
    text-align: center;
    font-size: large;
    margin-left: auto;
    margin-right: auto;
  }
  td{
    width: 10vw;
  }
  a{
    text-decoration: none;
    color: initial;
    text-overflow: ellipsis;
  }

</style>