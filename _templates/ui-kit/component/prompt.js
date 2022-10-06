const { paramCase } = require('param-case');

module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'select',
        name: 'category',
        message: 'Which design level?',
        choices: ['components', 'content', 'layouts', 'pages'],
      },
      {
        type: 'input',
        name: 'name',
        message: 'What`s component name?',
        format: paramCase,
        result: paramCase,
        validate(input) {
          return input.length > 0 ? true : 'The name must not be empty';
        },
      },
    ];

    return inquirer
      .prompt(questions)
      .then(answers => {
        const { category, name } = answers;
        const typePath = `${category}`;
        const fullPath = `${category}/${name}`;
        return { ...answers, typePath, fullPath, category, name };
      });
  }
};
