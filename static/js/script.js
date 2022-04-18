function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break
            }
        }
    }
    return cookieValue
}

var csrftoken = getCookie('csrftoken');
var activeItem = null;
buildList();

function buildList() {
    var wrapper = document.getElementById('list-wrapper')
    wrapper.innerHTML = '';
    var url = 'http://127.0.0.1:8000/api/task-list/'
    fetch(url)
        .then((resp) => resp.json())
        .then(function(data) {
            console.log(data);
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
            for (var i in list) {
                var editBTN = document.getElementsByClassName('edit')[i];
                editBTN.addEventListener('click', (function(item) {
                    return function() {
                        editItem(item)
                    }
                })(list[i]))
            }
        })
}

var form_wrapper = document.getElementById('form-wrapper')
form_wrapper.addEventListener('submit', function(e) {
    // prevent the form from submitting on its own
    e.preventDefault()
    var url = 'http://127.0.0.1:8000/api/task-create/'

    if (activeItem != null) {
        var url = `http://127.0.0.1:8000/api/task-update/${activeItem.id}/`
        activeItem = null
    }
    var title = document.getElementById('title').value;
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'X-CSRFToken': csrftoken,
        },
        body: JSON.stringify({
            'title': title
        })
    }).then(function(response) {
        buildList()
        document.getElementById('form').reset()
    })
})

function editItem(item) {
    console.log('Item clicked ', item);
    activeItem = item;
    document.getElementById('title').value = activeItem.title
}