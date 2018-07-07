import { arrRotate, rotateByMonth, rotateByWeek, monthsDiff } from "./funcs";

describe("Get months difference between two dates according to an interval", () => {
  it("should return the number of months between two dates when no interval given", () => {
    expect(monthsDiff("2018-01-01", "2018-01-01")).toBe(0);
    expect(monthsDiff("2018-01-01", "2018-01-31")).toBe(0);
    expect(monthsDiff("2018-01-01", "2018-02-01")).toBe(1);
    expect(monthsDiff("2018-01-01", "2019-01-01")).toBe(12);
    expect(monthsDiff("2018-01-01", "2019-02-01")).toBe(13);
  });
  it("should return the number of quarters between two dates when interval is 3", () => {
    expect(monthsDiff("2018-01-01", "2018-01-01", 3)).toBe(0);
    expect(monthsDiff("2018-01-01", "2018-02-01", 3)).toBe(0);
    expect(monthsDiff("2018-01-01", "2018-03-01", 3)).toBe(0);
    expect(monthsDiff("2018-01-01", "2018-04-01", 3)).toBe(1);
    expect(monthsDiff("2018-01-01", "2018-07-01", 3)).toBe(2);
    expect(monthsDiff("2018-01-01", "2018-12-01", 3)).toBe(3);
  });
  it("should return the number of semesters between two dates when interval is 6", () => {
    expect(monthsDiff("2018-01-01", "2018-01-01", 6)).toBe(0);
    expect(monthsDiff("2018-01-01", "2018-06-01", 6)).toBe(0);
    expect(monthsDiff("2018-01-01", "2018-07-01", 6)).toBe(1);
    expect(monthsDiff("2018-01-01", "2018-12-01", 6)).toBe(1);
    expect(monthsDiff("2018-01-01", "2019-01-01", 6)).toBe(2);
  });
});

describe("Rotate an array", () => {
  it("should rotate an array according to the offset", () => {
    const arr = ["a", "b", "c", "d", "e"];
    const arrCases = [
      { offset: 0, result: arr },
      { offset: 1, result: ["e", "a", "b", "c", "d"] },
      { offset: -1, result: ["b", "c", "d", "e", "a"] },
      { offset: 3, result: ["c", "d", "e", "a", "b"] },
      { offset: -3, result: ["d", "e", "a", "b", "c"] },
      { offset: 12, result: ["d", "e", "a", "b", "c"] },
      { offset: -12, result: ["c", "d", "e", "a", "b"] },
      { offset: arr.length, result: arr },
      { offset: -arr.length, result: arr },
      { offset: arr.length * 2, result: arr },
      { offset: -arr.length * 2, result: arr }
    ];
    arrCases.forEach(arrCase => {
      expect(arrRotate(arr, arrCase.offset)).toEqual(arrCase.result);
    });
  });
});

describe("Rotate by", () => {
  it("should return rotate array by month", () => {
    const startNums = "3-4";
    const pypNums = ["1-2", "3-4", "5-6", "7-8", "9-0"];
    const startDate = "2015-06-01";
    const monthCases = [
      {
        date: "2015-06-01",
        result: "3-4"
      },
      {
        date: "2015-10-01",
        result: "1-2"
      },
      {
        date: "2018-02-08",
        result: "5-6"
      },
      {
        date: "2018-03-06",
        result: "9-0"
      }
    ];
    monthCases.forEach(monthCase => {
      const result = rotateByMonth(
        monthCase.date,
        startDate,
        startNums,
        pypNums
      );
      expect(result).toBe(monthCase.result);
    });
  });
  it("should return rotate array by week in reverse", () => {
    const startNums = "1-2";
    const pypNums = ["1-2", "3-4", "5-6", "7-8", "9-0"];
    const startDate = "2018-01-08";
    const weekCases = [
      {
        date: "2018-01-08",
        result: "1-2"
      },
      {
        date: "2018-01-15",
        result: "3-4"
      },
      {
        date: "2018-02-08",
        result: "5-6"
      },
      {
        date: "2018-03-06",
        result: "9-0"
      }
    ];
    weekCases.forEach(weekCase => {
      const result = rotateByWeek(
        weekCase.date,
        startDate,
        startNums,
        pypNums,
        true
      );
      expect(result).toBe(weekCase.result);
    });
  });
});
