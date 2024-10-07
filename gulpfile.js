const gulp = require('gulp');

// Tasks
require('./gulp/dev.js');
require('./gulp/docs.js');
require('./gulp/fonts.js');

gulp.task(
  'default',
  gulp.series(
    'clean:dev',
    gulp.parallel('html:dev', 'sass:dev', 'images:dev', 'svgSymbol:dev', 'files:dev', 'js:dev'),
    gulp.parallel('server:dev', 'watch:dev')
  )
);

gulp.task(
  'docs',
  gulp.series(
    'clean:docs',
    gulp.parallel('html:docs', 'sass:docs', 'images:docs', 'svgSymbol:docs', 'files:docs', 'js:docs'),
    gulp.parallel('server:docs')
  )
);

gulp.task('fonts', gulp.series('woff2', 'woff', 'del-ttf'));
