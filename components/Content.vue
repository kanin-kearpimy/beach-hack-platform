<template>
  <div class="content flex flex-col gap-y-11">
    <section id="problem-statement" class="flex flex-col gap-y-12 items-center">
      <div class="relative topic-header-wrapper">
        <h1 class="text-[#00BFA6] text-center">ตัวอย่างปัญหา</h1>
        <img src="~/assets/content/underline.png" class="absolute right-0">
      </div>
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
<!--      <a class="text-[#C8A95E] underline-offset-2 underline" href="https://www.facebook.com/Beachforlife.BFL/">ขอบคุณภาพจากเพจ 'Beach for Life'</a>-->
    </section>
    <img class="block mx-auto" src="~/assets/content/divider.png">
    <section id="how-participate" class="flex flex-col items-center gap-y-12">
      <div class="relative topic-header-wrapper">
        <h1 class="text-[#00BFA6] text-center">เราต้องการคุณ</h1>
        <img src="~/assets/content/underline.png" class="absolute left-[50%] translate-x-[-50%]">
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2">
        <div class="flex flex-col gap-y-4 lg:mr-8">
          <div class="flex flex-col lg:flex-row gap-x-4 gap-y-4 items-center">
            <div class="text-center lg:text-right grow w-full">
              <h3>"ฉันเป็นคนรักทะเล"</h3>
              <ul>
                <li>ทะเลคือพื้นที่ของฉัน <br /> และอยากเห็นชายหาด <br /> อยู่คู่กับเราไปนานๆ</li>
              </ul>
            </div>
            <img class="order-first lg:order-last md:w-[245px] w-[122px]" src="~/assets/content/illustrations.png">
          </div>
          <div class="flex flex-col lg:flex-row gap-x-4 gap-y-4 items-center">
            <div class="text-center lg:text-right grow w-full">
              <h3>“ฉันเข้าใจวิทยาศาสตร์<br/>และเทคโนโลยี”</h3>
              <ul>
                <li>เล็งเห็นโอกาสในการนำความรู้<br/>และความหลงใหลในด้าน<br/>การจัดการชายฝั่งยั่งยืน<br/>มาลงมือทำงานจริง</li>

              </ul>
            </div>
            <img class="order-first lg:order-last md:w-[245px] w-[122px]" src="~/assets/content/illustrations-(1).png">
          </div>
        </div>
        <div class="flex flex-col gap-y-4 gap-x-4 lg:mt-20 lg:ml-8">
          <div class="flex flex-col lg:flex-row gap-x-4 gap-y-4 items-center">
            <img class="md:w-[245px] w-[122px]" src="~/assets/content/illustrations-(2).png">
            <div class="text-center lg:text-left grow w-full">
              <h3>“ฉันชอบวางแผน”</h3>
              <ul>
                <li>ชื่นชอบการวิเคราะห์และวางแผน<br />จัดการชายฝั่งยั่งยืนในระยะยาว</li>

              </ul>
            </div>
          </div>
          <div class="flex flex-col">
            <div class="flex flex-col lg:flex-row gap-y-4 gap-x-4 items-center">
              <img class="md:w-[245px] w-[122px]" src="~/assets/content/illustrations-(3).png">
              <div class="text-center lg:text-left grow w-full">
                <h3>“ฉันแก้ปัญหา<br />ด้วยการออกแบบ”</h3>
                <ul>
                  <li>รักการออกแบบเพื่อเน้นการฟื้นฟู<br/>ชายฝั่งที่ถูกกัดเซาะและเพิ่ม<br/>ประสบการณ์ใหม่ให้คนท้องถิ่น<br/> นักท่องเที่ยวและสิ่งแวดล้อม</li>
                </ul>
              </div>
            </div>
            <div class="w-full bg-[#C8A95E] rounded-full mt-12 relative">
              <p class="text-md md:text-xl text-white p-3 md:py-4 md:px-[32px] text-center md:text-left">
                นอกจากนี้ไม่ว่าคุณจะเป็นใครหรือมีความรู้ในสาขาไหน หากคุณเป็นอีกหนึ่งคนที่อยากมีส่วนร่วมในการแก้ปัญหาด้านชายฝั่งทะเล เราต้องการคุณ!
              </p>
              <div class="arrow-up"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <img class="block mx-auto" src="~/assets/content/divider.png">
    <section id="partner-logo" class="flex flex-col gap-y-12 items-center p-4">
      <div class="relative topic-header-wrapper">
        <h1 class="text-[#00BFA6] text-center">ผู้สนับสนุนโครงการ</h1>
        <img src="~/assets/content/underline.png" class="absolute left-[50%] translate-x-[-50%]">
      </div>
      <div class="grid grid-cols-2 gap-8 md:grid-cols-4 text-center justify-content-center justify-item-center items-center">
        <img
          v-for="logo in partnerLogo"
          v-bind:key="logo.id"
          :src="logo.img"
          class="mx-auto">
      </div>
    </section>
    <img class="block mx-auto" src="~/assets/content/divider.png">
    <section id="timeline" class="flex flex-col gap-y-12 p-2">
      <div class="relative topic-header-wrapper">
        <h1 class="text-[#00BFA6] text-center">ระยะเวลา + รายละเอียดงาน</h1>
        <img src="~/assets/content/underline.png" class="absolute left-[50%] translate-x-[-50%]">
      </div>
      <div class="flex flex-col gap-y-2">
        <div class="grid grid-cols-12">
          <div class="col-span-12 lg:col-start-1 lg:col-span-7 xl:col-start-3 xl:col-span-6 relative">
            <div class="grid grid-cols-1 md:grid-cols-2 rounded-lg lg:rounded-full bg-[#D8DEE1] py-4 px-3">
              <div class="bg-[#F0F3F4] rounded-lg lg:rounded-full p-2 flex flex-row gap-x-2 justify-center md:justify-start">
                <img class="w-[20px]" src="~/assets/icons/calendar.png" />
                <span>Register: Applications Open</span>
              </div>
              <div class="p-2 text-center md:text-left">
                1 พฤษภาคม - 15 มิถุนายน 2565
              </div>
            </div>
            <img class="lg:hidden w-[300px] mx-auto mt-4" src="~/assets/timeline/timeline-mb-register.png">
            <img class="hidden lg:block lg:absolute lg:top-[-10px] lg:right-[-300px] w-[300px] mx-auto mt-4" src="~/assets/timeline/timeline-register.png">
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-y-2">
        <div class="grid grid-cols-12">
          <div class="col-span-12 lg:col-start-2 lg:col-span-7 xl:col-start-4 xl:col-span-6 relative">
            <div class="grid grid-cols-1 md:grid-cols-2 rounded-lg lg:rounded-full bg-[#D8DEE1] py-4 px-3">
              <div class="bg-[#F0F3F4] rounded-lg lg:rounded-full p-2 flex flex-row gap-x-2 justify-center md:justify-start">
                <img class="w-[20px]" src="~/assets/icons/calendar.png" />
                <span>Round 1: Online Training Day</span>
              </div>
              <div class="p-2 text-center md:text-left">
                9 - 10 กรกฎาคม 2565
              </div>
            </div>
            <img class="lg:hidden w-[300px] mx-auto mt-4" src="~/assets/timeline/timeline-mb-online.png">
            <img class="hidden lg:block lg:absolute lg:top-[-10px] lg:right-[-300px] w-[300px] mx-auto mt-4" src="~/assets/timeline/timeline-online.png">
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-y-2">
        <div class="grid grid-cols-12">
          <div class="col-span-12 lg:col-start-4 lg:col-span-7 xl:col-start-6 xl:col-span-6 relative">
            <div class="grid grid-cols-1 md:grid-cols-2 rounded-lg lg:rounded-full bg-[#D8DEE1] py-4 px-3">
              <div class="bg-[#F0F3F4] rounded-lg lg:rounded-full p-2 flex flex-row gap-x-2 justify-center md:justify-start">
                <img class="w-[20px]" src="~/assets/icons/calendar.png" />
                <span>Round 2: Beach Hack Days</span>
              </div>
              <div class="p-2 text-center md:text-left">
                5 - 7 สิงหาคม 2565
              </div>
            </div>
            <img class="lg:hidden w-[300px] mx-auto mt-4" src="~/assets/timeline/timeline-mb-hack.png">
            <img class="hidden lg:block lg:absolute lg:right-[-100px] w-[300px] mx-auto mt-4" src="~/assets/timeline/timeline-hack.png">
          </div>
        </div>
      </div>
    </section>
    <img class="block lg:mt-10 mx-auto" src="~/assets/content/divider.png">
    <section id="reward" class="flex flex-col gap-y-12 p-2 items-center">
      <div class="relative topic-header-wrapper">
        <h1 class="text-[#00BFA6] text-center">รางวัล</h1>
        <img src="~/assets/content/underline.png" class="absolute left-[50%] translate-x-[-50%]">
      </div>
      <div class="grid grid-cols-1 md:grid-cols-1 gap-y-2 text-center items-center">
        <div id="reward-sub" class="relative flex w-[300px] h-[300px] md:w-[380px] md:h-[300px]">
