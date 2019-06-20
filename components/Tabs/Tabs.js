
class TabLink {
  constructor(element) {
    // 1. Assign this.element to the passed in DOM element
    this.element = element;
    
    // 2. Get the custom data attribute on the Link
    this.data = this.element.dataset.tab;
    
    // 3. Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector('.tabs-item[data-tab="${this.data}"]');
    
    // 4. Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement); 
    
    // 5. Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener('click', () =>
    {this.select() }
    ) };


  select() {
    // 6. Get all of the elements with the tabs-link class
    const links = document.querySelectorAll('.tabs-link');

    // 7. Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    Array.from(links).forEach(link =>
      {link.classList.remove('tabs-link-selected');
      }
    );

    // 8. Add a class named "tabs-link-selected" to this link
    this.element.classList.add('tabs-link-selected');
  

    // 9. Call the select method on the item associated with this link
      this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    // 10. Assign this.element to the passed in element
    this.element = element;
  }

  select() {
    // 11. Select all ".tabs-item" elements from the DOM
    const items = document.querySelectorAll('.tabs-item');

    // 12. Remove the class "tabs-item-selected" from each element

    Array.from(items).forEach(item =>
      {item.classList.remove('tabs-item-selected');
      }
    );
   

    // 13. Add a class named "tabs-item-selected" to this element
    this.element.classList.add('tabs-item-selected');
  }
}

/* START HERE: 

- 14. Select all classes named ".tabs-link" and assign that value to the links variable

- 15. With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- 16. In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

let links = document.querySelectorAll('.tabs-link');

Array.from(links).forEach(link => 
  new TabLink(link));



  






