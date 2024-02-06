function toggleLike(blogId) {
    let likeCount = parseInt(localStorage.getItem(`likeCount_${blogId}`)) || 0;
    // Toggle like (increment or decrement)
    if (likeCount === 0) {
        likeCount = 1;
    } else {
        likeCount = 0;
    }

    localStorage.setItem(`likeCount_${blogId}`, likeCount);
    document.getElementById(`likeCount_${blogId}`).textContent = likeCount + (likeCount === 1 ? ' Like' : ' Likes');
}
function commentBlog(blogId) {
    const commentsContainer = document.getElementById(`comments_${blogId}`);
    const commentText = prompt('Enter your comment:');

    if (commentText) {
        const existingComments=JSON.parse(localStorage.getItem(`comments_${blogId}`)) || []
        existingComments.push(commentText);
        localStorage.setItem(`comments_${blogId}`,JSON.stringify(existingComments));
        commentsContainer.innerHTML='';
        const comments=JSON.parse(localStorage.getItem(`comments_${blogId}`)) || [];
        comments.forEach(comment => {
            const commentElement=document.createElement('div');
            commentElement.textContent=comment;
            commentsContainer.appendChild(commentElement);           
        });
    }
}
function initializeLikesComments() {
    for (let i=1;i<=2;i++){
        const blogId=`blog${i}`;
        const likeCount = parseInt(localStorage.getItem(`likeCount_${blogId}`)) || 0;
        document.getElementById(`likeCount_${blogId}`).textContent = likeCount + (likeCount === 1 ? ' Like' : ' Likes');
        const comments=JSON.parse(localStorage.getItem(`comments_${blogId}`)) || [];
        const commentsContainer=document.getElementById(`comments_${blogId}`);
        commentsContainer.innerHTML='';
        comments.forEach(comment => {
            const commentElement=document.createElement('div');
            commentElement.textContent=comment;
            commentsContainer.appendChild(commentElement);           
        });
    }
}
function toggle() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}
function initializeDarkMode() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    const body = document.body;
    if (isDarkMode) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
}
initializeDarkMode();
initializeLikesComments();
