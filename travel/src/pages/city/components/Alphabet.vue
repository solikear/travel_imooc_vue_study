<template>
  <ul class="list">
    <li
        class="item"
        v-for="letter of letters"
        :key="letter"
        :ref="letter"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @click="handleLetterClick"
    >
      {{ letter }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "CityAlphabet",
  props: {
    cities: Object,
  },
  computed: {
    letters() {
      const letters = [];
      for (let i in this.cities) {
        letters.push(i);
      }
      return letters;
    },
    startY(){
      return this.$refs["A"][0].offsetTop;
    }
  },
  data() {
    return {
      touchStatus: false,
      // startY: 0
      timer:null
    };
  },
  updated() {
    // 字母A到Header底部之间的距离
    console.log("updated")
  },
  methods: {
    handleLetterClick(e) {
      this.$emit("change", e.target.innerText);
    },
    handleTouchStart() {
      this.touchStatus = true;
    },
    handleTouchMove: function (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          console.log(this.startY)
          //元素在字母表上的高度
          const touchY = e.touches[0].clientY - this.startY;
          // console.log(`原来高度：${e.touches[0].clientY} 在字母表上的高度:${touchY}`)
          const index = Math.floor((touchY - this.startY) / 20);
          if (index >= 0 && index < this.letters.length) {
            this.$emit("change", this.letters[index]);
          }
        }, 8)
      }
    },
    handleTouchEnd() {
      this.touchStatus = false;
    },
  },
};
</script>

<style lang="stylus" scoped>
@import "~styles/varibles.styl"
.list
  display flex
  flex-direction column
  justify-content center
  position absolute
  top: 1.58rem
  right 0
  bottom 0
  width .4rem

  .item
    line-height .4rem
    text-align center
    color $bgColor
</style>
