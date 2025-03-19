import { keystaticDownloadLink } from './DownloadLink/keystatic.DownloadLink'
import { keystaticImageDoubleConfig } from './ImageDouble/keystatic.ImageDouble.config'
import { keystaticImageSingleHorizontalConfig } from './ImageSingleHorizontal/keystatic.ImageSingleHorizontal.config'
import { keystaticImageSingleSquareConfig } from './ImageSingleSquare/keystatic.ImageSingleSquare.config'
import { keystaticImageSingleVerticalConfig } from './ImageSingleVertical/keystatic.ImageSingleVertical.config'
import { keystaticTextLinkArrowConfig } from './TextLinkArrow/keystatic.TextLinkArrow.config'

export const mdxComponentsKeystatic = (imagePath: string) => {
  return {
    TextLinkArrow: keystaticTextLinkArrowConfig,
    ImageSingleVertical: keystaticImageSingleVerticalConfig(imagePath),
    ImageSingleHorizontal: keystaticImageSingleHorizontalConfig(imagePath),
    ImageSingleSquare: keystaticImageSingleSquareConfig(imagePath),
    ImageDouble: keystaticImageDoubleConfig(imagePath),
    DownloadLink: keystaticDownloadLink,
  }
}
