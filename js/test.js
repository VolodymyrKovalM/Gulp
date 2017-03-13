var page = {

	createAddElement: function (elem, inner, parent, setClass, count) {
		let element = document.createElement(elem);
		element.innerHTML = (count) ? inner + count : inner;
		if (setClass) element.className = setClass;

		if(parent) {
			parent = document.querySelector(parent);
			parent.appendChild(element);
		}
		return element;
	},

	addAnswer: function (parent, amountDouble, idNumber) {
		for (let n = 1, j = 1, m = idNumber; n <= amountDouble; n++) {
			if (n%2 !== 0) {
				let input = this.createAddElement('input', '', parent, '', '');
				input.setAttribute('id', "answer" + m);
				input.setAttribute('type', "checkbox" );				
			} else {
				let label = this.createAddElement('label', 'Вариант ответа №', parent, '', j);
				label.setAttribute('for', "answer" + m);
				j++;
				m++;
			}
		}
	},

	addQuestion: function (amount) {
		for (let i = 1; i <= 3; i++) {
		    this.createAddElement('li', 'Вопрос №', 'ol', '', i);
	    }
	},

	generatePage: function () {
		this.createAddElement('div', '', 'body', 'col-lg-12 alert alert-success wrapper', '');
		this.createAddElement('h1', 'Тест по програмированию', '.wrapper', '', '');
		this.createAddElement('div', '', '.wrapper', 'col-lg-8 col-lg-offset-2', '');
		this.createAddElement('ol', '', '.col-lg-offset-2', '', '');
		this.addQuestion(3);
	    this.addAnswer('li:first-child', 6, 1);
	    this.addAnswer('li:nth-child(2)', 6, 4);
		this.addAnswer('li:last-child', 6, 7);
		this.createAddElement('a', 'Проверить мои результаты', '.col-lg-offset-2', 'col-lg-offset-4', '');
	}
}

page.generatePage();

