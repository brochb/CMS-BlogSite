// Function to handle comment creation
const newCommentHandler = async (event) => {
    event.preventDefault();

    const text = document.querySelector('#comment-text').value.trim();

    if (text) {
        const response = await fetch(`/api/comments`, {
            method: 'POST',
            body: JSON.stringify({ text }), // Change field name to 'text'
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.reload(); // Reload the page after comment creation
        } else {
            alert('Failed to create comment');
        }
    }
};

// Function to handle comment deletion
const delCommentHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/comments/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.reload(); // Reload the page after comment deletion
        } else {
            alert('Failed to delete comment');
        }
    }
};

// Add event listeners for comment creation and deletion
document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newCommentHandler);

document
    .querySelector('.comment-list')
    .addEventListener('click', delCommentHandler);
