const template = document.createElement('template');
template.innerHTML = `<nav class="nav-static">
<img src="images/logo.png" alt="Logo" width="150px" />
<ul>
  <li></li>
  <li><a class="menuOptionActive" href="index.html">Home</a></li>
  <li><a class="menuOption" href="menu.html">Menu</a></li>
  <li><a class="menuOption" href="About Us.html">About Us</a></li>
  <li><a class="menuOption" href="Store Locator.html">Store Locator</a></li>
  <li><a class="menuOption" href="Contact.html">Contact</a></li>
  <li><a class="menuOption" href="">Log In</a></li>
  <li class="shopping-cart">
    <a href="" class="shopping-cart__cart">
      <span class="shopping-cart__number">2</span
      ><?xml version="1.0" encoding="UTF-8"?><svg
        width="24px"
        height="24px"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        color="#ffffff"
      >
        <path
          d="M19.5 22a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM9.5 22a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
          fill="#ffffff"
          stroke="#ffffff"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M5 4h17l-2 11H7L5 4zm0 0c-.167-.667-1-2-3-2M20 15H5.23c-1.784 0-2.73.781-2.73 2 0 1.219.946 2 2.73 2H19.5"
          stroke="#ffffff"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path></svg
    ></a>
  </li>
</ul>
</nav>
<style>
li a {
    box-sizing: border-box;
    text-decoration: none;
    font-weight: 600;
    display: block;
    color: white;
    text-shadow: 0.5px 0.5px black;
    text-align: center;
    padding: 10px 20px;
    font-size: 22px;
  }
  
  .nav-static {
    position: fixed;
  }
  .shopping-cart {
    margin-left: 30px;
  }
  
  .shopping-cart__cart {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .shopping-cart__number {
    position: absolute;
      font-size: 10px;
      top: 29%;
      left: 47%;
  }
  
  li a:hover:not(.active) {
    color: blue;
  }
  
  nav {
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
    background-color: #f2f2f2;
    height: 140px;
    padding: 10px 20px 10px 20px;
    width: 100%;
    background-color: #dadada1f;
  }
  
  li {
    display: inline;
    float: left;
  }
  
  .active {
    color: rgb(198, 16, 16);
  }
</style>`;

class Menu extends HTMLElement
{
    constructor()
    {
        super();
        this.attachShadow({
            mode:'open'
        });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        
    }
}

customElements.define('menu-component',Menu);


