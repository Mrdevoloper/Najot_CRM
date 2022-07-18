window.onload = () => {
	// grabing data-switcher attribute
	const tab_switchers = document.querySelectorAll('[data-tab]');
	console.log(tab_switchers);
	for (let i = 0; i < tab_switchers.length; i++) {
		// single node element not the array
		const tab_switcher = tab_switchers[i];

		// passes back anything "data-" then return the name after the "-"
		const page_id = tab_switcher.dataset.tab;

		tab_switcher.addEventListener('click', () => {
			// deactivate active on the previous selected list
			document
				.querySelector('.tabs .tab.is-active')
				.classList.remove('is-active');
			// activate active on clicked list
			tab_switcher.parentNode.classList.add('is-active');
			// checking the page id
			// console.log(page_id);

			// using page_id switch the pages
			SwitchPage(page_id);
		});
	}
};

const SwitchPage = (page_id) => {
	const current_page = document.querySelector('.pages .page.is-active');
	current_page.classList.remove('is-active');

	// were searching for the data-page, if the data-page is same as the page_id then it will show the next page
	const next_page = document.querySelector(
		`.pages .page[data-page = "${page_id}"]`,
	);
	next_page.classList.add('is-active');
};

// modal

// Constant
const newBookButton = document.querySelector('#newBookButton');

const newModal = document.querySelector('#newModal');
const closeModal = document.querySelector('.close');
const checkbox = document.querySelector('#read');
const submitButton = document.querySelector('#submit');
const libraryContainer = document.querySelector('.library-container');

// Event Listeners
newBookButton.addEventListener('click', newBookModal);
closeModal.addEventListener('click', closeBookModal);
// checkbox.addEventListener('change', );
submitButton.addEventListener('click', newBookToLibrary);
// submitButton.addEventListener('click', libraryVisual);

// Modal Functions
window.onclick = function (event) {
	if (event.target == newModal) {
		newModal.style.display = 'none';
		console.log('close2');
	}
};

function newBookModal() {
	newModal.style.display = 'block';
	console.log('open');
}

function closeBookModal() {
	newModal.style.display = 'none';
	console.log('close');
}

// Library Constructor
function Book(title, author, pageCount, read) {
	this.title = title.value;
	this.author = author.value;
	this.pageCount = pageCount.value;
	this.read = read.checked;
	/*
    this.info = function() {
        return `${this.title} by 
                ${this.author}, 
                ${this.pageCount} pages, 
                ${this.read ? 'read.' : 'not yet read.'}`
    }
    */
}

// Library Variables
let myLibrary = [];
let newBook = undefined;

// Library Functions
function libraryVisual() {
	console.log('test');
}

function newBookToLibrary() {
	// event.preventDefault(); // doesnt work
	newModal.style.display = 'none';

	newBook = new Book(title, author, pageCount, read);
	// newBook = Object.create(Book, [title, author, pageCount, read]);
	myLibrary.push(newBook);
	console.log(myLibrary[0]);
}

// Local Storage to be added later

$(document).on('click', '.send_form', function () {
	var input_blanter = document.getElementById('wa_email');

	/* Whatsapp Settings */
	var walink = 'https://web.whatsapp.com/send',
		phone = '6281977094280',
		walink2 = 'Halo saya ingin ',
		text_yes = 'Terkirim.',
		text_no = 'Isi semua Formulir lalu klik Send.';

	/* Smartphone Support */
	if (
		/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
			navigator.userAgent,
		)
	) {
		var walink = 'whatsapp://send';
	}

	if ('' != input_blanter.value) {
		/* Call Input Form */
		var input_select1 = $('#wa_select :selected').text(),
			input_name1 = $('#wa_name').val(),
			input_email1 = $('#wa_email').val(),
			input_number1 = $('#wa_number').val(),
			input_url1 = $('#wa_url').val(),
			input_textarea1 = $('#wa_textarea').val();

		/* Final Whatsapp URL */
		var blanter_whatsapp =
			walink +
			'?phone=' +
			phone +
			'&text=' +
			walink2 +
			'%0A%0A' +
			'*Name* : ' +
			input_name1 +
			'%0A' +
			'*Email Address* : ' +
			input_email1 +
			'%0A' +
			'*Select Option* : ' +
			input_select1 +
			'%0A' +
			'*Input Number* : ' +
			input_number1 +
			'%0A' +
			'*URL/Link* : ' +
			input_url1 +
			'%0A' +
			'*Description* : ' +
			input_textarea1 +
			'%0A';

		/* Whatsapp Window Open */
		window.open(blanter_whatsapp, '_blank');
		document.getElementById('text-info').innerHTML =
			'<span class="yes">' + text_yes + '</span>';
	} else {
		document.getElementById('text-info').innerHTML =
			'<span class="no">' + text_no + '</span>';
	}
});
