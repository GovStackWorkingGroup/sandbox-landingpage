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

  return {
    scrollIntoView,
  }
}
