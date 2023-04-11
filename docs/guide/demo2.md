# demo2

:::demo canvas 矩形的绘制
```vue
<template>
  <div class="rectangular">
    <div class="rectangular-box">
      <canvas id="rectangular" width="150" height="150"></canvas>
    </div>
  </div>
</template>

<script>
import {onMounted} from 'vue'
export default {
    setup(){
        function draw(){
            const rectangular=document.getElementById('rectangular')
            const ctx =rectangular.getContext('2d')
            ctx.fillRect(25,25,100,100)
            ctx.clearRect(45,45,60,60)
            ctx.strokeRect(50,50,50,50)
        }
        onMounted(()=>{
            draw()
        })       
    },
}
</script>
```

:::