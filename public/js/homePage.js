document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("folderModal");
  const fileOverlay = document.getElementById("fileModal");
  const folderBtn = document.getElementById("newFolderBtn");
  const fileBtn = document.getElementById("newFileBtn");
  const closeBtn = document.querySelector(".closeBtn");
  const fileCloseBtn = document.getElementById("fileCloseBtn");

  console.log(fileOverlay);
  console.log(fileCloseBtn);

  folderBtn.addEventListener("click", () => {
    overlay.style.display = "flex";
  });

  fileBtn.addEventListener("click", () => {
    fileOverlay.style.display = "flex";
    console.log("click");
  });

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.style.display = "none";
    }
  });

  fileOverlay.addEventListener("click", (e) => {
    if (e.target === fileOverlay) {
      fileOverlay.style.display = "none";
    }
  });

  closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    overlay.style.display = "none";
  });

  fileCloseBtn.addEventListener("click", (e) => {
    e.preventDefault();
    fileOverlay.style.display = "none";
  });
});
