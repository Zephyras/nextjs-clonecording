This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

[공부한내용]

Nextjs. Document 500Page 내용
https://nextjs.org/docs/advanced-features/custom-error-page#500-page
_error.js 페이지는 정적으로 최적화 되어 있지 않습니다.
이유는 에러가 발생했으때 서버쪽으로 에러를 보내는 작업을 동반하는 경우가 많기 때문이다.
NEXTJS의 500 page를 만들어두면
클라이언트 측과 서버측 에러는 모두 이곳에서 관리할 수 있습니다.
500 에러는 서버측 에러를 알려주는 에러코드 입니다.

404 에러는는 스태틱으로 제공해주는게 훨씬 좋다.
이유는 404 에러는 서버 자체는 존재하지만 서버에서 요청한 것을 찾을 수 없을 때 나타납니다.
​보통 HTTP에서 사용자가 요청하는 페이지나 파일을 찾을 수 없을 때 가장 많이 발생하는데요.
유저의 인터넷 환경 문제가 아닌 사이트 제공자의 서버에 요청한 페이지가 없거나, 
데이터가 없을 경우 나타나며, 가장 자주 발생하는 원인은 페이지가 이동되거나 삭제된 경우이다.

[환경변수 관련 Environment Variables]
Next.js는 별다른 작업을 안해도 환경변수를 쓸수있도록 해준다.
.env.development
.env.production 
2개의 파일을 생성해준다.

nodejs 와 browser 환경셋팅은 서로 다릅니다.
//node js
process.env.변수명
//browser
process.env.NEXT_PUBLIC_변수명

name=DEVELOPMENT
NEXT_PUBLIC_API_URL=http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline