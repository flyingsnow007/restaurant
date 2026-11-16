(function () {
  var header = document.getElementById("site-header");
  var navToggle = document.getElementById("nav-toggle");
  var siteNav = document.getElementById("site-nav");
  var toast = document.getElementById("toast");
  var toastTimer;

  function onScroll() {
    header.classList.toggle("is-scrolled", window.scrollY > 40);
    var heroBg = document.querySelector(".hero-bg");
    if (heroBg && window.scrollY < window.innerHeight) {
      heroBg.style.transform = "translateY(" + window.scrollY * -0.06 + "px)";
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  navToggle.addEventListener("click", function () {
    var isOpen = siteNav.classList.toggle("is-open");
    document.body.classList.toggle("menu-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "关闭菜单" : "打开菜单");
  });

  siteNav.addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
      siteNav.classList.remove("is-open");
      document.body.classList.remove("menu-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "打开菜单");
    }
  });

  var revealItems = document.querySelectorAll(".reveal");
  var revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach(function (item) {
    revealObserver.observe(item);
  });

  var tabs = document.querySelectorAll(".menu-tab");
  var cards = document.querySelectorAll(".dish-card");

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var filter = tab.getAttribute("data-filter");

      tabs.forEach(function (other) {
        var active = other === tab;
        other.classList.toggle("is-active", active);
        other.setAttribute("aria-selected", String(active));
      });

      cards.forEach(function (card) {
        var show = filter === "all" || card.getAttribute("data-category") === filter;
        card.classList.toggle("is-hidden", !show);
      });
    });
  });

  var track = document.getElementById("review-track");
  var prevBtn = document.getElementById("review-prev");
  var nextBtn = document.getElementById("review-next");
  var dotsWrap = document.getElementById("review-dots");
  var reviewCards = document.querySelectorAll(".review-card");
  var currentReview = 0;
  var reviewTimer;

  function renderReview() {
    track.style.transform = "translateX(-" + currentReview * 100 + "%)";
    var dots = dotsWrap.querySelectorAll(".review-dot");
    dots.forEach(function (dot, index) {
      dot.classList.toggle("is-active", index === currentReview);
    });
  }

  reviewCards.forEach(function (_, index) {
    var dot = document.createElement("button");
    dot.className = "review-dot" + (index === 0 ? " is-active" : "");
    dot.type = "button";
    dot.setAttribute("aria-label", "第 " + (index + 1) + " 条评价");
    dot.addEventListener("click", function () {
      currentReview = index;
      renderReview();
      restartReviewTimer();
    });
    dotsWrap.appendChild(dot);
  });

  function nextReview() {
    currentReview = (currentReview + 1) % reviewCards.length;
    renderReview();
  }

  function restartReviewTimer() {
    clearInterval(reviewTimer);
    reviewTimer = setInterval(nextReview, 6000);
  }

  prevBtn.addEventListener("click", function () {
    currentReview = (currentReview - 1 + reviewCards.length) % reviewCards.length;
    renderReview();
    restartReviewTimer();
  });

  nextBtn.addEventListener("click", function () {
    nextReview();
    restartReviewTimer();
  });

  restartReviewTimer();

  var form = document.getElementById("reservation-form");

  function validateField(field) {
    var fieldWrap = field.closest(".field");
    var valid = field.validity.valid && field.value.trim() !== "";
    fieldWrap.classList.toggle("has-error", !valid);
    return valid;
  }

  ["name", "phone", "date", "time", "guests"].forEach(function (name) {
    var input = form.querySelector('[name="' + name + '"]');
    input.addEventListener("input", function () {
      input.closest(".field").classList.remove("has-error");
    });
    input.addEventListener("change", function () {
      validateField(input);
    });
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var fields = ["name", "phone", "date", "time", "guests"];
    var allValid = fields
      .map(function (name) {
        return validateField(form.querySelector('[name="' + name + '"]'));
      })
      .every(Boolean);

    if (!allValid) {
      showToast("请补全必填信息后再提交。");
      return;
    }

    form.reset();
    showToast("预订信息已收到，我们会尽快电话与您确认。");
  });

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toast.classList.remove("is-visible");
    }, 3600);
  }

  var year = document.getElementById("year");
  year.textContent = new Date().getFullYear();

  var countTargets = document.querySelectorAll("[data-count]");
  var countObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var target = Number(el.getAttribute("data-count"));
        var duration = 900;
        var start = performance.now();

        function tick(now) {
          var progress = Math.min((now - start) / duration, 1);
          var eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.round(target * eased).toLocaleString("zh-CN");
          if (progress < 1) requestAnimationFrame(tick);
        }

        requestAnimationFrame(tick);
        countObserver.unobserve(el);
      });
    },
    { threshold: 0.6 }
  );

  countTargets.forEach(function (el) {
    countObserver.observe(el);
  });
})();
