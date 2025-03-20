document.addEventListener("DOMContentLoaded", () => {
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            displayTopUsers(data.users);
            displayTrendingPosts(data.posts);
        })
        .catch(error => console.error("Error loading data:", error));
});

function displayTopUsers(users) {
    users.sort((a, b) => b.postCount - a.postCount);
    let topUsersDiv = document.getElementById("top-users");
    topUsersDiv.innerHTML = "<h2>Top Users</h2>" + users.slice(0, 3)
        .map(user => `<p>${user.name} - ${user.postCount} posts</p>`).join("");
}

function displayTrendingPosts(posts) {
    posts.sort((a, b) => b.comments - a.comments);
    let trendingPostsDiv = document.getElementById("trending-posts");
    trendingPostsDiv.innerHTML = "<h2>Trending Posts</h2>" + posts.slice(0, 3)
        .map(post => `<p>${post.title} - ${post.comments} comments</p>`).join("");
}
