const btn = document.querySelector('#addnote');
const main = document.querySelector(".main");

const savedata = () => {
    const data = [];
    const note = document.querySelectorAll('.box textarea');
    //    console.log(note);
    note.forEach((val) => {
        data.push(val.value);
    });
    //    console.log(data);
    if(data.length===0){
        localStorage.removeItem("notes")
    }else{
        localStorage.setItem("notes", JSON.stringify(data))
    }
    
}

btn.addEventListener('click', () => {
    addnote()
});

const addnote = (item = "") => {
    const box = document.createElement('div');
    box.classList.add('box');

    box.innerHTML = `<div class="head"><i class="save fa-solid fa-floppy-disk"></i><i class="trash fa-solid fa-trash"></i></div>
    <textarea autofocus>${item}</textarea>`;

    main.appendChild(box);

    box.querySelector('.trash').addEventListener('click', () => {
        box.remove();
        savedata();
    })
    box.querySelector('.save').addEventListener('click', () => {
        savedata()
    })
    savedata();
};

(function () {
    const lsnotes = JSON.parse(localStorage.getItem("notes"));
    // console.log(lsnotes);
    if (lsnotes === null) {
        addnote()
    } else {
        lsnotes.forEach((val) => (addnote(val)));
    }


})();

