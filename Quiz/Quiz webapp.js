let questions = [
    {
        'title': "What is the full form of UK?",
        'options': ['United Kings', 'Unique', 'Radicals', 'United Kingdom'],
        'answer': 'United Kingdom'
    },
    {
        'title': "Which is the strongest chamber of the heart?",
        'options': ['Left Ventricle', 'Right Atrium', 'Wrong', 'Diverse'],
        'answer': 'Left Ventricle'
    },
    {
        'title': "What is CPU?",
        'options': ['Central Processing Unit', 'Mouse', 'Hard Drive', 'Keyboard'],
        'answer': 'Central Processing Unit'
    },
    {
        'title': "What is the top speed of Koenigsegg?",
        'options': [256, 100, 250, 320],
        'answer': 256
    },
    {
        'title': "What is the fourth letter of Greek?",
        'options': ['Delta', 'Alpha', 'Bravo', 'Charlie'],
        'answer': 'Delta'
    },
    {
        'title': "How many dots appear on a pair of dice?",
        'options': [42, 44, 46, 48],
        'answer': 42
    },
    {
        'title': "Who is known as the poet of the East?",
        'options': ['Sir Muhammad Iqbal', 'Sir Mursaleen', 'Muhammad Ali Jinnah', 'Johar'],
        'answer': 'Sir Muhammad Iqbal'
    },
    {
        'title': "How many hours are in a week?",
        'options': [40, 168, 250, 320],
        'answer': 168
    },
    {
        'title': "Who is the founder of the Muslim League Party?",
        'options': ['Nawaz Sharif', 'Imran Khan', 'Shahbaz Sharif', 'Capt Safadar'],
        'answer': 'Nawaz Sharif'
    },
    {
        'title': "What is the total number of songs by Sidhu Moosewala?",
        'options': [107, 18, 20, 320],
        'answer': 107
    },
];

// Initialize variables
let questions_index = 0;
let result = 0;

// Function to start the game on button click
function start() {
    questions_index = 0;
    result = 0;

    let start_btn = document.getElementById("start");
    start_btn.addEventListener('click', function() {
        add_question();
    });
}

// Call the start function
start();

// Function for displaying a new question each time
function add_question() {
    let current_question = questions[questions_index];

    let container = document.getElementById("container");
    container.innerHTML = '<h1>' + current_question.title + '</h1>';

    current_question.options.forEach(option => {
        let option_new_btn = document.createElement('button');
        option_new_btn.innerText = option;
        option_new_btn.classList.add('option-btn'); // Added class for easier querying
        container.append(option_new_btn);
    });

    check_answer();
}

// Function for evaluating the user's answer and displaying a new question
function check_answer() {
    let current_question = questions[questions_index];
    let option_btns = document.querySelectorAll('.option-btn'); // Corrected 'buttton' to 'option-btn'

    option_btns.forEach(option_btn => {
        option_btn.addEventListener('click', function() {
            // Get the value of the button clicked
            let user_selection = this.innerText;

            // Check if the user selection matches the correct answer
            if (user_selection == current_question.answer) {
                result++;
            }

            // Check whether to display a new question or end the game
            if (questions_index < questions.length - 1) {
                questions_index++;
                add_question();
            } else {
                end_game();
            }
        });
    });
}

// Function for creating end game elements
function end_game() {
    let container = document.getElementById("container");
    container.innerHTML = '<h1>Game Over!</h1><h1>Score: ' + result + '/' + questions.length + '</h1>';

    let restart_btn = document.createElement('button');
    restart_btn.id = 'start';
    restart_btn.innerText = 'Restart';
    container.append(restart_btn);

    start();
}
