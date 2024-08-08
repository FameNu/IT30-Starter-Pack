interface LocationsParentAttributes {
  id: number // using as key
  attributes: LocationsAttributes
}

interface LocationsAttributes {
  name: string
  description: string
  locationDescription: string | null
  linkMap: string
  typeOfLocation: string
  image: ImageLocationsAttributes
  categories: CategoriesAttributes
}

interface ImageLocationsAttributes {
  data: {
    attributes: {
      url: string
    }
  }
}

interface CategoriesAttributes {
  data: {
    attributes: {
      name: string
    }
  }[]
}

export { type LocationsParentAttributes, type ImageLocationsAttributes }
