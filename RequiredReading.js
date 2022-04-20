function requiredReading(numPages,pagesReadedForOneHour,daysToReadTheBook){
let timeToReadTheBook = numPages/pagesReadedForOneHour;
let numberOfHoursPerDay = timeToReadTheBook/daysToReadTheBook;

console.log(numberOfHoursPerDay);
}
requiredReading(212,
    20 ,
    2 
    );