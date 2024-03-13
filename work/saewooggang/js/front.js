$(document).ready(function () {
  // sns - post slide (main visual sect)

  let count = 0;
  let postWrapper = document.querySelector(".post-box .post-wrapper");
  let postWidth = document.querySelector(".post-box .post").clientWidth;

  // prev
  document
    .querySelector(".post-box .btn-prev")
    .addEventListener("click", function () {
      count--;
      postWrapper.style.transform = `translateX(${-count * postWidth}px)`;

      if (count === 0) {
        document.querySelector(".post-box .btn-prev").classList.remove("on");
      }

      if (count !== 7) {
        document.querySelector(".post-box .btn-next").classList.add("on");
      }

      console.log(count);
    });

  // next
  document
    .querySelector(".post-box .btn-next")
    .addEventListener("click", function () {
      count++;
      postWrapper.style.transform = `translateX(${-count * postWidth}px)`;

      if (count !== 0) {
        document.querySelector(".post-box .btn-prev").classList.add("on");
      }

      if (count === 7) {
        document.querySelector(".post-box .btn-next").classList.remove("on");
      }
    });

  // // sns - post slide (main visual sect)

  // side btn img: on-off
  document
    .querySelectorAll(".content-box .btn-list a")
    .forEach(function (element) {
      let getSrc = element.children[0].src;

      element.addEventListener("mouseenter", function () {
        let newSrc = getSrc.replace("Off.png", "On.png");
        element.children[0].src = newSrc;
      });
      element.addEventListener("mouseleave", function () {
        let newSrc = getSrc.replace("On.png", "Off.png");
        element.children[0].src = newSrc;
      });
    });

  // 이하 동일 동작 코드

  // function toggleImg(imgElem, hover, leave) {
  //   let changImg = $(imgElem).attr("src").replace(hover, leave);
  //   console.log(changImg);
  //   $(imgElem).attr("src", changImg);
  // }
  // $(".secMenu ul li a").on({
  //   mouseenter: function () {
  //     let thisImg = $(this).find("img");
  //     console.log(thisImg);
  //     toggleImg($(thisImg), "Off", "On");
  //   },
  //   mouseleave: function () {
  //     let thisImg = $(this).find("img");
  //     console.log(thisImg);
  //     toggleImg($(thisImg), "On", "Off");
  //   },
  // });

  // // side btn img: on-off

  //  side btn click : content open
  // document.querySelectorAll(".content-list .content").forEach(function (e) {
  //   let contentH = e.clientHeight;
  //   console.log(contentH);
  // });

  document
    .querySelectorAll(".content-box .btn-list li a")
    .forEach(function (element) {
      element.addEventListener("click", function (e) {
        e.preventDefault();
        let contentID = this.getAttribute("href");
        let contentElement = document.getElementById(contentID.slice(1));
        let contentH = contentElement.clientHeight;

        contentElement.parentElement.style.maxHeight = contentH + 60 + "px";
      });
    });

  // // side btn click : content open

  // close btn : focus
  // document.querySelectorAll(".close-btn").forEach(function (element) {
  //   element.focus();
  // });
  // //close btn : focus

  //  close btn click : content close
  document.querySelectorAll(".content-list").forEach(function (element) {
    element.addEventListener("click", function (e) {
      console.log(e.target);
      if (e.target.classList.contains("close-btn")) {
        // close-btn을 클릭했을 때만 처리 (이벤트 위임)
        var closestLi = e.target.closest("li");
        // 현재 close-btn이 속한 가장 가까운 li 요소 찾기
        if (closestLi) {
          // 가장 가까운 li 요소가 있으면 해당 li 요소의 max-height를 0으로 설정
          closestLi.style.maxHeight = "0";
        }
      }
    });
  });

  // // close btn click : content close
});
