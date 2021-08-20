module.exports = function (plop) {

    plop.setGenerator('controller', {
        description: 'application controller',

        // inquirer prompts
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Controller name?'
            }
        ],

        // actions to perform
        actions: [
            {
                type: 'add',
                path: '../src/components/{{pascalCase name}}/index.tsx',
                templateFile: 'templates/index.tsx.hbs'
            }, {
                type: 'add',
                path: '../src/components/{{pascalCase name}}/styles.tsx',
                templateFile: 'templates/styles.tsx.hbs'
            }
        ]
    });
};

