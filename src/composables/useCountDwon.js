import { computed, onUnmounted, ref } from "vue"
import dayjs from "dayjs"
export const  useCountDown = () => {

    const countTime = ref(0)
    let timer =null

    const formartTime=  computed(()=> dayjs.unix(countTime.value).format('mm分ss秒'))
    const start = (setTime) => {
        countTime.value = setTime
        timer = setInterval(()=>{
            countTime.value--
            // 倒计时结束清除定时器
            if(countTime.value <= 0) clearInterval(timer) 
            console.log('倒计时。。', formartTime);
        }, 1000)
    }

    onUnmounted(()=> clearInterval(timer))

    return {formartTime, start }
}