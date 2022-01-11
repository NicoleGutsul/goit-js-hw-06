const categories = document.querySelector("#categories");
const categoriesItem = document.querySelectorAll(".item");
console.log("Number of categories: ", categories.children.length);

categoriesItem.forEach((el) => {
   console.log("Category:", el.children[0].textContent);
   console.log("Elements: ", el.children[1].children.length);
});