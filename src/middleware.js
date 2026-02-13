// src/middleware.js
import { defineMiddleware } from "astro:middleware";
import { redirectToDefaultLocale } from "astro:i18n";

export const onRequest = defineMiddleware(async (ctx, next) => {
  const { pathname } = ctx.url;

  if (pathname === "/") {
    return Response.redirect(
      new URL("/es/", ctx.url),
      302
    );
  }
  return next();
});