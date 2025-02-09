// 1
function Student(name, surname, yearOfBirth, course) {
    this.name = name;
    this.surname = surname;
    this.yearOfBirth = yearOfBirth;
    this.grades = [];
    this.attendance = [];
    this.course = course;

    this.addGrade = function(...grades) {
       this.grades.push(...grades);
       return this.grades;
    };
    this.addAttendance = function(info) {
        this.attendance.push(info);
        return this.attendance;
    };
    this.getAvarageGrade = function() {
        const gradesSum = this.grades.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        return (gradesSum/this.grades.length).toFixed(2);
    };
    this.getAttendanceInPercent = function() {
        const attendedLessonsQty = this.attendance.filter(el => {
            const key = Object.keys(el)[0];
            return el[key] === true;
        }).length;
        return Math.floor(attendedLessonsQty / this.attendance.length * 100);
    };
    this.getAttendanceQty = function() {
        return this.attendance.filter(el => {
            const key = Object.keys(el)[0];
            return el[key] === true;
        }).length;
    };
    this.changeCourse = function(newCourse) {
        this.course = newCourse;
        this.grades = [];
        this.attendance = [];
    };
    this.getInfo = function () {
       const info = {};
        for (let buildingKey in this) {
            if (typeof this[buildingKey] !== 'function') {
                info[buildingKey] = this[buildingKey];
            }
        }
        return info;
    };
};

const student1 = new Student('Ann', 'White', 1996, 'Math');
student1.addGrade(12, 15, 17);
student1.addAttendance({1: true});
student1.addAttendance({2: true});
student1.addAttendance({3: true});
student1.addAttendance({4: false});
student1.addAttendance({5: true});
console.log(student1.getAvarageGrade());
console.log(student1.getAttendanceInPercent());
console.log(student1.getAttendanceQty());
console.log(student1.getInfo());
student1.changeCourse('English');
console.log(student1.getInfo());

// 2
Student.prototype.addCourse = function(newCourse) {
    if (this.course) {
        const newGrades = { "course": this.course, "grades": this.grades};
        this.grades = new Array(newGrades);

        const newAttendance = {"course": this.course, "attendence": this.attendance };
        this.attendance = new Array(newAttendance);

        const newArr = new Array(this.course);
        newArr.push(newCourse);
        this.course = newArr;
    }

};
student1.addCourse('Science');
console.log(student1.getInfo());

Student.prototype.removeCourse = function(oldCourse) {
    const index = this.course.indexOf(oldCourse);
    if (index > -1) {
        this.course.splice(index, 1);
    }

    const gradeIndex = this.grades.findIndex(el => el.course === oldCourse);
    if (index > -1) {
        this.grades.splice(gradeIndex, 1);
    }

    const attendebceIndex = this.attendance.findIndex(el => el.course === oldCourse);
    if (index > -1) {
        this.attendance.splice(attendebceIndex, 1);
    }

}

student1.removeCourse('Science');
console.log(student1.getInfo());

// 3
function Group() {
    this.studentList = [];

    this.addStudent = function(student) {
        this.studentList.push(student);
        return this.studentList;
    }
    this.removeStudent = function(student) {
        const index = this.studentList.indexOf(student);
        if (index > -1) {
            this.studentList.splice(index, 1);
        }
        return this.studentList;
    }
    this.getRaitingByAttendance = function() {
        const sortedList = this.studentList.slice().sort((a, b) => {
            return b.getAttendanceInPercent() - a.getAttendanceInPercent();
        });
        return sortedList.reduce((acc, curr) => {
            acc.push({
                name: `${curr.name} ${curr.surname}`,
                attendancePercent: curr.getAttendanceInPercent()
            });
            return acc;
        }, []);
    }
    this.getRaitingByGrade = function() {
        const sortedList = this.studentList.slice().sort((a, b) => {
            return b.getAvarageGrade() - a.getAvarageGrade();
        });
        return sortedList.reduce((acc, curr) => {
            acc.push({
                name: `${curr.name} ${curr.surname}`,
                averageGrade: curr.getAvarageGrade()
            });
            return acc;
        }, []);
    }
}

const student2 = new Student('Tomas', 'Shell', 2000, 'Math');
student2.addGrade(10, 10, 10);
student2.addAttendance({1: true});
student2.addAttendance({2: true});
student2.addAttendance({3: true});

const student3 = new Student('David', 'Brown', 2001, 'Math');
student3.addGrade(12, 15, 14);
student3.addAttendance({1: false});
student3.addAttendance({2: false});
student3.addAttendance({3: false});

const student4 = new Student('Kate', 'Chill', 2002, 'Math');
student4.addGrade(16, 16, 16);
student4.addAttendance({1: true});
student4.addAttendance({2: true});
student4.addAttendance({3: false});


const group1 = new Group();
group1.addStudent(student2);
group1.addStudent(student3);
group1.addStudent(student4);
console.log(group1);

console.log(group1.getRaitingByAttendance());
console.log(group1.getRaitingByGrade());




