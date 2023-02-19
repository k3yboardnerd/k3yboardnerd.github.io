

let testimonialsIndex = 1;
const testimonials = document.querySelector('.kbn-testimonials-box .kbn-testimonial');
const testimonialTracker = document.querySelector('.kbn-testimonials-box .kbn-testimonials-tracker span');
const nextBtn = document.querySelector('.kbn-testimonials-box #next');
const prevBtn = document.querySelector('.kbn-testimonials-box #prev');

function nextTestimonial(n) {
    showTestimonial(testimonialsIndex += n);
}

function currentTestimonial(n) {
    showTestimonial(testimonialsIndex = n);
}

function showTestimonial(n) {
    let i;
    nextBtn.style.display = 'block';
    prevBtn.style.display = 'block';
    if (n > testimonials.length) {
        prevBtn.style.display = 'none';
        testimonialsIndex = 1;
    }

    if (n < 1) {
        nextBtn.style.display = 'none';
        testimonialsIndex = testimonials.length;
    }

    for (i = 0; i < testimonials.length; i++) {
        testimonials[i].classList.add('kbn-active-testimonial');
    }

    for (i = 0; i < testimonialTracker.length; i++) {
        testimonialTracker[i].classList.add('active');
    }

    // testimonials[testimonialsIndex -1].classList.add('kbn-active-testimonial');
    // testimonialTracker[testimonialsIndex-1].classList.add('active');
}