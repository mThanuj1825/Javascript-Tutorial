let course = {
    name: "Javascript for Beginners",
    hours: 3,
};
console.log(course.name);

course.name = "Javascript Fundamentals";
console.log(course.name);

console.log(course["hours"]);

course["hours"] = 2.5;
console.log(course["hours"]);

let property = "hours";
console.log(course[property]);