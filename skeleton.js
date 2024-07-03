const styleElement = document.createElement('style');
const cssText = `
body .skeleton {
background-color: #e4e8ff;
border-radius: 10px;
position: relative;
overflow: hidden;
border: none !important;
}
body .skeleton::after {
content: "";
display: block;
position: absolute;
top: 0;
left: -150px;
height: 100%;
width: 150px;
background: linear-gradient(
90deg,
transparent,
rgba(255, 255, 255, 1),
transparent
);
animation: loading 1.5s infinite;
}
@keyframes loading {
0% {
left: -150px;
}
50% {
left: 100%;
}
100% {
left: 100%;
}
}
body .skeleton *, body .skeleton a {
color: transparent !important;
display: none;
}
`;
styleElement.textContent = cssText;
document.head.appendChild(styleElement);
window.addEventListener('load', function() {
    setTimeout(function() {
        document.querySelectorAll('.skeleton').forEach(function(element) {
            element.classList.remove('skeleton');
        });
    }, 3000);
});
