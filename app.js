function valid(form) {
    let fail = false;
    let name = form.name.value;
    let link = form.link.value;
    let price = form.price.value;

    if (name == "" || name == " ") {
        fail = "Не ввели поле";
        document.getElementById("red__text-name").className = "red__text red__text--on";
    }
    else {
        document.getElementById("red__text-name").className = "red__text";
    }
    if (link == "" || link == " ") {
        fail = "Не ввели поле";
        document.getElementById("red__text-link").className = "red__text red__text--on";
    }
    else {
        document.getElementById("red__text-link").className = "red__text";
    }
    if (price == "" || price == " ") {
        fail = "Не ввели поле";
        document.getElementById("red__text-price").className = "red__text red__text--on";
    }
    else {
        document.getElementById("red__text-price").className = "red__text";
    }
    if (name != false && link != false && price != false ){
        
        document.getElementById("add__btn").className = "add__btn add__btn--on";
    }
    
}


function dropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("suffix").classList.toggle("suffix--active")
  }
