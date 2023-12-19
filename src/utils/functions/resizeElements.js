export function setResizeWindow(width = 0, height = 0, widthContainer = 0) {
  let newWidth = width;
  let newHeight = height
  while(newWidth > widthContainer) {
    newWidth = newWidth - (newWidth * 0.1)
    newHeight = newHeight - (newHeight * 0.1)
  }
  return [newWidth, newHeight]
}