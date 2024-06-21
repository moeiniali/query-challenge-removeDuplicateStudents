const studentsArray = [
  {
    level: 2, // maximum
    grade: 10, //checked
    name: "John", //checked
    lastName: "Doe", //checked
    birthDate: "2002-05-20", //checked
    nationality: "American",
    email: "john.doe@example.com"
  },
  {
    level: 3,
    grade: 10, //checked
    name: "John", //checked
    lastName: "Doe", //checked
    birthDate: "2002-05-20", //checked
    nationality: "American",
    email: "john.doe@example.com"
  },
  // {
  //   level: 4,
  //   grade: 10, //checked
  //   name: "John", //checked
  //   lastName: "Doe", //checked
  //   birthDate: "2002-05-20", //checked
  //   nationality: "Iran",
  //   email: "john.doe@example.com"
  // },
  // {
  //   level: 3,
  //   grade: 13,
  //   name: "Saimon",
  //   lastName: "Jonse",
  //   birthDate: "2002-06-20",
  //   nationality: "Italy",
  //   email: "Saimon.Jonse@example.com"
  // }
];

function removeDuplicateStudents(students) {
  const groupedObjects = students.reduce((acc, currentValue) => {
    const key = `${currentValue.grade}-${currentValue.name}-${currentValue.lastName}-${currentValue.birthDate} `;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(currentValue);
    return acc;
  }, {});

  const result = Object.values(groupedObjects).map((group) => {
    return group.reduce((maxGradeObj, obj) => {
      if (obj.level > maxGradeObj.level) {
        return obj;
      }
      return maxGradeObj;
    }, group[0]);
  });

  console.log(result);
}

removeDuplicateStudents(studentsArray);
// module.exports = removeDuplicateStudents;
