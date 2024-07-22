const getBgClass = (name: string | any, secondary?: boolean) => {
  name = name ? name.toLowerCase() : 'sproutbara'
  console.log('name', name)
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
    }
  }
}

export default getBgClass
