const icons = require.context("@assets/icons", true)
const loadIcon = (iconName: string) => (icons(`./${iconName.replace(/\s+/g, "")}`).default)

export default loadIcon
