<template>
  <div class="content flex flex-col gap-y-11">
    <section id="problem-statement" class="flex flex-col gap-y-4 items-center">
      <h1 class="text-[#00BFA6] text-center">ปัญหาที่เราช่วยกันแก้ไขได้</h1>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
        <div
          v-for="problem in problemStatement"
          class="flex flex-col items-center gap-y-3 p-3"
        >
          <img :src="problem.img" class="rounded-[300px] border border-black border-[15px] border-[#D8DDE1]">
          <h3>{{ problem.title }}</h3>
          <p>{{ problem.detail }}</p>
        </div>
      </div>
    </section>
    <img class="block mx-auto" src="~/assets/content/divider.png">
    <section id="how-participate" class="flex flex-col items-center">
      <h1 class="text-[#00BFA6] text-center mb-4">แก้ไขได้ในฐานะใดบ้าง</h1>
      <div class="grid grid-cols-1 lg:grid-cols-2">
        <div class="flex flex-col gap-y-4 lg:mr-8">
          <div class="flex flex-col lg:flex-row gap-x-4 gap-y-4 items-center">
            <div class="text-center lg:text-right shrink">
              <h3>คนท้องถิ่น</h3>
              <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
            </div>
            <img class="order-first lg:order-last md:w-[245px] w-[122px]" src="~/assets/content/illustrations.png">
          </div>
          <div class="flex flex-col lg:flex-row gap-x-4 gap-y-4 items-center">
            <div class="text-center lg:text-right">
              <h3>นักสร้าง</h3>
              <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
            </div>
            <img class="order-first lg:order-last md:w-[245px] w-[122px]" src="~/assets/content/illustrations-(1).png">
          </div>
        </div>
        <div class="flex flex-col gap-y-4 gap-x-4 lg:mt-20 lg:ml-8">
          <div class="flex flex-col lg:flex-row gap-x-4 gap-y-4 items-center">
            <img class="md:w-[245px] w-[122px]" src="~/assets/content/illustrations-(2).png">
            <div class="text-center lg:text-left">
              <h3>คนท้องถิ่น</h3>
              <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
            </div>
          </div>
          <div class="flex flex-col">
            <div class="flex flex-col lg:flex-row gap-y-4 gap-x-4 items-center">
              <img class="md:w-[245px] w-[122px]" src="~/assets/content/illustrations-(3).png">
              <div class="text-center lg:text-left">
                <h3>นักสร้าง</h3>
                <ul>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                </ul>
              </div>
            </div>
            <div class="bg-[#C8A95E] rounded-full mt-12 relative">
              <p class="text-md md:text-xl text-white font-bold p-3 md:py-4 md:pl-4 md:pr-2 text-center md:text-left">
              ไม่จำเป็นต้องกัวล!<br />
              เพียงสมัคร เราจะแมชทีมหลากหลายสกิลให้
              </p>
              <div class="arrow-up"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <img class="block mx-auto" src="~/assets/content/divider.png">
    <section id="partner-logo" class="flex flex-col gap-y-6 items-center p-4">
      <h1 class="text-[#00BFA6] text-center">พาร์ทเนอร์</h1>
      <div class="grid grid-cols-2 gap-8 md:grid-cols-4 text-center justify-content-center items-center">
        <img v-for="logo in partnerLogo" v-bind:key="logo.id" :src="logo.img" class="mx-auto">
      </div>
    </section>
    <img class="block mx-auto" src="~/assets/content/divider.png">
    <section id="timeline" class="flex flex-col gap-y-6 p-2">
      <div class="flex flex-col">
        <h1 class="text-[#00BFA6] text-center">รายละเอียดงาน</h1>
        <h4 class="text-[#00BFA6] text-center">ระยะเวลา + กติกาการสมัคร</h4>
      </div>
      <div class="flex flex-col gap-y-2">
        <div class="grid grid-cols-12">
          <div class="col-span-12 lg:col-start-2 lg:col-span-8 xl:col-start-3 xl:col-span-6">
            <div class="grid grid-cols-1 md:grid-cols-2 rounded-full bg-[#D8DEE1] py-4 px-3">
              <div class="bg-[#F0F3F4] rounded-full p-2 flex flex-row gap-x-2 justify-center md:justify-start">
                <img class="w-[20px]" src="~/assets/icons/calendar.png" />
                <span>Register: Applications Open</span>
              </div>
              <div class="p-2 text-center md:text-left">
                1 พฤษภาคม - 15 มิถุนายน 2565
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-y-2">
        <div class="grid grid-cols-12">
          <div class="col-span-12 lg:col-start-3 lg:col-span-8 xl:col-start-5 xl:col-span-6">
            <div class="grid grid-cols-1 md:grid-cols-2 rounded-full bg-[#D8DEE1] py-4 px-3">
              <div class="bg-[#F0F3F4] rounded-full p-2 flex flex-row gap-x-2 justify-center md:justify-start">
                <img class="w-[20px]" src="~/assets/icons/calendar.png" />
                <span>Round 1: Online Training Day</span>
              </div>
              <div class="p-2 text-center md:text-left">
                9 - 10 กรกฎาคม 2565
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-y-2">
        <div class="grid grid-cols-12">
          <div class="col-span-12 lg:col-start-4 lg:col-span-8 xl:col-start-6 xl:col-span-6">
            <div class="grid grid-cols-1 md:grid-cols-2 rounded-full bg-[#D8DEE1] py-4 px-3">
              <div class="bg-[#F0F3F4] rounded-full p-2 flex flex-row gap-x-2 justify-center md:justify-start">
                <img class="w-[20px]" src="~/assets/icons/calendar.png" />
                <span>Round 2: Beach Hack Days</span>
              </div>
              <div class="p-2 text-center md:text-left">
                5 - 7 สิงหาคม 2565
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <img class="block mx-auto" src="~/assets/content/divider.png">
    <section id="reward" class="flex flex-col gap-y-6 p-2 items-center">
      <h1 class="text-[#00BFA6] text-center">รางวัล</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-y-2 text-center items-center">
        <img src="~/assets/content/human-right-3.png">
        <span class="text-xl md:text-2xl text-[#C8A95E]">รอไฟนอลรางวัล <br />เดี๋ยวจะดีไซน์เพิ่ม</span>
      </div>
    </section>
    <img class="block mx-auto" src="~/assets/content/divider.png">
    <section id="team" class="flex flex-col gap-y-6 p-2 items-center">
      <h1 class="text-[#00BFA6] text-center">ทีมงาน</h1>
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div v-for="member in teamMembers" class="text-center">
          <div class="mini-card flex flex-col bg-white p-4" :style="`transform: rotate(${member.degree})`">
            <img :src="member.img" class="w-[200px] h-[200px]" />
            <h4 class="font-bold">{{ member.nickname }}</h4>
          </div>
          <div class="flex flex-col mt-4">
            <h3>{{ member.name }}</h3>
            <h6>{{ member.position }}</h6>
          </div>
        </div>
      </div>
    </section>
    <img class="block mx-auto" src="~/assets/content/divider.png">
    <section id="contact-us" class="flex flex-col gap-y-6 p-2 items-center">
      <h1 class="text-[#00BFA6] text-center">ติดต่อเรา</h1>
      <div class="flex flex-col border border-1 border-black rounded-lg p-8 gap-6">
        <img class="w-[300px]" src="~/assets/content/beach-hack.png">
        <div id="contact-us-email">
          <b>Contact person:</b> <a href="#contact-us-email">orayasnh@gmail.com</a>
        </div>
        <div id="contact-us-facebook" class="flex flex-row gap-2">
          <img src="~/assets/icons/facebook.png" class="w-[28px]" />
          <a class="block" href="#contact-us-email">Hackathon Thailand</a>
        </div>
        <h1 class="text-[#00BFA6] text-center">หรือ</h1>
        <a class="w-[120px] block border border-1 border-black rounded-md py-2 px-4 text-xl mx-auto">สมัครเลย!</a>
      </div>
    </section>
  </div>
