// Sample data for files
const files = [
    { imgSrc: "desktop.png", title: "pika", downloadLink: "s.zip", date: "2024-01-21", time: "12:00", size: "10MB", abbreviation: "ABC" },
    // Add more files as needed
];

// Function to generate file HTML
function generateFileHTML(file) {
    return `
        <img src="${file.imgSrc}" alt="ntg">
        <h2>${file.title}</h2>
        <a href="${file.downloadLink}" download>download</a>
        <p>date: ${file.date} time: ${file.time} size: ${file.size} abbreviation: ${file.abbreviation}</p>
        <hr>
    `;
}

// Append file HTML to storage container
const storageContainer = document.getElementById("storageContainer");
files.forEach(file => {
    storageContainer.innerHTML += generateFileHTML(file);
});

// Toggle mobile menu
function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('show');
}
