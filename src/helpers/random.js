function getRandomHexColor() {
  let hex = '#';
  for (let i = 0; i < 6; i += 1) {
    hex += Math.floor(Math.random() * 10);
  }

  return hex;
}

export default getRandomHexColor;
