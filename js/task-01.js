// всі елементи li.item в межах ul#categories
const categoryItems = document.querySelectorAll(`#categories .item`);

// виведемо звгвльнц к-ть категорій
console.log('Number of categories: ', categoryItems.length);

// пройдемо по елементам li.item
categoryItems.forEach(categoryItem => {
    // Знаходимо заголовок
    const categoryTitle = categoryItem.querySelector('h2').textContent;

    // Знаходимо всі елементи li
    const categoryElements = categoryItem.querySelectorAll('ul li');
    
    // Виводимо назву та кількість
    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${categoryElements.length}`);
});