<!--          <img class="absolute" src="~/assets/content/human-right-3.png">-->
          <span class="m-auto text-xl md:text-2xl text-[#C8A95E]">
            รางวัลรวมมูลค่า <br />100,000 บาท
          </span>
        </div>
      </div>
    </section>
    <img class="block mx-auto" src="~/assets/content/divider.png">
    <section id="appreciation" class="flex flex-col gap-y-12 p-2 items-center">
      <div class="relative topic-header-wrapper">
        <h1 class="text-[#00BFA6] text-center">ขอขอบคุณ</h1>
        <img src="~/assets/content/underline.png" class="absolute left-[50%] translate-x-[-50%]">
      </div>
      <div class="flex flex-col gap-y-2 text-center">
        <h3 class="font-light">ภาพและความร่วมมือจากเพจ</h3>
        <img class="w-[180px] mx-auto" src="~/assets/appreication/beach-for-life.png" />
        <div class="mt-4 flex flex-col text-center">
          <a class="text-xl underline" href="https://www.facebook.com/Beachforlife.BFL/">Beach for life</a>
          <span class="mt-2">ปัจจุบันกำลังช่วย <u>`หาดสมิหลา`</u> และ <u>`หาดแม่รำพึง`</u></span>
          <span class="mt-6">และ <a href="http://www.beachlover.net" class="underline">www.beachlover.net</a></span>
        </div>
      </div>
    </section>
    <img class="block mx-auto" src="~/assets/content/divider.png">
    <section id="team" class="flex flex-col gap-y-12 p-2 items-center">
      <div class="relative topic-header-wrapper">
        <h1 class="text-[#00BFA6] text-center">ทีมงาน</h1>
        <img src="~/assets/content/underline.png" class="absolute left-[50%] translate-x-[-50%]">
      </div>
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div v-for="member in teamMembers" class="text-center">
          <div class="mini-card flex flex-col bg-white p-4" :style="`transform: rotate(${member.degree})`">
            <img :src="member.img" class="w-[200px] h-[200px]" />
            <h4 class="font-bold">{{ member.nickname }}</h4>
            <h6>{{ member.quote }}</h6>
          </div>
          <div class="flex flex-col mt-4">
            <h3>{{ member.name }}</h3>
            <h6>{{ member.position }}</h6>
          </div>
        </div>
      </div>
    </section>
    <img class="block mx-auto" src="~/assets/content/divider.png">
    <section id="contact-us" class="flex flex-col gap-y-12 p-2 items-center">
      <div class="relative topic-header-wrapper">
        <h1 class="text-[#00BFA6] text-center">ติดต่อเรา</h1>
        <img src="~/assets/content/underline.png" class="absolute left-[50%] translate-x-[-50%]">
      </div>
      <div class="flex flex-col border border-1 border-black rounded-lg p-8 gap-6">
        <img class="w-[300px]" src="~/assets/content/beach-hack.png">
        <div id="contact-us-email">
          <b>Contact person:</b> <a href="#contact-us-email">orayasnh@gmail.com</a>
        </div>
        <div id="contact-us-facebook" class="flex flex-row gap-2">
          <img src="~/assets/icons/facebook.png" class="w-[28px]" />
          <a class="block" href="#contact-us-email">Hackathon Thailand</a>
        </div>
        <div class="topic-header-wrapper">
          <h1 class="text-[#00BFA6] text-center">หรือ</h1>
        </div>
        <a :href="registrationLink" class="w-[120px] block border border-1 border-black rounded-md py-2 px-4 text-xl mx-auto">สมัครเลย!</a>
      </div>
    </section>
  </div>
