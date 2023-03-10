// ORIGIN: 'http://143.248.229.43:3000', // JNL
// ORIGIN: 'http://192.168.0.49:3000', // KJH
// ORIGIN: 'http://192.249.31.25:3000', // CDB
// ORIGIN: 'http://143.248.191.4:3000', // LWH
// ORIGIN: 'http://143.248.219.121:3000', // KSW
// ORIGIN: 'https://picpico.site', // [진짜 서버] 배포용

const CORS = {
    ORIGIN: [
        'http://143.248.229.43:3000',
        'http://192.168.0.49:3000',
        'http://143.248.191.4:3000',
        'http://143.248.219.121:3000',
        'https://picpico.site',
        'http://localhost:3001',
    ],
    CREDENTIALS: true,
};

const Socket = {
    SOCKET_ORIGIN: [
        'http://143.248.229.43:3000',
        'http://192.168.0.49:3000',
        'http://192.168.0.15:3000',
        'http://143.248.191.4:3000',
        'http://143.248.219.121:3000',
        'https://picpico.site',
        'http://localhost:3001',
    ],
    SOCKET_SIGNALING_CREDENTIALS: true,
    DEFAULT_ROOM: 'DEFAULT_ROOM',
};

const Redis = {
    host: 'localhost',
    port: 6379,
};

const MongoDB = {
    MONGO_URL: 'mongodb://localhost/nest',
    DATABASE_CONNECTION: 'DATABASE_CONNECTION',
    USER_PROVIDE: 'USER_MODEL',
};

const KakaoLoginLogic = {
    _hostName: 'https://kauth.kakao.com',
};

const Kakao = {
    _restApiKey: '40bf5ef38bca8060ebfe393174bc7a72',
    _redirectUrl: 'https://picpico-server.site/auth/kakaoLoginLogicRedirect',
    kakaoLoginLogic: KakaoLoginLogic,
};

const JWT = {
    SECRET: 'secretsandokkymcaxiosecretsandokkymacs',
};

const Images = {
    baseDirectory: './static/',
    defaultType: 'png',
    base64Header: 'data:image/png;base64,',
};

export const Config = {
    serverPort: 3000,
    cors: CORS,
    socket: Socket,
    mongoDb: MongoDB,
    Kakao: Kakao,
    JWT: JWT,
    redis: Redis,
    images: Images,
};
export default Config;
