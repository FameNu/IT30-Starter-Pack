const getBgClass = (name: string | any, secondary?: boolean) => {
  name = name.toLowerCase()
  let bgClass = ''
  switch (name) {
    case 'sproutbara':
      bgClass = 'bg-sproutbara'
      break
    case 'sunnybara':
      bgClass = 'bg-sunnybara'
      break
    case 'rainybara':
      bgClass = 'bg-rainybara'
      break
    case 'russetbara':
      bgClass = 'bg-russetbara'
      break
    case 'cozybara':
      bgClass = 'bg-cozybara'
      break
  }
  return secondary ? `${bgClass}-sec` : bgClass
}

export default getBgClass