</template>

<script>
import LadderProblem from 'assets/content/ladder-problem.png';
import DamProblem from 'assets/content/dam-problem.png';
import ErosionProblem from 'assets/content/erosion-problem.png';
import SpsLogo from 'assets/content/sps.png';
import YsealiLogo from 'assets/content/yseali.png';
import USFlag from 'assets/content/us-flag.png';
import USEmbassy from 'assets/content/us-embassy.png';
import MAAP from 'assets/content/map.png';
import TUSAA from 'assets/content/tusaa-logo.png';
import HackTH from 'assets/content/hackTH.png';

import SittaProfile from 'assets/team-members/sindy-profile.png';
import JamesProfile from 'assets/team-members/james-profile.png';
import AmProfile from 'assets/team-members/am-profile.png';
import AnnProfile from 'assets/team-members/ann-profile.png';
import RoseProfile from 'assets/team-members/rose-profile.png';
import PraewProfile from 'assets/team-members/praew-profile.png';
import IttProfile from 'assets/team-members/itt-profile.png';

export default {
  name: 'Content',
  data() {
    return {
      problemStatement: [
        {
          img: LadderProblem,
          title: '#คลื่นกัดเซาะชายฝั่ง',
          detail: 'สภาวะอากาศที่เปลี่ยนไป น้ำทะเลที่สูงขึ้น ภัยพิบัติทางธรรมชาติ รวมไปถึงสิ่งก่อสร้างจากมนุษย์ล้วนมีผลต่อการเกิดคลื่นกัดเซาะชายฝั่งที่ส่งผลต่อทั้งผู้คน สังคม และสิ่งมีชีวิตบริเวณชายฝั่ง'
        },
        {
          img: DamProblem,
          title: '#เขื่อนกันคลื่น',
          detail: 'โครงสร้างคอนกรีตที่ถูกสร้างขึ้นตามแนวชายฝั่ง อาจช่วยป้องกันการกัดเซาะในพื้นที่หนึ่ง แต่อาจสร้างปัญหาให้อีกพื้นที่หนึ่ง จากทิศทางของคลื่นเปลี่ยนไป จนทำให้เกิดการเลี้ยวเบนของกระแสน้ำเมื่อสิ้นสุดแนวเขื่อนกันคลื่น'
        },
        {
          img: ErosionProblem,
          title: '#กำแพงกันคลื่นแบบขั้นบันได',
          detail: 'ระบบนิเวศน์บริเวณชายหาดที่เปลี่ยนไป สัตว์ทะเลไม่สามารถขึ้นมาวางไข่ได้ นักท่องเที่ยวอาจเกิดอุบัติเหตุจากตะไคร่น้ำบริเวณขั้นบันได และการทำมาค้าขายของคนท้องถิ่นที่ได้รับผลกระทบ'
        }
      ],
      partnerLogo: [
        {
          id: 'USFlag',
          img: USFlag,
        },
        {
          id: 'USEmbassy',
          img: USEmbassy,
        },
        {
          id: 'YsealiLogo',
          img: YsealiLogo,
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
          id: 'SpsLogo',
          img: SpsLogo,
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
          quote: '"นักเซิร์ฟผู้รักงาน"',
          nickname: 'Sindy',
          position: 'Project Manager',
          degree: '-2deg'
        },
        {
          img: JamesProfile,
          name: 'Kanin Kearpimy',
          quote: '"นักแกะกุ้งในตำนาน"',
          nickname: 'James',
          position: 'Tech Lead',
          degree: '2deg'
        },
        {
          img: AmProfile,
          name: 'Oraya Saneaha',
          quote: '"พายเรือไปกินกุ้ง"',
          nickname: 'Am',
          position: 'Project Coordinator',
          degree: '0deg'
        },
        {
          img: AnnProfile,
          name: 'Arriya Hongsvinitkul',
          quote: '"ข้างหน้าน่ะเขาแต่ข้างหลังเราน่ะทะเล"',
          nickname: 'Ann',
          position: 'Project Expert',
          degree: '2deg'
        },
        {
          img: RoseProfile,
          name: 'Punnapa Yoswaris',
          quote: '"ผู้รอดชีวิตจากไททานิค"',
          nickname: 'Rose',
          position: 'Social Media and Content Lead',
          degree: '0deg'
        },
        {
          img: PraewProfile,
          name: 'Butsakan Nuankew',
          quote: '"โดนทวงงานที่ริมทะเล"',
          nickname: 'Praew',
          position: 'Design Lead',
          degree: '-2deg'
        },
        {
          img: IttProfile,
          name: 'Patiparn Boontarig',
          quote: '"ผู้ซับน้ำตานางเงือก"',
          nickname: 'Itt',
          position: 'Project Advisor',
          degree: '1deg'
        },
      ],
      registrationLink: 'https://bit.ly/3OM9tsk'
    }
  },
}
</script>

<style scoped>
  .content > section {
    margin-top: 10px;
  }

  #reward-sub {
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-image: url("assets/content/human-right-3.png");
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

  @media only screen and (max-width: 320px) {
    .arrow-up {
      bottom: 110px;
    }

    .topic-header-wrapper h1 {
      font-size: 1.65rem;
    }
  }

  @media only screen and (max-width: 425px) and (min-width: 321px) {
    .arrow-up {
      bottom: 90px;
    }

    .topic-header-wrapper h1 {
      font-size: 1.85rem;
    }
  }


  @media only screen and (max-width: 1024px) and (min-width: 769px) {
    .arrow-up {
      bottom: 110px;
    }
  }

  @media only screen and (max-width: 1440px) and (min-width: 1024px) {
    .arrow-up {
      bottom: 115px;
    }
  }
</style>
