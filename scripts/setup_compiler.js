/* eslint-disable no-console */
var webpack = require('webpack'),
    chalk = require('chalk'),
    clearConsole = require('react-dev-utils/clearConsole'),
    formatWebpackMessages = require('react-dev-utils/formatWebpackMessages'),
    compiler;

function setupCompiler(port, webpackConfig) {
    compiler = webpack(webpackConfig);

    compiler.plugin('done', function(stats) {
        clearConsole();

        // We have switched off the default Webpack output in WebpackDevServer
        // options so we are going to "massage" the warnings and errors and present
        // them in a readable focused way.
        var messages = formatWebpackMessages(stats);
        if (!messages.errors.length && !messages.warnings.length) {
          console.log(chalk.green('Compiled successfully!'));
          console.log();
          console.log('The app is running at:');
          console.log();
          console.log('  ' + chalk.cyan('http' + '://localhost' + ':' + port + '/'));
          console.log();
          console.log('Note that the development build is not optimized.');
          console.log('To create a production build, use ' + chalk.cyan('NODE_ENV=production npm start') + '.');
          console.log();
        }

        // If errors exist, only show errors.
        if (messages.errors.length) {
          console.log(chalk.red('Failed to compile.'));
          console.log();
          messages.errors.forEach(message => {
            console.log(message);
            console.log();
          });
          return;
        }

        // Show warnings if no errors were found.
        if (messages.warnings.length) {
          console.log(chalk.yellow('Compiled with warnings.'));
          console.log();
          messages.warnings.forEach(message => {
            console.log(message);
            console.log();
          });
          // Teach some ESLint tricks.
          console.log('You may use special comments to disable some warnings.');
          console.log('Use ' + chalk.yellow('// eslint-disable-next-line') + ' to ignore the next line.');
          console.log('Use ' + chalk.yellow('/* eslint-disable */') + ' to ignore all warnings in a file.');
        }
      });

    return compiler;
}

module.exports = setupCompiler;
