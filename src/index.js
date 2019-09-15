import dva from 'dva';

const app = dva();

app.router(require('./router').default);

app.model(require('./models/login').default);

app.start('#root');
