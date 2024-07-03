const getBgClass = (name: string | any) => {
  switch (name) {
    case 'Sproutbara':
      return 'bg-sproutbara'
    case 'Sunnybara':
      return 'bg-sunnybara'
    case 'Rainybara':
      return 'bg-rainybara'
    case 'Russetbara':
      return 'bg-russetbara'
    case 'Cozybara':
      return 'bg-cozybara'
    default:
      return ''
  }
}

export default getBgClass
