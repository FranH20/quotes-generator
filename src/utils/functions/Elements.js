export const getElementByClassName = (classNameElement) => {
  return document.querySelector("." + classNameElement);
};

export const elementImageChange = (event, element) => {
  const url = URL.createObjectURL(event.target.files[0]);
  element.style.backgroundImage = `url("${url}")`;
};

export const elementOpacityChange = (event, element) => {
  element.style.filter = `brightness(${event.target.value}%)`;
};

export const elementTextColorChange = (event, element) => {
  element.style.color = event.target.value;
};

export const elementFontFamilyChange = (event, element) => {
  element.style.fontFamily = event.target.value;
};

export const elementFontSizeChange = (event, element, measure = "px") => {
  element.style.fontSize = event.target.value + measure;
};

export const elementFontWeightChange = (event, element) => {
  element.style.fontWeight = event.target.value;
};
