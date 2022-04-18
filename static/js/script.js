buildList();

function buildList() {
    var wrapper = document.getElementById('list-wrapper')
    var url = 'http://localhost:8000/api/task-list/'
    fetch(url)
        .then((resp) => resp.json())
        .then(function(data) {
            // console.log(data);
            var list = data;
            for (var i in list) {
                var item = `<div id="data-row-${i}" class="task-wrapper flex-wrapper">
                    <div style="flex: 7;">
                    <span class="title">${list[i].title}</span>
                    </div>
                    <div style="flex: 1;">
                    <button class="btn btn-sm btn-outline-info edit">Edit</button>
                    </div>
                    <div style="flex: 1;">
                    <button class="btn btn-sm btn-outline-danger delete">-</button>
                    </div>
                    </div>`;
                wrapper.innerHTML += item;
            }
        })
}