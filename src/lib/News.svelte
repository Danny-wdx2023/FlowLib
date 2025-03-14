<script>
  import { content, sidebar } from "../stores.js";
  import "remixicon/fonts/remixicon.css";
</script>
<div id="news" style="display: {$content==2 ? "block" : "none"}; left: {$sidebar==0 ? "200px" : "calc(15vw + 200px)"};">
    <div class="news-card">
        <img src="/logo.png" alt="">
        <img src="/logo.png" alt="">
        <img src="/logo.png" alt="">
        <img src="/logo.png" alt="">
        <img src="/logo.png" alt="">
        <img src="/logo.png" alt="">
        <h3>南苑学子赴无锡留学一周</h3>
        <div class="mainidea">南模正在筹备无锡留学活动，目标为高一高二学生，时间为6天以后。此次出行，意在培养南模学子的坚韧不拔、吃苦耐劳的性格，并通过研学进行素质培养，以江南水乡的温婉，陶冶学生们的情操。</div>
    </div>
    <div class="news-card">
        <img src="/logo.png" alt="">
        <img src="/logo.png" alt="">
        <img src="/logo.png" alt="">
        <img src="/logo.png" alt="">
        <img src="/logo.png" alt="">
        <img src="/logo.png" alt="">
        <h3>南苑学子赴无锡留学一周</h3>
        <div class="mainidea">南模正在筹备无锡留学活动，目标为高一高二学生，时间为6天以后。此次出行，意在培养南模学子的坚韧不拔、吃苦耐劳的性格，并通过研学进行素质培养，以江南水乡的温婉，陶冶学生们的情操。</div>
    </div>
    <div class="news-card">
        <img src="/logo.png" alt="">
        <img src="/logo.png" alt="">
        <img src="/logo.png" alt="">
        <img src="/logo.png" alt="">
        <img src="/logo.png" alt="">
        <img src="/logo.png" alt="">
        <h3>南苑学子赴无锡留学一周</h3>
        <div class="mainidea">南模正在筹备无锡留学活动，目标为高一高二学生，时间为6天以后。此次出行，意在培养南模学子的坚韧不拔、吃苦耐劳的性格，并通过研学进行素质培养，以江南水乡的温婉，陶冶学生们的情操。</div>
    </div>
</div>
<style>
    div#news{
        position: absolute;
        top: 10vh;
        right: 200px;
        transition: 0.8s;
    }
    div.news-card{
        box-shadow: 0 0 10px gray;
        border-radius: 15px;
        padding: 10px;
        margin: 30px;
    }
</style>