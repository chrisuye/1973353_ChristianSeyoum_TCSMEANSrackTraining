let blogs = []

window.onload = load()

function load() {
    blogs = JSON.parse(localStorage.getItem("savedBlogs"))

    if (blogs && blogs.length > 0) {
        console.log(blogs)
        showBlogs()
    } else {
        blogs = []
    }
}

function addBlog() {
    let object = {}
    let title = document.getElementById("titleInput").value
    let article = document.getElementById("articleInput").value

    if (title == "" || article == "") {
        alert("Missing title and/or article")
    } else {
        object.title = title
        object.article = article
        object.image = localStorage.getItem("imageStore")
        localStorage.removeItem("imageStore")
        saveBlog(object)
    }
}

function saveBlog(data) {
    blogs.push(data)
    localStorage.setItem("savedBlogs", JSON.stringify(blogs))
    let test = JSON.parse(localStorage.getItem("savedBlogs"))
    location.reload()
}

document.getElementById("imageInput").onchange = function () {
    let reader = new FileReader();

    reader.onload = function (e) {
        try {
            localStorage.setItem("imageStore", reader.result)
            document.getElementById("image").src = e.target.result;
        } catch(err) {
            document.getElementById("imageInput").value = ""
            alert("Image size is to large to save in local storage or local storage has limited storage left.\n Please try again.")
        }
    };

    
    reader.readAsDataURL(this.files[0]);
};

function showBlogs() { 
    for (var i = blogs.length - 1; i >= 0; i--) {
        if (!blogs[i].image) {
            document.getElementById("contentPanel").innerHTML +=  
                "<div class=\"row\"><div class=\"col-md-12\" id=\"showContent\"><h2 class=\"card-title mt-3\" id=\"showTitle2\">"+blogs[i].title+"</h2><p class=\"lh-lg\" id=\"showArticle2\">"+blogs[i].article+"</p></div></div><br><hr>"; 
        } else {
            document.getElementById("contentPanel").innerHTML +=  
                "<div class=\"row\"><div class=\"col-md-8\"><h2 class=\"card-title mt-3\" id=\"showTitle\">"+blogs[i].title+"</h2><p class=\"lh-lg\" id=\"showArticle\">"+blogs[i].article+"</p></div><div class=\"col-md-4\"><img class=\"img-fluid\" src =\""+blogs[i].image+"\"></div></div><br><hr>"; 
        }
        
    }
}