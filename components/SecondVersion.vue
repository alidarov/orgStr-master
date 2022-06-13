<template>
  <div>
    <div class="flex justify-center w-full h-full absolute top-1/3">
      <p v-if="getData == null">Ничего нет</p>
      <organization-chart
        class="bg-none h-full border-none"
        v-if="getData != null"
        :datasource="getData"
      ></organization-chart>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import OrganizationChart from 'vue-organization-chart'
import 'vue-organization-chart/dist/orgchart.css'

export default {
  name: 'SecondVersion',
  components: {
    OrganizationChart,
  },
  computed: {
    ...mapGetters(['getData']),
  },
  methods: {
    ...mapActions(['addData']),
  },
  async mounted() {
    await this.addData()
  },
  head() {
    return {
      title: 'Орг. структура',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description',
        },
      ],
    }
  },
}
</script>
