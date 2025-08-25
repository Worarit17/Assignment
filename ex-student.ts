class Course {
  name: string;
  grade: number;

  constructor(name: string, grade: number) {
    this.name = name;
    this.grade = grade;
  }
}

class Student {
  studentID: string;
  name: string;
  courses: Course[];

  constructor(studentID: string, name: string) {
    this.studentID = studentID;
    this.name = name;
    this.courses = [];
  }

  
  addCourse(course: Course): void {
    this.courses.push(course);
  }

  
  getAverage(): number {
    const total = this.courses.reduce((sum, c) => sum + c.grade, 0);
    return this.courses.length > 0 ? total / this.courses.length : 0;
  }

  
  display(): void {
    console.log(`Student ID: ${this.studentID}, Name: ${this.name}`);
    console.log(`Courses:`);
    this.courses.forEach(c => {
      console.log(`  - ${c.name}: Grade = ${c.grade}`);
    });
    console.log(`GPA: ${this.getAverage().toFixed(2)}\n`);
  }
}



const s1 = new Student("66001", "Becky");
s1.addCourse(new Course("Math", 3.5));
s1.addCourse(new Course("Science", 3.0));
s1.addCourse(new Course("English", 3.2));
s1.addCourse(new Course("History", 2.8));

const s2 = new Student("66002", "Rental");
s2.addCourse(new Course("Math", 2.5));
s2.addCourse(new Course("Science", 2.8));
s2.addCourse(new Course("English", 3.0));
s2.addCourse(new Course("History", 3.4));

const s3 = new Student("66003", "Eejiz");
s3.addCourse(new Course("Math", 4.0));
s3.addCourse(new Course("Science", 3.9));
s3.addCourse(new Course("English", 3.5));
s3.addCourse(new Course("History", 3.7));


console.log("รายชื่อนักศึกษาทั้งหมดก่อนเพิ่มวิชา:");
[s1, s2, s3].forEach(s => s.display());


s1.addCourse(new Course("Art", 3.8));
s2.addCourse(new Course("PE", 3.2));
s3.addCourse(new Course("Music", 4.0));


console.log("รายชื่อนักศึกษาหลังเพิ่มวิชาใหม่:");
[s1, s2, s3].forEach(s => s.display());
