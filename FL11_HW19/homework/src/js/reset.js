const hide = () => {
  document.querySelector(".message").innerText = "";
  document.querySelector(".finalCount").innerText = "";
  document.querySelector(".result").style.display = "none";
};

document.querySelector(".reset").onclick = hide;
