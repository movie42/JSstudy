let company = {
  sales: [
    {
      name: "John",
      salary: 1000,
    },
    {
      name: "Alice",
      salary: 1600,
    },
  ],

  development: {
    sites: [
      {
        name: "Peter",
        salary: 2000,
      },
      {
        name: "Alex",
        salary: 1800,
      },
    ],

    internals: [
      {
        name: "Jack",
        salary: 1300,
      },
    ],
  },
};

// 예제 월급 계산기
// Array.isArray array인지 판별

function sumSalaries(department) {
  if (Array.isArray(department)) {
    return department.reduce((prev, current) => prev + current.salary, 0);
  } else {
    let sum = 0;
    for (let subDep of Object.values(department)) {
      sum += sumSalaries(subDep);
    }
    return sum;
  }
}

// console.log(sumSalaries(company));

// 예제 응용
// 직원 명단중에 사람이 있는지 찾기
function findEmpoloyee(data, empoloyee) {
  let found;

  for (let deep of Object.values(data)) {
    if (Array.isArray(deep)) {
      found = deep.map((value) => value.name === empoloyee && !!value.name);
      for (let value of found) {
        if (value === true) {
          return true;
        }
      }
    } else {
      return findEmpoloyee(deep, empoloyee);
    }
  }
  return false;
}

// console.log(findEmpoloyee(company, "Ko"));

function findEmpoloyeeSalary(data, empoloyee) {
  let found;

  for (let deep of Object.values(data)) {
    if (Array.isArray(deep)) {
      found = deep.filter((value) => value.name === empoloyee);
      if (found.length !== 0) {
        for (let value of found) {
          return value.salary;
        }
      }
    } else {
      return findEmpoloyeeSalary(deep, empoloyee);
    }
  }
  return false;
}

console.log(findEmpoloyeeSalary(company, "Peter"));

// 예제 응용
// 직원이 속한 부서 찾기
function findEmpoloyeeInDepartment(data, empoloyee) {
  let found;
  for (let key in data) {
    if (Array.isArray(data[key])) {
      found = data[key].map(
        (value) => value.name === empoloyee && !!value.name,
      );
      for (let value of found) {
        if (value === true) {
          return key;
        }
      }
    } else {
      return findEmpoloyeeInDepartment(data[key], empoloyee);
    }
  }
  return false;
}

// console.log(findEmpoloyeeInDepartment(company, "Alex"));
