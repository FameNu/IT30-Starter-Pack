interface LocationsParentAttributes {
  id: number, // using as key
  attributes: LocationsAttributes,
}

interface LocationsAttributes {
  name: string,
  description: string,
  locationDescription: string | null,
  linkMap: string,
  typeOfLocation: string[], // in case it is not array of id
  image: string, // in case it is path to image
}

export { type LocationsParentAttributes, type LocationsAttributes }
