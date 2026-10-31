// Array of student objects
const students = [
  { name: "Ashish Sahoo", marks: 85, class: "10-A", address: "Bhubaneswar, Odisha" },
  { name: "Debashis Nayak",    marks: 92, class: "10-B", address: "Cuttack, Odisha" },
  { name: "Rosan Behera",  marks: 78, class: "9-A",  address: "Puri, Odisha" },
  { name: "Sneha Patel",  marks: 88, class: "9-C",  address: "Rourkela, Odisha" },
  { name: "Arjun Nayak",  marks: 69, class: "11-A", address: "Berhampur, Odisha" },
  { name: "Ananya Roy",   marks: 95, class: "12-B", address: "Sambalpur, Odisha" }
];

const container = document.getElementById("cardContainer");
const searchBox = document.getElementById("searchBox");

// Render cards using map()
function renderStudents(list) {
  if (list.length === 0) {
    container.innerHTML = '<p class="no-result">No students found.</p>';
    return;
  }

  container.innerHTML = list
    .map(
      (s) => `
      <div class="card">
        <h2>${s.name}</h2>
        <p><strong>Marks:</strong> ${s.marks}</p>
        <p><strong>Class:</strong> ${s.class}</p>
        <p><strong>Address:</strong> ${s.address}</p>
      </div>`
    )
    .join("");
}

// Filter by name using filter() on every keystroke
searchBox.addEventListener("input", () => {
  const text = searchBox.value.trim().toLowerCase();
  const filtered = students.filter((s) => s.name.toLowerCase().includes(text));
  renderStudents(filtered);
});

// Initial render
renderStudents(students)