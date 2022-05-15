<template>
  <div
    class="flex flex-row fixed top-0 right-0 w-full p-4"
    :class="`${reach ? 'justify-between' : 'justify-end'}`"
  >
    <img v-if="reach" src="~/assets/beach-hack-logo.png" class="h-[45px]">
    <div class="flex flex-row md:flex-row main-menu items-center justify-end">
      <a :href="menu.link"
         v-bind:key="menu.text"
         v-for="menu in menuItem"
         class="menu-item mr-[12px] md:mr-[40px]"
         :class="`${reach ? 'text-black' : 'text-white'}`"
      >
        {{ menu.text }}
      </a>
      <a v-if="reach" :href="link" class="border border-1 border-black rounded-md py-2 px-4">สมัคร</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainNavigation",
  props: {
    reach: Boolean,
    link: String,
  },
  data() {
    return {
      menuItem: [
        {
          text: "รายละเอียดงาน",
          link: "#timeline"
        },
        {
          text: "รางวัล",
          link: "#reward"
        },
        {
          text: "ทีมงาน",
          link: "#team"
        },
        {
          text: "FAQ",
          link: "#"
        },
      ]
    }
  },
}
</script>

<style scoped>
.main-menu {
  padding-top: 28px;
}
.menu-item {
  font-size: 18px;
  font-weight: 500;
}

@media screen and (max-width: 320px) {
  .menu-item {
    font-size: 16px;
  }
}
</style>
