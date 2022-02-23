const day = new Map();
day.set(1, "Monday");
day.set(2, "Tuesday");
day.set(3, "Wednesday");
day.set(4, "Thursday");
day.set(5, "Friday");
day.set(6, "Saturday");
day.set(7, "Sunday");

class date {
  static getDayOfWeek(num) {
    console.log(num);
    return day.get(num);
  }
}

export default date;
