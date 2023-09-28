export const getRangeLabel = (
  firstRangeValue: number | undefined,
  secondRangeValue: number | undefined,
) => {
  const inputRange = [];
  if (firstRangeValue !== undefined) {
    const firstRangeLabel = `From ${firstRangeValue}`;
    inputRange.push(firstRangeLabel);
  }

  if (secondRangeValue !== undefined) {
    const secondRangeLabel = `To ${secondRangeValue}`;
    inputRange.push(secondRangeLabel);
  }

  if (inputRange.length === 0) {
    return undefined;
  }

  const label = inputRange.join(' ');

  return label;
};
