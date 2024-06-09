let mondaySleepHours = document.getElementById('monday');
let tuesdaySleepHours = document.getElementById('tuesday');
let wednesdaySleepHours = document.getElementById('wednesday');
let thursdaySleepHours = document.getElementById('thursday');
let fridaySleepHours = document.getElementById('friday');
let saturdaySleepHours = document.getElementById('saturday');
let sundaySleepHours = document.getElementById('sunday');
let totalSumDisplay = document.getElementById('totalSum');
let idealSleepHours = document.getElementById('idealHours');
let sleepDebtText = document.getElementById('sleepDebt');
let sleepHoursNumber = document.getElementById('sleepHoursText');
let alienMoreSleep = document.getElementById('alienMoreSleep');
let alien = document.getElementById('alien');


    const getIdealSleepHours = () => {
        const idealHours = parseInt(idealSleepHours.value);
        return idealHours * 7;
    }

    function getActualSleepHours () {
        let mondayValue = parseInt(mondaySleepHours.value);
        let tuesdayValue = parseInt(tuesdaySleepHours.value);
        let wednesdayValue = parseInt(wednesdaySleepHours.value);
        let thursdayValue = parseInt(thursdaySleepHours.value);
        let fridayValue = parseInt(fridaySleepHours.value);
        let saturdayValue = parseInt(saturdaySleepHours.value);
        let sundayValue = parseInt(sundaySleepHours.value);
        return mondayValue + tuesdayValue + wednesdayValue + thursdayValue + fridayValue + saturdayValue + sundayValue;
        }
        

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {

 
    totalSumDisplay.style.color = "text-darkcyan";
    totalSumDisplay.innerHTML =
      "Congratulations! You got the perfect amount of sleep. This Week You slept " +
      actualSleepHours +
      " hours.";
    sleepDebtText.style.display = "none";
    sleepText.style.display = "block";
    sleepHoursNumber.style.display = "block";
    document.getElementById("totalSumSleep").style.display = "block";
  } else if (actualSleepHours > idealSleepHours) {

    alien.style.display = 'block';
    alienMoreSleep.style.display = 'none';

    totalSumSleep.innerHTML = actualSleepHours;
    totalSumDisplay.style.color = "black";
    totalSumDisplay.innerHTML =
      "This is " +
      (actualSleepHours - idealSleepHours) +
      " more hours sleep than needed.";
      sleepDebtText.style.display = 'none';
    document.getElementById("sleepHoursText").style.display = "block";
    document.getElementById("sleep").style.display = "block";
    sleepText.style.display = "none";
  } else {
    alien.style.display = 'none';
    alienMoreSleep.style.display = 'block';
    
    totalSumSleep.innerHTML = actualSleepHours;
  totalSumDisplay.innerHTML =
    "You got " +
    (idealSleepHours - actualSleepHours) +
    " hours less sleep than you needed this week. Get some rest.";
  totalSumDisplay.style.color = "red";
  sleepDebtText.style.display = "block";
  document.getElementById("sleep").style.display = "none";
  sleepText.style.display = "none";
  
  }
};


