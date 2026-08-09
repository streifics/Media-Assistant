const mField = document.querySelector("#media-type")
const aField = document.querySelector("#action-type")

mField.addEventListener("change", (event) => {
    RefreshFields()
})

aField.addEventListener("change", (event) => {
    RefreshFields()
})

function RefreshFields() {

    if (document.querySelector("#media-type").value != "") {
        const div = document.getElementsByClassName("action")[0];
        div.style.display = "none"
    }
    else {
        const div = document.getElementsByClassName("action")[0];
        div.style.display = ""
    }

    if (document.querySelector("#action-type").value != "") {
        const div = document.getElementsByClassName("media")[0];
        div.style.display = "none"
    }
    else {
        const div = document.getElementsByClassName("media")[0];
        div.style.display = ""
    }

    ResetFields()
    if (document.querySelector("#media-type").value == "v") {
        for (let element = 0; element < document.getElementsByClassName("video").length; element++) {
            const div = document.getElementsByClassName("video")[element];
            div.style.display = ""
        }
    }
    else if (document.querySelector("#media-type").value == "a") {
        for (let element = 0; element < document.getElementsByClassName("audio").length; element++) {
            const div = document.getElementsByClassName("audio")[element];
            div.style.display = ""
        }
    }
    else if (document.querySelector("#media-type").value == "m") {
        for (let element = 0; element < document.getElementsByClassName("metadata").length; element++) {
            const div = document.getElementsByClassName("metadata")[element];
            div.style.display = ""
        }
    }
}

function ClearFields() {
    document.getElementById("media-type").value = ""
    document.getElementById("action-type").value = ""
    for (let element = 0; element < document.getElementsByClassName("clear").length; element++) {
            const input = document.getElementsByClassName("clear")[element];
            input.value = ""
        }
    for (let element = 0; element < document.getElementsByClassName("clearBox").length; element++) {
            const checkBox = document.getElementsByClassName("clearBox")[element];
            checkBox.checked = false
        }
}

function ResetFields() {
    for (let element = 0; element < document.getElementsByClassName("metadata").length; element++) {
        const div = document.getElementsByClassName("metadata")[element];
        div.style.display = "none"
    }
    for (let element = 0; element < document.getElementsByClassName("audio").length; element++) {
        const div = document.getElementsByClassName("audio")[element];
        div.style.display = "none"
    }
    for (let element = 0; element < document.getElementsByClassName("video").length; element++) {
        const div = document.getElementsByClassName("video")[element];
        div.style.display = "none"
    }
}