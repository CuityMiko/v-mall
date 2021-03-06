import { getPosition } from '@/utils/util'
import { TOGGLE_SEARCH } from '@/store/mutation-types'

export default {
  name: 'header',
  props: ['colorIsActive'],
  data() {
    return {
      cityName: '',
    }
  },
  created() {
    getPosition().then(e => {
      if (e && e.status === 'complete') {
        this.cityName = e.result.addressComponent.city
      }
    })
  },
  methods: {
    showSearch() {
      this.$store.commit(TOGGLE_SEARCH, true)
    },
  },
}
