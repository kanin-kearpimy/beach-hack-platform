<template>
  <div class="header relative">
    <MainNavigation :reach="reachContainer" :link="registrationLink" />
    <div class="flex flex-col p-4 m-4 rounded-lg md:hidden">
      <div class="absolute bottom-[20%] flex flex-col gap-y-2 items-end">
        <img class="w-full" src="~/assets/header/header-beach-hack.png" @load="loading" />
        <a :href="registrationLink" class="w-[100px] border border-1 border-white text-white text-center rounded-md py-2 px-4 text-xl">สมัคร</a>
      </div>
    </div>
    <div class="hidden md:grid grid-cols-2 gab-2 m-2 pr-4 relative top-[30%] translate-y-[-35%] ">
      <div class="col-start-2 flex flex-col">
        <img class="w-full" src="~/assets/header/header-beach-hack.png" @load="loading" />
        <div class="mt-4 text-white">
          <p class="mb-4 text-right">
            ขอเชิญชวนคนรุ่นใหม่ที่มีใจอนุรักษ์ชายฝั่งทะเลไทย เข้าร่วม /Beach Hack เพื่อหาแนวทางแก้ไขปัญหาชายฝั่งทะเลไทยอย่างยั่งยืน โอกาสในการร่วม Hack กันริมชายหาดและชิงเงินรางวัลรวมมูลค่า 100,000 บาท
          </p>
          <div class="text-right text-xl">
            <a :href="registrationLink" class="border border-1 border-white rounded-md py-2 px-4">สมัคร</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bgImage from "assets/header/header-bg.png"

export default {
  name: "Header",
  props: { reachContainer: Boolean, handleLoading: Function },
  data() {
    return {
      registrationLink: 'https://bit.ly/3OM9tsk'
    }
  },
  methods: {
    loading() {
      this.handleLoading()
    }
  },
}
</script>

<style scoped>
.header {
  height: 755px;
  background-repeat: no-repeat;
  background-image: url("assets/header/header-bg.png");
  background-size: 100% 100%;
  display: table;
}

.hero {
  background-color: rgba(0, 0, 0, 0.6);
  position: relative;
  top: 30%;
  left: 35%;
  transform: translate(-35%, -30%);
}

@media only screen and (max-width: 425px) {
  .header {
    width: 100%;
    height: 755px;
    background-repeat: no-repeat;
    background-image: url("assets/header/header-mobile-bg.png");
    background-size: 100% 100%;
  }
}
</style>
