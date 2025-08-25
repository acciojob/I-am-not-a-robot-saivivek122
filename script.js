//your code here
let imageContainer = document.getElementById("image-container");
let resetButton = document.getElementById("reset")
let verifyMessage=document.getElementById("verify-message")

let fixedImages = ["img1","img2","img3","img4","img5"];
let verifyButton = document.getElementById("verify")
let duplicateArray = [];
let finalArray = [];
let duplicateName = null;
let clickedImages = [];

function shuffleArray(currentArray) {
    currentArray.sort(() => Math.random() - 0.5)
    console.log("function called")

}

function geneRateRandomImage(fixedImages) {
    duplicateArray = [];
    finalArray = [];
    let randomNumber = Math.floor(fixedImages.length * Math.random());
    duplicateName = fixedImages[randomNumber];
    for (let i = 0; i < 1; i++) {

        // duplicateArray.push(fixedImages[randomNumber]);
        duplicateArray.push(duplicateName);
    }
    finalArray = [...duplicateArray, ...fixedImages];
    // shuffleArray(finalArray);
    // console.log(finalArray)
}
// shuffleArray(finalArray)

// geneRateRandomImage(fixedImages)

function renderImages() {
    shuffleArray(finalArray)
    geneRateRandomImage(fixedImages)

    finalArray.forEach((currentImage, index) => {
        let img = document.createElement("img");
        // console.log(currentImage)
        img.src = `./assets/${currentImage}.jpg`
		img.className=currentImage;
        imageContainer.appendChild(img)
        img.addEventListener("click", () => {
            clickedImages.push(currentImage)
            resetButton.style.display = "block"
            toggleSubmitButton(clickedImages)
        })

    })

}

function toggleSubmitButton(clickedImages){
    if(clickedImages.length===2){
        verifyButton.style.display="block"
    }
    else{
        verifyButton.style.display="none"
    }

}


verifyButton.addEventListener("click", () => {
    let last_two_images=clickedImages.slice(-2);
    if(last_two_images[0]===duplicateName && last_two_images[1]===duplicateName){
        verifyMessage.textContent="You are a human. Congratulations!"
    }
    else{
        "We can't verify you as a human.You selected the non-identical tiles";
        verifyButton.style.display="none"
    }
    // console.log(last_four_images[0])
    //  console.log(last_four_images[1])
    //   console.log(last_four_images[2])
    //    console.log(last_four_images[3])
    //    console.log(duplicateName)
})
resetButton.addEventListener("click", () => {
    // shuffleArray(finalArray);
    // renderImages()
    imageContainer.innerHTML = ""
    renderImages()

    resetButton.style.display = "none"
    verifyMessage.textContent=""
    verifyButton.style.display="none"

})


renderImages()