</template>

<script>
import Sea from 'assets/content/sea.png';
import SpsLogo from 'assets/content/sps.png';
import YsealiLogo from 'assets/content/yseali.png';
import USFlag from 'assets/content/us-flag.png';
import USEmbassy from 'assets/content/us-embassy.png';
import MAAP from 'assets/content/map.png';
import TUSAA from 'assets/content/tusaa-logo.png';
import HackTH from 'assets/content/hackTH.png';

import SittaProfile from 'assets/team-members/sitta-profile.jpg';
import JamesProfile from 'assets/team-members/james-profile.jpg';
import AmProfile from 'assets/team-members/am-profile.jpg';
import AnnProfile from 'assets/team-members/ann-profile.jpg';
import PhillipProfile from 'assets/team-members/blank-profile.png';
import RoseProfile from 'assets/team-members/rose-profile.jpg';
import PraewProfile from 'assets/team-members/praew-profile.jpeg';
import IttProfile from 'assets/team-members/blank-profile.png';

export default {
  name: 'Content',
  data() {
    return {
      problemStatement: [
        {
          img: Sea,
          title: '#กำแพงกันคลื่น',
          detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc donec sit id nunc lectus. Massa neque, velit magna rhoncus lacinia.'
        },
        {
          img: Sea,
          title: '#กำแพงกันคลื่น',
          detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc donec sit id nunc lectus. Massa neque, velit magna rhoncus lacinia.'
        },
        {
          img: Sea,
          title: '#กำแพงกันคลื่น',
          detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc donec sit id nunc lectus. Massa neque, velit magna rhoncus lacinia.'
        }
      ],
      partnerLogo: [
        {
          id: 'SpsLogo',
          img: SpsLogo,
        },
        {
          id: 'YsealiLogo',
          img: YsealiLogo,
        },
        {
          id: 'USFlag',
          img: USFlag,
        },
        {
          id: 'USEmbassy',
          img: USEmbassy,
        },
        {
          id: 'MAAP',
          img: MAAP,
        },
        {
          id: 'TUSAA',
          img: TUSAA,
        },
        {
          id: 'HackTH',
          img: HackTH,
        },
      ],
      teamMembers: [
        {
          img: SittaProfile,
          name: 'Sitta Marattanachai',
          nickname: 'Sindy',
          position: 'Project Manager',
          degree: '-2deg'
        },
        {
          img: JamesProfile,
          name: 'Kanin Kearpimy',
          nickname: 'James',
          position: 'Tech Lead',
          degree: '2deg'
        },
        {
          img: AmProfile,
          name: 'Oraya Saneaha',
          nickname: 'Am',
          position: 'Project Coordinator',
          degree: '0deg'
        },
        {
          img: AnnProfile,
          name: 'Hongsvinitkul',
          nickname: 'Ann',
          position: 'Project Expertise',
          degree: '1deg'
        },
        {
          img: PhillipProfile,
          name: 'Putthisak Panomsarnnarin',
          nickname: 'Phillip',
          position: 'Public Relations',
          degree: '2deg'
        },
        {
          img: RoseProfile,
          name: 'Punnapa Yoswaris',
          nickname: 'Rose',
          position: 'Content Creator',
          degree: '0deg'
        },
        {
          img: PraewProfile,
          name: 'Butsakan Nuankew',
          nickname: 'Praew',
          position: 'Designer',
          degree: '-2deg'
        },
        {
          img: IttProfile,
          name: 'Lorem ipsum',
          nickname: 'Itt',
          position: 'Specialist',
          degree: '1deg'
        },
      ]
    }
  },
}
</script>

<style scoped>
  .content > section {
    margin-top: 40px;
  }

  .arrow-up {
    width: 0;
    height: 0;
    bottom: 80px;
    left: 80px;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    position: absolute;
    border-bottom: 30px solid #C8A95E;
  }

  @media only screen and (max-width: 425px) {
    .arrow-up {
      bottom: 70px;
    }
  }
</style>
