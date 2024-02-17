let textToSearch = document.querySelector("#text-to-search");
let paragraph = document.querySelector("#paragraph");
let btnSearch = document.querySelector("#btnSearch");
btnSearch.addEventListener("click", () => {
    let regexStr = new RegExp(`${textToSearch.value}`, "g");
    paragraph.innerHTML = paragraph.textContent.replace(regexStr, (item) =>`<mark>${item}</mark>`);
  });
