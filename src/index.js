// write your code here

document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/ramens')
    .then(res => res.json())
    .then(ramens => ramens.forEach(ramen => {
        renderImages(ramen)
        })
    )
    addNewRamen()
    
})


// Render Ramen Images in Ramen-Menu Div

function renderImages(ramen) {

    let imgContainer = document.getElementById('ramen-menu');
    let imgTag = document.createElement('img');

    imgTag.setAttribute('id', ramen.name)
    imgTag.src = ramen.image
    imgContainer.appendChild(imgTag)
    document.getElementById(ramen.name).addEventListener('click', () => {
        renderDetails(ramen)}
    )

}

// Render Ramen Details in Ramen-Details Div

function renderDetails(ramen) {

    let detailContainer = document.getElementById('ramen-detail');
      detailContainer.querySelector('.detail-image').src = ramen.image;
      detailContainer.querySelector('.name').textContent = ramen.name;
      detailContainer.querySelector('.restaurant').textContent = ramen.restaurant;
      document.getElementById('rating-display').textContent = ramen.rating;
      document.getElementById('comment-display').textContent = ramen.comment;
    
}







function addNewRamen() {

document.querySelector("#new-ramen").addEventListener('submit', (event) => {
    event.preventDefault();
    let detailContainer = document.getElementById('ramen-detail');
    let newRamenForm = document.getElementById('new-ramen');
    let newImage = newRamenForm.querySelector('#new-image').value;
    let newName = newRamenForm.querySelector('#new-name').value;
    let newRest = newRamenForm.querySelector('#new-restaurant').value;
    let newRating = newRamenForm.querySelector('#new-rating').value;
    let newComment = newRamenForm.querySelector('#new-comment').value;
    
    let newImgTag = document.createElement('img')
    newImgTag.src = newImage;

    newImgTag.setAttribute('id', newName)
    document.getElementById('ramen-menu').append(newImgTag)

    document.getElementById(`${newName}`).addEventListener('click', () => {

        let newRamenForm = document.getElementById('new-ramen');
        let newImage = newRamenForm.querySelector('#new-image').value
        
    
        detailContainer.querySelector('.detail-image').src = newImage;
        detailContainer.querySelector('.name').textContent = newName;
        detailContainer.querySelector('.restaurant').textContent = newRest;
        document.getElementById('rating-display').textContent = newRating;
        document.getElementById('comment-display').textContent = newComment;
    
    })
    
})
}