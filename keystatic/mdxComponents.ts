import ImageDouble from './ImageDouble/ImageDouble.astro'
import { keystaticImageDoubleConfig } from './ImageDouble/keystatic.ImageDouble.config'
import ImageSingleHorizontal from './ImageSingleHorizontal/ImageSingleHorizontal.astro'
import { keystaticImageSingleHorizontalConfig } from './ImageSingleHorizontal/keystatic.ImageSingleHorizontal.config'
import ImageSingleSquare from './ImageSingleSquare/ImageSingleSquare.astro'
import { keystaticImageSingleSquareConfig } from './ImageSingleSquare/keystatic.ImageSingleSquare.config'
import ImageSingleVertical from './ImageSingleVertical/ImageSingleVertical.astro'
import { keystaticImageSingleVerticalConfig } from './ImageSingleVertical/keystatic.ImageSingleVertical.config'
import { keystaticTextLinkArrowConfig } from './TextLinkArrow/keystatic.TextLinkArrow.config'
import TextLinkArrow from './TextLinkArrow/TextLinkArrow.astro'

export const mdxComponentsKeystatic = (imagePath: string) => {
  return {
    TextLinkArrow: keystaticTextLinkArrowConfig,
    ImageSingleVertical: keystaticImageSingleVerticalConfig(imagePath),
    ImageSingleHorizontal: keystaticImageSingleHorizontalConfig(imagePath),
    ImageSingleSquare: keystaticImageSingleSquareConfig(imagePath),
    ImageDouble: keystaticImageDoubleConfig(imagePath),
  }
}

export const mdxComponentsAstro = {
  TextLinkArrow,
  ImageSingleVertical,
  ImageSingleHorizontal,
  ImageSingleSquare,
  ImageDouble,
}
