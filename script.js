var input = document.querySelector("input")

var data = [
    { name: "aditya", src: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym95fGVufDB8fDB8fHww " },
    { name: "kush", src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHBvcnRyYWl0fGVufDB8fDB8fHww" },
    { name: "manish", src: "https://images.unsplash.com/photo-1570158268183-d296b2892211?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHBvcnRyYWl0fGVufDB8fDB8fHww " },
    { name: "madhav", src: "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHBvcnRyYWl0fGVufDB8fDB8fHww" },
]

var pers = "";
data.forEach(function (elem) {
    pers += `<div class="person">
                    <div class="img">
                        <img src="${elem.src}"
                            alt="">
                    </div>
                    <h4>${elem.name}</h4>
                </div>`;
})

document.querySelector(".people").innerHTML = pers;

input.addEventListener("input", function () {
    var matching = data.filter(function (e) {
        return e.name.startsWith(input.value)
    })

    var newusers = "";
    matching.forEach(function (elem) {
        newusers += `<div class="person">
                        <div class="img">
                            <img src="${elem.src}"
                                alt="">
                        </div>
                        <h4>${elem.name}</h4>
                    </div>`;
    })

    document.querySelector(".people").innerHTML = newusers;

})