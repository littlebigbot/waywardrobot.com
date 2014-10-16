GLOBAL.paths = {
  src: 'src/',
  app: 'src/app/',
  build: 'dist/'
};

GLOBAL.isProd = false;

if(argv.prod) {
  global.isProd = argv.prod;
}
