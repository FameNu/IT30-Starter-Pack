import { type ImageLocationsAttributes } from '@/models/Locations'

export const getImageUrlFromServer = (image: ImageLocationsAttributes): string => {
  return `${import.meta.env.VITE_APP_BASE_URL}${image.data.attributes.url}`;
}