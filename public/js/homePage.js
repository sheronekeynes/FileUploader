document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("folderModal");
  const folderBtn = document.getElementById("newFolderBtn");
  const closeBtn = document.querySelector(".closeBtn");

  folderBtn.addEventListener("click", () => {
    overlay.style.display = "flex";
  });

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.style.display = "none";
    }
  });

  closeBtn.addEventListener("click", (e) => {
    e.preventDefault(); // because it's inside a form
    overlay.style.display = "none";
  });
});
