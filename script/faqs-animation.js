const questions = document.getElementsByClassName("faqs-question")

for (let item of questions) {
    item.children[0].addEventListener("click", function () {
        const question = item.children[0]
        const response = item.children[1]
        const iconDot = question.children[0]

        if (!question.classList.contains("faqs-question-opened")) {
            // Open question
            question.classList.add("faqs-question-opened")
            response.classList.add("display")
            iconDot.classList.add("hide")
        } else {
            // Close question
            question.classList.remove("faqs-question-opened");
            response.classList.remove("display")
            iconDot.classList.remove("hide")
        }
    })
}
