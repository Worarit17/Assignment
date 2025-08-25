
interface Employee {
  id: number;
  name: string;
  position: string;
  salary: number;
}


const employees: Employee[] = [
  { id: 1, name: "Becky", position: "Developer", salary: 50000 },
  { id: 2, name: "Rental", position: "Designer", salary: 45000 },
  { id: 3, name: "Eejiz", position: "Manager", salary: 60000 },
];


function findEmployeeByName(name: string): Employee | undefined {
  const q = name.trim().toLowerCase();
  return employees.find(emp => emp.name.toLowerCase() === q);
}


console.log("ข้อมูลพนักงานทั้งหมด:");
employees.forEach(emp => {
  console.log(`- ${emp.name} (${emp.position}), เงินเดือน ${emp.salary} บาท`);
});


const searchName = "Becky"; 
const found = findEmployeeByName(searchName);

if (found) {
  console.log(`\n พบพนักงานชื่อ ${searchName}:`);
  console.log(`- ID: ${found.id}`);
  console.log(`- Name: ${found.name}`);
  console.log(`- Position: ${found.position}`);
  console.log(`- Salary: ${found.salary}`);
} else {
  console.log(`\n ไม่พบพนักงานชื่อ ${searchName}`);
}
