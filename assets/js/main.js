document.addEventListener('DOMContentLoaded', function () {
  var faqItems = document.querySelectorAll('.faq-item h3');
  faqItems.forEach(function (item) {
    item.addEventListener('click', function () {
      var answer = item.nextElementSibling;
      var isOpen = answer.style.maxHeight && answer.style.maxHeight !== '0px';
      document.querySelectorAll('.faq-answer').forEach(function (a) {
        a.style.maxHeight = '0px';
        a.style.paddingLeft = '0px';
      });
      document.querySelectorAll('.faq-item h3').forEach(function (h) {
        h.classList.remove('open');
      });
      if (!isOpen) {
        answer.style.maxHeight = answer.scrollHeight + 40 + 'px';
        answer.style.paddingLeft = '16px';
        item.classList.add('open');
      }
    });
  });

  var tocLinks = document.querySelectorAll('.toc a');
  tocLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      var target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        var offset = 100;
        var top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });
});
