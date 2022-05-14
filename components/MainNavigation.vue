<template>
  <div class="flex flex-row md:flex-row main-menu justify-end">
    <a :href="menu.link"
       v-bind:key="menu.text"
       v-for="menu in menuItem"
       class="menu-item mr-[12px] md:mr-[40px]"
    >
      {{ menu.text }}
    </a>
  </div>
</template>

<script>
export default {
  name: "MainNavigation",
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
  }
}
</script>

<style scoped>
.main-menu {
  padding-top: 28px;
}
.menu-item {
  font-size: 18px;
  font-weight: 500;
  color: #FFFFFF;
}
</style>
