const images = require.context("@assets/images", true)
const loadImage = (imageName: string) => (images(`./${imageName}`).default)

export default loadImage
