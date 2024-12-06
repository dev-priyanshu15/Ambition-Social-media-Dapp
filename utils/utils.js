/**
 * Converts a timestamp to a formatted date and time string
 * @param {number|string} time - The timestamp to be converted
 * @returns {string} A formatted string containing the date and time
 */
export const convertTime = (time) => {
  const date = new Date(time);
  const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;

  return formattedDate;
};

export const shortenAddress = (address) =>
  `${address?.slice(0, 5)}...${address?.slice(address.length - 4)}`;
