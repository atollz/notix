Тестовое задание на позицию Senior Frontend Developer

Формулировка

Реализуйте страницу поиска с отображением результатов поиска. Пользователи вводят строку в поле поиска, а результаты подтягиваются по мере ввода. Нужно избежать ситуации, когда устаревший результат запроса перезаписывает актуальные данные. Для реализации API-части можно сделать какую-то мок-реализацию серверной части (например, с использованием API routes Next.js) либо сэмулировать запросы на стороне клиента с использованием setTimeout.

Требования:

При вводе текста в поле поиска — запрос должен уходить к API (или эмуляции на клиенте).
Строка поиска должна отображаться в query‑параметрах URL.
Если пользователь вводит новый запрос до ответа предыдущего, данные должны быть консистентны: устаревший ответ не должен затирать новые результаты.
Важно поддержать хороший UX - производительность, простые и удобные контролы, удобный вывод результатов поиска.

Технические требования:
React, TypeScript.
Нужно обеспечить консистентность в компонентах и работе со стилями.
Использовать минимум сторонних библиотек, по-возможности не использовать, кроме обязательных.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
