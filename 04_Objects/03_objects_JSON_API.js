const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh",
}

// access methods
console.log(course.courseInstructor)
console.log(course["courseInstructor"])

// short

const {courseInstructor:instructor}=course  // course.courseInstructor as instructor
// or 
// const {courseInstructor}=course ---> as courseInstructor
console.log(instructor);

//API

// In JSON

// {                        key in String
//     "name":"riitk",
//     "course":"js"  
// }


// In Array
/*

[
    {

    },
    [

    ]
]

*/