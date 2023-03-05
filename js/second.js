$(document).ready(function () {
	$(".carysel-list").slick({
		arrows: true,
		dots: true,
		slidesToShow: 1,
		infinite: true,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnHover: true,
		pauseOnFocus: true,
		pauseOnDotsHover: true,
		centerMode: true,
		variableWidth: true,
	});
});
$(document).ready(function () {
	$(".carysel-bottom-list").slick({
		arrows: true,
		dots: true,
		slidesToShow: 1,
		infinite: true,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 9000,
		pauseOnHover: true,
		pauseOnFocus: true,
		pauseOnDotsHover: true,
		centerMode: true,
		variableWidth: true,
	});
});

const elList = document.querySelector(".products-nav-list-js");
const elItem = document.querySelectorAll(".products-nav-item");
const elItemDesc = document.querySelectorAll(".products-nav-desc");

const fragmentItem = document.createDocumentFragment();

// const item = [
// 	{
// 		name: "Barchasi",
// 	},
// 	{
// 		name: "Model A+",
// 	},
// 	{
// 		name: "Model B+",
// 	},
// 	{
// 		name: "Model C",
// 	},
// 	{
// 		name: "Model C+",
// 	},
// 	{
// 		name: "Model D",
// 	},
// 	{
// 		name: "Model Yevro",
// 	},
// 	{
// 		name: "Yangi tovarlar",
// 	},
// 	{
// 		name: "Model A",
// 	},
// ];

// const getCategory = (data) => {
// 	elList.innerHTML = "";

// 	data.forEach((element) => {
// 		let temCloneModal = template.cloneNode(true);
// 		temCloneModal.querySelector(".products-nav-desc").textContent =
// 			element.name;
// 		fragmentItem.appendChild(temCloneModal);
// 	});
// 	// console.log(fragmentItem)
// 	elList.appendChild(fragmentItem);
// };

elItemDesc.forEach(function (link) {
	link.addEventListener("click", function () {
		elItem.forEach(function (item) {
			item.classList.remove("products-nav-item-active");
		});

		link.parentElement.classList.add("products-nav-item-active");
	});
});
w;
