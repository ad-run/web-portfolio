const howOld = (age, year) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  let birthYear = currentYear - age;
  if (year < birthYear) {
    let yearDifference = birthYear - year;
    return `The year ${year} was ${yearDifference} years before you were born.`;
  } else if (year > birthYear && year > currentYear) {
    let yearDifference = year - birthYear;
    if (yearDifference < 110) {
      return `You will be ${yearDifference} in the year ${year}.`;
    } else return "You lived more then 109...realy? Need to say RIP. Amen.";
  } else if (year > birthYear && year < 2024) {
    let yearDifference = year - birthYear;
    return `You were ${yearDifference} in the year ${year}.`;
  }
};
console.log(howOld(48, 1999));
