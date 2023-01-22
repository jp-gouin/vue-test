FROM node as builder
WORKDIR /usr/app
COPY ./ /usr/app

ARG NODE_OPTIONS=--openssl-legacy-provider

RUN npm install
RUN npm run build && \
    npm run generate

FROM nginx
COPY --from=builder /usr/app/dist /usr/share/nginx/html
COPY --from=builder /usr/app/sitemap.xml /usr/share/nginx/html/sitemap.xml
