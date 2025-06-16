const quizData = {
  1: {
    title: 'JavaScript Basics',
    questions: [
      {
        question: 'Which symbol is used for comments in JavaScript?',
        options: ['//', '<!--', '#', '--'],
        answer: '//'
      },
      {
        question: 'Which keyword is used to declare a variable?',
        options: ['var', 'dim', 'int', 'let'],
        answer: 'let'
      }
    ]
  },
  2: {
    title: 'React Fundamentals',
    questions: [
      {
        question: 'What is used to pass data to a component in React?',
        options: ['state', 'props', 'setState', 'render'],
        answer: 'props'
      },
      {
        question: 'What hook is used for state management?',
        options: ['useState', 'useEffect', 'useContext', 'useRef'],
        answer: 'useState'
      }
    ]
  },
  3: {
    title: 'Node.js Overview',
    questions: [
      {
        question: 'Which of the following is a Node.js module?',
        options: ['http', 'os', 'fs', 'All of the above'],
        answer: 'All of the above'
      },
      {
        question: 'Node.js runs on which engine?',
        options: ['JavaScriptCore', 'SpiderMonkey', 'Chakra', 'V8'],
        answer: 'V8'
      }
    ]
  }
};

export default quizData;