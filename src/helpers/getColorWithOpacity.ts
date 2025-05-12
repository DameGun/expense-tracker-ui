export const getColorWithOpacity = (
  color: string,
  opacity: string | number
) => {
  let opacityValue: string;

  if (typeof opacity === 'string') {
    const parsedNumber = Number(opacity.replace('%', ''));

    opacityValue = parsedNumber === 100 ? '' : parsedNumber.toString();
  } else {
    opacityValue = opacity === 1 ? '' : (opacity * 100).toString();
  }

  return `${color}${opacityValue}`;
};
