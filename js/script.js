// Mảng danh mục sản phẩm
let categories = [
    { id: 1, name: "Danh mục 1" },
    { id: 2, name: "Danh mục 2" },
    { id: 3, name: "Danh mục 3" }
];

// Hiển thị danh sách danh mục sản phẩm
function showCategories() {
    let categoryList = document.getElementById("category-list");
    categoryList.innerHTML = "";

    categories.forEach(function(category) {
        let li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";
        li.innerHTML = category.name + 
            '<div>' +
            '<button class="btn btn-sm btn-primary" onclick="editCategory(' + category.id + ')">Sửa</button>' +
            '<button class="btn btn-sm btn-danger" onclick="deleteCategory(' + category.id + ')">Xóa</button>' +
            '</div>';

        categoryList.appendChild(li);
    });
}

// Thêm danh mục mới
document.getElementById("add-category-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let categoryNameInput = document.getElementById("category-name");
    let categoryName = categoryNameInput.value;

    if (categoryName) {
        let newCategoryId = categories.length + 1;
        let newCategory = { id: newCategoryId, name: categoryName };
        categories.push(newCategory);

        categoryNameInput.value = "";
        showCategories();
    }
});

// Sửa danh mục
function editCategory(categoryId) {
    let category = categories.find(function(category) {
        return category.id === categoryId;
    });

    if (category) {
        let newName = prompt("Nhập tên danh mục mới:", category.name);

        if (newName) {
            category.name = newName;
            showCategories();
        }
    }
}

// Xóa danh mục
function deleteCategory(categoryId) {
    let categoryIndex = categories.findIndex(function(category) {
        return category.id === categoryId;
    });

    if (categoryIndex !== -1) {
        categories.splice(categoryIndex, 1);

        showCategories();
    }
}

// Hiển thị danh sách danh mục sản phẩm ban đầu
showCategories();

// sreach categories