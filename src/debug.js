// Oops! This factory function exposes the students array.
// Can you make it private using closure?

const createCourse = (topic, instructor) => {
  let students = []
  return {
    topic,
    instructor,
    addStudent(name) {
      students.push(name);
    },
    removeStudent(name) {
      students.splice(students.indexOf(name), 1);
    },
    getStudents() {
      return [...students];
    },
  };
};

module.exports = {
  createCourse,
};
