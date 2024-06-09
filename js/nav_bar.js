function toggleNav() {
  let mobileDropdown = document.getElementById("mobile-dropdown");
  if (mobileDropdown.classList.contains("hidden")) {
    mobileDropdown.classList.add("show");
    mobileDropdown.classList.remove("hidden");
  } else if (mobileDropdown.classList.contains("show")) {
    mobileDropdown.classList.add("hidden");
    mobileDropdown.classList.remove("show");
  }
}
