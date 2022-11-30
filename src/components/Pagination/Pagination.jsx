import React, { useLayoutEffect } from "react";
import clsx from "clsx";
import style from "./Pagination.module.scss";
import { TweenMax, Power3, Quad, TimelineMax, Linear } from "gsap/all";
const Pagination = () => {
  useLayoutEffect(() => {
    var pagContainer = document.getElementById("paginationContainer"),
      pagIndicator = document.getElementById("indicator"),
      pagLinks = document.querySelectorAll(".pagLink"),
      handSVG = document.getElementById("handSvg"),
      fingerBG = document.getElementById("finger-bg"),
      fingerBorder = document.getElementById("finger-border"),
      fingernail1 = document.getElementById("fingernail-1"),
      fingernail2 = document.getElementById("fingernail-2"),
      numLinks,
      curLink,
      pagContainerRect,
      svgRect,
      yDest,
      yDistance,
      TL,
      fingerBGB =
        "M320.8,119c-1-6.5-7-10.9-13.5-9.9l-0.1,0c-6.2,0.9-12.3,1.8-18.3,2.4c-6,0.6-11.8,1-17.6,1 c-5.8,0-11.6,0.1-17.4-0.9c-8-1.4-13.6-5.4-17.4-11c-3.1-4.5-5.1-10-6.3-15.9c-1-4.6-1.5-9.4-1.8-14.1c-0.4-6.4,0-12.8,1.5-19.1 c1.5-6.3,4.2-12.6,7.7-18.6l0.1-0.2c2.9-5,1.8-11.5-2.9-15.1c-5.1-4-12.4-3.1-16.4,2c-2.2,2.8-4.2,5.7-6.1,8.7 c-2.9,4.7-5.5,9.6-7.5,14.9c-3.4,8.7-5.5,18.1-5.9,27.5c-0.5,9.4,0.5,18.8,2.4,27.7c1.9,8.9,4.7,17.4,8.1,25.6l0,0.1 c0.3,0.7,0.6,1.4,1,2c1.5,2.7,3.6,4.8,6.1,6.4c2.3,7.2,17.1,12.4,17.1,12.4c6.7,0,13.4-0.1,20.2-0.5c6.8-0.4,13.6-1.1,20.4-2.3 c6.8-1.1,13.5-2.6,19.9-4.4c6.4-1.7,12.6-3.7,18.7-5.6C318.2,130.3,321.7,124.8,320.8,119z",
      fingerBorderB =
        "M257.9 144.9c4.8-.4 11.5-2 16.3-2.8 6.8-1.1 13.5-2.6 19.9-4.4 6.4-1.7 12.6-3.7 18.7-5.6 5.4-1.7 9-7.2 8.1-13-1-6.5-7-10.9-13.5-9.9h-.1c-6.2.9-12.3 1.8-18.3 2.4-6 .6-11.8 1-17.6 1-5.8 0-11.6.1-17.4-.9-9.8-1.7-15.9-7.3-19.7-14.9-2.1-4.2-3.6-9.1-4.5-14.1-.7-3.9-1.2-8-1.4-12-.4-6.4 0-12.8 1.5-19.1 1.5-6.3 4.2-12.6 7.7-18.6l.1-.2c2.9-5 1.8-11.5-2.9-15.1-5.1-4-12.4-3.1-16.4 2-1.4 1.7-2.7 3.5-4 5.4-3.8 5.6-7.1 11.7-9.7 18.2-3.4 8.7-5.5 18.1-5.9 27.5-.4 7.1.1 14.1 1.1 20.9",
      fingernail2B =
        "M229.6 17.5l-5.8 11.2c-.6 1.1-1.9 1.5-2.9.9l-2.5-1.3c-1.1-.6-1.5-1.9-.9-2.9l2.7-5.2c1.8-3.4 6-4.7 9.3-2.9.1 0 .1.1.1.2z",
      fingernail1B =
        "M303.2 128.9l-.4-1.7c-.5-2.3.9-4.5 3.1-5l12.3-2.8c1.2 5.2-2 10.3-7.2 11.5l-3.5.8c-1.9.4-3.9-.8-4.3-2.8z";
    function onPagLinkClick(e) {
      e.preventDefault();
      var time = 0;

      if (TL && TL.isActive()) {
        TL.kill();
      }
      TL = new TimelineMax({ paused: true });

      svgRect = handSVG?.getBoundingClientRect();

      if (svgRect?.top > yDest) {
        TL.to(handSVG, 0.35, { rotation: 0, y: -44, ease: Quad.easeOut }, 0)
          .to(fingerBG, 0.4, { morphSVG: fingerBG, ease: Quad.easeOut }, ".25")
          .to(
            fingerBorder,
            0.4,
            { morphSVG: fingerBorder, ease: Quad.easeOut },
            ".25"
          )
          .to(
            fingernail1,
            0.4,
            { morphSVG: fingernail1, ease: Quad.easeOut },
            ".25"
          )
          .to(
            fingernail2,
            0.4,
            { morphSVG: fingernail2, ease: Quad.easeOut },
            ".25"
          );
        time = TL.duration();
      } else {
        TL.to(fingerBG, 0.25, { morphSVG: fingerBG, ease: Quad.easeOut }, 0)
          .to(
            fingerBorder,
            0.25,
            { morphSVG: fingerBorder, ease: Quad.easeOut },
            0
          )
          .to(
            fingernail1,
            0.25,
            { morphSVG: fingernail1, ease: Quad.easeOut },
            0
          )
          .to(
            fingernail2,
            0.25,
            { morphSVG: fingernail2, ease: Quad.easeOut },
            0
          );
      }

      TL.to(
        pagIndicator,
        0.5,
        {
          x: e.target.rect.left - pagContainerRect?.left,
          ease: Quad.easeInOut,
        },
        time
      )
        .to(
          pagLinks[curLink],
          0.2,
          { color: "#3a5e77", ease: Linear.easeNone },
          time
        )
        .to(
          handSVG,
          0.5,
          {
            x: e.target.rect.left - pagContainerRect?.left - 251,
            ease: Quad.easeInOut,
          },
          time
        )
        .to(
          e.target,
          0.2,
          { color: "#FFF", ease: Linear.easeNone },
          time + 0.45
        )

        .to(
          fingerBG,
          0.4,
          { morphSVG: fingerBGB, ease: Quad.easeOut },
          time + 0.6
        )
        .to(
          fingerBorder,
          0.4,
          { morphSVG: fingerBorderB, ease: Quad.easeOut },
          time + 0.6
        )
        .to(
          fingernail1,
          0.4,
          { morphSVG: fingernail1B, ease: Quad.easeOut },
          time + 0.6
        )
        .to(
          fingernail2,
          0.4,
          { morphSVG: fingernail2B, ease: Quad.easeOut },
          time + 0.6
        )

        .to(
          handSVG,
          0.5,
          { rotation: 0, y: yDistance, ease: Quad.easeIn },
          "-=.25"
        );
      TL.play();
      curLink = e.target.num;
    }

    function initPagination() {
      numLinks = pagLinks.length;
      curLink = 0;
      for (var i = 0; i < numLinks; i++) {
        pagLinks[i].addEventListener("click", onPagLinkClick);
        pagLinks[i].rect = pagLinks[i]?.getBoundingClientRect();
        pagLinks[i].num = i;
      }

      pagContainerRect = pagContainer?.getBoundingClientRect();
      svgRect = handSVG?.getBoundingClientRect();
      yDest = svgRect?.top - 44;
      yDistance =
        document.querySelector("footer")?.getBoundingClientRect()?.top -
        pagContainerRect?.top;

      TweenMax.set(pagLinks[0], { color: "#FFF" });
      TweenMax.set(pagIndicator, {
        autoAlpha: 1,
        x: pagLinks[0]?.rect.left - pagContainerRect?.left,
      });
      TweenMax.set(handSVG, {
        autoAlpha: 1,
        rotation: 0,
        x: pagLinks[0]?.rect.left - pagContainerRect?.left - 253,
        y: yDistance,
      });
      TweenMax.set(fingerBG, { morphSVG: fingerBGB });
      TweenMax.set(fingerBorder, { morphSVG: fingerBorderB });
      TweenMax.set(fingernail1, { morphSVG: fingernail1B });
      TweenMax.set(fingernail2, { morphSVG: fingernail2B });
    }

    console.clear();
    initPagination();
  }, []);
  return (
    <main>
      <div id={clsx(style.paginationContainer)}>
        <div id={clsx(style.indicator)}></div>
        <a className={clsx(style.pagLink)} href="#">
          1
        </a>
        <a className={clsx(style.pagLink)} href="#">
          2
        </a>
        <a className={clsx(style.pagLink)} href="#">
          3
        </a>
        <a className={clsx(style.pagLink)} href="#">
          4
        </a>
        <a className={clsx(style.pagLink)} href="#">
          5
        </a>
        <svg
          id={clsx(style.handSvg)}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 350 450"
        >
          <path
            fill="#3A5E77"
            d="M40.6 523C12.5 475.6-1 425.4.5 373.7c1.2-40.7 11.7-81.6 31.2-121.6 31.4-64.4 75.5-104.7 80.4-109.1l79.9 89.5.2-.2c-.3.3-32.9 30.3-54.1 75.4-25.5 54.2-23.6 104.6 5.7 154.1L40.6 523z"
          />
          <g id="fingers">
            <path
              fill="#DDF1FA"
              d="M188.4 54c-6 9.8-8.1 21.5-6.6 32.7 1.4 11.2 6.4 21.8 13.5 29.7 6.7 7.4 6.2 18.8-1.2 25.6-7.4 6.7-18.8 6.2-25.6-1.2-.6-.7-1.2-1.4-1.7-2.2l-.5-.7c-9.9-15.1-14.8-32.7-14.4-50.1.2-8.7 1.7-17.3 4.7-25.5 2.9-8.2 7.3-15.8 12.8-22.4 4.2-5 11.7-5.6 16.6-1.4 4.5 3.8 5.5 10.3 2.4 15.2v.3z"
            />
            <path
              fill="#A9DDF3"
              d="M180.3 39.6l-6.4 9c-.7.9-2 1.1-2.9.5l-2.5-1.8c-.9-.7-1.1-2-.5-2.9l2.7-3.8c2.1-3 6.3-3.7 9.2-1.5l.3.2c.2 0 .2.2.1.3z"
            />
            <path
              fill="none"
              stroke="#3A5E77"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="5"
              d="M166.5 137.9c-9.9-15.1-14.8-32.7-14.4-50.1.2-8.7 1.7-17.3 4.7-25.5 2.9-8.2 7.3-15.8 12.8-22.4 4.2-5 11.7-5.6 16.6-1.4 4.5 3.8 5.5 10.3 2.4 15.2l-.2.3c-6 9.8-8.1 21.5-6.6 32.7 1.4 11.2 6.4 21.8 13.5 29.7"
            />
            <path
              fill="#DDF1FA"
              d="M203.6 47.5c-6 9.8-8.1 21.5-6.6 32.7 1.4 11.2 6.4 21.8 13.5 29.7 6.7 7.4 6.2 18.8-1.2 25.6-7.4 6.7-18.8 6.2-25.6-1.2-.6-.7-1.2-1.4-1.7-2.2l-.5-.7c-9.9-15.1-14.8-32.7-14.4-50.1.2-8.7 1.7-17.3 4.7-25.5 2.9-8.2 7.3-15.8 12.8-22.4 4.2-5 11.7-5.6 16.6-1.4 4.5 3.8 5.5 10.3 2.4 15.2v.3z"
            />
            <path
              fill="#A9DDF3"
              d="M196.5 32.5l-6.4 9c-.7.9-2 1.1-2.9.5l-2.5-1.8c-.9-.7-1.1-2-.5-2.9l2.7-3.8c2.1-3 6.3-3.7 9.2-1.5l.3.2c.2 0 .2.1.1.3z"
            />
            <path
              fill="none"
              stroke="#3A5E77"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="5"
              d="M168.9 100.6c-1.3-6.4-1.9-12.9-1.7-19.3.2-8.7 1.7-17.3 4.7-25.5 2.9-8.2 7.3-15.8 12.8-22.4 4.2-5 11.7-5.6 16.6-1.4 4.5 3.8 5.5 10.3 2.4 15.2l-.2.3c-6 9.8-8.1 21.5-6.6 32.7 1.4 11.2 6.4 21.8 13.5 29.7"
            />
            <path
              fill="#DDF1FA"
              d="M221.5 41.5c-6 9.8-8.1 21.5-6.6 32.7 1.4 11.2 6.4 21.8 13.5 29.7 6.7 7.4 6.2 18.8-1.2 25.6-7.4 6.7-18.8 6.2-25.6-1.2-.6-.7-1.2-1.4-1.7-2.2l-.5-.7c-9.9-15.1-14.8-32.7-14.4-50.1.2-8.7 1.7-17.3 4.7-25.5 2.9-8.2 7.3-15.8 12.8-22.4 4.2-5 11.7-5.6 16.6-1.4 4.5 3.8 5.5 10.3 2.4 15.2v.3z"
            />
            <path
              fill="#A9DDF3"
              d="M214.5 26.5l-6.4 9c-.7.9-2 1.1-2.9.5l-2.5-1.8c-.9-.7-1.1-2-.5-2.9l2.7-3.8c2.1-3 6.3-3.7 9.2-1.5l.3.2c.2.1.2.2.1.3z"
            />
            <path
              fill="none"
              stroke="#3A5E77"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="5"
              d="M186.9 95c-1.4-6.5-2-13.1-1.8-19.7.2-8.7 1.7-17.3 4.7-25.5 2.9-8.2 7.3-15.8 12.8-22.4 4.2-5 11.7-5.6 16.6-1.4 4.5 3.8 5.5 10.3 2.4 15.2l-.2.3c-6 9.8-8.1 21.5-6.6 32.7 1.4 11.2 6.4 21.8 13.5 29.7"
            />
          </g>
          <path
            fill="#DDF1FA"
            d="M174.5 229.1l-64.4-64.6 41.4-41.4c26.6-26.6 68.8-27.6 94.1-2.2l18.5 18.6-89.6 89.6z"
          />
          <path
            fill="none"
            stroke="#3A5E77"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="5"
            d="M256.9 146.8l-82.4 82.4-64.4-64.6 41.4-41.4c1.7-1.7 3.4-3.2 5.2-4.7"
          />
          <path
            fill="#FFF"
            d="M44.6 520.1C17.4 473.1 4.3 423.6 5.8 373c1.2-40 11.5-80.2 30.7-119.4 31-63.4 74.3-102.7 79.2-107l72.8 82.4.2-.2c-.3.3-33.2 30.2-54.7 75.8-11.6 24.7-17.8 49.4-18.2 73.3-.6 29.6 7.3 58 24.1 86.9l-95.3 55.3z"
          />
          <path
            fill="#FFF"
            d="M173.8 239.4c17.2-10.1 35.3-19.4 54.4-28-11.2-4.4-22.7-9.1-34.6-14.2.6-9.8 1.1-19.5 1.7-29.3-11.7 2.7-23.3 5.5-34.6 8.5-.9-12.6-1.9-25.2-3-37.9-8.3 2.2-16.5 4.5-24.6 6.9-2.8-9.5-5.6-19.2-8.6-28.9-8.4 15.2-16.1 31-23.1 47.5"
          />
          <path
            fill="none"
            stroke="#3A5E77"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="5"
            d="M173.8 239.4c17.2-10.1 35.3-19.4 54.4-28-11.2-4.4-22.7-9.1-34.6-14.2.6-9.8 1.1-19.5 1.7-29.3-11.7 2.7-23.3 5.5-34.6 8.5-.9-12.6-1.9-25.2-3-37.9-8.3 2.2-16.5 4.5-24.6 6.9-2.8-9.5-5.6-19.2-8.6-28.9-8.4 15.2-16.1 31-23.1 47.5"
          />
          <path
            fill="#FFF"
            d="M24.5 286c0-14.3.3-28.5.8-42.5 4.4 2 8.7 3.8 13.1 5.4-1.8-12.2-3.4-24.8-4.8-37.9 5.5 3.6 10.9 6.9 16.4 9.8-.2-9.3-.3-18.8-.3-28.3 6 4.2 12 8 18 11.6"
          />
          <path
            fill="none"
            stroke="#3A5E77"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="5"
            d="M24.5 286c0-14.3.3-28.5.8-42.5 4.4 2 8.7 3.8 13.1 5.4-1.8-12.2-3.4-24.8-4.8-37.9 5.5 3.6 10.9 6.9 16.4 9.8-.2-9.3-.3-18.8-.3-28.3 6 4.2 12 8 18 11.6"
          />
          <path
            fill="#FFF"
            d="M108.6 388.7c6.9-13.4 14.2-25.1 21.7-35.2-4.4-1.1-8.9-2.4-13.3-3.8 9-8.7 18.2-15.9 27.5-21.5-5.6-2.3-11.2-4.9-16.8-7.7 7-5.7 14.2-10.4 21.4-13.9-5.8-3.9-11.6-8.2-17.4-12.9"
          />
          <path
            fill="none"
            stroke="#3A5E77"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="5"
            d="M108.6 388.7c6.9-13.4 14.2-25.1 21.7-35.2-4.4-1.1-8.9-2.4-13.3-3.8 9-8.7 18.2-15.9 27.5-21.5-5.6-2.3-11.2-4.9-16.8-7.7 7-5.7 14.2-10.4 21.4-13.9-5.8-3.9-11.6-8.2-17.4-12.9"
          />
          <g>
            <path
              id="finger-bg"
              fill="#DDF1FA"
              d="M307 80.5c-6.4-1.5-12.8 2.4-14.3 8.8l-.2.7c-1.3 5.6-4.3 11-8.3 15.2-4 4.2-8.9 7.3-14 8.8-5.1 1.5-10.5 1.5-15.8.2-5.3-1.3-15-7.2-19-11.6-3.8-4.3-6.7-9.2-8-14.6-1.4-5.4-1.3-11.4.3-17.1 1.6-5.7 4.7-11.1 8.8-14.9 4.1-3.8 8.8-5.8 13.8-5.6h.8c5.7.2 10.9-3.7 12-9.5 1.2-6.4-2.9-12.6-9.3-13.8-5.8-1.1-12-.9-17.8.5-5.8 1.4-11.1 4-15.8 7.2-9.3 6.5-16.1 15.6-20.4 25.6-4.3 10.1-6.1 21.4-4.9 32.6 1.2 11.3 5.6 22.2 11.8 31.3l.3.4c.4.6.9 1.2 1.3 1.7 1.2 1.4 2.6 2.5 4.1 3.5 1.7 3.4 4.4 6.2 8.1 8 8.9 4.4 18.7 7.9 29.3 8.9 10.5 1.1 21.8-.6 31.5-5.1 9.8-4.5 18-11.6 24-20 5.9-8.4 9.8-18.2 10.7-28.6.7-5.8-3.1-11.2-9-12.6z"
            />
            <path
              id="fingernail-1"
              fill="#A9DDF3"
              d="M309.4 100.4l-1.7-.4c-2.3-.5-3.7-2.7-3.2-5l2.6-12.4c5.2 1.1 8.5 6.2 7.4 11.3l-.7 3.5c-.5 2.1-2.4 3.4-4.4 3z"
            />
            <path
              id="fingernail-2"
              fill="#A9DDF3"
              d="M260.4 35.5h-12.6c-1.2 0-2.2-1-2.2-2.2v-2.8c0-1.2 1-2.2 2.2-2.2h5.9c3.8 0 6.9 3.1 6.9 6.9.1.2-.1.3-.2.3z"
            />
            <path
              id="finger-border"
              fill="none"
              stroke="#3A5E77"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="5"
              d="M195 93c-1.2-11.3.6-22.6 4.9-32.6 4.3-10 11.1-19.1 20.4-25.6 4.6-3.2 10-5.8 15.8-7.2 5.8-1.4 12-1.6 17.8-.5 6.4 1.2 10.6 7.4 9.3 13.8-1.1 5.8-6.3 9.7-12 9.5h-.8c-5-.2-9.7 1.8-13.8 5.6-4.1 3.8-7.2 9.2-8.8 14.9-1.6 5.7-1.6 11.7-.3 17.1 1.3 5.4 4.2 10.3 8 14.6 4.5 5 13.7 10.3 19 11.6 5.3 1.3 10.6 1.3 15.8-.2 5.1-1.5 10-4.6 14-8.8 4-4.2 6.9-9.6 8.3-15.2l.2-.7c1.5-6.4 7.9-10.3 14.3-8.8 5.8 1.4 9.6 6.9 9.1 12.7-1 10.4-4.8 20.2-10.7 28.6-5.9 8.4-14.2 15.5-24 20-7.5 3.5-15.9 5.3-24.2 5.4"
            />
          </g>
        </svg>
      </div>
    </main>
  );
};

export default Pagination;
