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

course.registered = false;
console.log(course.registered);

delete course.registered;
console.log(course.registered);

console.log(course.hasOwnProperty("name"));