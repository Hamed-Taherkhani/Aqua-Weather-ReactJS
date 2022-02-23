const day = new Map();
day.set(0, "Monday");
day.set(1, "Tuesday");
day.set(2, "Wednesday");
day.set(3, "Thursday");
day.set(4, "Friday");
day.set(5, "Saturday");
day.set(6, "Sunday");

class date {
  static getDayOfWeek(num) {
    num = num % 7;
    return day.get(num);
  }
}

export default date;
