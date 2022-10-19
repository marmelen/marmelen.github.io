const stepsContainer = document.querySelector('.steps-container')
const loansContainer = document.getElementById('loans-requirements')
const communityContainer = document.getElementById('community')
const aboutUsContainer = document.getElementById('about-us')
const reasonsContainer = document.getElementById('why-us')
const headerNav = document.getElementById('nav')

const loans = document.getElementById('loans')
const requirements = document.getElementById('requirements')

const animation = 'zoom-transition'

jQuery(window).on('scroll', function () {
    if (jQuery(window).scrollTop() > 300) {
        jQuery('#nav').addClass('header-fixed');
        jQuery('#nav').addClass('header-dark-bg');
    } else {
        jQuery('#nav').removeClass('header-fixed');
        jQuery('#nav').removeClass('header-dark-bg');
    }
});

const observerSteps = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            stepsContainer.classList.add(animation)
            return
        }

        stepsContainer.classList.remove(animation)
    })
})

const observerLoans = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            loans.classList.add(animation)
            requirements.classList.add(animation)
            return
        }

        loans.classList.remove(animation)
        requirements.classList.remove(animation)
    })
})

const observerCommunity = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            communityContainer.classList.add(animation)
            return
        }

        communityContainer.classList.remove(animation)
    })
})

const observerAboutUs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            aboutUsContainer.classList.add(animation)
            return
        }

        aboutUsContainer.classList.remove(animation)
    })
})

const observerReasons = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            reasonsContainer.classList.add(animation)
            return
        }

        reasonsContainer.classList.remove(animation)
    })
})

observerSteps.observe(stepsContainer);
observerLoans.observe(loansContainer);
observerCommunity.observe(communityContainer);
observerAboutUs.observe(aboutUsContainer);
observerReasons.observe(reasonsContainer);
