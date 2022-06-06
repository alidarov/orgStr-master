<template>
  <div>
    <div class="fixed left-0 top-0 pl-4 w-full bg-header setDrop z-50">
      <div class="flex justify-between">
        <div class="flex items-center">
          <img class="mr-8" src="../assets/img/logo.png" alt="" />
          <p class="text-sm">Организационная структура «Apple City Corps»</p>
        </div>
        <div class="flex items-center relative">
          <img
            class="cursor-pointer"
            src="../assets/img/downloadPDF.png"
            alt=""
          />
          <div
            class="flex transition-all items-center hover:bg-mainCol hover:cursor-pointer hover:text-white py-5 px-7 ml-4"
            @click="showDrop = !showDrop"
          >
            <p class="mr-2 ml-4">{{ zoomNumber }}%</p>
            <i
              :class="{ 'rotate-180': showDrop == 1 }"
              class="fa-solid fa-chevron-down transition-all"
            ></i>
          </div>
          <div
            v-if="showDrop == 1"
            class="mainDrop absolute min-w-full right-3 top-full bg-drop setDrop shadow-head"
          >
            <div class="py-4 px-5 border-b border-mainCol">
              <input
                :placeholder="zoomNumber"
                v-model="tempData"
                v-on:keyup.enter="onEnter"
                type="text"
                class="px-4 py-2 w-full"
              />
            </div>
            <div class="py-4 border-b border-mainCol">
              <div
                class="flex items-center justify-between py-4 px-5 hover:text-mainCol hover:bg-lightBack cursor-pointer"
              >
                <p class="w-full text-sm">Приблизить</p>
                <p class="w-full text-sm text-right">Ctrl + Scroll up</p>
              </div>
              <div
                class="flex items-center justify-between py-4 px-5 hover:text-mainCol hover:bg-lightBack cursor-pointer"
              >
                <p class="w-full text-sm">Отдалить</p>
                <p class="w-full text-sm text-right">Ctrl + Scroll down</p>
              </div>
              <div
                class="flex items-center justify-between py-4 px-5 hover:text-mainCol hover:bg-lightBack cursor-pointer"
              >
                <p class="w-full text-sm">По размеру экрана</p>
              </div>
              <div
                @click="setZoomNumber(25)"
                class="flex items-center justify-between py-4 px-5 hover:text-mainCol hover:bg-lightBack cursor-pointer"
              >
                <p class="w-full text-sm">Приблизить на 25%</p>
              </div>
              <div
                @click="setZoomNumber(50)"
                class="flex items-center justify-between py-4 px-5 hover:text-mainCol hover:bg-lightBack cursor-pointer"
              >
                <p class="w-full text-sm">Приблизить на 50%</p>
              </div>
              <div
                @click="setZoomNumber(100)"
                class="flex items-center justify-between py-4 px-5 hover:text-mainCol hover:bg-lightBack cursor-pointer"
              >
                <p class="w-full text-sm">Приблизить на 100%</p>
              </div>
            </div>
            <div>
              <div
                @click="cardStatus = 1"
                class="flex items-center justify-between py-4 px-5 hover:text-mainCol hover:bg-lightBack cursor-pointer"
              >
                <p class="w-full text-sm">Карточки с полной информацией</p>
                <p v-if="cardStatus == 1" class="w-4 text-sm text-right">
                  <i class="fa-solid fa-check"></i>
                </p>
              </div>
              <div
                @click="cardStatus = 2"
                class="flex items-center justify-between py-4 px-5 hover:text-mainCol hover:bg-lightBack cursor-pointer"
              >
                <p class="w-full text-sm">Карточки с укороченной информацией</p>
                <p v-if="cardStatus == 2" class="w-4 text-sm text-right">
                  <i class="fa-solid fa-check"></i>
                </p>
              </div>
              <div
                @click="cardStatus = 3"
                class="flex items-center justify-between py-4 px-5 hover:text-mainCol hover:bg-lightBack cursor-pointer"
              >
                <p class="w-full text-sm">Карточки с минимальной информацией</p>
                <p v-if="cardStatus == 3" class="w-4 text-sm text-right">
                  <i class="fa-solid fa-check"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="fixed left-0 top-16 h-screen py-2 px-5 bg-header">
      <div class="my-5 hover:cursor-pointer">
        <img class="w-10 h-10" src="../assets/img/navigation.png" alt="" />
        <p class="text-center text-sm">ТОП</p>
      </div>
      <div class="my-5 hover:cursor-pointer">
        <img class="w-10 h-10" src="../assets/img/navigation.png" alt="" />
        <p class="text-center text-sm">CAD</p>
      </div>
      <div class="my-5 hover:cursor-pointer">
        <img class="w-10 h-10" src="../assets/img/navigation.png" alt="" />
        <p class="text-center text-sm">GD</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mainHeader',
  data() {
    return {
      showDrop: 0,
      cardStatus: 1,
      zoomNumber: null,
      tempData: null,
    }
  },
  methods: {
    setZoomNumber(num) {
      this.zoomNumber = parseInt(this.zoomNumber) + num
      localStorage.setItem('zoomStatus', this.zoomNumber)
    },
    onEnter() {
      this.zoomNumber = this.tempData
      localStorage.setItem('zoomStatus', this.zoomNumber)
    },
  },
  mounted() {
    if (localStorage.getItem('zoomStatus') != null) {
      console.log('Уже записано')
    } else {
      localStorage.setItem('zoomStatus', 100)
    }
    this.zoomNumber = localStorage.getItem('zoomStatus')
  },
}
</script>
