window.onload = function() {
    function addItem() {
        divPrincipal = document.getElementById("listaElementos");
        value = document.getElementById("inputText").value;
        if (value != "") {
            document.getElementById("inputText").value = "";
            div = document.createElement("div");
            div.className = "itemDiv";
            divText = document.createElement("div");
            divEdit = document.createElement("div");
            divTrash = document.createElement("div");

            divText.innerHTML = value;
            divText.className = 'divText';
            divEdit.className = 'divEdit';
            divTrash.className = 'divTrash';

            divTrash.addEventListener("click", deleteItem);

            divEdit.addEventListener("click", function() {
                divText.innerHTML = "<input type='text' value='" + divText.innerHTML + "' />";
                divText.firstChild.addEventListener("blur", function() {
                    divText.innerHTML = divText.firstChild.value;
                });
            });

            divEdit.innerHTML = "<img src='./img/editar.png' alt='editar' />";
            divTrash.innerHTML = "<img src='./img/eliminar.png' alt='eliminar' />";

            div.appendChild(divText);
            div.appendChild(divEdit);
            div.appendChild(divTrash);
            divPrincipal.appendChild(div);
        }
    }

    function deleteItems() {
        divPrincipal = document.getElementById("listaElementos");
        divPrincipal.innerHTML = "";
    }

    function deleteItem(e) {
        divPrincipal = document.getElementById("listaElementos");
        divPrincipal.removeChild(e.target.parentNode.parentNode);
    }

    addButton = document.getElementById("inputButton");
    addButton.addEventListener("click", addItem);

    buttonClear = document.getElementById("buttonClear");
    buttonClear.addEventListener("click", deleteItems);

}