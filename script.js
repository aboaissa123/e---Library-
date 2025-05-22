
const books = {
  cs: { title: "قسم الحاسوب", files: [] },
  physics: { title: "قسم الفيزياء", files: [] },
  bio: { title: "قسم الأحياء", files: [] },
  math: { title: "قسم الرياضيات", files: [] },
  english: { title: "قسم اللغة الإنجليزية", files: [] },
  arabic: { title: "قسم اللغة العربية", files: [] },
  geo: { title: "قسم الجغرافيا", files: [] },
  history: { title: "قسم التاريخ", files: [] },
  edu: { title: "قسم التربية وعلم النفس", files: [] }
};

for (let dept in books) {
  for (let i = 1; i <= 40; i++) {
    books[dept].files.push({ name: `الكتاب ${i}`, url: `books/${dept}/book${i}.pdf` });
  }
}

function openDepartment(dept) {
  document.getElementById('departments').style.display = 'none';
  document.getElementById('books').style.display = 'block';
  document.getElementById('dept-title').innerText = books[dept].title;

  const bookList = document.getElementById('book-list');
  bookList.innerHTML = '';
  books[dept].files.forEach(book => {
    const a = document.createElement('a');
    a.href = book.url;
    a.target = "_blank";
    a.textContent = book.name;
    bookList.appendChild(a);
  });
}

function goBack() {
  document.getElementById('departments').style.display = 'block';
  document.getElementById('books').style.display = 'none';
}
