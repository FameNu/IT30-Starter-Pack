interface LocationsParentAttributes {
  attributes: LocationsAttributes,
}

interface LocationsAttributes {
  name: string,
  desc: string,
  linkMap: string,
  typeOfLocation: string,
  image: any,
}

export { type LocationsParentAttributes, type LocationsAttributes }
