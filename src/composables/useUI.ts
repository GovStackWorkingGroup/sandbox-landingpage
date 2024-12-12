import { useRouter } from 'vue-router'

export const useUI = () => {
  const scrollIntoView = (className: string, yOffset = 190) => {
    const target = document.querySelector(`.${className}`)
    if (target) {
      const yPosition = target.getBoundingClientRect().top + window.scrollY
      const targetPosition = yPosition - yOffset
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      })
    }
  }

  const router = useRouter()
  const navigate = (target?: string) => {
    const elem = target && document.querySelector(`#${target}`)

    if (elem) {
      scrollIntoView(target)
    } else {
      router.push(`/#${target}`)
    }
  }

  return {
    navigate,
    scrollIntoView,
  }
}
