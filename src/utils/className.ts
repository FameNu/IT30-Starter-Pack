import router from '@/router'
import { useRoute } from 'vue-router'

const goFuckingHome = () => {
  // alert('wrong way!')
  router.push('/not-found')
}

const getBgClass = (name: string | any, secondary?: boolean): string => {
  name = name ? name.toLowerCase() : 'cockandballs'
  if (secondary) {
    switch (name) {
      case 'sproutbara':
        return 'bg-sproutbara-sec'
      case 'sunnybara':
        return 'bg-sunnybara-sec'
      case 'rainybara':
        return 'bg-rainybara-sec'
      case 'russetbara':
        return 'bg-russetbara-sec'
      case 'cozybara':
        return 'bg-cozybara-sec'
      default:
        if (useRoute().path === `/boards`) {
          return ''
        } else {
          goFuckingHome()
          return ''
        }
    }
  } else {
    switch (name) {
      case 'sproutbara':
        return 'bg-sproutbara'
      case 'sunnybara':
        return 'bg-sunnybara'
      case 'rainybara':
        return 'bg-rainybara'
      case 'russetbara':
        return 'bg-russetbara'
      case 'cozybara':
        return 'bg-cozybara'
      default:
        if (useRoute().path === `/boards`) {
          return ''
        } else {
          goFuckingHome()
          return ''
        }
    }
  }
}

export default getBgClass
